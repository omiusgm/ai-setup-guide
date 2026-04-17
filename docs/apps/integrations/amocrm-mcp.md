---
title: "AmoCRM MCP — ИИ работает с CRM"
category: integrations
tags:
  - mcp
  - бизнесу
  - автоматизация
stars: 1
github: cAIborg-ai/amocrm-mcp
updated: 2026-04-17
for: agent
---

# AmoCRM MCP

<div class="product-hero" markdown>

**36 инструментов для AmoCRM через MCP — ИИ работает с CRM напрямую.**

Подключаешь к Claude Code / Cursor — агент сам читает сделки, пишет комментарии, создаёт задачи, обновляет контакты. От «покажи свежие сделки» до «собери отчёт по воронке за квартал».

<p class="product-hero-rating">
<span class="rating-badge">⭐ 1</span>
<span class="rating-label">звезда на GitHub · обновлён 19 февраля 2026</span>
</p>

```bash
pip install amocrm-mcp
claude mcp add amocrm -- python -m amocrm_mcp
```

[:material-github: GitHub](https://github.com/cAIborg-ai/amocrm-mcp){ .md-button .md-button--primary } [:material-cog: Гайд по MCP](../../knowledge/getting-started.md){ .md-button }

</div>

<div class="author-chip"><img class="author-chip__avatar" src="https://avatars.githubusercontent.com/u/226208132?v=4" alt="cAIborg.ai"><div class="author-chip__text"><div class="author-chip__label">РАЗРАБОТЧИК</div><div class="author-chip__name"><a href="https://github.com/cAIborg-ai">cAIborg.ai</a> <span class="author-chip__handle">@cAIborg-ai</span></div><div class="author-chip__bio">Команда из РФ. Делает MCP-серверы для популярных российских сервисов. Свежий проект — баги возможны, но активно чинят.</div></div></div>

## Требования

- **Где работает:** Claude Code, Claude Desktop, Cursor — любой клиент с поддержкой MCP
- **Ключи:** API-ключ AmoCRM (Настройки → Интеграции → API) и поддомен аккаунта в `.env`
- **В РФ:** работает без VPN, AmoCRM полностью доступна
- **Лицензия:** open-source, статус — свежий проект (1⭐, февраль 2026)

## Что делает

AmoCRM — популярная CRM в РФ. MCP-плагин (то, что даёт ИИ руки для работы с внешним сервисом) даёт ИИ-агенту прямой доступ к твоему аккаунту: сделки, контакты, воронки, задачи, события. 36 инструментов — от простого «создай сделку» до сложного «собери отчёт по воронке продаж за квартал».

Дальше — примеры, что реально работает у людей:

- «Найди сделки без активности больше 7 дней, напиши им повторное письмо»
- «Собери всех клиентов с тегом VIP, проанализируй топ-10 по объёму»
- «Посмотри что менеджер Петя сделал на этой неделе»

## Кому подходит

- ✅ Бизнес на AmoCRM
- ✅ Нужен ИИ-помощник для РОПа / менеджеров
- ✅ Готов разобраться с установкой (порог входа средний)
- ❌ НЕ подходит если CRM не AmoCRM
- ❌ Для разовых задач — проще руками

## Как попробовать без чёрного окна с командами

AmoCRM MCP работает только через Claude Code (а он живёт в чёрном окне с командами). Но «ИИ для CRM» можно подключить иначе:

- **[n8n Cloud](../automation/n8n.md)** — в облачном n8n есть готовый блок AmoCRM. Собираешь цепочку мышкой: триггер → AmoCRM → ИИ → действие
- **Встроенные ИИ-фичи AmoCRM** — в тарифах есть Salesbot и «умные» сценарии. Настройка через веб-интерфейс
- **Excel/Google Sheets + ИИ** — выгружаешь сделки в таблицу, даёшь ИИ в браузере («что не так с этой воронкой?»)

??? note "Для программистов (подключение через чёрное окно с командами)"

    ```bash
    pip install amocrm-mcp
    ```

    Затем добавить в Claude Code:

    ```bash
    claude mcp add amocrm -- python -m amocrm_mcp
    ```

    **Первый запуск:**

    1. Получить в AmoCRM ключ для подключения (Настройки → Интеграции → API)
    2. В `.env` положить `AMOCRM_TOKEN=...` и `AMOCRM_SUBDOMAIN=...`
    3. Запустить Claude Code
    4. В диалоге: «покажи 10 свежих сделок»
    5. Агент дёргает AmoCRM, отдаёт данные

## Примеры задач

- **Для РОПа:** «Собери сводку за неделю — кто сколько закрыл, средний чек, проблемы»
- **Мониторинг:** «Каждое утро проверяй сделки >100K руб, пиши саммари»
- **Повторные касания:** «Найди клиентов, с которыми не общались 14 дней, подготовь письма»

## Нюансы

- Репозиторий свежий — баги возможны, но активно чинят
- В РФ работает без VPN (AmoCRM доступна)
- Ключ AmoCRM даёт много прав — храни в `.env`, не в коде

## Ссылки

- [GitHub cAIborg-ai/amocrm-mcp](https://github.com/cAIborg-ai/amocrm-mcp)
- [Кейс РОПа](../../knowledge/cases/rop-amocrm.md) — как настроить под свой процесс
- Альтернативы: [n8n + AmoCRM](n8n-mcp.md), [Composio](composio.md) (скоро добавят)

---

*Подходит для: бизнесу · автоматизация · из РФ*
