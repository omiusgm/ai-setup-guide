#!/usr/bin/env python3
"""Symphony executor: pick the highest-priority queued task from the inbox,
run Claude Code on it, write the result back into the inbox as `review`.

Quiet by design: if no queued tasks, exits silently. Cron-friendly.
"""
from __future__ import annotations

import fcntl
import json
import os
import shutil
import subprocess
import sys
import tempfile
from datetime import datetime, timezone
from pathlib import Path

REPO_ROOT = Path("/root/projects/ai-setup-guide")
INBOX_PATH = REPO_ROOT / "data" / "symphony-inbox.json"
RESULTS_DIR = REPO_ROOT / "data" / "symphony-results"
LOCK_PATH = Path("/tmp/symphony_executor.lock")

CLAUDE_BIN = "/usr/local/bin/claude"
MAX_TURNS = 15
ALLOWED_TOOLS = "Read,Grep,Glob,Bash,Edit"

PRIORITY_RANK = {"high": 0, "medium": 1, "low": 2}


def now_iso() -> str:
    return datetime.now(timezone.utc).astimezone().isoformat(timespec="seconds")


def load_inbox() -> dict:
    with INBOX_PATH.open("r", encoding="utf-8") as f:
        return json.load(f)


def atomic_write(path: Path, payload: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    fd, tmp = tempfile.mkstemp(dir=str(path.parent), prefix=".inbox.", suffix=".tmp")
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as f:
            json.dump(payload, f, ensure_ascii=False, indent=2, sort_keys=True)
            f.write("\n")
        os.replace(tmp, path)
    finally:
        if os.path.exists(tmp):
            os.unlink(tmp)


def pick_task(items: list[dict]) -> dict | None:
    queued = [t for t in items if str(t.get("status", "")).lower() == "queued"]
    if not queued:
        return None
    queued.sort(key=lambda t: (
        PRIORITY_RANK.get(str(t.get("priority", "medium")).lower(), 99),
        str(t.get("id", "")),
    ))
    return queued[0]


def update_task(items: list[dict], task_id: str, patch: dict) -> None:
    for t in items:
        if t.get("id") == task_id:
            t.update(patch)
            return


def run_claude(task: dict) -> dict:
    goal = task.get("goal") or task.get("title") or ""
    notes = task.get("notes") or ""
    title = task.get("title") or task.get("id")
    prompt = (
        f"Symphony task: {title}\n\n"
        f"Goal: {goal}\n\n"
        f"Notes: {notes}\n\n"
        "Be concise. Limit yourself to ~8 tool calls max. Then ALWAYS produce a final "
        "text response in this exact form (no extra preamble).\n\n"
        "IMPORTANT — do NOT modify these files yourself: "
        "`data/symphony-inbox.json`, `data/symphony-state.json`, "
        "`data/symphony-results/*` — the executor manages them. "
        "Do real work elsewhere (docs, scripts, configs) and just describe it.\n\n"
        "## Result\n"
        "<1–3 sentences: what you did, or why it was already done, or why it can't be done now.>\n\n"
        "## Files changed\n"
        "- path: short reason (or 'none')\n\n"
        "## Open questions\n"
        "- one bullet per question for the human reviewer (or 'none')\n\n"
        "Do not speculate. If the task is impossible or already complete, say so plainly."
    )

    cmd = [
        CLAUDE_BIN, "-p", prompt,
        "--output-format", "json",
        "--max-turns", str(MAX_TURNS),
        "--allowed-tools", ALLOWED_TOOLS,
    ]
    env = {k: v for k, v in os.environ.items() if k != "ANTHROPIC_API_KEY"}
    proc = subprocess.run(
        cmd,
        cwd=str(REPO_ROOT),
        capture_output=True,
        text=True,
        timeout=600,
        env=env,
    )
    raw = proc.stdout.strip()
    try:
        result = json.loads(raw)
    except Exception:
        result = {
            "is_error": True,
            "result": f"non-json output from claude (exit={proc.returncode}): {raw[:500]} | stderr: {proc.stderr[:500]}",
            "total_cost_usd": 0,
            "num_turns": 0,
        }
    return result


def main() -> int:
    if not INBOX_PATH.exists():
        return 0
    RESULTS_DIR.mkdir(parents=True, exist_ok=True)

    lock_fp = open(LOCK_PATH, "w")
    try:
        fcntl.flock(lock_fp, fcntl.LOCK_EX | fcntl.LOCK_NB)
    except OSError:
        return 0

    try:
        inbox = load_inbox()
        items = inbox.get("items", [])
        task = pick_task(items)
        if not task:
            return 0

        task_id = task.get("id") or "unknown"
        started_at = now_iso()
        update_task(items, task_id, {
            "status": "in_progress",
            "started_at": started_at,
            "executor": "symphony-executor",
        })
        inbox["items"] = items
        inbox["updated_at"] = started_at
        atomic_write(INBOX_PATH, inbox)

        result = run_claude(task)

        finished_at = now_iso()
        is_error = bool(result.get("is_error"))
        cost = float(result.get("total_cost_usd") or 0)
        turns = int(result.get("num_turns") or 0)
        text = str(result.get("result") or "")

        result_path = RESULTS_DIR / f"{task_id}.md"
        with result_path.open("w", encoding="utf-8") as f:
            f.write(f"# {task.get('title', task_id)}\n\n")
            f.write(f"- task_id: `{task_id}`\n")
            f.write(f"- started_at: {started_at}\n")
            f.write(f"- finished_at: {finished_at}\n")
            f.write(f"- status: {'error' if is_error else 'review'}\n")
            f.write(f"- num_turns: {turns}\n")
            f.write(f"- cost_usd: {cost}\n\n")
            f.write("## Goal\n\n")
            f.write(f"{task.get('goal', '')}\n\n")
            f.write("## Result\n\n")
            f.write(text + "\n")

        inbox = load_inbox()
        items = inbox.get("items", [])
        update_task(items, task_id, {
            "status": "error" if is_error else "review",
            "finished_at": finished_at,
            "num_turns": turns,
            "cost_usd": cost,
            "result_path": str(result_path.relative_to(REPO_ROOT)),
        })
        inbox["items"] = items
        inbox["updated_at"] = finished_at
        atomic_write(INBOX_PATH, inbox)

        status = "ERROR" if is_error else "REVIEW"
        summary = text.strip().splitlines()[0][:200] if text.strip() else "(no output)"
        print(f"symphony-executor: {status} task={task_id} title={task.get('title')!r} turns={turns} cost=${cost:.4f}")
        print(f"  → {summary}")
        print(f"  result: {result_path.relative_to(REPO_ROOT)}")
        return 0 if not is_error else 1
    finally:
        try:
            fcntl.flock(lock_fp, fcntl.LOCK_UN)
        except Exception:
            pass
        lock_fp.close()
        try:
            LOCK_PATH.unlink()
        except FileNotFoundError:
            pass


if __name__ == "__main__":
    sys.exit(main())
