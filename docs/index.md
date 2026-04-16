---
hide:
  - navigation
  - toc
---

<div class="hero" markdown>

<span class="hero-hedgehog">🦔</span>

# ИИ может работать за тебя.<br>Если знать как попросить

<p class="hero-sub">Бесплатный гайд: промпты, инструменты, автоматизация — без воды и без кода</p>
<p class="hero-meta">Апрель 2026 &middot; Обновляется каждую неделю</p>

[Начать с нуля :material-arrow-right:](getting-started.md){ .md-button .md-button--primary }
[Я уже в теме :material-arrow-right:](guides/memory.md){ .md-button }

</div>

<div class="hedgehog-divider">🦔</div>

<div class="landing-section" markdown>

## Попробуй прямо сейчас

Скопируй и вставь в ChatGPT, DeepSeek или любой ИИ-чат. Он перестанет лить воду и начнёт отвечать по делу:

<div class="prompt-block" markdown>

```
Отвечай максимально кратко. Без вступлений — никаких «Конечно!»,
«Рад помочь». Факты, не мнения. Если хватит одного слова — отвечай
одним словом. Если я спрашиваю «как» — дай пошаговую инструкцию.
```

</div>

</div>

<div class="hedgehog-divider">🦔</div>

<div class="landing-section" markdown>

## Было / Стало

<div class="before-after" markdown>
<div class="before-after__col before-after__col--before" markdown>

**Без промпта** :material-close:{ .ba-icon-bad }

*Ты: "Напиши пост для инстаграма про кофейню"*

> Конечно! Вот пост для вашей кофейни. Кофе — это не просто напиток, это целая философия. Наша уютная кофейня приглашает вас насладиться ароматным капучино в тёплой атмосфере...

</div>
<div class="before-after__col before-after__col--after" markdown>

**С промптом из гайда** :material-check:{ .ba-icon-good }

*Ты: тот же запрос + системный промпт*

> Ваш латте стынет, пока вы читаете этот пост.
> Сегодня фильтр-Эфиопия Иргачеффе.
> Первые 10 гостей до 12:00 — двойной эспрессо в подарок.
> ул. Маросейка, 12

</div>
</div>

</div>

<div class="hedgehog-divider">🦔</div>

<div class="landing-section" markdown>

## Для кого этот гайд

<div class="grid cards" markdown>

-   :material-chat-processing:{ .lg .middle } **Пользуешься ChatGPT в браузере**

    ---

    Тратишь 20 минут, чтобы получить нормальный ответ? Переписываешь промпт по 5 раз? Здесь — как с первого раза.

    [:octicons-arrow-right-24: 10 правил работы с ИИ](guides/rules.md)

-   :material-store:{ .lg .middle } **Ведёшь бизнес и хочешь автоматизацию**

    ---

    3 часа на описания товаров? Отчёт по сделкам руками? ИИ делает это за минуты. Кейс: РОП подключил за вечер.

    [:octicons-arrow-right-24: AmoCRM + ИИ](crm/amocrm.md)

-   :material-code-braces:{ .lg .middle } **Разработчик или вайбкодер**

    ---

    Агент забывает контекст между сессиями? MCP, память, /loop — конфиги для Claude Code, Cursor, Codex.

    [:octicons-arrow-right-24: Инструкция для агентов](for-agents.md)

</div>

</div>

<div class="hedgehog-divider">🦔</div>

<div class="landing-section" markdown>

## Реальный кейс

!!! example "РОП подключил ИИ к CRM за один вечер"
    **Задача:** понять что происходит в отделе продаж — кто забил на клиента, где зависли сделки.

    **Раньше:** 4 часа ручного разбора в AmoCRM + Excel. Каждый день.

    **Сейчас:** Claude Code подключён к CRM и переписке менеджеров. За минуты — кто забил на клиента, где зависли сделки, кто лидер по конверсии.

    **Как сделал:** скидывал скриншоты ИИшечке и спрашивал «что дальше?». Один вечер. Без кода. Без программиста.

    [:octicons-arrow-right-24: Как повторить](crm/amocrm.md){ .md-button .md-button--primary .md-button--sm }

</div>

<div class="hedgehog-divider">🦔</div>

<div class="landing-section" markdown>

## Что внутри

<div class="grid cards" markdown>

-   :material-book-open-variant: **10 правил работы с ИИ**

    ---

    Конкретные ошибки и как их избежать. С него обычно начинают.

    [:octicons-arrow-right-24: Читать](guides/rules.md)

-   :material-head-question: **Мифы про ИИ**

    ---

    ИИ не делает в 10x быстрее. Реально 1.5–2x. И другие неудобные факты.

    [:octicons-arrow-right-24: Читать](guides/myths.md)

-   :material-cash-multiple: **Бюджет: от 0 до $200/мес**

    ---

    DeepSeek бесплатно, Claude $20, полный стек $200. Что выбрать и на чём сэкономить.

    [:octicons-arrow-right-24: Читать](guides/budget.md)

-   :material-brain: **Память и контекст**

    ---

    Каждое утро ИИ как новый сотрудник — ничего не помнит. Вот как это починить.

    [:octicons-arrow-right-24: Читать](guides/memory.md)

-   :material-content-cut: **Экономия токенов (Caveman)**

    ---

    Одна строка — и ИИ перестаёт тратить 70% ответа на «Конечно, я рад помочь!».

    [:octicons-arrow-right-24: Читать](skills/caveman.md)

-   :material-cog: **Автоматизация без кода (n8n)**

    ---

    Собираешь цепочку мышкой, без кода: бот ответил — таблица обновилась — отчёт улетел в Telegram.

    [:octicons-arrow-right-24: Читать](automation/n8n.md)

-   :material-flag: **Россия: VPN и оплата**

    ---

    Ты в РФ, сервис говорит «нет». Что делать — пошагово.

    [:octicons-arrow-right-24: Читать](guides/russia.md)

-   :material-magnify: **Подключение поиска**

    ---

    ИИ-агент сам ищет в интернете. Настройка за 10 минут.

    [:octicons-arrow-right-24: Читать](skills/search.md)

</div>

</div>

<div class="hedgehog-divider">🦔</div>

<div class="landing-section" markdown>

## Скинь это своему ИИ

Если хочешь чтобы ИИ прочитал весь гайд и перестал тупить — скопируй и отправь ему:

<div class="prompt-block" markdown>

```
Прочитай и помоги мне: https://raw.githubusercontent.com/omiusgm/ai-setup-guide/main/docs/for-chatbots.md
```

ИИ прочитает гайд, узнает правила, промпты и инструменты — и начнёт отвечать нормально.

</div>

??? tip "Для продвинутых: Claude Code / Cursor"
    Если у тебя агент с доступом к файлам — скинь ему:
    `https://raw.githubusercontent.com/omiusgm/ai-setup-guide/main/docs/for-agents.md`

    Или склонируй репозиторий:
    `git clone https://github.com/omiusgm/ai-setup-guide`

</div>

<div class="running-hedgehog"><span>🦔</span></div>

<div class="landing-footer" markdown>

<span class="hedgehog-footer-mascot">🦔</span>

[:fontawesome-brands-telegram: Telegram «Агент Ёж»](https://t.me/agentezh) — новости и обновления гайда

*Контент сгенерирован ИИ при участии армии ежей*

</div>
