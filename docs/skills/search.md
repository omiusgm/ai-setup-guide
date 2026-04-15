# Подключение поиска к ИИ-агенту

Из коробки ИИ-агенты (Claude Desktop, Claude Code) ищут плохо. Поиск подключается через MCP -- как приложение на телефон.

---

## Веб-поиск (MCP)

| Сервис | Цена | Команда установки |
|--------|------|-------------------|
| **Brave Search** | $5/мес | `claude mcp add brave-search -e BRAVE_API_KEY=... -- npx -y @brave/brave-search-mcp-server` |
| **Exa** | $7/1K запросов | `claude mcp add --transport http exa https://mcp.exa.ai/mcp` |
| **Tavily** | 1000 бесплатно/мес | `claude mcp add --transport http tavily https://mcp.tavily.com/mcp/?tavilyApiKey=...` |
| **Jina AI** | Бесплатно | `claude mcp add --transport http jina https://mcp.jina.ai/v1` |
| **DuckDuckGo** | Бесплатно | `claude mcp add ddg-search -- uvx duckduckgo-mcp-server` |

---

## Картинки

- **Stock Images MCP** (Unsplash + Pexels + Pixabay, бесплатно) -- `uvx stock-images-mcp`
- **Brave Image Search** -- включён в Brave MCP

---

## Браузерная автоматизация

- **Playwright MCP** (Microsoft, 27K stars) -- скриншоты, автоматизация
- **Browser Use** (80K stars) -- автономный браузерный агент

---

## Context7 -- документация 9000+ библиотек

ИИ галлюцинирует API, названия функций и параметры. Context7 подключает актуальную документацию и снижает этот риск.

```
claude mcp add context7 -- npx -y @upstash/context7-mcp@latest
```

---

## Стеки по бюджету

| Бюджет | Состав |
|--------|--------|
| **$0** | DuckDuckGo + Jina + Playwright |
| **$15-30/мес** | Brave + Firecrawl + Context7 + Playwright |
| **$50-100/мес** | Brave + Exa + Firecrawl + Perplexity + Context7 + Stock Images + Playwright |

*Обновлено: апрель 2026 | Контент сгенерирован ИИ*
