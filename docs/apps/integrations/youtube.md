---
title: "YouTube Insight — кидаешь ссылку, ИИ смотрит видео"
category: integrations
tags:
  - youtube
  - gemini
  - mcp
  - видео
  - бесплатно
updated: 2026-04-17
for: both
---

# YouTube Insight

<div class="product-hero" markdown>

**Кидаешь ИИ ссылку на YouTube — получаешь выжимку, цитаты, таймкоды. ИИ смотрит видео вместо тебя.**

Обычно ChatGPT и Claude в браузере НЕ умеют смотреть YouTube — они просто не видят контент. Два способа дать им эту возможность. Оба бесплатны.

<p class="product-hero-rating">
<span class="rating-badge">🎁 0₽</span>
<span class="rating-label">· без ключей (MCP) или 500 роликов/день (Gemini API)</span>
</p>

[:material-github: Transcript MCP](https://github.com/kimtaeyoon83/mcp-server-youtube-transcript){ .md-button .md-button--primary } [:material-google: Gemini API key](https://aistudio.google.com/app/apikey){ .md-button }

</div>

## Способ 1. YouTube Transcript MCP (бесплатно, без ключей)

Ставишь один раз в Claude Code / Cursor — дальше в любом чате кидаешь ссылку, ИИ достаёт транскрипт с таймкодами и отвечает по нему. Работает для всех видео с субтитрами (автоматическими или ручными).

```bash
claude mcp add youtube-transcript -- npx -y @kimtaeyoon/mcp-server-youtube-transcript
```

Проверка: после установки в чате пишешь «разбери [youtu.be/abc123] по 5 точкам» — ИИ сам вызовет MCP, вернёт ключевые моменты.

## Способ 2. Gemini API (визуальный контекст)

Gemini 2.5 Flash принимает YouTube URL напрямую. Видит картинку и слышит аудио — полезно когда в ролике много жестов, скринкастов, слайдов без озвучки. Бесплатный тир — 500 запросов в день.

```python
import google.generativeai as genai
genai.configure(api_key="AIza...")
model = genai.GenerativeModel("gemini-2.5-flash")
response = model.generate_content([
    "Разбери видео. Дай 5 ключевых моментов с таймкодами.",
    {"uri": "https://youtu.be/VIDEO_ID", "mime_type": "video/mp4"},
])
print(response.text)
```

Ключ бесплатно: [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) → `Create API key`.

## Зачем это нужно

- **SMM** — находишь 10 тематических роликов, ИИ выжимает каждый за 30 секунд → контент-план на неделю
- **Блогеры** — кидаешь своё видео, ИИ превращает в Telegram-посты, нарезки, описания
- **Обучение** — курс на 3 часа → cheatsheet на страницу, конспект с тайм-метками
- **Бизнес** — «10 ошибок продаж на Ozon» → готовый чеклист для команды
- **Исследование** — 5 обзоров конкурентов → сравнительная таблица

## Что получаешь

- Транскрипт с таймкодами
- Ключевые моменты (5-10 точек)
- Прямые цитаты
- Резюме на 5 строк или на 50 — любая длина
- Конспекты, чеклисты, посты, скрипты — любой формат после разбора

## Нюансы

- **Transcript MCP** — работает только если у видео есть субтитры (автоматические подходят). Без субтитров — не получит текст
- **Gemini API** — 500 запросов/день на Free. Для регистрации на aistudio.google.com нужен VPN, сам API работает без VPN
- Видео должно быть **публичным**. Приватные/unlisted — не пойдут
- Gemini не «скачивает» видео — читает напрямую с YouTube через Google-инфраструктуру

## Кому подходит

- 🤖 **Агент** (Claude Code, Cursor) — через MCP ставится один раз, дальше кидаешь любую YT-ссылку в чат
- 💬 **Чатбот** (ChatGPT, Claude, DeepSeek в браузере) — только если сделать отдельный скрипт с Gemini API. В браузерных чатах напрямую ссылки на YouTube НЕ работают
- Идеально для: SMM, контент-мейкеров, студентов, предпринимателей, ресерчеров

## Сравнение

| Способ | Цена | Ключ | Визуал | Лимит |
|---|---|---|---|---|
| **YouTube Transcript MCP** | 0₽ | нет | нет | без лимита |
| **Gemini 2.5 Flash API** | 0₽ | нужен | да | 500/день |
| Claude API напрямую | платно | нужен | нет | по токенам |
| ChatGPT в браузере | не работает | — | — | — |

## Совместимость

- Работает из РФ без VPN (MCP) и без VPN для API-запросов Gemini
- Для регистрации ключа в aistudio.google.com — VPN нужен (разовая операция)
- MCP ставится в Claude Code, Cursor, Cline, любой агент с поддержкой MCP
