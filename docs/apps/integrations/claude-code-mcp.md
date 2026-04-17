---
title: "Claude Code MCP — агент-в-агенте"
category: integrations
tags:
  - mcp
  - технарям
stars: 1235
github: steipete/claude-code-mcp
updated: 2026-04-17
for: agent
---

# Claude Code MCP

<div class="product-hero" markdown>

**Один агент запускает другого — параллельные подагенты в собственных сессиях.**

Главный Claude получает инструмент «делегируй задачу подагенту». Большая работа разбивается на части — каждый подагент работает изолированно, главный собирает результаты.

<p class="product-hero-rating">
<span class="rating-badge">⭐ 1 235</span>
<span class="rating-label">звёзд на GitHub · обновлён 1 января 2026</span>
</p>

```bash
claude mcp add claude-code -- npx -y @steipete/claude-code-mcp
```

[:material-github: GitHub](https://github.com/steipete/claude-code-mcp){ .md-button .md-button--primary } [:material-package: npm](https://www.npmjs.com/package/@steipete/claude-code-mcp){ .md-button }

</div>

<div class="author-chip"><img class="author-chip__avatar" src="https://avatars.githubusercontent.com/u/58493?v=4" alt="Peter Steinberger"><div class="author-chip__text"><div class="author-chip__label">АВТОР ПРОЕКТА</div><div class="author-chip__name"><a href="https://github.com/steipete">Peter Steinberger</a> <span class="author-chip__handle">@steipete</span></div><div class="author-chip__bio">Австриец. Бывший founder PSPDFKit, вышел на пенсию и вернулся ради ИИ. Известен в iOS-сообществе, ведёт блог steipete.me про Claude Code.</div></div></div>

## Требования

- **Где работает:** Claude Code, Claude Desktop, Cursor, Windsurf — любой клиент с поддержкой MCP
- **Токены:** каждый подагент идёт в отдельной сессии — расход x2-x5 от обычного. Pro-тариф ($20/мес) можно быстро упереться в лимит, на Max ($200/мес) нормально
- **Лицензия:** MIT — open-source, можно использовать в коммерческих проектах

## Что делает

Иногда одному агенту тяжело: большая задача, нужно параллелить, нужна изоляция — чтобы разные задачи не мешали друг другу. Claude Code MCP решает это: у главного агента появляется инструмент «запусти другого агента с такой-то задачей».

Пример: «исследуй 5 конкурентов» — главный запускает 5 подагентов, каждый работает со своим конкурентом, возвращает саммари. Главный собирает.

1235 звёзд. Автор — steipete (Петер Штайнбергер, известный в iOS-сообществе).

## Кому подходит

- ✅ Сложные задачи с параллельными частями
- ✅ Нужна изоляция (разные проекты в одной сессии, чтобы не мешали друг другу)
- ✅ Работаешь с Claude Code
- ❌ НЕ подходит для простых задач — слишком сложно
- ❌ Если не понимаешь что такое MCP — сначала разберись

## Как попробовать без чёрного окна с командами

Claude Code MCP работает только внутри Claude Code — а он живёт в чёрном окне с командами. Если хочешь «один ИИ запускает другого» без этого:

- **[Claude Projects](https://claude.ai)** — в одном проекте можно работать с разными специализациями через разные промпты, и копировать результаты между чатами
- **[n8n Cloud](../automation/n8n.md)** — визуально строишь цепочку «ИИ-1 → ИИ-2 → ИИ-3», каждый со своей задачей
- **Вручную**: запусти ChatGPT/Claude в двух вкладках, в одной делай ресерч, в другой — синтез

??? note "Для программистов (подключение MCP в Claude Code)"

    ```bash
    claude mcp add claude-code -- npx -y @steipete/claude-code-mcp
    ```

    **Первый запуск:**

    1. Подключил MCP
    2. В агенте: «запусти 3 подагента: один читает docs/, второй код tests/, третий config/. Каждый найдёт проблемы, вернёт саммари»
    3. Главный агент параллельно запускает три сессии
    4. Каждая возвращает результат
    5. Главный собирает общий отчёт

## Примеры

- Рефакторинг большого проекта — подагенты работают над разными модулями
- Ревью пулреквеста — один смотрит безопасность, второй стиль, третий тесты
- Исследование — подагенты читают разные источники, главный синтезирует

## Нюансы

- Каждый подагент ест «слова» для ИИ (токены) отдельно — дорого
- Нужна стабильная интернет-сессия — подагенты общаются через подключение к Anthropic
- Следи за лимитами Anthropic — легко вылететь за квоту

## Ссылки

- [GitHub steipete/claude-code-mcp](https://github.com/steipete/claude-code-mcp) — 1.2K звёзд
- [Блог автора steipete.me](https://steipete.me/) — про Claude Code workflows
- Альтернативы: [Superpowers](../automation/superpowers.md) (G3-методология), свой дирижёр агентов

---

*Подходит для: технарям · сложным задачам · параллелизации*
