---
title: "Honcho — память с рассуждением для stateful-агентов"
category: memory
tags:
  - память
  - технарям
  - открытый-код
stars: 2525
github: plastic-labs/honcho
updated: 2026-04-17
for: agents
---

# Honcho

<div class="product-hero" markdown>

**Внешняя память для ИИ-агентов, которая не просто хранит факты — строит модель пользователя и рассуждает о нём в фоне.**

Plastic Labs сделали память, которая сама оптимизирует свои выводы о каждом пользователе через асинхронный процесс «Dreaming» — пока агент отвечает, Honcho додумывает. SOTA-результаты на бенчмарках памяти: 90.4% на LongMem S, 89.9% на LoCoMo.

<p class="product-hero-rating">
<span class="rating-badge">⭐ 2 525</span>
<span class="rating-label">звёзд на GitHub · обновлён 17 апреля 2026</span>
</p>

```bash
pip install honcho-ai
```

[:material-github: GitHub](https://github.com/plastic-labs/honcho){ .md-button .md-button--primary } [:material-web: honcho.dev](https://honcho.dev){ .md-button }

</div>

<div class="author-chip"><img class="author-chip__avatar" src="https://avatars.githubusercontent.com/u/123981229?v=4" alt="Plastic Labs"><div class="author-chip__text"><div class="author-chip__label">РАЗРАБОТЧИК</div><div class="author-chip__name"><a href="https://github.com/plastic-labs">Plastic Labs</a> <span class="author-chip__handle">@plastic-labs</span></div><div class="author-chip__bio">AI-лаборатория на стыке машинного обучения и когнитивистики. Развивают Honcho как AI-native memory поверх собственных reasoning-моделей.</div></div></div>

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/pcR30j-sKxU" title="Honcho обзор — Igor Kudryk (Salesforce)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<p class="video-caption">Обзор: Igor Kudryk (Salesforce) — «AI memory just got solved (they beat OpenAI & Anthropic)»</p>

## Требования

- **Где работает:** любой агент (Claude Code, Cursor, кастомные LLM-пайплайны) через SDK или REST API
- **Запуск:** managed-сервис (облако Plastic Labs) или self-hosted через docker-compose
- **Лицензия:** AGPL-3.0 — open-source, но копилефтная. Для коммерческих SaaS учти ограничения

## Зачем это нужно

Большинство систем памяти тупо сохраняют фразы. Honcho идёт дальше — строит модель пользователя. Понимает контекст, отношения, предпочтения. Агент не просто помнит «что ты сказал», а понимает «какой ты человек».

Ключевая фишка — **Dreaming**: пока агент отвечает пользователю в реальном времени, Honcho в фоне додумывает выводы об этом пользователе. Не упирается в latency на runtime, но накапливает всё более глубокую модель.

## Чем это НЕ является

- **Не замена векторной базы.** Honcho — это слой поверх хранения, который делает выводы. Если тебе нужен просто семантический поиск по заметкам — бери ChromaDB/Qdrant, будет проще.
- **Не для хобби-проектов.** Требует Python-бэкенд, настройку SDK, понимание peer-моделей. Порог входа заметный.
- **Не заменяет системный промпт.** Это про долгосрочную память о пользователе, а не про стайлгайд для ИИ.
- **AGPL-3.0.** Если ты делаешь закрытый коммерческий продукт — читай лицензию внимательно, AGPL вирусная.

## Кому подходит

- ✅ Делаешь продукт с постоянными пользователями (чат-бот, ассистент, коуч-приложение)
- ✅ Важна персонализация — разные ответы разным людям, не одинаковая болванка
- ✅ Хочешь контроль — можно установить у себя (self-hosted) и не отдавать данные в облако
- ❌ НЕ подходит для простых личных задач — избыточно
- ❌ Если не работаешь с Python-бэкендами и API — барьер входа высокий

## Бесплатные фишки до установки

### HANDOFF-паттерн

Обычный `HANDOFF.md` в корне проекта — без сервера, без SDK. Пишешь туда что ИИ должен помнить о тебе/проекте. В начале каждой сессии — «прочитай HANDOFF.md». Работает везде, с любым ИИ. [Подробнее](handoff-pattern.md).

### ChatGPT Memory

В настройках ChatGPT есть Memory — сам запоминает факты о тебе между сессиями. Для личных задач хватает.

### Claude Projects

Project knowledge в claude.ai — хранит контекст между чатами в рамках одного проекта, управляется мышкой в браузере.

---

??? note "Установка для разработчиков"

    **Python SDK:**
    ```bash
    pip install honcho-ai
    ```

    **Self-hosted сервер:**
    ```bash
    git clone https://github.com/plastic-labs/honcho
    cd honcho
    docker-compose up
    ```

    **Первый запуск:**
    1. Подключился к managed-сервису или поднял свой сервер
    2. В агенте создал Peer для каждого пользователя
    3. Агент пишет туда сообщения через SDK — Honcho в фоне делает выводы
    4. При следующих запросах — агент запрашивает контекст через dialectic API

## Ссылки

- [GitHub](https://github.com/plastic-labs/honcho)
- [honcho.dev](https://honcho.dev) — managed-сервис и доки
- [Блог Plastic Labs](https://blog.plasticlabs.ai) — статьи про архитектуру и бенчмарки
- Альтернативы: [MemPalace](mempalace.md), [HANDOFF-паттерн](handoff-pattern.md)

---

!!! tip "Совместимость"
    *AGPL-3.0, Python SDK + REST API. Подходит под любой LLM-стек (OpenAI, Anthropic, локальные модели). Managed-сервис в облаке Plastic Labs или self-hosted через docker.*
