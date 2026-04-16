---
title: "Firecrawl — скрапинг для ИИ"
category: integrations
tags:
  - mcp
  - автоматизация
  - технарям
stars: 110000
github: mendableai/firecrawl
updated: 2026-04-16
---

# 🔥 Firecrawl

> ИИ-ориентированный скрапинг сайтов. Даёшь URL — получаешь чистый markdown, готовый для ИИ.

## Что делает

Обычный скрапинг — это боль: HTML с рекламой, JS-загрузки, защита от ботов. Firecrawl решает это: кидаешь URL — получаешь чистый markdown без мусора. Идеально для ИИ.

Три режима:
- **Scrape** — одна страница
- **Crawl** — обход всего сайта
- **Search** — поиск + автоскрейпинг

Работает как облачный сервис (API) или self-host в Docker. 110 тысяч звёзд. Mendable AI давно в теме — делают RAG для крупных компаний.

## Кому подходит

- ✅ ИИ-агентам нужны данные с сайтов
- ✅ Надо собрать документацию для RAG
- ✅ Мониторинг конкурентов, цен, контента
- ❌ НЕ подходит для 1-2 разовых задач — можно просто скопировать
- ❌ Если сайт защищён капчей — Firecrawl её не решит

## Установка

### Как облачный API (проще)

```bash
pip install firecrawl-py
```

```python
from firecrawl import FirecrawlApp

app = FirecrawlApp(api_key="твой-ключ")
result = app.scrape_url("https://example.com")
print(result["markdown"])
```

### Как MCP для Claude Code

```bash
claude mcp add firecrawl -- npx -y @mendable/firecrawl-mcp
```

### Self-host

```bash
git clone https://github.com/mendableai/firecrawl
cd firecrawl
docker-compose up
```

## Первый запуск

1. Получил API ключ на [firecrawl.dev](https://firecrawl.dev)
2. Подключил к Claude Code через MCP
3. В агенте: «собери документацию с docs.anthropic.com, положи в /docs/anthropic»
4. Firecrawl обходит сайт, превращает в markdown

## Нюансы

- Облачный API — платный после бесплатного тира (500 страниц/мес)
- Self-host бесплатный, но нужен сервер
- Не все сайты ок со скрейпингом — уважай robots.txt и ToS

## Ссылки

- [GitHub ⭐ 110K](https://github.com/mendableai/firecrawl)
- [firecrawl.dev](https://firecrawl.dev)
- Альтернативы: Playwright (без ИИ-обёртки), [Browser Use](../agents/browser-use.md) (через агента)

---

*Подходит для: технарям · автоматизации · RAG*
