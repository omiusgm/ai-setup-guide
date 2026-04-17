---
title: "Instagram для ИИ — смотрит видео и профили"
category: content
tags:
  - instagram
  - reels
  - видео
  - mcp
  - scraping
  - мониторинг
  - конкуренты
  - gemini
  - vision
updated: 2026-04-17
for: both
---

# Instagram для ИИ — смотрит видео и профили

<div class="product-hero" markdown>

**Кидаешь ИИ рилс или профиль в Instagram — получает транскрипт, визуальный разбор, hook, CTA, оценку вовлечения. 3 класса решений — от локального до облачного «под ключ».**

Главное правило: у Claude нет нативного видео-входа. Reel не скормишь ему прямо по ссылке. Но цепочка «скачал → транскрибировал → порезал на кадры → отдал Vision» собирается за 30 минут, и после этого Instagram для ИИ становится таким же источником, как ворд-файл.

<p class="product-hero-rating">
<span class="rating-badge">5 способов</span>
<span class="rating-label">· как выбрать — дерево решений в конце</span>
</p>

</div>

## 1. Apify MCP (самое простое «под ключ»)

Если не хочешь ни cookies крутить, ни yt-dlp обновлять, ни burner-аккаунт заводить — Apify делает всё облаком. Ты подключаешь MCP-сервер (это такой плагин, через который ИИ зовёт чужие тулы), и в чате пишешь «возьми последние 10 Reels у @конкурента, верни транскрипты».

```bash
claude mcp add apify --transport http https://mcp.apify.com
```

Токен берётся на apify.com → Settings → Integrations. После этого Claude сам вызывает актор `apify/instagram-reel-scraper` — с 2025-го он возвращает транскрипт отдельным полем (Whisper под капотом). Для визуального разбора можно дёрнуть `displayUrl` и отдельно скормить Claude Vision.

**Цены:**
- `apify/instagram-scraper` — $2.30–2.70 за 1000 результатов
- `apidojo/instagram-scraper` — **$0.50** за 1000 постов (дешевле)
- `kaitoeasyapi` — **$0.40** за 1000
- Бесплатных кредитов $5/мес = ~2000 постов

**Плюсы:** риск бана аккаунта нулевой (твой аккаунт не используется), ротация прокси у Apify, работает из РФ **без VPN** (Apify сам ходит через свои узлы), ноль локальных зависимостей.
**Минусы:** платишь за каждый запрос, данные идут через Apify, кастомный парсинг сторис — отдельный актор.

## 2. Gemini 3 Flash как видео-глаз

Gemini — единственный из топовых LLM, который нативно ест mp4 целиком: аудио, кадры, таймкоды в формате `MM:SS`. Цена смешная: **~$0.008 за 30-секундный Reel** на Flash, или **1000 запросов/день бесплатно** через OAuth в Gemini CLI.

**Подвох №1:** Gemini принимает YouTube URL напрямую, но **не** `instagram.com/reel/` — это HTML-страница, а не mp4. Цепочка остаётся двухшаговой: yt-dlp скачал → Gemini посмотрел.

