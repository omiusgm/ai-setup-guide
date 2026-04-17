---
title: "Caveman — короткие ответы ИИ, экономия токенов до 75%"
category: tokens
tags:
  - промпт
  - бесплатно
  - новичкам
  - из-рф
stars: 36196
github: JuliusBrussee/caveman
updated: 2026-04-17
for: both
---

# Caveman

<div class="product-hero" markdown>

**Промпт и скилл, который заставляет ИИ отвечать как пещерный человек — без вводных, без воды, по одному предложению. Обрезает до 75% выходных токенов и экономит реальные деньги.**

Бенчмарки автора: −68% на веб-поиске, −50% на правках кода, −72% на Q&A. В среднем −61% по четырём стандартным задачам. Технические термины и точность остаются на месте — режется только канцелярит.

<p class="product-hero-rating">
<span class="rating-badge">⭐ 36 196</span>
<span class="rating-label">звёзд на GitHub · обновлён 15 апреля 2026 · #1 trending</span>
</p>

```bash
npx skills add JuliusBrussee/caveman
```

[:material-github: GitHub](https://github.com/JuliusBrussee/caveman){ .md-button .md-button--primary } [:material-web: caveman docs](https://juliusbrussee.github.io/caveman){ .md-button }

</div>

<div class="author-chip"><img class="author-chip__avatar" src="https://avatars.githubusercontent.com/u/104168679?v=4" alt="Julius Brussee"><div class="author-chip__text"><div class="author-chip__label">АВТОР ПРОЕКТА</div><div class="author-chip__name"><a href="https://github.com/JuliusBrussee">Julius Brussee</a> <span class="author-chip__handle">@JuliusBrussee</span></div><div class="author-chip__bio">Разработчик, придумавший «caveman mode» как способ сжать вывод LLM без потери смысла. Один из самых вирусных Claude Code skills апреля 2026.</div></div></div>

## Требования

- **Где работает:** Claude Code, Cursor, Codex CLI как скилл; в любом чате (ChatGPT, DeepSeek, Qwen) — как обычный промпт
- **Ничего не ставить, если ты в браузере** — просто скопируй текст промпта в начало диалога
- **Лицензия:** MIT — open-source, можно использовать в коммерческих проектах

## Зачем это нужно

Знаешь как ИИ любит лить воду? «Это отличный вопрос! Давайте рассмотрим несколько аспектов…» На самом деле нужна одна строка ответа. Caveman решает это: вставляешь промпт — ИИ начинает отвечать по-пещерному. Коротко. По делу. Без «конечно, с радостью помогу».

Caveman убирает: артикли (a, an, the), вводные («let me», «of course»), хеджирование («I think», «possibly»), вежливые обороты. Технические термины и числа остаются точными.

## Чем это НЕ является

- **Не делает ИИ умнее.** Это про длину ответа, не про качество мышления.
- **Не подходит для художки.** Если пишешь рассказ или сценарий — отключи, нужна развёрнутая речь.
- **Не магия.** ИИ иногда «забывается» и начинает снова лить воду — напомни ему «caveman mode!».
- **Не для онбординга новичков в команде.** Документация в caveman-стиле читается тяжело.

## Кому подходит

- ✅ Платишь за API-токены — экономия 50-75% выхода = реальные деньги в месяц
- ✅ Читаешь много ответов ИИ ежедневно — устал продираться через воду
- ✅ Хочешь чтобы ИИ был как коллега, а не как секретарша на ресепшене
- ❌ НЕ подходит если пишешь маркетинговые тексты или художку
- ❌ НЕ подходит для длинной документации — там нужна полнота

## Бесплатная версия — просто промпт

**Скопируй и вставь в ChatGPT / Claude / DeepSeek первым сообщением:**

```
You are a caveman. Keep answers short, direct, no fluff.
No "of course", no "certainly", no preamble.
Just answer. One sentence when possible.
Русский: коротко. По делу. Без воды.
```

1. Новый диалог → вставил промпт
2. Задаёшь вопрос
3. Ответ в 3-5 раз короче обычного

Работает с любой моделью: GPT, Claude, DeepSeek, Qwen. Никаких установок, ничего ставить не надо.

---

??? note "Установка как скилл для Claude Code"

    > Если ты просто пользуешься ChatGPT/DeepSeek в браузере — промпт выше уже всё что нужно. Не трогай npx если не знаешь что это.

    ```bash
    npx skills add JuliusBrussee/caveman
    ```

    **Уровни интенсивности:**
    - `/caveman lite` — только убирает хеджирование
    - `/caveman` (full, по умолчанию) — стандартный режим
    - `/caveman ultra` — максимальное сжатие, аббревиатуры

    **Варианты от того же автора:**
    - `caveman-commit` — git-коммиты ≤50 символов
    - `caveman-review` — однострочные PR-комменты с эмодзи
    - `caveman-compress` — переписывает CLAUDE.md в caveman-стиле, экономит ≈46% входных токенов

## Ссылки

- [GitHub](https://github.com/JuliusBrussee/caveman)
- [Caveman docs](https://juliusbrussee.github.io/caveman) — описание и бенчмарки
- [Hackaday: «So Expensive, A Caveman Can Do It»](https://hackaday.com/2026/04/06/so-expensive-a-caveman-can-do-it/)
- Альтернативы: [Humanizer](humanizer.md) (для качества текста, не краткости)

---

!!! tip "Совместимость"
    *MIT, работает в браузере как промпт без установки и как скилл в Claude Code/Cursor. Экономит до 75% выходных токенов на типичных задачах разработки.*
