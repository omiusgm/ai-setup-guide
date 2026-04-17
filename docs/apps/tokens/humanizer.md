---
title: "Humanizer — убрать следы ИИ из текста"
category: tokens
tags:
  - промпт
  - новичкам
  - бесплатно
  - копирайтерам
stars: 14213
github: blader/humanizer
updated: 2026-04-17
for: both
---

# Humanizer

<div class="product-hero" markdown>

**Скилл, который убирает 24 признака ИИ-текста: «Of course!», em-dash, «delve into», тройные конструкции, инфляцию значимости. Текст перестаёт пахнуть GPT.**

Работает в два прохода: сначала прогоняет по списку известных паттернов из Wikipedia-статьи «Signs of AI writing», потом сам себя спрашивает «что ещё выдаёт ИИ?» и чистит дальше. Не генератор стиля — фильтр против казёнщины.

<p class="product-hero-rating">
<span class="rating-badge">⭐ 14 213</span>
<span class="rating-label">звёзд на GitHub · обновлён 1 апреля 2026</span>
</p>

```bash
npx skills add blader/humanizer
```

[:material-github: GitHub](https://github.com/blader/humanizer){ .md-button .md-button--primary } [:material-book: Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing){ .md-button }

</div>

<div class="author-chip"><img class="author-chip__avatar" src="https://avatars.githubusercontent.com/u/1672?v=4" alt="Siqi Chen"><div class="author-chip__text"><div class="author-chip__label">АВТОР ПРОЕКТА</div><div class="author-chip__name"><a href="https://github.com/blader">Siqi Chen</a> <span class="author-chip__handle">@blader</span></div><div class="author-chip__bio">CEO Runway, серийный предприниматель в Кремниевой долине. Сделал humanizer чтобы свои же тексты в LinkedIn не выглядели как ChatGPT-болванка.</div></div></div>

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/L2MLVS6UHyU" title="Humanizer обзор — Dan - Smart Tutorials" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<p class="video-caption">Обзор: Dan - Smart Tutorials — «How to Humanize AI Text in 2026 | TwainGPT Tutorial»</p>

## Требования

- **Где работает:** Claude Code, Cursor, OpenCode как скилл; в любом чате — как промпт
- **Языки:** лучше работает на английском, на русском тоже норм
- **Лицензия:** MIT — open-source, можно использовать в коммерческих проектах

## Зачем это нужно

ИИ-тексты видно за версту: «Давайте рассмотрим несколько ключевых аспектов…», «Важно отметить…», «В заключение хочется подчеркнуть…», три em-dash на предложение. Humanizer знает все эти паттерны и заставляет ИИ их избегать.

Основан на статье Wikipedia «Signs of AI writing» — там собраны 24+ признаков ИИшного текста. Скилл прогоняет твой текст через этот список и фиксит каждое попадание.

## Что конкретно убирает

- Вводные «Of course!», «Certainly!», «Давайте рассмотрим»
- Раздутые конструкции «Важно отметить, что…», «В заключение хочется подчеркнуть…»
- Тройные перечисления «структурировано, чётко, последовательно»
- Em-dash-ы (длинные тире, которые так любит ИИ)
- AI-слова «delve», «actually», «additionally», «align with», «crucial»
- Пассивный залог где можно активный
- «-ing analyses» — superficial обороты вроде «leveraging», «fostering»
- Инфляцию значимости, promotional language

## Чем это НЕ является

- **Не генератор стиля.** Это фильтр против плохого, не источник хорошего. Нужен свой стайлгайд.
- **Не делает текст интересным.** Уберёт казёнщину, но если изначально нечего сказать — не поможет.
- **Не для технической документации.** Там наоборот ценится формальность и однозначность.
- **Не одной кнопкой.** Лучше работает итеративно: прогнал → посмотрел → попросил «вот этот абзац всё ещё пахнет ИИ, переделай».

## Кому подходит

- ✅ Пишешь для людей — посты, письма, статьи, лендинги
- ✅ Делаешь контент, который не должен «пахнуть GPT» (LinkedIn, Telegram, блог)
- ✅ SMM, копирайтеры, блогеры, маркетологи
- ❌ НЕ подходит для технической документации — там нужна формальность
- ❌ НЕ подходит для академических работ — другие правила игры

## Бесплатная версия — просто промпт

**Скопируй и вставь в ChatGPT / Claude / DeepSeek первым сообщением:**

```
Пиши как человек, а не как GPT. Избегай:
- «Конечно!», «Безусловно!», «Давайте рассмотрим...»
- Вводных фраз («Важно отметить, что...», «В заключение...»)
- Тройных конструкций («структурировано, чётко, последовательно»)
- Абстрактного канцелярита
- Длинных тире (em-dash)

Пиши короткими предложениями. Конкретно. Без воды.
```

Работает с любой моделью, ничего ставить не надо.

---

??? note "Установка как скилл для Claude Code"

    **Через npx (рекомендуется):**
    ```bash
    npx skills add blader/humanizer
    ```

    **Через git clone напрямую:**
    ```bash
    git clone https://github.com/blader/humanizer ~/.claude/skills/humanizer
    ```

    **Использование:**
    1. Установил скилл
    2. В диалоге с ИИ: «используй humanizer для всех текстов»
    3. Агент начнёт писать «по-человечески» автоматически
    4. Если что-то всё равно пахнет ИИ — попроси прогнать конкретный абзац ещё раз

## Ссылки

- [GitHub](https://github.com/blader/humanizer)
- [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) — первоисточник списка паттернов
- Альтернативы: [Caveman](caveman.md) (для краткости, не качества)

---

!!! tip "Совместимость"
    *MIT, работает в браузере как промпт и как скилл в Claude Code/Cursor/OpenCode. Лучше всего на английском, на русском тоже работает. Не заменяет редактуру, но снимает 80% типичных ИИ-маркеров.*
