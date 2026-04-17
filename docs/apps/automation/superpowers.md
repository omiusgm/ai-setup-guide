---
title: "Superpowers — методология G3 для Claude Code"
category: automation
tags:
  - автономный-кодинг
  - player-coach
  - g3
  - официальный
  - anthropic
stars: 157027
github: obra/superpowers
updated: 2026-04-17
for: agents
---

# 🦸 Superpowers

<div class="product-hero" markdown>

<div class="product-hero-header" markdown>

**Subagent-driven development для Claude Code · методология G3 (Player ↔ Coach)**

Agentic skills framework + software development methodology. Агенты пишут код и ревьюят друг друга автоматически — ты получаешь готовый результат без ручной перепроверки.

</div>

<div class="product-hero-meta" markdown>

| Репозиторий | Звёзд | Лицензия | Обновлён |
|---|---|---|---|
| [github.com/obra/superpowers](https://github.com/obra/superpowers) | 157 027⭐ | MIT | 16 апреля 2026 |

**Marketplace:** [claude.com/plugins/superpowers](https://claude.com/plugins/superpowers) (Anthropic официально)
**Для кого:** 🤖 Claude Code, Cursor, Codex CLI, Gemini CLI
**Тариф Claude:** Pro $20 или Max $200 (Free не хватит по лимитам)

</div>

<div class="product-hero-install" markdown>

**Установить:**
```bash
claude plugin install superpowers@claude-plugins-official
```

Всё. После установки — 3 команды `/brainstorm`, `/write-plan`, `/execute-plan` доступны в любом проекте.

[:material-github: Смотреть на GitHub](https://github.com/obra/superpowers){ .md-button .md-button--primary } [:material-puzzle: В marketplace](https://claude.com/plugins/superpowers){ .md-button }

</div>

</div>

---

## Зачем это нужно

Обычный диалог с ChatGPT / Claude — пинг-понг. Пишешь → получаешь → правишь → снова пишешь. Через 30 минут контекст забит, ИИ начинает путаться, галлюцинировать, забывать что было в начале.

На длинных задачах это заметно. Час кода через обычный чат = половина результата. Оставшаяся половина — ручная перепроверка.

G3-методология (Block AI, октябрь 2024) решила это через **два агента с разной памятью:**
- **Player** пишет код — каждая итерация начинается с чистой памяти (знает только ТЗ и замечания Coach)
- **Coach** не пишет — только проверяет по спецификации. Если что-то не так — отправляет на переделку

Superpowers это реализовал для реального Claude Code. Плюс добавил своё — TDD, verification-before-completion, git worktrees для изоляции.

## Что получаешь при установке

**3 команды:**

- `/brainstorm` — задаёт 3-5 вопросов чтобы выведать реальное ТЗ (вместо того чтобы бросаться писать код)
- `/write-plan` — из спеки делает implementation plan. Следует TDD, YAGNI, DRY
- `/execute-plan` — запускает агентов работать автономно. Часами. Пока не сделают план полностью

**1 агент:**

- `code-reviewer` — тот самый Coach. Проверяет код после каждого шага. Не пишет сам — только гоняет Player на переделку

**13 скиллов-фраз которые Claude Code использует автоматически:**

- `subagent-driven-development` — основной G3 паттерн
- `test-driven-development` — TDD
- `requesting-code-review` + `receiving-code-review` — Player ↔ Coach цикл
- `verification-before-completion` — финальная проверка
- `systematic-debugging` — если что-то сломалось
- `dispatching-parallel-agents` — параллельные агенты на независимых задачах
- `using-git-worktrees` — изоляция через git worktrees (memory reset через отдельные директории)
- `writing-plans`, `writing-skills`, `finishing-a-development-branch`, `brainstorming`, `using-superpowers`

## Бесплатные фишки до установки

### Просто писать ТЗ первым делом

Перед каждой большой задачей: напиши ТЗ в отдельном файле. 3-5 пунктов. «Что должно работать», «как проверить». Закинь ИИ: «читай это и делай по пунктам. После каждого — говори что сделал». Это 50% эффекта Superpowers без установки.

### Подход «сначала план, потом код»

Говори: «сначала напиши план (без кода), я проверю, потом реализуй». На удивление мало кто это делает. Даёт большую разницу.

### Новый чат после каждой фичи

Не превращай один диалог в марафон. Закончил один куск — закрыл, открыл новый. Контекст свежий, меньше глюков.

---

??? note "Установка в других средах (Cursor, Codex, Gemini CLI, Copilot)"

    ```bash
    # Cursor
    /add-plugin superpowers

    # OpenAI Codex CLI
    /plugins  # → найти superpowers → установить

    # Gemini CLI
    gemini extensions install https://github.com/obra/superpowers

    # GitHub Copilot CLI
    copilot plugin marketplace add obra/superpowers-marketplace
    copilot plugin install superpowers@superpowers-marketplace
    ```

## Кому подходит

- ✅ Работаешь в Claude Code / Cursor / Codex, задачи средние и большие (несколько файлов, несколько фич)
- ✅ Устал что ИИ забывает середину задачи к концу
- ✅ Хочешь запустить автономную работу на несколько часов и получить результат без ручного дёргания
- ✅ Нужен автоматический code review (встроенный агент-ревьюер)
- ❌ НЕ подходит для мелких правок — оверкилл, проще обычным чатом
- ❌ НЕ подходит если не планируешь TDD — методология сильно завязана на тестах
- ❌ НЕ подходит для не-кодинговых задач (контент, дизайн — бери другие инструменты)

## Типовой рабочий поток

**Задача:** написать REST API для задачника.

1. Говоришь Claude Code: **«хочу REST API для задачника, через superpowers»**
2. Claude вызывает `/brainstorm`:
   > 1. На каком стеке? (FastAPI / Express / Go)
   > 2. Хранение — Postgres / SQLite / Redis?
   > 3. Auth — JWT / OAuth / session?
   > 4. Нужны ли теги, приоритеты, дедлайны?
   > 5. Что точно НЕ нужно в MVP?
3. Ты отвечаешь. Claude собирает спеку, показывает кусками.
4. Говоришь «ок» → Claude вызывает `/write-plan` → план из 12-15 шагов с тестами.
5. Ты проверяешь план (3 минуты), говоришь «го».
6. Claude вызывает `/execute-plan`:
   - Subagent A (Player) делает шаг 1 — пишет тест, пишет код
   - Subagent B (code-reviewer) проверяет
   - Не прошло → обратно Player с замечаниями
   - Прошло → Player делает шаг 2
   - ...
   - После шага 15 — полная верификация всех тестов, lint, build
7. Возвращается в основной чат с результатом. Готовый код + лог итераций + report.

**Время:** 1-3 часа автономной работы в зависимости от размера.

## Нюанс ДО установки

Superpowers **агрессивно использует subagents** — каждый вызывает отдельную сессию Claude Code. Это значит:

- Токены считаются у каждого subagent отдельно (может быть в 3-5 раз больше обычной сессии)
- Если у тебя Pro-тариф ($20/мес) — можешь быстро упереться в лимит
- На Max-тарифе ($200/мес) нормально работает

**Совет:** для первых экспериментов поставь лимит итераций поменьше (3-5), посмотри как расходуются токены.

## Сравнение с альтернативами

| Инструмент | Звёзды | Плюсы | Минусы |
|---|---|---|---|
| **Superpowers (наш выбор)** | 157K | Официальный, 3 команды, 13 скиллов, 1 agent | Токены x3-5 |
| [Ralphinho паттерн](../../knowledge/memory.md) | — | Уже в скилле autonomous-loops | Без готового плагина |
| [G3 оригинал](https://github.com/dhanji/g3) | 506 | От автора методологии | Rust, research prototype |
| [GSD v2](https://github.com/gsd-build/gsd-2) | 6K | Memory reset через отдельный CLI | Не плагин, отдельный инструмент |
| [Hegelion](https://github.com/Hmbown/Hegelion) | 143 | Честный Player-Coach, MCP-сервер | Малоизвестен, без комьюнити |
| [Goose (Block)](https://github.com/block/goose) | 42K | От той же команды, полноценный агент | Отдельный агент, не плагин |

## Что читать дальше

- [Автономные циклы](../../knowledge/modes.md) — обзор паттернов Claude Code
- [Как меня создавали](../../knowledge/memory.md) — контекст и память ИИ
- [Bundle Everything Claude Code](../bundles/everything-claude-code.md) — альтернативный набор скиллов

---

!!! tip "Совместимость"
    *Работает с Claude Pro / Max-тарифами. Требует установленный Claude Code CLI. Open-source (MIT), 157K звёзд, официальный плагин в Anthropic marketplace. Поддерживает также Cursor, Codex CLI, Gemini CLI.*
