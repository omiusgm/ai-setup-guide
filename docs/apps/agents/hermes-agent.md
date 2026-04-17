---
title: "Hermes Agent — агент, который учится"
category: agents
tags:
  - бесплатно
  - открытый-код
  - технарям
stars: 95896
github: NousResearch/hermes-agent
updated: 2026-04-17
for: agent
---

# Hermes Agent

<div class="product-hero" markdown>

**Агент с собственной памятью — сохраняет удачные решения как скиллы и переиспользует. Идея классная, исполнение пока сыровато.**

Отличие от одноразовых агентов: `.hermes/skills/` с автосозданными паттернами, кроны, 7 мессенджеров (Telegram, Discord, Slack, WhatsApp, Signal, Email, CLI). Первые 5-10 сессий разницы не заметишь — учится постепенно.

<p class="product-hero-rating">
<span class="rating-badge">⭐ 95 896</span>
<span class="rating-label">звёзд на GitHub · обновлён 17 апреля 2026</span>
</p>

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

[:material-github: GitHub](https://github.com/NousResearch/hermes-agent){ .md-button .md-button--primary } [:material-book: Документация](https://hermes-agent.nousresearch.com/docs/){ .md-button }

</div>

<div class="author-chip"><img class="author-chip__avatar" src="https://avatars.githubusercontent.com/u/134168893?v=4" alt="Nous Research"><div class="author-chip__text"><div class="author-chip__label">РАЗРАБОТЧИК</div><div class="author-chip__name"><a href="https://github.com/NousResearch">Nous Research</a> <span class="author-chip__handle">@NousResearch</span></div><div class="author-chip__bio">Open-source AI-лаборатория за моделями Hermes (Llama-тюны), Nomos и Psyche. $50M Series A от Paradigm, $65M всего привлечено.</div></div></div>

## Требования

- **Где работает:** Linux / macOS / WSL2 / Android (Termux). Windows напрямую — нет
- **Лицензия:** MIT — open-source
- **Зависимости:** Python, Node.js, ripgrep, ffmpeg — one-liner установщик всё ставит сам
- **Провайдер:** Nous Portal, OpenRouter (200+ моделей) или любой через `hermes model`. Работает и с Ollama локально
- **Ключевое ограничение:** первые 5-10 сессий разницы с обычным агентом не заметишь — обучение идёт постепенно. Для одноразовых задач смысла нет

## Зачем это нужно

Большинство агентов — одноразовые. Дал задачу, он решил, забыл. Hermes отличается: у него есть «скиллы» — файлы где сохранены удачные паттерны работы. Сделал что-то хорошо — запомнил. В следующий раз (в теории) делает лучше и быстрее.

Разработчики — Nous Research, это те же люди, что выпускают серию моделей Hermes (Llama-тюны). Репутация серьёзная, 93 тысячи звёзд, работает с любой моделью — от GPT до Qwen на Ollama.

Но это не революция, а эксперимент. Идея классная, исполнение улучшается, но сейчас это скорее учебный проект — ставь с пониманием что будешь разбираться с его поведением, а не получишь волшебного обучающегося агента из коробки.

## Нюансы (прочитай до установки)

- **Первые 5-10 сессий разницы не заметишь** — обучение идёт постепенно, не жди вау-эффекта сразу
- **Скиллы часто получаются кривые** — придётся чистить `.hermes/skills/` руками или сносить папку целиком
- **Это эксперимент, не революция** — идея с самообучением сыровата, местами работает, местами нет
- **Документация местами хардкорная** — готовься гуглить и читать исходники
- **Для одноразовых задач бесполезен** — весь смысл в повторах, без них это просто ещё один агент

## Кому подходит

- ✅ Нужен агент для регулярных задач — со временем станет точнее
- ✅ Хочешь агента с открытым кодом для своих модификаций
- ✅ Работаешь с локалкой через Ollama
- ❌ НЕ подходит для одноразовых задач — без повторов смысла нет
- ❌ Если ты новичок в агентах — начни с десктопного Goose

## Как попробовать без чёрного окна с командами

Для Hermes нет обычной десктопной версии — только чёрное окно с командами. Если тебе нужна сама идея «агент, который учится на опыте» без возни с ним:

- **[Claude Projects](https://claude.ai)** в браузере — накапливает контекст через Project knowledge
- **[Goose](goose.md)** — десктоп-агент с обычным окошком, умеет сохранять полезные паттерны
- **[HANDOFF-паттерн](../memory/handoff-pattern.md)** — та же идея «памяти между сессиями», но через обычный текстовый файл с разметкой

??? note "Для программистов (через чёрное окно с командами)"

    Через pip:

    ```bash
    pip install hermes-agent
    ```

    Либо скачиваешь с GitHub и ставишь из исходников:

    ```bash
    git clone https://github.com/NousResearch/hermes-agent
    cd hermes-agent
    pip install -e .
    ```

    **Первый запуск:**

    1. `hermes init` в папке проекта
    2. Указываешь провайдера модели (OpenAI, Anthropic, Ollama)
    3. `hermes chat` — открывается сессия
    4. Первые задачи решаются «по-обычному»
    5. После нескольких удачных решений сам предлагает сохранить как скилл
    6. Скиллы в `.hermes/skills/` — можно править руками

## Ссылки

- [GitHub ⭐ 93K](https://github.com/NousResearch/hermes-agent)
- [Nous Research](https://nousresearch.com)
- Альтернативы: [Codex CLI](codex-cli.md), [Cline](cline.md)

---

*Подходит для: технарям · обучающимся агентам · open-source*
