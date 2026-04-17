---
title: "Everything Claude Code — готовая армия"
category: bundles
tags:
  - набор
  - технарям
  - бесплатно
stars: 159342
github: affaan-m/everything-claude-code
updated: 2026-04-17
for: agent
---

# Everything Claude Code

<div class="product-hero" markdown>

**47 агентов, 181 скилл, 79 команд — каталог готовых деталей для Claude Code. Скачиваешь, копируешь нужное в свой проект.**

Не одна большая установка, а склад. Внутри — агенты-ревьюеры, агенты-писатели, скиллы под Python/Rust/Go/Notion/CRM, команды на частые сценарии. Берёшь то что нужно, остальное игнорируешь. Победитель Anthropic-хакатона сентября 2025.

<p class="product-hero-rating">
<span class="rating-badge">⭐ 159 342</span>
<span class="rating-label">звёзд на GitHub · обновлён 16 апреля 2026</span>
</p>

```bash
# В Claude Code через marketplace плагинов:
/plugin marketplace add affaan-m/everything-claude-code
/plugin install everything-claude-code

# Или клонировать и брать руками:
git clone https://github.com/affaan-m/everything-claude-code ~/everything-cc
```

[:material-github: GitHub](https://github.com/affaan-m/everything-claude-code){ .md-button .md-button--primary } [:material-web: affaanmustafa.com](https://affaanmustafa.com){ .md-button }

</div>

<div class="author-chip"><img class="author-chip__avatar" src="https://avatars.githubusercontent.com/u/124439313?v=4" alt="Affaan Mustafa"><div class="author-chip__text"><div class="author-chip__label">АВТОР ПРОЕКТА</div><div class="author-chip__name"><a href="https://github.com/affaan-m">Affaan Mustafa</a> <span class="author-chip__handle">@affaan-m</span></div><div class="author-chip__bio">Co-founder Itô (Ito Markets), SF-builder в AI и квант-трейдинге. Автор гайдов по Claude Code с 5M+ просмотров. Победитель Anthropic-хакатона сентября 2025.</div></div></div>

## Что делает

Представь, что кто-то уже за тебя сделал: настроил десятки агентов под разные задачи, написал 181 скилл на все случаи, создал 79 кастомных команд. Everything Claude Code — это именно такая «армия готовых инструментов».

158 тысяч звёзд. Автор — affaan-m. Обновляется регулярно, сообщество добавляет новые штуки.

Внутри есть: агенты-ревьюеры, агенты-писатели, агенты для SEO, для научных статей, для трейдинга, для подкастов. Скиллы по Python/Rust/Go, по Notion, по браузеру, по CRM. Команды на все частые сценарии.

## Кому подходит

- ✅ Уже работаешь в Claude Code
- ✅ Хочешь не изобретать велосипеды
- ✅ Любишь копаться и собирать своё из чужих деталей
- ❌ НЕ подходит новичкам — каталог огромный, легко утонуть
- ❌ Если хочешь всё-в-одном готовое — [Oh My ClaudeCode](oh-my-claudecode.md) проще

## Как попробовать без чёрного окна с командами

Everything Claude Code это репозиторий, его можно просматривать прямо в браузере:

1. Открой **[github.com/affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code)**
2. Ходи по папкам `agents/`, `skills/`, `commands/` как по каталогу
3. Нашёл интересного агента или скилл — открой файл в браузере, скопируй содержимое
4. Дальше:
   - Если работаешь в ChatGPT/Claude — вставь как системный промпт
   - Если у тебя Claude Code — положи файл в `~/.claude/agents/` или `~/.claude/skills/`

Этот каталог — не про «одну установку», а про «копирую что нужно».

??? note "Для программистов (скачивание через git)"

    Если хочешь иметь всё локально и обновлять:

    ```bash
    git clone https://github.com/affaan-m/everything-claude-code ~/everything-cc
    ```

    Потом:

    1. Прошёл по папкам `agents/`, `skills/`, `commands/`
    2. Нашёл нужное (например, агента для код-ревью)
    3. Скопировал в свой `.claude/agents/reviewer.md`
    4. Перезапустил Claude Code — агент доступен

## Что стоит стащить первым

Самое полезное, если только начинаешь:

- `skills/humanizer` — убирает ИИ-следы из текста
- `skills/article-writing` — длинные статьи
- `skills/market-research` — ресерч
- `skills/autonomous-loops` — паттерны для /loop
- `skills/content-engine` — контент-машина для соцсетей
- `skills/seo` — SEO-оптимизация
- `agents/reviewer.md` — код-ревью
- `commands/plan.md` — план задачи

## Нюансы

- Размер репо большой — клонируется долго
- Не всё качественное, некоторые скиллы устаревшие
- Ищи «новые» — там основная ценность

## Ссылки

- [GitHub ⭐ 158K](https://github.com/affaan-m/everything-claude-code)
- Альтернативы: [Oh My ClaudeCode](oh-my-claudecode.md) (проще), [GSD](gsd.md) (встроено)

---

!!! tip "Совместимость"
    *Работает с Claude Code, Cursor, Codex CLI, OpenCode из единого репо. Open-source. 159K звёзд. Победитель Anthropic-хакатона сентября 2025.*
