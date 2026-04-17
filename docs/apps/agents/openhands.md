---
title: "OpenHands — автономный ИИ-инженер"
category: agents
tags:
  - бесплатно
  - открытый-код
  - технарям
stars: 71389
github: All-Hands-AI/OpenHands
updated: 2026-04-17
for: agent
---

# OpenHands

<div class="product-hero" markdown>

**87% SWE-bench — один из сильнейших автономных агентов в open-source. Работает на уровне живого мидла/сеньора. Ставишь задачу — уходишь пить кофе.**

Docker-контейнер с веб-интерфейсом. Решает задачу от начала до конца: файлы, код, тесты, git. Бывший OpenDevin, 500+ контрибьюторов, $5M seed от Menlo Ventures.

<p class="product-hero-rating">
<span class="rating-badge">⭐ 71 389</span>
<span class="rating-label">звёзд на GitHub · обновлён 17 апреля 2026</span>
</p>

```bash
docker pull docker.all-hands.dev/all-hands-ai/openhands:latest
```

[:material-github: GitHub](https://github.com/All-Hands-AI/OpenHands){ .md-button .md-button--primary } [:material-book: Документация](https://docs.all-hands.dev){ .md-button }

</div>

<div class="author-chip"><img class="author-chip__avatar" src="https://avatars.githubusercontent.com/u/169105795?v=4" alt="All Hands AI"><div class="author-chip__text"><div class="author-chip__label">РАЗРАБОТЧИК</div><div class="author-chip__name"><a href="https://github.com/All-Hands-AI">All Hands AI</a> <span class="author-chip__handle">@All-Hands-AI</span></div><div class="author-chip__bio">Robert Brennan (экс-Google), Graham Neubig (профессор CMU, NLP) и Xingyao Wang (PhD UIUC). $5M seed от Menlo Ventures, ангелы — сооснователи Hugging Face и PyTorch.</div></div></div>

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/Q3DyeIV96tY" title="OpenHands обзор — WorldofAI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<p class="video-caption">Обзор: WorldofAI — «OpenHands: AI Software Engineer - Generate Complex Apps End-to-End!»</p>

## Требования

- **Где работает:** Docker Desktop (Linux / macOS / Windows + WSL). Самостоятельно не работает — только через контейнер
- **Лицензия:** MIT — open-source
- **Железо:** ~8 ГБ RAM на контейнер, слабые ноутбуки не вытянут
- **Провайдер модели:** любой (Anthropic / OpenAI / Gemini / локальный). На Claude Sonnet большая задача стоит $5-20
- **Предупреждение:** не оставляй без присмотра на опасных задачах — миграции баз, прод, платежи

## Зачем это нужно

OpenHands не помощник. Это автономный инженер, который работает по задаче от начала до конца. Тебе не надо подсказывать на каждом шагу — он САМ открывает файлы, правит код, запускает тесты, исправляет ошибки, отправляет в git.

Результат на бенчмарке SWE-bench — 87%. Для справки: это тесты с реальными задачами с GitHub. Человек-джун даёт около 70%, сеньор — 85-90%. OpenHands работает на уровне живого мидла/сеньора.

71 тысяча звёзд. Консорциум разработчиков (All-Hands-AI) активно развивает.

## Кому подходит

- ✅ Есть большие задачи — перепиши модуль, закрой 10 задач, отрефакторь
- ✅ Нужна автономия — хочешь чтобы работало без тебя часами
- ✅ Не боишься Docker и серверных штук
- ❌ НЕ подходит для мелких задач — избыточно
- ❌ Если не понимаешь что такое Docker — сначала разберись

## Как попробовать без чёрного окна с командами

Если автономный агент нужен, а Docker пугает — вот что берут вместо OpenHands:

- **[Goose](goose.md)** — десктоп-приложение, ставится как обычная программа. Может работать автономно на локальных моделях
- **[Claude Code](https://claude.com/claude-code)** — чёрное окно с командами есть, но можно жить в Claude Projects без него
- **[Cursor](https://cursor.com)** — редактор кода с агентом, ставится как обычная программа, не требует Docker

??? note "Для программистов (команды + Docker)"

    Через Docker (рекомендуемо):

    ```bash
    docker pull docker.all-hands.dev/all-hands-ai/openhands:latest
    docker run -it --pull=always \
      -e SANDBOX_RUNTIME_CONTAINER_IMAGE=docker.all-hands.dev/all-hands-ai/runtime:latest \
      -v /var/run/docker.sock:/var/run/docker.sock \
      -p 3000:3000 \
      --add-host host.docker.internal:host-gateway \
      --name openhands-app \
      docker.all-hands.dev/all-hands-ai/openhands:latest
    ```

    Открыть `http://localhost:3000` в браузере.

    **Первый запуск:**

    1. Запустил Docker-контейнер
    2. Открыл localhost:3000 — появился веб-интерфейс
    3. Указал провайдера модели и ключ для подключения
    4. Подключил репозиторий (ссылка на GitHub или локальную папку)
    5. Написал задачу в формате: «Сделай X, учти Y, не трогай Z»
    6. Ушёл на час — вернулся к результату

## Нюансы

- Жрёт «слова» для ИИ (токены) как не в себя — большие задачи могут стоить $5-20
- Не оставляй без присмотра на опасных задачах (миграции баз, продакшн)
- Docker-контейнер требует ~8 ГБ RAM, слабые компы не вытянут

## Ссылки

- [GitHub ⭐ 71K](https://github.com/All-Hands-AI/OpenHands)
- [Документация](https://docs.all-hands.dev)
- [SWE-bench лидерборд](https://www.swebench.com/)
- Альтернативы: [Claude Code](https://claude.com/claude-code), [Codex CLI](codex-cli.md)

---

*Подходит для: технарям · большие задачи · автономная работа*