**Подвох №2:** Gemini CLI нестабильно парсит mp4 через `@file.mp4` (issue #1556). Рабочий способ — curl напрямую через File API:

```bash
# 1. Скачали Reel с cookies из Safari
yt-dlp --cookies-from-browser safari -o /tmp/reel.mp4 "$URL"

# 2. Залили в Gemini File API
FILE_URI=$(curl -s -X POST \
  "https://generativelanguage.googleapis.com/upload/v1beta/files" \
  -H "x-goog-api-key: $GEMINI_API_KEY" \
  -F "file=@/tmp/reel.mp4" | jq -r .file.uri)

# 3. Запросили разбор
curl -s "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
  -H "x-goog-api-key: $GEMINI_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"contents\":[{\"parts\":[
    {\"file_data\":{\"mime_type\":\"video/mp4\",\"file_uri\":\"$FILE_URI\"}},
    {\"text\":\"Опиши Reel: транскрипт с MM:SS, сценография, hook, CTA, on-screen text\"}
  ]}]}"
```

Этот bash Claude Code запускает через свой Bash tool. Есть готовые MCP-обёртки: **jamubc/gemini-mcp-tool**, **RLabs-Inc/gemini-mcp**, **tkaufmann/claude-gemini-bridge** (последний автоматически делегирует Gemini, когда Claude упирается в токены).

**Плюсы:** Gemini видит ритм монтажа, музыку, эмоцию, точные таймкоды. Free tier щедрый.
**Минусы:** нужен GEMINI_API_KEY, данные уезжают в Google Cloud, регистрация из РФ только через VPN.

## 3. Локально: субагент Ёж-Инста

Полный контроль, данные не покидают ноут. Стоимость — только токены Claude: **$0.09/reel на Sonnet** или **$0.15/reel на Opus 4.5**. На macOS 26 (Tahoe) с `yap` транскрипция вообще бесплатна — Apple SpeechAnalyzer работает офлайн и бьёт MLX Turbo по скорости.

**Установка на Apple Silicon:**

```bash
# Базовые утилиты
brew install yt-dlp ffmpeg jq

# Транскрипция (самое быстрое на M-серии)
pip install mlx-whisper
# Или на macOS 26:
brew install finnvoor/tools/yap
```

**Субагент `.claude/agents/reel-analyzer.md`:**

```markdown
---
name: reel-analyzer
description: Анализирует Instagram Reels — транскрипт, визуальный ряд, hook, CTA. Использовать когда пользователь даёт instagram.com/reel/ или tiktok.com/
tools: Bash, Read, Write
model: sonnet
---
Workflow:
1. Скачать видео: yt-dlp --cookies-from-browser safari -o /tmp/reel_%(id)s.mp4 <URL>
   Fallback при rate-limit: instaloader --login=$BURNER -- -SHORTCODE
2. Транскрипт: mlx_whisper /tmp/reel_*.mp4 --language ru --output-format srt
   (или `yap /tmp/reel_*.mp4 --locale ru-RU --format srt` на macOS 26)
3. Кадры: ffmpeg -i /tmp/reel_*.mp4 \
     -vf "select='gt(scene,0.4)',scale='min(1568,iw)':-2" \
     -vsync vfr -q:v 3 /tmp/frames/f_%03d.jpg
4. Читаю кадры и SRT, пишу отчёт: hook (0-3с), pacing (cut/сек), on-screen text,
   CTA, стилистика, 3 идеи для ремикса.
5. Cleanup: rm -rf /tmp/reel_*.mp4 /tmp/frames/
```

**Slash-command `.claude/commands/analyze-reel.md`:**

```markdown
---
description: Анализ Instagram Reel
argument-hint: <URL>
---
Запусти reel-analyzer для: $ARGUMENTS
```

В чате Claude Code: `/analyze-reel https://www.instagram.com/reel/DW4Nezdt_U4/`.

**Плюсы:** полный контроль, нет лимитов Apify, работает офлайн после скачивания, встраивается в собственную систему агентов.
**Минусы:** зависит от свежести yt-dlp (`yt-dlp -U` перед массовыми задачами), burner-аккаунт Instagram обязателен для Stories/Highlights.

## 4. Мониторинг конкурентов через n8n + Notion

Если нужен не разовый разбор, а каждое утро «вот 10 новых Reels у конкурентов, вот их транскрипты, вот что отрабатывает» — собирается на n8n за вечер.

**Архитектура:**
```
Notion «Target Profiles» (10 конкурентов)
  ↓ cron каждые 4–6 ч
n8n → Apify (scraper) → Whisper (если нет транскрипта)
  ↓
Claude Vision на обложку → AI Agent: hook / тема / hot-score
  ↓
Upsert в Notion «IG Feed» + Telegram alert если hot_early=true
```

**Готовые workflow из n8n.io/workflows, которые копируешь одной кнопкой:**

- **5795** — Top-performing Instagram Reels → Notion (через Gemini + Apify). Прямой прототип для «Ёж-Инста».
- **10341** — Monitor Instagram Competitor Trends with Claude 3.5 + Multi-Channel Alerts
- **4658** — Instagram content discovery & repurposing (Apify + GPT-4o + Perplexity, система Ника Сараева)
- **5581** — Full Instagram API MCP server (n8n как MCP для Claude)

**Бюджет:** 10 конкурентов × 1 скрейп/день × 10 постов = 3000 results/мес ≈ $7–8 на Apify Starter. Плюс транскрипты и сторис — **$15–20/мес целиком**.

Notion подключается одной командой:

```bash
claude mcp add notion https://mcp.notion.com/mcp
```

Бесплатная open-source альтернатива без Apify — `github.com/Peter-SB/n8n-ai-instagram-scraper` (self-hosted n8n + Instaloader + Whisper).

## 5. Платные сервисы-мониторинга

Когда клиент требует «легальные лицензированные данные в отчёт», а не grey-zone скрейпинг:

- **Socialinsider** — от **$83/мес**, API с $333. Бенчмаркинг, история 12 мес, для B2B-клиентов с подписанным контрактом.
- **Brand24** — **$149/мес** + свой MCP с января 2026. Social listening + AI-visibility (упоминания в ChatGPT/Claude). Для агентств с несколькими брендами.
- **Modash** — **$199–299/мес**. Инфлюенсер-дискавери, 350 млн профилей IG/TikTok/YT. Для тех, кто закупает интеграции.
- **HypeAuditor** — от **$299/мес**. Fraud detection аудитории инфлюенсеров.

Для одиночного предпринимателя **Apify + Brand24 MCP** покрывают 90% задач за ~$170/мес total.

## Дерево решений: что выбрать

<div class="decision-tree" markdown>

**Один Reel разово, бесплатно?**
→ Gemini AI Studio (aistudio.google.com) — загрузил mp4, попросил разбор. Нужен VPN только для входа.

**Регулярный мониторинг 10 конкурентов?**
→ Apify MCP + Notion. Настроил раз — работает само. $15–20/мес.

**Полный контроль данных, не отдаёшь наружу?**
→ Локальный субагент «Ёж-Инста» на yt-dlp + mlx-whisper + Claude Vision. $0.09/reel.

**Нужен нативный audio/музыка/ритм монтажа?**
→ Gemini 3 Flash через bash + File API. 1000 запросов/день бесплатно.

**Клиентам B2B с лицензией на данные?**
→ Socialinsider API (от $333/мес) или Brand24 MCP.

</div>

## Нюансы для всех способов

- **yt-dlp требует cookies** с 2024 года. Без `--cookies-from-browser safari` скачивает HTML вместо видео. Это не баг — это политика Meta.
- **Burner-аккаунт обязателен** для Stories, Highlights и массовой выгрузки. instaloader с логином основного аккаунта = бан за сутки.
- **VPN-узел должен быть фиксированным** для логина и скрейпинга. Смена IP между сессиями = капча. Сначала залогинься в Safari через тот же VPN, потом экспортируй cookies.
- **Rate limiting везде:** `yt-dlp --sleep-interval 5`, `gallery-dl "sleep-request": [6, 12]`, instaloader ≤ 100–200 постов за сессию, Stories не чаще 1 раза в час.
- **Scene-change detection** для кадров — `select='gt(scene,0.4)'` в ffmpeg. Выбирает 8–15 кадров на 30-секундный Reel, не заливает payload.
- **JPEG q:v 3–5, не PNG** — иначе упрёшься в 32 МБ лимит Claude API.
- **Что не работает:** **Firecrawl Instagram** отключён — при попытке возвращает «This website is no longer supported». Это осознанное решение ради юридической чистоты. Bright Data через `brightdata/skills` MCP работает, но $1.50/1000 records — имеет смысл только при серьёзных объёмах.

## Юридический блок (читай до того, как начнёшь)

**Прецедент США:** *Meta v. Bright Data* (N.D. Cal., январь 2024, судья Chen) — вынесено summary judgment в пользу Bright Data: **logged-off скрейпинг публичных данных Instagram не нарушает ToS Meta**. В феврале 2024 Meta отозвала иск. Прецедент в силе. То же самое по hiQ v. LinkedIn.

**Юрисдикция РФ:** Instagram заблокирован Роскомнадзором с марта 2022, Meta признана экстремистской организацией. Для **личного использования** через VPN — серая зона. Для **коммерческих SMM-услуг клиентам** риски по ст. 20.3 КоАП и ФЗ-149. Консультация с юристом обязательна до того, как продаёшь услугу заказчику.

**Что ломается быстрее всего (прогноз апрель→октябрь 2026):**
- Stories без cookies — 99% ломается
- Логин/пароль без session-cookies — 80%
- Reels по embed без cookies — 70%
- Весь профиль через instaloader — 60% триггерит rate-limit
- Посты по прямой ссылке с cookies — 30%
- Коммерческие API (Apify, Bright Data) — 10–20%, чинят за часы

## Сравнение всех способов

| Решение | Цена | Транскрипт | Визуал | Скорость | Риск бана | Для кого |
|---|---|---|---|---|---|---|
| **Apify MCP** | $0.003–0.003/reel | ✅ (Whisper под капотом) | через displayUrl | 30–60 с | **0** | Регулярный мониторинг |
| **Gemini 3 Flash** | $0.008/reel или бесплатно | ✅ нативно | ✅ нативно | 15–30 с | средний | Нужны audio/музыка cues |
| **Локальный «Ёж-Инста»** | $0.09–0.15/reel | ✅ (mlx-whisper/yap) | ✅ (Claude Vision) | 5–10 с на M2 | средний | Полная приватность |
| **n8n + Notion** | $15–20/мес | ✅ | ✅ | авто-cron | 0 (через Apify) | 10+ конкурентов |
| **Socialinsider/Brand24** | $83–333/мес | через API | частично | мгновенно | 0 (официально) | B2B с лицензией |

## Кому подходит

- 🤖 **Агент (Claude Code)** — Apify MCP, локальный субагент `reel-analyzer`, Gemini MCP Tool
- 💬 **Чатбот (Gemini AI Studio)** — разовая загрузка mp4 вручную
- **SMM и блогер-ресёрч** — разбор hook/pacing/CTA у чужих Reels
- **Конкурентная разведка** — ежедневный мониторинг 10–50 профилей через n8n
- **HR** — анализ блогов кандидатов на позиции SMM/influencer manager
- **Продажники** — собрать контекст по потенциальному клиенту перед звонком (чем живёт, на что снимает, что триггерит)

## Совместимость

- **Apify MCP** — работает из РФ **без VPN**, оплата иностранной картой, API-токен бесплатно
- **Gemini 3 Flash, Gemini CLI, AI Studio** — для регистрации нужен VPN (aistudio.google.com не пускает РФ-IP), API-запросы после регистрации идут и из РФ
- **yt-dlp + instaloader + gallery-dl локально** — без VPN, но для логина в Instagram через Safari нужен VPN с фиксированным узлом
- **Claude API** — из РФ без VPN, оплата иностранной картой
- **n8n self-hosted** — без VPN, кроме вызовов к Instagram
- **Socialinsider, Brand24, Modash** — регистрация и оплата иностранной картой, запросы из РФ работают

**Репозитории:**
- [yt-dlp](https://github.com/yt-dlp/yt-dlp) — основной инструмент для Reels
- [instaloader](https://github.com/instaloader/instaloader) — массовая выгрузка профилей
- [gallery-dl](https://github.com/mikf/gallery-dl) — универсальный комбайн
- [Apify MCP server](https://github.com/apify/apify-mcp-server)
- [Peter-SB/n8n-ai-instagram-scraper](https://github.com/Peter-SB/n8n-ai-instagram-scraper) — бесплатный self-hosted
- [tkaufmann/claude-gemini-bridge](https://github.com/tkaufmann/claude-gemini-bridge) — автоделегация Gemini
