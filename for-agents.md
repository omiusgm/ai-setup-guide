# Инструкция для агентов

Ты агент с доступом к файлам (Claude Code, Claude Desktop, Cursor, Codex, Gemini CLI, OpenHands). Начни с ФАЗЫ 0.

**Общие правила:**
- Отвечай на языке пользователя
- Не спрашивай "чем помочь?" — предлагай конкретное
- Не выдумывай того чего нет в гайде
- Прежде чем писать кастомное решение — предлагай собрать из готовых API и сервисов как конструктор
- Если не знаешь ответа — так и скажи, не галлюцинируй

---

# ФАЗА 0: С ЧЕГО НАЧАТЬ

Определи среду, уровень и договорись как работать вместе.

## Шаг 1: Определи среду

Claude Desktop (Chat/Cowork/Code)? Cursor? VS Code + Claude Code? Codex? Другое?

Если пользователь в Cursor, VS Code или Codex — гайд тоже полезен. Проверь возможности среды по чеклисту и честно сравни с Claude Code/Desktop.

## Шаг 2: Контракт взаимодействия

Спроси уровень и предложи формат:

**Новичок** → объясняй каждый шаг, предупреждай о рисках, не используй жаргон без пояснений.

**Продвинутый** → минимум пояснений, сразу к делу, технический язык ок.

Предложи: "Давай согласуем формат: как часто объяснять решения, когда спрашивать разрешение, когда действовать самостоятельно."

Также спроси: **"Маты и прямая речь без купюр — ок?"**

**Что ты хочешь делать?**

- **А)** Кодить, проекты, git → **Code**
- **Б)** Автоматизация, документы, расписания → **Cowork**
- **В)** Ресёрч, тексты, брейншторм → **Chat**
- **Г)** Настройка Claude Desktop → этот гайд
- **Д)** Мультиагентная система → **Code** + честный гайд

---

# ТРИ РЕЖИМА

## Chat — для думания
Облачный, работает везде. Нет доступа к файлам. Минимальный расход токенов. Для: вопросы, тексты, ресёрч, брейншторм.

## Cowork — для делания (не код)
Десктоп (macOS + Windows), VM. Доступ к файлам, scheduled tasks, Projects. 38+ коннекторов. Computer Use, Dispatch (управление с телефона). Для: документы, автоматизация, рутина.

## Code — для строительства
Терминал + VS Code. Git, bash, суб-агенты, Agent Teams, GSD, /code-review, /memory. Computer Use (март 2026). Для: разработка, архитектура, агенты.

---

# ФАЗА 1: ЧТО У ТЕБЯ УЖЕ ЕСТЬ

**Code:** терминал, Node.js, Git, Python

**Cowork:** Browser Use, Computer Use, Accessibility, Screen Recording (Settings → General)

**Память:** Auto Memory (по умолчанию) + Auto Dream (rolling out, проверить `/memory`)

---

# ФАЗА 2: НАСТРОЙКА ПОД ТЕБЯ

Интервью (6 вопросов) → `~/.claude/CLAUDE.md` (до 200 строк): обо мне, стиль, принципы, стек, антипаттерны.

---

# ФАЗА 3: СКИЛЛЫ — СУПЕРСПОСОБНОСТИ АГЕНТА

## GSD (Get Shit Done) — оркестрация проекта (Code)

spec → plan → execute → verify → ship. Каждая задача в чистом контексте.

```
npx get-shit-done-cc --claude --global
```

