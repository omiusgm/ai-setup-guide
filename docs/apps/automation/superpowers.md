---
title: "Superpowers — методология G3 для Claude Code"
category: automation
tags:
  - автономный-кодинг
  - player-coach
  - g3
  - официальный
  - anthropic
stars: 157027
github: obra/superpowers
updated: 2026-04-17
for: agents
---

# Superpowers

<div class="product-hero" markdown>

**2-3 часа автономной работы — готовый код с тестами, без ручной перепроверки.**

Методология G3 (Player ↔ Coach): один агент пишет код, другой ревьюит по спеке. Пока код не пройдёт ревью — цикл повторяется. Ты подтверждаешь план и уходишь заниматься своими делами.

<p class="product-hero-rating">
<span class="rating-badge">⭐ 157 027</span>
<span class="rating-label">звёзд на GitHub · обновлён 16 апреля 2026</span>
</p>

```bash
claude plugin install superpowers@claude-plugins-official
```

[:material-github: GitHub](https://github.com/obra/superpowers){ .md-button .md-button--primary } [:material-puzzle: Marketplace](https://claude.com/plugins/superpowers){ .md-button }

</div>

<div class="author-chip"><img class="author-chip__avatar" src="https://avatars.githubusercontent.com/u/45416?v=4" alt="Jesse Vincent"><div class="author-chip__text"><div class="author-chip__label">АВТОР ПРОЕКТА</div><div class="author-chip__name"><a href="https://github.com/obra">Jesse Vincent</a> <span class="author-chip__handle">@obra</span></div><div class="author-chip__bio">Создатель Request Tracker (1994) и K-9 Mail. Co-founder Keyboardio. Бывший Perl 5 pumpking.</div></div></div>

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/ol7KYIfUm1Y" title="Superpowers обзор — Матвей Шульга" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<p class="video-caption">Обзор: Матвей Шульга — «Этот плагин улучшит Claude Code»</p>

## Требования

- **Где работает:** Claude Code, Cursor, Codex CLI, Gemini CLI, Copilot CLI
- **Токены:** повышенное потребление — каждый subagent идёт в отдельной сессии, расход в **3-5 раз выше обычной**. Нужен тариф Anthropic Pro ($20/мес) или Max ($200/мес)
- **Лицензия:** MIT — open-source, можно использовать в коммерческих проектах


## Зачем это нужно

Обычный диалог с ChatGPT / Claude — пинг-понг. Пишешь → получаешь → правишь → снова пишешь. Через 30 минут контекст забит, ИИ начинает путаться, галлюцинировать, забывать что было в начале.

На длинных задачах это заметно. Час кода через обычный чат = половина результата. Оставшаяся половина — ручная перепроверка.

G3-методология (Block AI, октябрь 2024) решила это через **два агента с разной памятью:**
- **Player** пишет код — каждая итерация начинается с чистой памяти (знает только ТЗ и замечания Coach)
- **Coach** не пишет — только проверяет по спецификации. Если что-то не так — отправляет на переделку

Superpowers это реализовал для реального Claude Code. Плюс добавил своё — TDD, verification-before-completion, git worktrees для изоляции.

## Чем это НЕ является

Чтобы не было ложных ожиданий:

- **Не волшебная кнопка «сделай мне продукт».** Если спека мутная — код тоже выйдет мутный. Superpowers силён именно на чётком ТЗ.
- **Не бесплатно по токенам.** Каждый subagent — отдельная сессия, расход в 3-5 раз выше обычной. На Pro $20 можно быстро упереться в лимит.
- **Не заменит ревью от человека на критичных задачах** (безопасность, платежи, бизнес-логика). Code-reviewer agent ловит стандартные ошибки, но свою архитектуру всё равно смотри сам.
- **Не для быстрых правок в 5 строк** — оверкилл, проще обычным чатом.
- **Не для не-кодинговых задач** — контент, дизайн, документы. Там другие инструменты.

## Что получаешь при установке

**3 команды:**

- `/brainstorm` — задаёт 3-5 вопросов чтобы выведать реальное ТЗ (вместо того чтобы бросаться писать код)
- `/write-plan` — из спеки делает implementation plan. Следует TDD, YAGNI, DRY
- `/execute-plan` — запускает агентов работать автономно. Часами. Пока не сделают план полностью

**1 агент:**

- `code-reviewer` — тот самый Coach. Проверяет код после каждого шага. Не пишет сам — только гоняет Player на переделку

**13 скиллов-фраз которые Claude Code использует автоматически:**

- `subagent-driven-development` — основной G3 паттерн
- `test-driven-development` — TDD
- `requesting-code-review` + `receiving-code-review` — Player ↔ Coach цикл
- `verification-before-completion` — финальная проверка
- `systematic-debugging` — если что-то сломалось
- `dispatching-parallel-agents` — параллельные агенты на независимых задачах
- `using-git-worktrees` — изоляция через git worktrees (memory reset через отдельные директории)
- `writing-plans`, `writing-skills`, `finishing-a-development-branch`, `brainstorming`, `using-superpowers`

## Бесплатные фишки до установки

### Просто писать ТЗ первым делом

Перед каждой большой задачей: напиши ТЗ в отдельном файле. 3-5 пунктов. «Что должно работать», «как проверить». Закинь ИИ: «читай это и делай по пунктам. После каждого — говори что сделал». Это 50% эффекта Superpowers без установки.

### Подход «сначала план, потом код»

Говори: «сначала напиши план (без кода), я проверю, потом реализуй». На удивление мало кто это делает. Даёт большую разницу.

### Новый чат после каждой фичи

Не превращай один диалог в марафон. Закончил один куск — закрыл, открыл новый. Контекст свежий, меньше глюков.

---

??? note "Установка в других средах (Cursor, Codex, Gemini CLI, Copilot)"

    ```bash
    # Cursor
    /add-plugin superpowers

    # OpenAI Codex CLI
    /plugins  # → найти superpowers → установить

    # Gemini CLI
    gemini extensions install https://github.com/obra/superpowers

    # GitHub Copilot CLI
    copilot plugin marketplace add obra/superpowers-marketplace
    copilot plugin install superpowers@superpowers-marketplace
    ```

## Кому подходит

- ✅ Работаешь в Claude Code / Cursor / Codex, задачи средние и большие (несколько файлов, несколько фич)
- ✅ Устал что ИИ забывает середину задачи к концу
- ✅ Хочешь запустить автономную работу на несколько часов и получить результат без ручного дёргания
- ✅ Нужен автоматический code review (встроенный агент-ревьюер)
- ❌ НЕ подходит для мелких правок — оверкилл, проще обычным чатом
- ❌ НЕ подходит если не планируешь TDD — методология сильно завязана на тестах
- ❌ НЕ подходит для не-кодинговых задач (контент, дизайн — бери другие инструменты)

## Типовой рабочий поток

**Задача:** написать REST API для задачника.

1. Говоришь Claude Code: **«хочу REST API для задачника, через superpowers»**
2. Claude вызывает `/brainstorm`:
   > 1. На каком стеке? (FastAPI / Express / Go)
   > 2. Хранение — Postgres / SQLite / Redis?
   > 3. Auth — JWT / OAuth / session?
   > 4. Нужны ли теги, приоритеты, дедлайны?
   > 5. Что точно НЕ нужно в MVP?
3. Ты отвечаешь. Claude собирает спеку, показывает кусками.
4. Говоришь «ок» → Claude вызывает `/write-plan` → план из 12-15 шагов с тестами.
5. Ты проверяешь план (3 минуты), говоришь «го».
6. Claude вызывает `/execute-plan`:
   - Subagent A (Player) делает шаг 1 — пишет тест, пишет код
   - Subagent B (code-reviewer) проверяет
   - Не прошло → обратно Player с замечаниями
   - Прошло → Player делает шаг 2
   - ...
   - После шага 15 — полная верификация всех тестов, lint, build
7. Возвращается в основной чат с результатом. Готовый код + лог итераций + report.

**Время:** 1-3 часа автономной работы в зависимости от размера.

## Нюанс ДО установки

Superpowers **агрессивно использует subagents** — каждый вызывает отдельную сессию Claude Code. Это значит:

- Токены считаются у каждого subagent отдельно (может быть в 3-5 раз больше обычной сессии)
- Если у тебя Pro-тариф ($20/мес) — можешь быстро упереться в лимит
- На Max-тарифе ($200/мес) нормально работает

**Совет:** для первых экспериментов поставь лимит итераций поменьше (3-5), посмотри как расходуются токены.

## Сравнение с альтернативами

| Инструмент | Звёзды | Плюсы | Минусы |
|---|---|---|---|
| **Superpowers (наш выбор)** | 157K | Официальный, 3 команды, 13 скиллов, 1 agent | Токены x3-5 |
| [Ralphinho паттерн](../../knowledge/memory.md) | — | Уже в скилле autonomous-loops | Без готового плагина |
| [G3 оригинал](https://github.com/dhanji/g3) | 506 | От автора методологии | Rust, research prototype |
| [GSD v2](https://github.com/gsd-build/gsd-2) | 6K | Memory reset через отдельный CLI | Не плагин, отдельный инструмент |
| [Hegelion](https://github.com/Hmbown/Hegelion) | 143 | Честный Player-Coach, MCP-сервер | Малоизвестен, без комьюнити |
| [Goose (Block)](https://github.com/block/goose) | 42K | От той же команды, полноценный агент | Отдельный агент, не плагин |

## Что читать дальше

- [Автономные циклы](../../knowledge/modes.md) — обзор паттернов Claude Code
- [Как меня создавали](../../knowledge/memory.md) — контекст и память ИИ
- [Bundle Everything Claude Code](../bundles/everything-claude-code.md) — альтернативный набор скиллов

---

!!! tip "Совместимость"
    *Работает с Claude Pro / Max-тарифами. Требует установленный Claude Code CLI. Open-source (MIT), 157K звёзд, официальный плагин в Anthropic marketplace. Поддерживает также Cursor, Codex CLI, Gemini CLI.*
