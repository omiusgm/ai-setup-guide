---
title: "Goose — десктоп AI-агент"
category: agents
tags:
  - бесплатно
  - из-рф
  - открытый-код
stars: 42453
github: block/goose
updated: 2026-04-17
for: both
---

# Goose

<div class="product-hero" markdown>

**Бесплатный агент с обычным окном — запускаешь на своём компе с Ollama и работаешь полностью без интернета.**

Альтернатива Claude Code за $0. Десктоп-приложение (macOS / Linux / Windows), поддерживает 15+ провайдеров — от OpenAI до локального Qwen. Собран Block (Square, Cash App, TIDAL), в январе 2026 перешёл в Linux Foundation.

<p class="product-hero-rating">
<span class="rating-badge">⭐ 42 453</span>
<span class="rating-label">звёзд на GitHub · обновлён 17 апреля 2026</span>
</p>

```bash
curl -fsSL https://github.com/block/goose/releases/latest/download/install.sh | bash
```

[:material-github: GitHub](https://github.com/block/goose){ .md-button .md-button--primary } [:material-download: Десктоп-приложение](https://block.github.io/goose){ .md-button }

</div>

<div class="author-chip"><img class="author-chip__avatar" src="https://avatars.githubusercontent.com/u/185116535?v=4" alt="Block Open Source"><div class="author-chip__text"><div class="author-chip__label">РАЗРАБОТЧИК</div><div class="author-chip__name"><a href="https://github.com/block">Block Open Source</a> <span class="author-chip__handle">@block</span></div><div class="author-chip__bio">Компания Джека Дорси (Square, Cash App, Afterpay, TIDAL). Первый проект их open-source офиса. В январе 2026 Goose стал одним из трёх стартовых проектов Agentic AI Foundation в Linux Foundation.</div></div></div>

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/wUOPySw0VDw" title="Codename Goose обзор — WorldofAI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<p class="video-caption">Обзор: WorldofAI — «Codename Goose: NEW FREE AI Software Engineer Can DO Anything!»</p>

## Требования

- **Где работает:** macOS / Linux / Windows. Десктоп-приложение + CLI, кому что удобнее
- **Лицензия:** Apache 2.0 — open-source, можно в коммерческих проектах
- **Провайдеры:** 15+ — Anthropic, OpenAI, Google, Ollama, OpenRouter, Azure, Bedrock. С Ollama всё локально, без интернета, без VPN
- **Железо для Ollama:** 8 ГБ RAM вытянет модели 3B-7B. Большие модели (70B) требуют 64 ГБ+

## Зачем это нужно

Агент, который умеет САМ: читать твои файлы, запускать команды, искать в интернете, править код. Отличие от обычного чата — он не просто советует, а делает.

Главная фишка Goose — он работает с Ollama. То есть можно запустить ИИ-агента полностью на своём компьютере, без облака, без VPN, без подписок. Модель стоит у тебя, агент тоже у тебя, интернет не нужен.

Делает его Block — бывший Square, компания Джека Дорси. Не стартап-однодневка, проект серьёзный.

## Кому подходит

- ✅ Хочешь агента, но не хочешь платить $100 за Claude Code
- ✅ В РФ, нет VPN — с Ollama работает полностью без интернета
- ✅ Новичок в агентах — приложение с окошком проще чёрного окна с командами
- ❌ НЕ подходит если нужна топовая модель (Claude Opus) — Ollama слабее
- ❌ Если ты уже в Claude Code — Goose избыточен

## Как попробовать без чёрного окна с командами

**1. Скачай десктоп-приложение** → [block.github.io/goose](https://block.github.io/goose) — обычная программа, ставится как любая другая, двойным кликом.

**2. Запусти — выбери провайдера модели:**

- Облачная: OpenAI, Anthropic (нужен ключ для подключения программы к их ИИ)
- Локальная: Ollama (скачай отдельно, без VPN и без денег)

**3. Пиши задачу в окно** — агент начинает работать. Всё.

Никакого чёрного окна, никаких команд. Интерфейс как у мессенджера.

??? note "Для программистов (через чёрное окно с командами)"

    **Скрипт-установщик:**

    ```bash
    curl -fsSL https://block.github.io/goose/install.sh | bash
    ```

    **Через Homebrew (macOS):**

    ```bash
    brew install goose
    ```

    **Первый запуск с Ollama:**

    1. Скачай модель: `ollama run qwen2.5`
    2. В Goose выбери Ollama, укажи модель
    3. Пиши задачу

## Нюансы

- С локальной моделью агент медленнее и глупее, чем Claude. Это плата за бесплатно
- На слабом компе (8 ГБ RAM) большие модели не влезут — бери 3B-7B
- Приложение с окошком стабильнее чёрного окна с командами, для новичков лучше начать с него

## Ссылки

- [GitHub ⭐ 42K](https://github.com/block/goose)
- [Документация](https://block.github.io/goose)
- Альтернативы: [Cline](cline.md) (VS Code), [Codex CLI](codex-cli.md) (чёрное окно с командами)

---

*Подходит для: бесплатно · из РФ · новичкам в агентах*
