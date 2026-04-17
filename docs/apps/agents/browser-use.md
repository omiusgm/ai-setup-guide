---
title: "Browser Use — ИИ кликает за тебя"
category: agents
tags:
  - автоматизация
  - бизнесу
  - открытый-код
stars: 88258
github: browser-use/browser-use
updated: 2026-04-17
for: both
---

# Browser Use

<div class="product-hero" markdown>

**ИИ открывает браузер и делает всё что ты делал руками — минус твои 3-4 часа в день.**

Даёшь задачу словами: «найди 20 поставщиков, собери контакты, положи в таблицу». Агент запускает настоящий Chromium, ищет, кликает, копирует. Ты смотришь как курсор бегает сам.

<p class="product-hero-rating">
<span class="rating-badge">⭐ 88 258</span>
<span class="rating-label">звёзд на GitHub · обновлён 15 апреля 2026</span>
</p>

```bash
pip install browser-use
playwright install chromium
```

[:material-github: GitHub](https://github.com/browser-use/browser-use){ .md-button .md-button--primary } [:material-web: Облачная версия](https://browser-use.com){ .md-button }

</div>

<div class="author-chip"><img class="author-chip__avatar" src="https://avatars.githubusercontent.com/u/192012301?v=4" alt="Browser Use"><div class="author-chip__text"><div class="author-chip__label">РАЗРАБОТЧИК</div><div class="author-chip__name"><a href="https://github.com/browser-use">Browser Use</a> <span class="author-chip__handle">@browser-use</span></div><div class="author-chip__bio">Magnus Müller и Gregor Zunic, выпускники ETH Zürich. Y Combinator W25, $17M seed от Felicis с Полом Грэмом в инвесторах.</div></div></div>

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/dGjztcS2zG0" title="Browser Use обзор — WorldofAI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<p class="video-caption">Обзор: WorldofAI — «Browser Use: FREE AI Agent CAN CONTROL BROWSERS & DO ANYTHING!»</p>

## Требования

- **Где работает:** Python 3.11+ (Linux / macOS / Windows), Playwright с Chromium
- **Лицензия:** MIT — open-source, можно в коммерческих проектах
- **Ключ для модели:** OpenAI / Anthropic / Google / Ollama. Каждый клик в браузере — это отдельный запрос к ИИ, токены расходуются быстро
- **Ограничения:** капчи не решает (руками или через антикапчу), часть сайтов может банить ботов — помогает прокси и кастомный user-agent

## Зачем это нужно

Даёшь задачу: «найди 20 поставщиков на Wildberries, собери контакты, положи в таблицу». ИИ запускает браузер, идёт на WB, ищет, открывает карточки, копирует данные. Ты видишь как он работает — прям окно браузера, курсор бегает сам.

Особенно полезно для задач, где нет прямого подключения одной программы к другой (API): админки без документации, маркетплейсы, соцсети. Если ты сам это делал руками — Browser Use заменит.

88 тысяч звёзд. Один из самых быстрорастущих проектов 2026. Используется в бизнесе для автоматизации рутинных операций.

## Кому подходит

- ✅ Бизнес: мониторинг цен, сбор контактов, оформление заказов
- ✅ SMM: публикация в разных соцсетях, мониторинг комментариев
- ✅ Рутинные задачи в админках, где нет прямого подключения программ
- ❌ НЕ подходит для капчи — бот зашьётся
- ❌ Для задач где нужна скорость (тысячи операций в минуту) — лучше прямое подключение

## Как попробовать без чёрного окна с командами

Если ты не программист, но нужно «ИИ сам кликает в браузере» — есть готовые решения без Python:

- **[Browser Use Cloud](https://browser-use.com)** — облачная версия. Регистрируешься, описываешь задачу текстом, ИИ работает на их серверах. Без установок
- **[ChatGPT Atlas](https://openai.com/atlas)** — браузер от OpenAI с агентским режимом. Обычное приложение
- **[Operator](https://operator.chatgpt.com)** — агент от OpenAI, работает в браузере на ChatGPT.com (нужна Pro-подписка)

Для разовых задач — проще попросить ChatGPT/Claude через «сделай мне инструкцию как вручную собрать эти данные». Быстрее чем настраивать бота.

??? note "Для программистов (через чёрное окно с командами)"

    ```bash
    pip install browser-use
    playwright install chromium
    ```

    Понадобится Python 3.11+ и Playwright (ставится автоматически).

    **Первый запуск:**

    ```python
    from browser_use import Agent

    agent = Agent(
        task="Найди 10 кофеен в Москве с рейтингом 4.5+, выпиши названия и адреса",
        llm="gpt-4"
    )

    result = agent.run()
    print(result)
    ```

    1. Указал модель (OpenAI, Anthropic, локальная)
    2. Вписал задачу обычным текстом
    3. Запустил — открылось окно браузера
    4. Наблюдаешь как ИИ ищет, кликает, собирает

## Нюансы

- Некоторые сайты банят ботов — помогает настройка прокси и маскировка браузера (user-agent)
- Капчи не решает, надо вручную (или через антикапчу)
- «Слова» для ИИ (токены) улетают быстро на больших задачах — каждый клик это запрос к ИИ

## Ссылки

- [GitHub ⭐ 88K](https://github.com/browser-use/browser-use)
- [Документация](https://docs.browser-use.com)
- Альтернативы: Playwright (без ИИ), Selenium (старая школа)

---

*Подходит для: автоматизация · бизнесу · технарям*
