---
title: "Oh My ClaudeCode — умный роутинг"
category: bundles
tags:
  - набор
  - технарям
  - бесплатно
stars: 29561
github: Yeachan-Heo/oh-my-claudecode
updated: 2026-04-17
for: agent
---

# Oh My ClaudeCode

<div class="product-hero" markdown>

**Один высокоуровневый запрос — 19 агентов сами раскидываются по подзадачам, выбирают модели, проверяют друг друга. Расход токенов падает на 30-60%.**

Многоагентная оркестрация для Claude Code: умный роутинг (простая задача → Haiku, сложная → Opus), команды агентов с общим списком задач и реальным временным обменом сообщениями. Этот же проект на npm называется **oh-my-claude-sisyphus** — тот самый, что у нас на странице [Sisyphus](../agents/sisyphus.md).

<p class="product-hero-rating">
<span class="rating-badge">⭐ 29 561</span>
<span class="rating-label">звёзд на GitHub · обновлён 17 апреля 2026</span>
</p>

```bash
# В Claude Code через marketplace плагинов:
/plugin marketplace add https://github.com/Yeachan-Heo/oh-my-claudecode
/plugin install oh-my-claudecode

# Через npm (тот же проект, имя другое):
npm install -g oh-my-claude-sisyphus
```

[:material-github: GitHub](https://github.com/Yeachan-Heo/oh-my-claudecode){ .md-button .md-button--primary } [:material-web: ohmyclaudecode.com](https://ohmyclaudecode.com){ .md-button }

</div>

<div class="author-chip"><img class="author-chip__avatar" src="https://avatars.githubusercontent.com/u/54757707?v=4" alt="Bellman (Yeachan Heo)"><div class="author-chip__text"><div class="author-chip__label">АВТОР ПРОЕКТА</div><div class="author-chip__name"><a href="https://github.com/Yeachan-Heo">Bellman (Yeachan Heo)</a> <span class="author-chip__handle">@Yeachan-Heo</span></div><div class="author-chip__bio">Алгоритмический трейдер из Кореи, лидер Quant.start() — крупнейшего корейского комьюнити квант-трейдинга. Сейчас в Layoff-Labs.</div></div></div>

!!! info "Тот же проект, что Sisyphus"
    На npm пакет называется **oh-my-claude-sisyphus**, в Claude Code marketplace — **oh-my-claudecode**. Это один и тот же репозиторий, два бренда. У нас есть отдельная страница [Sisyphus](../agents/sisyphus.md) — она про npm-установку и smart-routing моделей. Эта страница — про bundle из 19 агентов и многоагентную оркестрацию.

## Что делает

Два главных ингредиента:

**1. 19 специализированных агентов под задачи.** Писатель, ревьюер, архитектор, тестировщик, исследователь. Каждый заточен под своё — не надо всё объяснять агенту с нуля. Агенты работают командой через Claude Code native teams: общий список задач, реальный обмен сообщениями.

**2. Smart routing (умное переключение моделей).** Эта штука смотрит на задачу и сама выбирает модель. «Переведи слово» → Haiku ($0.25/1M). «Напиши план» → Sonnet ($3/1M). «Отрефакторь архитектуру» → Opus ($15/1M). Экономия — 30-60% на «словах» для ИИ.

29 тысяч звёзд. Автор — Yeachan-Heo (Bellman).

## Кому подходит

- ✅ Платишь за подключение к ИИ — роутинг сэкономит заметно
- ✅ Хочешь готовый набор агентов без копания
- ✅ Разные задачи ежедневно — от простых до сложных
- ❌ НЕ подходит если только Opus нужен — роутинг лишний
- ❌ Для одной конкретной задачи — проще свой агент

## Как попробовать без чёрного окна с командами

Oh My ClaudeCode это пакет для Claude Code — без чёрного окна с командами его не настроишь. Но сами идеи можно взять по отдельности:

- **19 специализированных агентов** — просматривай на [GitHub](https://github.com/Yeachan-Heo/oh-my-claudecode), копируй промпты агентов в ChatGPT/Claude
- **Умное переключение моделей** — в браузере не получится. Альтернатива: бери сразу Sonnet для большинства задач (хороший баланс цены и качества)
- Если нужна разовая экономия на «словах» для ИИ — посмотри **[Caveman](../tokens/caveman.md)** (промпт на сокращение ответов, работает без установок)

??? note "Для программистов (через чёрное окно с командами)"

    ```bash
    npm install -g oh-my-claude-sisyphus
    ```

    Потом:

    ```bash
    omc init
    ```

    Это создаст настройки в `~/.claude/`, добавит агентов и команды.

    **Первый запуск:**

    1. В Claude Code: `/agents` — видишь список 19 новых
    2. Выбрал нужного (например `writer` для текстов)
    3. Написал задачу — агент работает
    4. Роутинг сам решает: если задача простая, уйдёт на Haiku

## Топ агенты

Самые полезные из 19:

- **writer** — тексты для соцсетей, блога
- **reviewer** — код-ревью
- **architect** — дизайн системы
- **researcher** — сбор информации
- **tester** — написание тестов
- **explainer** — объясняет код / документацию

## Нюансы

- Роутинг работает только если у тебя подключены все три модели (Haiku/Sonnet/Opus)
- Некоторые агенты «ленятся» на Haiku — правь настройки
- Размер пакета небольшой, ставится быстро

## Ссылки

- [GitHub ⭐ 29K](https://github.com/Yeachan-Heo/oh-my-claudecode)
- [ohmyclaudecode.com](https://ohmyclaudecode.com) — лендинг
- Альтернативы: [Everything Claude Code](everything-claude-code.md) (больше, но без роутинга)

---

!!! tip "Совместимость"
    *Работает в Claude Code (плагин через marketplace) или через npm-пакет `oh-my-claude-sisyphus`. Координирует Claude, Gemini, Codex. Open-source, 29K звёзд.*
