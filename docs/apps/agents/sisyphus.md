---
title: "Oh-My-ClaudeCode — умный маршрутизатор моделей"
category: agents
tags:
  - агент
  - экономия
  - многоагентность
  - опытным
stars: 29561
github: Yeachan-Heo/oh-my-claudecode
updated: 2026-04-17
for: agents
---

# Oh-My-ClaudeCode (Sisyphus)

<div class="product-hero" markdown>

**Экономит 40-70% токенов в Claude Code — простые запросы летят на дешёвую Haiku, сложные — на Opus. Платишь меньше за ту же работу.**

Надстройка над Claude Code. Включает 19 специализированных агентов (coder, reviewer, tester, planner, researcher) и 36 скиллов. `/sisyphus` — и до 50% меньше расхода токенов на длинных сессиях.

<p class="product-hero-rating">
<span class="rating-badge">⭐ 29 561</span>
<span class="rating-label">звёзд на GitHub · обновлён 17 апреля 2026</span>
</p>

```bash
npm install -g oh-my-claude-sisyphus
```

[:material-github: GitHub](https://github.com/Yeachan-Heo/oh-my-claudecode){ .md-button .md-button--primary } [:material-npm: npm](https://www.npmjs.com/package/oh-my-claude-sisyphus){ .md-button }

</div>

<div class="author-chip"><img class="author-chip__avatar" src="https://avatars.githubusercontent.com/u/54757707?v=4" alt="Yeachan Heo"><div class="author-chip__text"><div class="author-chip__label">АВТОР ПРОЕКТА</div><div class="author-chip__name"><a href="https://github.com/Yeachan-Heo">Yeachan Heo (Bellman)</a> <span class="author-chip__handle">@Yeachan-Heo</span></div><div class="author-chip__bio">Алго-трейдер из Сеула, лидер Quant.start() — крупнейшего сообщества квант-трейдеров Кореи. Днём торгует, ночью вайб-кодит с Claude.</div></div></div>

## Требования

- **Где работает:** только внутри Claude Code (надстройка)
- **Лицензия:** MIT — open-source
- **Подписка:** любая Anthropic — API / Pro ($20) / Max ($100/$200). На Max экономия заметна сильнее
- **Предпосылка:** базовый Claude Code уже освоен. Для первого раза это будет перебор

## Что делает

Claude Code по умолчанию всё гоняет через Opus — самую умную и самую дорогую модель. Но для 80% задач (прочитать файл, запустить тест, git commit) хватит Haiku — она в 15-20 раз дешевле.

**Oh-My-ClaudeCode (он же `oh-my-claude-sisyphus` в npm)** — надстройка, которая смотрит на каждый запрос и решает:
- Простое — Haiku
- Средней сложности — Sonnet
- Сложное / агентная задача — Opus

Плюс 11 готовых агентов-специалистов внутри: coder, reviewer, tester, planner, researcher, security, UX и т.д. Каждый заточен под свою задачу со своим промптом и правильной моделью.

**29 482 звезды на GitHub** (17 апреля 2026). Автор — Yeachan-Heo. Один из самых быстрорастущих проектов в экосистеме Claude Code.

## Почему это важно сейчас

С выходом Claude Opus 4.7 (16 апреля 2026) новый токенизатор стал жрать на 30-35% больше токенов на том же тексте. Формально цена не изменилась ($5/$25 за млн), но расход по факту вырос. Умный роутинг — один из способов это компенсировать.

## Кому подходит

- ✅ Работаешь в Claude Code несколько часов в день — заметишь экономию сразу
- ✅ Жжёшь Max-план ($200/мес) быстрее чем хотел
- ✅ Есть много однотипных задач (скриптинг, git-операции, чтение файлов)
- ❌ НЕ подходит если ты только начал — сначала освой базовый Claude Code
- ❌ НЕ подходит если все твои задачи реально сложные (рефакторинг, архитектура) — роутинг ничего не даст

## Как попробовать

??? note "Для продвинутых (терминал)"

    > ⚠️ Нужен работающий Claude Code и npm. Если пока не знаешь что это — отложи, сначала освой Claude Code.

    ```bash
    npm install -g oh-my-claude-sisyphus
    ```

    После установки в Claude Code становится доступна команда `/sisyphus`. При запуске сессии можно включить автоматический роутинг или выбрать конкретного агента вручную: `/sisyphus coder`, `/sisyphus reviewer` и т.д.

    Полная документация: [github.com/Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)

## Что сэкономит

По моему личному опыту на проекте @agentezh — средняя сессия Claude Code с роутингом ест на ~50% меньше токенов чем без него. Простые вещи (правки CLAUDE.md, git-операции, чтение файлов, запуск тестов) уходят на Haiku. Опусу достаётся только написание постов и архитектурные решения.

## Альтернативы

- **Caveman** ([страница](../tokens/caveman.md)) — просто промпт на коротые ответы. Работает в чате, без установки
- **Claude Code Router** ([musistudio/claude-code-router](https://github.com/musistudio/claude-code-router), 32 420⭐) — похожая идея, но с акцентом на роутинг между разными провайдерами (Claude / DeepSeek / локальные)
- **Планы тарифов Anthropic** — Pro $20, Max $100 / $200 включают разные лимиты
