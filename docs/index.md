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

<div class="landing-section">

<h2 style="text-align:center; margin-bottom:1.5rem;">Каталог инструментов</h2>

<div class="tag-filters">
<button class="tag-filter active" data-tag="all" data-tooltip="Показать всё">🦔 все</button>
<button class="tag-filter" data-tag="новичкам" data-tooltip="Для тех кто в браузере с ChatGPT">🟢 новичкам</button>
<button class="tag-filter" data-tag="бизнесу" data-tooltip="CRM, отчёты, маркетплейсы">🟠 бизнесу</button>
<button class="tag-filter" data-tag="технарям" data-tooltip="Агенты, MCP, терминал">🔵 технарям</button>
<button class="tag-filter" data-tag="промпт" data-tooltip="Готовый промпт — скопируй и вставь">✏️ промпты</button>
<button class="tag-filter" data-tag="автоматизация" data-tooltip="Работает само, без тебя">⚡ автоматизация</button>
<button class="tag-filter" data-tag="бесплатно" data-tooltip="$0, без подписок">🆓 бесплатно</button>
<button class="tag-filter" data-tag="из-рф" data-tooltip="Работает из России без VPN">🇷🇺 из РФ</button>
</div>

<div class="catalog-grid" id="catalog">
<a class="catalog-card" href="tools/caveman/" data-tags="промпт новичкам бесплатно из-рф"><div class="card-tags"><span class="card-tag">промпт</span><span class="card-tag">новичкам</span><span class="card-tag">бесплатно</span></div><h3>✂️ Caveman — ИИ говорит по делу</h3><p>Одна строка — и 70% воды из ответов исчезает. 27K⭐, работает в любом чате.</p></a>
<a class="catalog-card" href="tools/budget-guide/" data-tags="новичкам бизнесу бесплатно"><div class="card-tags"><span class="card-tag">новичкам</span><span class="card-tag">бизнесу</span></div><h3>💰 Бюджет: от 0 до $200</h3><p>DeepSeek бесплатно, Claude $20, полный стек $200. Как выбрать и не переплатить.</p></a>
<a class="catalog-card" href="tools/10-rules/" data-tags="новичкам промпт"><div class="card-tags"><span class="card-tag">новичкам</span><span class="card-tag">промпт</span></div><h3>📖 10 правил вайбкодинга</h3><p>Конкретные ошибки и как их избежать. С него обычно начинают.</p></a>
<a class="catalog-card" href="tools/deepseek/" data-tags="новичкам бесплатно из-рф"><div class="card-tags"><span class="card-tag">бесплатно</span><span class="card-tag">из-рф</span></div><h3>🤖 DeepSeek — бесплатная альтернатива</h3><p>Не хуже ChatGPT, работает из РФ без VPN. V4 скоро на чипах Huawei.</p></a>
<a class="catalog-card" href="tools/amocrm-agent/" data-tags="бизнесу автоматизация"><div class="card-tags"><span class="card-tag">бизнесу</span><span class="card-tag">автоматизация</span></div><h3>🏪 AmoCRM + ИИ-агент</h3><p>Отчёты, мониторинг сделок, забытые клиенты — за минуты вместо часов.</p></a>
<a class="catalog-card" href="tools/n8n/" data-tags="автоматизация бизнесу бесплатно"><div class="card-tags"><span class="card-tag">автоматизация</span><span class="card-tag">бесплатно</span></div><h3>⚙️ n8n — автоматизация без кода</h3><p>Собираешь цепочку мышкой: бот ответил — таблица обновилась — отчёт улетел.</p></a>
<a class="catalog-card" href="tools/loop-remote-tasks/" data-tags="автоматизация технарям"><div class="card-tags"><span class="card-tag">автоматизация</span><span class="card-tag">технарям</span></div><h3>😴 /loop — ИИ работает пока ты спишь</h3><p>Запустил задачу, ушёл. Утром — готовый результат. + Remote Tasks в облаке.</p></a>
<a class="catalog-card" href="tools/mempalace/" data-tags="технарям"><div class="card-tags"><span class="card-tag">технарям</span></div><h3>🧠 MemPalace — память для ИИ</h3><p>ИИ наконец запоминает кто ты. Проект Миллы Йовович, 45K⭐ (но есть нюансы).</p></a>
<a class="catalog-card" href="tools/goose/" data-tags="технарям бесплатно из-рф"><div class="card-tags"><span class="card-tag">бесплатно</span><span class="card-tag">из-рф</span></div><h3>🪿 Goose — бесплатный агент</h3><p>Десктоп-приложение + CLI. Работает с Ollama, без VPN из РФ.</p></a>
<a class="catalog-card" href="tools/browser-use/" data-tags="автоматизация бизнесу технарям"><div class="card-tags"><span class="card-tag">автоматизация</span><span class="card-tag">бизнесу</span></div><h3>🖱️ Browser Use — ИИ кликает за тебя</h3><p>Автоматизация браузера: формы, парсинг, маркетплейсы. 87K⭐.</p></a>
<a class="catalog-card" href="tools/humanizer/" data-tags="промпт новичкам"><div class="card-tags"><span class="card-tag">промпт</span><span class="card-tag">новичкам</span></div><h3>✍️ Humanizer — убрать следы ИИ</h3><p>Скилл который делает ИИ-текст похожим на человеческий. 14K⭐.</p></a>
<a class="catalog-card" href="tools/ollama/" data-tags="технарям бесплатно из-рф"><div class="card-tags"><span class="card-tag">бесплатно</span><span class="card-tag">из-рф</span></div><h3>🖥️ Ollama — ИИ на своём компе</h3><p>Запусти DeepSeek, Llama, Qwen локально. Бесплатно, без VPN. 169K⭐.</p></a>
<a class="catalog-card" href="tools/hermes-agent/" data-tags="технарям бесплатно"><div class="card-tags"><span class="card-tag">технарям</span><span class="card-tag">бесплатно</span></div><h3>🎓 Hermes Agent — ИИ который учится</h3><p>Агент запоминает что работает и становится лучше. 84K⭐, любая модель.</p></a>
<a class="catalog-card" href="tools/everything-claude-code/" data-tags="технарям"><div class="card-tags"><span class="card-tag">технарям</span></div><h3>🔧 Everything Claude Code — 181 скилл</h3><p>47 агентов, 181 скилл, 79 команд. Менеджер плагинов для Claude Code. 157K⭐.</p></a>
<a class="catalog-card" href="tools/oh-my-claudecode/" data-tags="технарям"><div class="card-tags"><span class="card-tag">технарям</span></div><h3>⚡ Oh My ClaudeCode — 32 агента</h3><p>Умная маршрутизация между Haiku/Sonnet/Opus. Экономит токены. 28K⭐.</p></a>
</div>
<p class="catalog-empty" id="catalog-empty" style="display:none; text-align:center; color:var(--md-default-fg-color--light); padding:2rem;">🦔 Ничего не нашлось. Попробуй другой фильтр.</p>

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
