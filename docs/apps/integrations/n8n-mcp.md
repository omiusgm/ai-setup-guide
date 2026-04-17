---
title: "n8n-MCP — Claude управляет n8n"
category: integrations
tags:
  - mcp
  - автоматизация
  - технарям
stars: 18328
github: czlonkowski/n8n-mcp
updated: 2026-04-17
for: agent
---

# n8n-MCP

<div class="product-hero" markdown>

**Описал автоматизацию словами — Claude собрал её в n8n блоками и запустил.**

525 нод n8n плюс знание всех конфигов и связей. Claude Code собирает workflow с первой попытки почти без правок. Ты только проверяешь и нажимаешь «Запустить».

<p class="product-hero-rating">
<span class="rating-badge">⭐ 18 328</span>
<span class="rating-label">звёзд на GitHub · обновлён 17 апреля 2026</span>
</p>

```bash
claude mcp add n8n -- npx -y @czlonkowski/n8n-mcp
```

[:material-github: GitHub](https://github.com/czlonkowski/n8n-mcp){ .md-button .md-button--primary } [:material-web: n8n-mcp.com](https://www.n8n-mcp.com/){ .md-button }

</div>

<div class="author-chip"><img class="author-chip__avatar" src="https://avatars.githubusercontent.com/u/56956555?v=4" alt="Romuald Członkowski"><div class="author-chip__text"><div class="author-chip__label">АВТОР ПРОЕКТА</div><div class="author-chip__name"><a href="https://github.com/czlonkowski">Romuald Członkowski</a> <span class="author-chip__handle">@czlonkowski</span></div><div class="author-chip__bio">Польский разработчик. Сделал самый популярный MCP-сервер для n8n (18K⭐). Параллельно ведёт n8n-skills — 7 скиллов для Claude Code под n8n.</div></div></div>

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/7Egx498mtj0" title="How to Install n8n-mcp Server in Claude Desktop" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<p class="video-caption">Mike Murphy — «How to Install n8n-mcp Server in Claude Desktop To Vibe Code Automation Workflows»</p>

## Требования

- **Где работает:** Claude Code, Claude Desktop, Cursor, Windsurf — любой клиент с поддержкой MCP
- **n8n:** свой инстанс (self-hosted) или [n8n Cloud](../automation/n8n.md). API-ключ из Settings → API
- **Ключи в .env:** `N8N_URL` и `N8N_API_KEY` (даёт полный доступ — храни в `.env`)
- **В РФ:** работает без VPN. n8n Cloud доступен, self-hosted на любом своём сервере
- **Лицензия:** MIT — open-source

## Что делает

n8n — визуальный конструктор автоматизаций. Обычно ты сам мышкой двигаешь блоки. С n8n-MCP это делает Claude: описал задачу словами — агент собрал всю цепочку. MCP — это способ дать ИИ руки, подключить его к внешним сервисам.

18 тысяч звёзд. Автор — czlonkowski.

Пример: «Когда в Gmail приходит письмо от клиентов — проанализируй тональность через ИИ, если негатив — отправь в Slack канал поддержки». Агент создаст цепочку блоков в n8n, подключит, запустит.

## Кому подходит

- ✅ У тебя уже есть n8n (установленный у себя или в облаке)
- ✅ Хочешь описывать автоматизации словами, а не мышкой
- ✅ Много похожих цепочек — ИИ тиражирует быстрее
- ❌ НЕ подходит если n8n пока нет — сначала поставь его
- ❌ Для простых цепочек — быстрее мышкой

## Как попробовать без чёрного окна с командами

n8n-MCP нужен чтобы Claude Code собирал цепочки за тебя. Но если не хочешь возиться с чёрным окном — n8n прекрасно управляется мышкой и без ИИ:

1. **[n8n Cloud](https://n8n.cloud)** — веб-интерфейс, перетаскиваешь блоки
2. В n8n встроен **AI Assistant** (в правом нижнем углу интерфейса) — можешь описать цепочку словами, он предложит структуру. Без MCP, без Claude Code
3. Готовые шаблоны в **[n8n Templates](https://n8n.io/workflows)** — сотни примеров, копируешь и правишь под себя

Для простых автоматизаций этого хватает. MCP нужен только если хочешь собирать цепочки пачками и сразу запускать.

??? note "Для программистов (через чёрное окно с командами)"

    ```bash
    npm install -g @czlonkowski/n8n-mcp
    ```

    Подключить к Claude Code:

    ```bash
    claude mcp add n8n -- n8n-mcp
    ```

    В `.env` указать:

    ```
    N8N_URL=https://твой-n8n.ru
    N8N_API_KEY=твой-ключ
    ```

    **Первый запуск:**

    1. В n8n включил доступ по ключу (Settings → API)
    2. Скопировал ключ для подключения в `.env`
    3. Перезапустил Claude Code
    4. В агенте: «создай цепочку: каждый день в 9 утра собирай метрики с Google Analytics и пиши в Slack»
    5. Агент собирает блоки, подключает, тестирует

## Примеры

- «Скопируй мою цепочку Х, но замени Gmail на Outlook»
- «Собери цепочку для мониторинга моего сайта каждые 5 минут»
- «Добавь блок уведомления в Telegram к цепочке продаж»

## Нюансы

- Требует n8n — [поставь](../automation/n8n.md) сначала
- Ключ для подключения даёт полный доступ — храни в `.env`
- Сложные цепочки лучше проверять глазами перед запуском на бою

## Ссылки

- [GitHub czlonkowski/n8n-mcp](https://github.com/czlonkowski/n8n-mcp) — 18K звёзд
- [n8n-mcp.com](https://www.n8n-mcp.com/) — официальный сайт проекта
- [n8n-skills](https://github.com/czlonkowski/n8n-skills) — 7 скиллов от того же автора для Claude Code
- [n8n сам по себе](../automation/n8n.md)
- Альтернативы: ручное создание в n8n, [Composio](composio.md)

---

*Подходит для: технарям · n8n-юзерам · автоматизации*
