---
title: "Firecrawl — собирает текст с сайтов для ИИ"
category: integrations
tags:
  - mcp
  - автоматизация
  - технарям
stars: 110256
github: firecrawl/firecrawl
updated: 2026-04-17
for: both
---

# Firecrawl

<div class="product-hero" markdown>

**Кидаешь ссылку — получаешь чистый markdown без рекламы и навигации, готовый для ИИ.**

Три режима: scrape (одна страница), crawl (весь сайт), search (поиск + автосбор). Работает как облачный сервис или ставится у себя через Docker. Free-тир — 500 страниц/мес.

<p class="product-hero-rating">
<span class="rating-badge">⭐ 110 256</span>
<span class="rating-label">звёзд на GitHub · обновлён 17 апреля 2026</span>
</p>

```bash
claude mcp add firecrawl -e FIRECRAWL_API_KEY=твой-ключ -- npx -y firecrawl-mcp
```

[:material-github: GitHub](https://github.com/firecrawl/firecrawl){ .md-button .md-button--primary } [:material-web: firecrawl.dev](https://firecrawl.dev){ .md-button }

</div>

<div class="author-chip"><img class="author-chip__avatar" src="https://avatars.githubusercontent.com/u/135057108?v=4" alt="Firecrawl"><div class="author-chip__text"><div class="author-chip__label">РАЗРАБОТЧИК</div><div class="author-chip__name"><a href="https://github.com/firecrawl">Firecrawl</a> <span class="author-chip__handle">@firecrawl</span></div><div class="author-chip__bio">YC-стартап (раньше Mendable AI). Web data API для AI-агентов. 110K звёзд — одна из самых популярных опен-сорс библиотек для скрейпинга в LLM-эпоху.</div></div></div>

## Требования

- **Где работает:** облачный сервис через API + официальный MCP-сервер для Claude Code, Cursor, Claude Desktop. SDK — Python, Node, Rust, Go
- **Free-тир:** 500 кредитов/мес (1 кредит = 1 страница). Дальше — Hobby $19/мес (3000), Standard $99/мес (100K)
- **Ключ:** регистрация на [firecrawl.dev](https://firecrawl.dev) → API key в дашборде
- **В РФ:** работает без VPN (облачный API доступен)
- **Лицензия:** AGPL-3.0 для self-hosted, коммерческое использование облака — по тарифам

## Что делает

Обычный сбор данных с сайтов (когда программа копирует текст и картинки со страниц автоматом) — это боль: мусор из рекламы, скрытый текст, защита от ботов. Firecrawl решает это: кидаешь ссылку — получаешь чистый текст без мусора. Идеально для ИИ.

Три режима:
- **Scrape** — одна страница
- **Crawl** — обход всего сайта
- **Search** — поиск + автосбор

Работает как облачный сервис (готовое решение с их серверов) или можно установить у себя (не в облаке) через программу-контейнер Docker, которая запускает приложения в изоляции. 110 тысяч звёзд. Mendable AI давно в теме — делают системы где ИИ отвечает по документам компании.

## Кому подходит

- ✅ ИИ-агентам нужны данные с сайтов
- ✅ Надо собрать документацию чтобы ИИ по ней отвечал
- ✅ Мониторинг конкурентов, цен, контента
- ❌ НЕ подходит для 1-2 разовых задач — можно просто скопировать
- ❌ Если сайт защищён капчей — Firecrawl её не решит

## Как попробовать без чёрного окна с командами

У Firecrawl есть веб-интерфейс — можно собирать тексты без единой команды:

1. Заходи на **[firecrawl.dev](https://firecrawl.dev)** → регистрация по email
2. В дашборде есть «Playground» — вставляешь ссылку, жмёшь «Scrape», получаешь готовый текст
3. Бесплатный тир — 500 страниц/мес, хватает пощупать
4. Результат копируешь и вставляешь в ChatGPT/Claude: «проанализируй этот текст»

**Для связки с ИИ в браузере:**
- В **Claude Projects** подключается через Custom Connector (бета)
- В **ChatGPT** — через кастомные GPTs или Actions

??? note "Для программистов (Python / подключение к Claude Code / установка у себя)"

    **Как облачный сервис:**

    ```bash
    pip install firecrawl-py
    ```

    ```python
    from firecrawl import FirecrawlApp

    app = FirecrawlApp(api_key="твой-ключ")
    result = app.scrape_url("https://example.com")
    print(result["markdown"])
    ```

    **Подключить к Claude Code как MCP (способ дать ИИ руки — подключить его к внешним сервисам):**

    ```bash
    claude mcp add firecrawl -e FIRECRAWL_API_KEY=твой-ключ -- npx -y firecrawl-mcp
    ```

    **Установить у себя (для своих серверов):**

    ```bash
    git clone https://github.com/firecrawl/firecrawl
    cd firecrawl
    docker-compose up
    ```

## Нюансы

- Облачный сервис — платный после бесплатного тира (500 страниц/мес)
- Установка у себя бесплатна, но нужен сервер
- Не все сайты ок со сбором данных — уважай robots.txt и правила сайтов

## Ссылки

- [GitHub firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) — 110K звёзд
- [firecrawl.dev](https://firecrawl.dev) — веб-дашборд и API
- [Официальный MCP-сервер](https://github.com/firecrawl/firecrawl-mcp-server)
- Альтернативы: Playwright (без ИИ-обёртки), [Browser Use](../agents/browser-use.md) (через агента)

---

*Подходит для: технарям · автоматизации · системам "ИИ читает документы"*
