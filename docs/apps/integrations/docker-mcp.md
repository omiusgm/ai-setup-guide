---
title: "Docker MCP Toolkit — каталог MCP"
category: integrations
tags:
  - mcp
  - технарям
updated: 2026-04-17
for: agent
---

# Docker MCP Toolkit

<div class="product-hero" markdown>

**300+ MCP-плагинов в каталоге Docker Desktop — установка в один клик.**

Открыл Docker Desktop → MCP Toolkit → жмёшь Install на Gmail / GitHub / Postgres / AWS. Никаких npm, pip, чёрного окна. Каждый плагин запускается в изолированном контейнере — удалил и ничего не осталось.

<p class="product-hero-rating">
<span class="rating-badge">Docker Desktop</span>
<span class="rating-label">встроено · обновляется вместе с Docker</span>
</p>

```text
Docker Desktop → MCP Toolkit → Install (нужный плагин)
```

[:material-download: Скачать Docker Desktop](https://www.docker.com/products/docker-desktop){ .md-button .md-button--primary } [:material-book: Документация](https://docs.docker.com/ai/mcp-catalog-and-toolkit/){ .md-button }

</div>

<div class="author-chip"><img class="author-chip__avatar" src="https://avatars.githubusercontent.com/u/5429470?v=4" alt="Docker"><div class="author-chip__text"><div class="author-chip__label">РАЗРАБОТЧИК</div><div class="author-chip__name"><a href="https://github.com/docker">Docker, Inc.</a> <span class="author-chip__handle">@docker</span></div><div class="author-chip__bio">Создатели платформы контейнеризации (с 2013). MCP Toolkit — официальная фича Docker Desktop, бесплатно для личного использования и небольших команд.</div></div></div>

## Требования

- **Где работает:** Docker Desktop на Mac / Windows / Linux. Подключение MCP — Claude Code, Cursor, Claude Desktop
- **Лицензия Docker Desktop:** бесплатно для личного использования и компаний <250 человек / <$10M выручки. Дальше — платный Docker Pro
- **Ресурсы:** Docker Desktop ест 2-4 ГБ RAM — на слабых компах будет тяжело
- **Ключи API:** часть плагинов (Gmail, GitHub, AWS) требует свои API-ключи или OAuth — настраиваются в Docker Desktop
- **В РФ:** Docker Desktop работает без VPN, плагины — зависит от сервиса (AWS / GitHub доступны, Slack — нет)

## Что делает

Docker Desktop добавил раздел «MCP Toolkit». Открываешь — видишь каталог на 300+ готовых подключений: Gmail, Slack, GitHub, базы данных, AWS, платежки. Каждое ставится в один клик. Не надо возиться с настройками.

Сами подключения запускаются в Docker-контейнерах — это программы-контейнеры, они запускают приложения в изоляции, не мусорят в системе. Удалил — ничего не осталось.

## Кому подходит

- ✅ Docker Desktop уже стоит
- ✅ Хочешь пробовать подключения ИИ к сервисам без боли с установкой
- ✅ Работаешь с корпоративными сервисами (AWS, Azure, GCP)
- ❌ НЕ подходит если не хочешь ставить Docker
- ❌ На слабом компе — Docker ест ресурсы

## Как попробовать без чёрного окна с командами

Docker MCP Toolkit — как раз тот редкий случай, когда всё ставится мышкой. Чёрное окно не нужно:

1. Скачай **[Docker Desktop](https://www.docker.com/products/docker-desktop)** — обычный установщик (Mac, Windows, Linux)
2. Запусти — слева в панели появится «MCP Toolkit»
3. Открой вкладку → каталог плагинов (GitHub, Gmail, Postgres, AWS, Jira...)
4. Жмёшь «Install» на нужном — плагин поднимается сам в контейнере
5. Теперь он доступен в Claude Code и других программах, работающих с MCP

Это самый простой способ пощупать подключения ИИ к сервисам без возни с настройками и установками.

??? note "Для программистов (через команды)"

    Docker Desktop сам по себе не требует чёрного окна с командами. Но если хочешь управлять MCP-контейнерами командами — у Docker есть свои:

    ```bash
    docker mcp list
    docker mcp install <plugin-name>
    ```

    Удобно если настраиваешь окружение скриптом или в системе сборки.

## Примеры

- **GitHub MCP** — ИИ читает/пишет задачи, пулреквесты, код
- **Postgres MCP** — ИИ выполняет запросы к базе
- **AWS MCP** — ИИ управляет облаком
- **Gmail MCP** — читает/пишет письма

## Нюансы

- Docker Desktop ест 2-4 ГБ RAM — на слабых компах тяжело
- Некоторые подключения требуют ключ для подключения — подставь в настройках
- Не все подключения одинаково качественные — смотри рейтинг в каталоге

## Ссылки

- [Docker Desktop](https://www.docker.com/products/docker-desktop) — скачать
- [MCP Toolkit документация](https://docs.docker.com/ai/mcp-catalog-and-toolkit/)
- [NetworkChuck туториал по созданию своих MCP-серверов в Docker](https://github.com/theNetworkChuck/docker-mcp-tutorial)
- Альтернативы: [Composio](composio.md), ручная установка подключений

---

*Подходит для: технарям · корпоративному стеку · простоте установки*
