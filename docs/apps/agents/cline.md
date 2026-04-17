---
title: "Cline — AI-агент внутри VS Code"
category: agents
tags:
  - бесплатно
  - открытый-код
  - технарям
stars: 60384
github: cline/cline
updated: 2026-04-17
for: agent
---

# Cline

<div class="product-hero" markdown>

**Полноценный агент внутри VS Code — читает файлы, пишет код, запускает команды. Платишь только за токены модели.**

Ставится как обычное расширение. Работает с любой моделью — Claude, GPT, Gemini, локальная через Ollama. Plan & Act режимы: сначала показывает план, потом выполняет с твоего подтверждения.

<p class="product-hero-rating">
<span class="rating-badge">⭐ 60 384</span>
<span class="rating-label">звёзд на GitHub · обновлён 17 апреля 2026</span>
</p>

```bash
code --install-extension saoudrizwan.claude-dev
```

[:material-github: GitHub](https://github.com/cline/cline){ .md-button .md-button--primary } [:material-microsoft-visual-studio-code: Marketplace](https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev){ .md-button }

</div>

<div class="author-chip"><img class="author-chip__avatar" src="https://avatars.githubusercontent.com/u/184127137?v=4" alt="Cline"><div class="author-chip__text"><div class="author-chip__label">РАЗРАБОТЧИК</div><div class="author-chip__name"><a href="https://github.com/cline">Cline</a> <span class="author-chip__handle">@cline</span></div><div class="author-chip__bio">Основал Saoud Rizwan в 2024 на хакатоне Anthropic «Build with Claude». $27M Series A от Emergence Capital, клиенты — Samsung и SAP.</div></div></div>

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/tlXmBFo6KrE" title="Cline v4.0 обзор — WorldofAI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<p class="video-caption">Обзор: WorldofAI — «Cline v4.0 UPDATE: Fully FREE Autonomous AI Coding Agent»</p>

## Требования

- **Где работает:** только в VS Code (и форках — Cursor, Windsurf работают частично)
- **Лицензия:** Apache 2.0 — open-source, можно в коммерческих проектах
- **Ключ для модели:** OpenRouter, Anthropic, OpenAI, Google, AWS Bedrock или Ollama. Платишь за токены напрямую провайдеру — Cline ничего сверху не берёт
- **Стоимость:** большие задачи легко выходят в $5-15/день на Claude Sonnet. На Ollama бесплатно, но медленнее и тупее

## Зачем это нужно

Открыл VS Code, нажал на иконку Cline в боковой панели — и у тебя агент, который читает твои файлы, пишет код, запускает команды. Всё в одном окне, без переключения.

Отличие от Copilot: Copilot — подсказки. Cline — полноценный агент. Ставишь задачу «добавь авторизацию», он сам выбирает файлы, пишет код, запускает тесты. Можешь подсмотреть, что он делает, в любой момент.

60 тысяч звёзд. Бесплатный, код открыт. Платишь только за «слова» для ИИ — токены (или вообще не платишь, если локалка).

## Кому подходит

- ✅ Уже сидишь в VS Code, не хочешь менять привычку
- ✅ Хочешь агента без подписки — плати только за подключение
- ✅ Работаешь с локальной моделью через Ollama
- ❌ НЕ подходит если ты не в VS Code — в других редакторах не работает
- ❌ Для новичков в коде — сначала лучше что-то с обычным окошком (Goose)

## Как попробовать без чёрного окна с командами

Cline это расширение для VS Code. Всё ставится мышкой:

1. Скачай **[VS Code](https://code.visualstudio.com)** — обычный редактор кода, ставится как любая программа
2. Открой редактор → слева иконка «Extensions» (или Cmd+Shift+X)
3. Введи в поиск **«Cline»** → Install
4. В боковой панели появится иконка робота → нажми
5. Выбери провайдера (Anthropic, OpenAI, Google, OpenRouter, Ollama), вставь ключ для подключения
6. Пиши задачу в поле — агент начнёт

Никакого чёрного окна с командами, всё через окна и кнопки.

??? note "Для программистов (установка через команду)"

    ```bash
    code --install-extension saoudrizwan.claude-dev
    ```

    Удобно если настраиваешь рабочее окружение скриптом.

## Нюансы

- Cline покажет план перед выполнением — можешь поправить до того, как он начнёт
- Запрос подтверждений замедляет, но первое время лучше не отключать
- «Слова» для ИИ (токены) улетают быстро — большие задачи дробь на части

## Ссылки

- [GitHub ⭐ 60K](https://github.com/cline/cline)
- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev)
- Альтернативы: [Codex CLI](codex-cli.md), [Goose](goose.md)

---

*Подходит для: технарям · бесплатно · VS Code-юзерам*
