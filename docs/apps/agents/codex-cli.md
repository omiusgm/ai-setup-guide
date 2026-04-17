---
title: "Codex CLI — OpenAI-агент для программистов"
category: agents
tags:
  - открытый-код
  - технарям
stars: 75905
github: openai/codex
updated: 2026-04-17
for: agent
---

# Codex CLI

<div class="product-hero" markdown>

**Claude Code от OpenAI — полный агент в терминале, написан на Rust для скорости. Входит в подписку ChatGPT Plus без доплат.**

Запустил `codex` — появилась сессия: читает репо, правит файлы, запускает команды, делает ревью кода через отдельный subagent. Два режима: интерактивный (с подтверждениями) и автономный.

<p class="product-hero-rating">
<span class="rating-badge">⭐ 75 905</span>
<span class="rating-label">звёзд на GitHub · обновлён 17 апреля 2026</span>
</p>

```bash
npm install -g @openai/codex
```

[:material-github: GitHub](https://github.com/openai/codex){ .md-button .md-button--primary } [:material-book: Документация](https://developers.openai.com/codex/cli){ .md-button }

</div>

<div class="author-chip"><img class="author-chip__avatar" src="https://avatars.githubusercontent.com/u/14957082?v=4" alt="OpenAI"><div class="author-chip__text"><div class="author-chip__label">РАЗРАБОТЧИК</div><div class="author-chip__name"><a href="https://github.com/openai">OpenAI</a> <span class="author-chip__handle">@openai</span></div><div class="author-chip__bio">Создатели ChatGPT и GPT-5. Codex CLI — их ответ Claude Code: open-source на Rust, входит в Plus/Pro/Business планы без доплат.</div></div></div>

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/i5-Mf5OAQ2A" title="Codex CLI обзор — NullsCode" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<p class="video-caption">Обзор: NullsCode — «Codex ПОЛНАЯ ИНСТРУКЦИЯ! Установка, настройка, MCP серверы. Гайд 2026»</p>

## Требования

- **Где работает:** Linux / macOS / Windows, нужен Node.js 18+ (для npm) или Homebrew
- **Лицензия:** Apache 2.0 — open-source
- **Подключение:** аккаунт ChatGPT Plus / Pro / Business / Edu / Enterprise (без доплат) или API-ключ OpenAI
- **Ограничение РФ:** OpenAI санкционно закрывает доступ из России — нужен VPN для входа в аккаунт и генерации токенов

## Зачем это нужно

То же что Claude Code, но от OpenAI и бесплатный (только за «слова» для ИИ платишь — токены, за них считают стоимость). Запустил `codex` в чёрном окне — появилась сессия, пишешь задачу — агент работает.

Читает файлы, правит код, запускает команды. Может работать в двух режимах: интерактивный (подтверждает каждый шаг) и автономный (делает всё сам).

76 тысяч звёзд — один из самых популярных агентов на гитхабе. OpenAI вложились: активно развивают, обновления каждую неделю.

## Кому подходит

- ✅ Уже работаешь с OpenAI (ChatGPT Plus, ключ для подключения программы к их ИИ)
- ✅ Любишь чёрное окно с командами — минимум интерфейса, максимум скорости
- ✅ Нужен агент без привязки к редактору
- ❌ НЕ подходит если чёрное окно с командами пугает
- ❌ Если нет подключения к OpenAI — другие модели подключить сложнее

## Как попробовать без чёрного окна с командами

OpenAI не делает обычную десктопную версию Codex — только чёрное окно с командами. Но агентов от OpenAI можно потрогать по-другому:

- **[ChatGPT в браузере](https://chat.openai.com)** — там есть режим «Code Interpreter» и «Advanced Data Analysis», работает как легковесный агент
- **[Cursor](https://cursor.com)** — редактор кода с ИИ, под капотом OpenAI-модели, ставится как обычная программа
- **[Goose](goose.md)** — десктоп-агент с обычным окошком, можно настроить на OpenAI

??? note "Для программистов (через чёрное окно с командами)"

    ```bash
    npm install -g @openai/codex
    ```

    Нужен Node.js. Если нет — поставь с [nodejs.org](https://nodejs.org).

    **Первый запуск:**

    1. В любой папке проекта: `codex`
    2. Попросит ключ для подключения — возьми на platform.openai.com
    3. Пиши задачу
    4. Агент предложит план — подтверждаешь или правишь
    5. Он выполняет по шагам

## Нюансы

- Требует подключение к OpenAI — в РФ без VPN не заработает
- С GPT-4 «слова» для ИИ (токены) улетают быстро, держи лимиты на аккаунте
- У Anthropic есть свой аналог (Claude Code) — если ты в Anthropic, он удобнее

## Ссылки

- [GitHub ⭐ 76K](https://github.com/openai/codex)
- [Документация](https://github.com/openai/codex#readme)
- Альтернативы: [Claude Code](https://claude.com/claude-code), [Goose](goose.md), [Cline](cline.md)

---

*Подходит для: технарям · OpenAI-пользователям · кто любит чёрное окно с командами*