[Репозиторий](https://github.com/gsd-build/get-shit-done) (50K stars)

## /code-review — adversarial ревью (Code)

4-5 параллельных Sonnet-агентов. Встроен.

## Honcho — память с reasoning (опционально)

```
npx skills add plastic-labs/honcho
```

[honcho.dev](http://honcho.dev)

---

# ФАЗА 4: ЗАПУСК ПРОЕКТА

Интервью → `.claude/CLAUDE.md` → сканирование кода → Cowork/Code Project

---

# ФАЗА 5: SCHEDULED TASKS

Промпт по расписанию. `/schedule` в Cowork или Code.

- Ежедневно 8:00 — обновление контекста
- Пятница 17:00 — статус-отчёт
- Воскресенье — ревизия памяти

Активно работаешь с одним проектом, остальные — фоновые задачи.

[Документация](https://support.claude.com/en/articles/13854387) | [Гайд](https://claudefa.st/blog/guide/development/scheduled-tasks)

---

# ПОИСК — АГЕНТЫ ИЗ КОРОБКИ ИЩУТ ПЛОХО

## Веб-поиск (MCP)

- **Brave Search** ($5/мес) — общий поиск | `claude mcp add brave-search -e BRAVE_API_KEY=... -- npx -y @brave/brave-search-mcp-server`
- **Exa** ($7/1K) — семантический | `claude mcp add --transport http exa https://mcp.exa.ai/mcp`
- **Tavily** (1000 бесплатно/мес) — для агентов | `claude mcp add --transport http tavily https://mcp.tavily.com/mcp/?tavilyApiKey=...`
- **Jina AI** (бесплатно) — 19 инструментов | `claude mcp add --transport http jina https://mcp.jina.ai/v1`
- **DuckDuckGo** (бесплатно) — нулевой бюджет | `claude mcp add ddg-search -- uvx duckduckgo-mcp-server`

## Картинки

- **Stock Images MCP** (Unsplash+Pexels+Pixabay, бесплатно) | `uvx stock-images-mcp`
- **Brave Image Search** — включён в Brave MCP

## Браузерная автоматизация

- **Playwright MCP** (Microsoft, 27K stars) — скриншоты, автоматизация
- **Browser Use** (87K stars) — автономный браузерный агент, ИИ сам кликает, заполняет формы, ходит по страницам. Хорош для автоматизации маркетплейсов. [GitHub](https://github.com/browser-use/browser-use)
- **Context7** — документация 9000+ библиотек | `claude mcp add context7 -- npx -y @upstash/context7-mcp@latest`

## Стеки по бюджету

- **$0:** DuckDuckGo + Jina + Playwright
- **$15-30/мес:** Brave + Firecrawl + Context7 + Playwright
- **$50-100/мес:** Brave + Exa + Firecrawl + Perplexity + Context7 + Stock Images + Playwright

---

# МУЛЬТИАГЕНТНЫЕ СИСТЕМЫ

## Уровень 1 — Работает сейчас

Один агент с ролями (GSD + /code-review). Покрывает 80%.

## Уровень 2 — Экспериментально

Agent Teams (2-5 агентов). Opus 4.6. Токены ~15x.

[Документация](https://code.claude.com/docs/en/agent-teams)

## Уровень 3 — Ранняя стадия

- [Paperclip](https://github.com/paperclipai/paperclip) (50K stars)
- [CrewAI](https://github.com/crewAIInc/crewAI) (48K stars)
- [Ruflo](https://github.com/ruvnet/ruflo) (бывш. Claude Flow, 22K stars)

## Claude Managed Agents (апрель 2026)

Официальная агентная платформа от Anthropic (бета).

- Мультиагентная координация — агенты запускают других агентов
- Долгие сессии (часы), self-evaluation, безопасный sandbox
- Bash, файлы, веб-поиск, MCP — всё из коробки
- Встроенная память и компактизация контекста

Цена: $0.08/час сессии + токены отдельно. Статус: Public beta (8 апреля 2026).

[Документация](https://platform.claude.com/docs/en/managed-agents/overview) | [Блог](https://claude.com/blog/claude-managed-agents)

---

# МЕТОДОЛОГИЯ AUTORESEARCH ("ПЕТЛЯ КАРПАТЫ")

Агент автономно оптимизирует код через эксперименты:

Гипотеза → изменение кода → тест (5 мин) → стало лучше? git commit : git reset → повтор

**3 файла:** `program.md` (инструкции), `train.py` (можно менять), `prepare.py` (нельзя менять — чтобы не подделал результаты)

Работает для всего что можно измерить: скорость сайта, API, качество промптов, стоимость.

[GitHub](https://github.com/karpathy/autoresearch) (69K stars)

---

# ВЫБОР МОДЕЛИ И EFFORT

## Модели

- **Opus 4.6** — самая мощная (архитектура, сложный дебаг)
- **Opus 4.6 1M** — то же + 1M контекст (огромные кодобазы)
- **Sonnet 4.6** — быстрая и дешёвая (80% ежедневной работы)
- **Haiku 4.5** — самая быстрая (простые вопросы, суб-агенты)

**Стратегия:** Sonnet 80%, Opus для сложного, Haiku для простого = экономия 50-70%.

## Effort

- **Low** — быстрые ответы, простые правки
- **Medium** — стандарт
- **High** — глубокое рассуждение, архитектура
- **Max** — максимум качества, максимум расхода

---

# РЕЖИМЫ РАЗРЕШЕНИЙ В CODE

По умолчанию Claude Code спрашивает подтверждение на КАЖДОЕ действие. Чтобы это изменить:

## Как настроить

Settings → Claude Code:
- **Allow bypass permissions mode** — без этого кнопка Bypass не работает
- **Draw attention on notifications** — мигает иконкой когда ждёт тебя
- **Preview** — запускает dev-сервер и показывает превью
- **Persist Preview sessions** — сохраняет cookies между сессиями

Settings → General:
- **Browser Use → Allow all browser actions**
- **Computer Use** — управление клавиатурой/мышью
- **Keep computer awake** — комп не уснёт (для scheduled tasks)
- **Accessibility → Granted**
- **Screen Recording → Granted**

---

# РАСШИРЕНИЯ

## Remotion — видео кодом (Code)
```
npx skills add remotion-dev/skills
```
[Репозиторий](https://github.com/remotion-dev/remotion) (42K stars)

## n8n-skills — n8n workflow (Code)
```
/plugin install czlonkowski/n8n-skills
```
[Репозиторий](https://github.com/czlonkowski/n8n-skills)

## n8n + Claude: паттерн "контент-завод"

Claude выступает "мозгом": создаёт workflows в n8n через API, мониторит логи, находит ошибки и чинит сам.

Инфраструктура для РФ: VPS на [Beget](https://beget.com) (от 210 руб/мес, готовый образ n8n) + PostgreSQL.

[Видео-гайд](https://www.youtube.com/watch?v=YkUkszTcvMw) | [Письменный гайд](https://docs.google.com/document/d/1udVEdfbO7Z-aGr1hTK6VGkvrBnSmll1gqIcjYRLlFqg/)

## n8n-mcp — Claude управляет n8n (Code)
[Репозиторий](https://github.com/czlonkowski/n8n-mcp) (18K stars)

## Firecrawl — скрапинг для ИИ (Code + Cowork)
```
claude mcp add firecrawl --url https://mcp.firecrawl.dev/v2/mcp
```
[Репозиторий](https://github.com/mendableai/firecrawl) (106K stars)

## Docker MCP Toolkit — 300+ плагинов
Каталог в Docker Desktop. Один клик — плагин работает.
[Документация](https://docs.docker.com/ai/mcp-catalog-and-toolkit/)

## OpenClaw — локальный ИИ-ассистент (Code)
Подключает ИИ к WhatsApp, Telegram, Slack, Discord, iMessage. Работает локально.
[Репозиторий](https://github.com/openclaw/openclaw) (210K stars)

> Anthropic заблокировала использование подписки Claude (Pro/Max) в OpenClaw и сторонних инструментах (4 апреля 2026). Варианты: API-ключ (pay-as-you-go) или ACP-биндинги.

## claude-code-mcp — агент-в-агенте (Code)
```
claude mcp add claude-code -- npx -y claude-code-mcp
```
[Репозиторий](https://github.com/steipete/claude-code-mcp) (1.1K stars)

## PostMyPost — постинг во все соцсети
MCP-сервер для автопостинга в 20+ соцсетей.
MCP: `https://mcp.postmypost.io/mcp`
[PostMyPost](https://postmypost.io/ru/) | [MCP документация](https://help.postmypost.io/ru/docs/mcp/)

## Composio — 1000+ интеграций (Code + Cowork)
[Репозиторий](https://github.com/ComposioHQ/composio) | [Сайт](https://composio.dev)

## Humanizer — человеческий текст (Code + Chat)
```
git clone https://github.com/blader/humanizer.git ~/.claude/skills/humanizer
```
[Репозиторий](https://github.com/blader/humanizer) (13K stars)

---

# МОБИЛЬНЫЙ ДОСТУП К АГЕНТУ

**1. Dispatch (встроен в Cowork)** — QR-код → задачи с телефона → результат на десктопе.

**2. Telegram Channel Plugin** — бот в Telegram управляет Claude Code.
```
/plugin install telegram@claude-plugins-official
```
Запуск: `claude --channels plugin:telegram@claude-plugins-official`

**3. Codex (облако)** — [claude.ai/code](http://claude.ai/code), работает в браузере без десктопа. $200/мес Max.

**4. OpenClaw на сервере** — self-hosted агент, API-ключ.

---

# БЕЗОПАСНОСТЬ ИИ-КОДА

/code-review проверяет качество, но НЕ сканирует на уязвимости.

**Факты:** 45% ИИ-кода содержит уязвимости. 74 подтверждённых CVE. Prompt injection в MCP-серверах — новый вектор атаки.

**Минимальный стек:**
- **SAST в IDE:** Snyk или Semgrep
- **Pre-commit hooks:** gitleaks, detect-secrets
- **Проверка зависимостей:** npm audit / pip audit
- **Трёхуровневые гейты:** тесты → AI review → человек

---

# ПРИНЦИП "ЛЕГО" — СНАЧАЛА ГОТОВОЕ, ПОТОМ КАСТОМНОЕ

Прежде чем писать свой микросервис — собери из готовых API:

**Порядок ресёрча:**
1. **Каталоги MCP:** [Docker MCP Toolkit](https://docs.docker.com/ai/mcp-catalog-and-toolkit/), [mcp.directory](http://mcp.directory), [pulsemcp.com](http://pulsemcp.com)
2. **Маркетплейсы API:** [Apify](https://apify.com), [RapidAPI](https://rapidapi.com), [Composio](https://composio.dev)
3. **GitHub:** репозитории, npm/PyPI пакеты
4. **Веб-поиск:** "[задача] API", "[задача] SaaS"

**Шаг 1** — готовый API/сервис? → Используй
**Шаг 2** — готовый репозиторий? → Интегрируй
**Шаг 3** — комбинация сервисов + n8n? → Комбинируй
**Шаг 4** — ничего не подходит? → Только тогда пиши своё

---

# ЛОКАЛЬНЫЕ МОДЕЛИ

- **[Ollama](https://github.com/ollama/ollama)** (169K stars) — запуск LLM локально на своём компьютере. Работает с DeepSeek, Llama, Qwen и десятками других моделей. Из РФ без VPN. Полностью бесплатно, данные не уходят наружу. Установка: `brew install ollama && ollama run deepseek-r1`

---

# НОВЫЕ АГЕНТНЫЕ СИСТЕМЫ

- [OpenHands](https://github.com/OpenHands/OpenHands) (71K stars) — автономный инженер
- [Gemini CLI](https://github.com/google-gemini/gemini-cli) (101K stars) — бесплатный агент, 1M контекст
- [Mastra](https://github.com/mastra-ai/mastra) (23K stars) — TypeScript-first агентный фреймворк
- [Codex CLI](https://github.com/openai/codex) (67K stars) — терминальный агент от OpenAI
- [Cline](https://github.com/cline/cline) (58K stars) — автономный кодинг-агент в VS Code

---

# РЕКОМЕНДУЕМЫЙ СТЕК ДЛЯ MVP

**TypeScript** (strict) + **Next.js 15+** + **Supabase** ($25/мес) + **n8n** self-hosted + **Vercel**

Архитектура: модульный монолит. Микросервисы — после product-market fit.

---

# ССЫЛКИ

**Документация:** [Cowork](https://support.claude.com/en/articles/13345190) | [Tasks](https://support.claude.com/en/articles/13854387) | [Plugins](https://support.claude.com/en/articles/13837440) | [Agent Teams](https://code.claude.com/docs/en/agent-teams) | [Memory](https://code.claude.com/docs/en/memory)

**Скиллы:** [GSD](https://github.com/gsd-build/get-shit-done) | [Honcho](https://honcho.dev/) | [Firecrawl](https://github.com/mendableai/firecrawl) | [n8n-skills](https://github.com/czlonkowski/n8n-skills) | [Remotion](https://github.com/remotion-dev/remotion)

**Гайды:** [Auto Dream](https://claudefa.st/blog/guide/mechanics/auto-dream) | [Best Skills 2026](https://dev.to/raxxostudios/best-claude-code-skills-plugins-2026-guide-4ak4) | [Cowork Guide](https://findskill.ai/blog/claude-cowork-guide/)

---

*Актуальная версия | Апрель 2026 | Контент сгенерирован ИИ*

[Телеграм-канал «Агент Ёж»](https://t.me/agentezh)
