---
title: "Composio — 1000+ интеграций"
category: integrations
tags:
  - mcp
  - бизнесу
  - технарям
  - открытый-код
stars: 27812
github: ComposioHQ/composio
updated: 2026-04-17
for: both
---

# Composio

<div class="product-hero" markdown>

**Один установ — и у ИИ-агента сразу 1000+ готовых подключений к сервисам.**

Gmail, Slack, GitHub, Jira, Notion, HubSpot — всё через один MCP. OAuth и ключи — на стороне Composio, агент сразу работает «из коробки». Нужна почта? Уже есть. Нужна Jira? Уже есть.

<p class="product-hero-rating">
<span class="rating-badge">⭐ 27 812</span>
<span class="rating-label">звёзд на GitHub · обновлён 17 апреля 2026</span>
</p>

```bash
curl -fsSL https://composio.dev/install | bash
composio login
```

[:material-github: GitHub](https://github.com/ComposioHQ/composio){ .md-button .md-button--primary } [:material-web: composio.dev](https://composio.dev){ .md-button }

</div>

<div class="author-chip"><img class="author-chip__avatar" src="https://avatars.githubusercontent.com/u/128464815?v=4" alt="Composio"><div class="author-chip__text"><div class="author-chip__label">РАЗРАБОТЧИК</div><div class="author-chip__name"><a href="https://github.com/ComposioHQ">Composio</a> <span class="author-chip__handle">@ComposioHQ</span></div><div class="author-chip__bio">YC-стартап (S23). Делают «integration layer» для AI-агентов: подключение к 1000+ SaaS, OAuth, ключи, безопасность — на их стороне.</div></div></div>

## Требования

- **Где работает:** Claude Code, Cursor, Claude Desktop — любой клиент с поддержкой MCP. Также SDK для Python / TypeScript / LangChain / CrewAI
- **Аккаунт:** регистрация на [composio.dev](https://composio.dev) (free-тир — 200 действий/мес, дальше платно от $39)
- **OAuth:** Composio запоминает доступ к каждому сервису у себя. Корпоративные аккаунты иногда блокируют сторонние OAuth
- **В РФ:** часть сервисов недоступна из-за санкций самих сервисов (Jira Cloud, Slack), Gmail / GitHub / Notion работают
- **Лицензия:** Apache 2.0 — open-source

## Что делает

Вместо того чтобы каждый сервис подключать отдельно — ставишь Composio, и у агента сразу доступ ко всему. Отправить письмо через Gmail? Создать задачу в Jira? Прочитать документ в Notion? Всё через одно подключение.

28 тысяч звёзд. ComposioHQ активно развивают, новые подключения появляются каждую неделю. Поддержка Claude Code, LangChain, автоматизация CrewAI.

## Кому подходит

- ✅ Бизнесу: нужно подключить много сервисов сразу
- ✅ Агент должен работать с Gmail, Slack, CRM, таск-трекером
- ✅ Хочешь один стандарт для всех подключений
- ❌ НЕ подходит если нужен один-два сервиса — проще взять отдельные MCP
- ❌ Для простых промптов — избыточно

## Как попробовать без чёрного окна с командами

У Composio есть веб-интерфейс для настройки — можно подключить сервисы мышкой:

1. Зарегистрируйся на **[composio.dev](https://composio.dev)** — обычный сайт, email + пароль
2. В дашборде → «Apps» → жмёшь «Connect» на Gmail, Slack, GitHub, Notion и т.д. Каждый через OAuth — это авторизация одной кнопкой, ничего не надо копировать
3. Получаешь готовый ключ для подключения ИИ ко всему
4. Дальше — либо в ChatGPT/Claude через коннектор (если платный план), либо через n8n Cloud

Альтернативы для простых задач:
- **[Zapier](https://zapier.com)** / **[Make.com](https://make.com)** — готовые подключения без кода, те же сервисы
- **[n8n Cloud](../automation/n8n.md)** — визуальный конструктор

??? note "Для программистов (через чёрное окно с командами)"

    ```bash
    pip install composio-core
    ```

    Для Claude Code:

    ```bash
    composio add claude
    ```

    **Первый запуск:**

    1. Создал аккаунт на [composio.dev](https://composio.dev)
    2. Получил ключ для подключения
    3. `composio login` — привязал аккаунт
    4. Подключил сервисы через OAuth: `composio add gmail`, `composio add slack`
    5. В агенте — сразу доступны 1000+ инструментов

## Примеры задач

- «Найди в Gmail письма от клиента X, создай по ним задачи в Linear»
- «Посмотри вчерашние пулреквесты в GitHub, напиши саммари в Slack»
- «Возьми данные из HubSpot, собери отчёт в Notion»

## Нюансы

- Требует OAuth к каждому сервису — с облачными аккаунтами работает, с корпоративными может быть сложнее
- Есть платный план — но для старта бесплатного хватает
- Некоторые подключения в РФ недоступны из-за санкций (Jira Cloud, Slack)

## Ссылки

- [GitHub ComposioHQ/composio](https://github.com/ComposioHQ/composio) — 28K звёзд
- [composio.dev](https://composio.dev) — веб-дашборд и документация
- Альтернативы: [Docker MCP](docker-mcp.md), отдельные подключения под задачу

---

*Подходит для: бизнесу · технарям · полному стеку*
