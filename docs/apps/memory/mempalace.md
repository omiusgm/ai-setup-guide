---
title: "MemPalace — хайповая память с обвинениями в накрутке"
category: memory
tags:
  - память
  - технарям
  - спорный
stars: 47396
github: MemPalace/mempalace
updated: 2026-04-17
for: agents
---

# MemPalace

<div class="product-hero" markdown>

!!! warning "Прочитай до установки"
    Проект стал вирусным в апреле 2026 (47K звёзд за пару недель) и сразу попал под критику. Бенчмарки правили с 100% до 96.6% после внешних проверок. Сообщество обвиняет в накрутке звёзд и маркетинговых перегибах. Инструмент работает, но «лидерство» сильно преувеличено.

**Хайповая система памяти от актрисы Миллы Йовович и Ben Sigman — хранит историю диалога целиком и ищет по смыслу через ChromaDB.**

Под капотом — обычная связка ChromaDB + SQLite, обёрнутая в простой интерфейс. Идея: хранить разговоры дословно, а не суммаризировать, и доставать нужное семантическим поиском за 170 токенов на запрос.

<p class="product-hero-rating">
<span class="rating-badge">⭐ 47 396</span>
<span class="rating-label">звёзд на GitHub · обновлён 17 апреля 2026 · цифры спорные</span>
</p>

```bash
pip install mempalace
```

[:material-github: GitHub](https://github.com/MemPalace/mempalace){ .md-button .md-button--primary } [:material-web: mempalace.net](https://www.mempalace.net){ .md-button }

</div>

<div class="author-chip"><img class="author-chip__avatar" src="https://avatars.githubusercontent.com/u/275135684?v=4" alt="MemPalace"><div class="author-chip__text"><div class="author-chip__label">РАЗРАБОТЧИК</div><div class="author-chip__name"><a href="https://github.com/MemPalace">MemPalace</a> <span class="author-chip__handle">@MemPalace</span></div><div class="author-chip__bio">Организация во главе с актрисой Миллой Йовович и разработчиком Ben Sigman. Позиционируется как «best-benchmarked free AI memory» — заявление с которым спорит комьюнити.</div></div></div>

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/WlxNNvDHJkE" title="MemPalace обзор — AI Godfather" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<p class="video-caption">Обзор: AI Godfather — «MemPalace - How Milla Jovovich's AI Project Scammed the Internet»</p>

## Требования

- **Где работает:** любой пайплайн, куда можно подключить Python-библиотеку
- **Под капотом:** ChromaDB (семантический поиск) + SQLite (локальное хранение)
- **Лицензия:** MIT — можно использовать где угодно, включая коммерцию

## Зачем это нужно

Обычный ИИ забывает тебя сразу после закрытия вкладки. MemPalace — это внешнее хранилище, куда агент пишет факты и достаёт их потом. Главный маркетинговый козырь: «не суммаризируем, храним дословно» — и достаём семантическим поиском только то что нужно для текущего запроса. За счёт этого, по заявлениям авторов, ответ строится на 170 токенах контекста вместо нескольких тысяч.

## Чем это НЕ является

- **Не революция.** Под капотом — связка ChromaDB + SQLite. Если умеешь работать с векторными базами, можешь собрать такое же за вечер.
- **Не «лидер по бенчмаркам».** Заявленные 100% на кастомных тестах правились до 96.6% после внешней проверки. Методология вопросов вызывала критику в HackerNews.
- **Не продакшн-решение с SLA.** Для серьёзных нагрузок бери Honcho или собирай своё на том же ChromaDB напрямую.
- **Не «создано актрисой».** Реальную инженерную работу делал Ben Sigman, Милла Йовович — лицо проекта. Это нормально, но не путай маркетинг с авторством кода.

## Кому подходит

- ✅ Работаешь с одним проектом долго, хочешь чтобы ИИ помнил контекст сессий
- ✅ Вайбкодеры — устал объяснять одно и то же каждую сессию
- ✅ Не страшно поставить pip-пакет и поэкспериментировать, риск — только твоё время
- ❌ НЕ подходит для простых чатов — избыточно, HANDOFF.md хватит
- ❌ Если нужен продакшн с SLA — бери [Honcho](honcho.md)
- ❌ Если хочешь контролировать стек — ставь ChromaDB напрямую, без обёртки

## Бесплатные фишки до установки

### HANDOFF.md в репе

Текстовый файл в корне проекта со всем контекстом. Работает везде, без pip, без Python. [Подробнее](handoff-pattern.md).

### Claude Projects

Project knowledge в claude.ai хранит контекст между чатами. Управляется мышкой в браузере.

### ChatGPT Memory

Галочка Memory в настройках ChatGPT — сам запоминает факты о тебе. Для 90% задач хватает, безо всяких ChromaDB.

---

??? note "Установка для разработчиков"

    **Через pip:**
    ```bash
    pip install mempalace
    ```

    **Как скилл для Claude Code:**
    ```bash
    claude skill install mempalace
    ```

    **Первый запуск:**
    1. Поставил — появилась папка `.mempalace/` в проекте
    2. Агент автоматически начнёт писать туда контекст
    3. Следующая сессия — агент прочитает через семантический поиск и «вспомнит»
    4. Файлы в простом формате, можно открыть руками и посмотреть что сохранилось

## Ссылки

- [GitHub](https://github.com/MemPalace/mempalace)
- [ChromaDB](https://www.trychroma.com) — то что внутри MemPalace
- [MemPalace Review — независимый разбор бенчмарков](https://nicholasrhodes.substack.com/p/mempalace-ai-memory-review-benchmarks)
- Альтернативы: [Honcho](honcho.md), [HANDOFF-паттерн](handoff-pattern.md)

---

!!! tip "Совместимость"
    *MIT, Python-библиотека. Работает с любым LLM-стеком. Локальное хранилище — ноль зависимостей от облаков. Хайповый, но под капотом простая связка ChromaDB + SQLite.*
