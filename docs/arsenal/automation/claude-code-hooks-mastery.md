---
title: "claude-code-hooks-mastery · Гайд + примеры по Claude Code Hooks"
category: automation
tags:
  - автоматизация
  - хуки
  - claude-code
  - опытным
stars: 3529
github: disler/claude-code-hooks-mastery
updated: 2026-04-18
for: agent
ru: true
---

# claude-code-hooks-mastery

<div class="product-hero" markdown>

**Гайд + примеры по Claude Code Hooks (PostToolUse, Stop) — автоматизация поверх Claude Code**

Хуки в Claude Code — это «делай X каждый раз когда Y». После каждой правки — запусти форматтер. После каждой задачи — прогони тесты. После остановки — отправь алерт. Этот репо — самый полный сборник примеров: 30+ готовых хуков с разбором как они работают.

<p class="product-hero-rating">
<span class="rating-badge">⭐ 3.5K</span>
<span class="rating-label">звёзд на GitHub · обновлён 18 апреля 2026</span>
</p>

```bash
git clone https://github.com/disler/claude-code-hooks-mastery
# Хуки лежат в settings.json — копируй конфиги под себя
```

[:material-github: GitHub](https://github.com/disler/claude-code-hooks-mastery){ .md-button .md-button--primary }

</div>

## Зачем это нужно

Хуки — встроенная штука Claude Code, описана в `settings.json`. Звучит просто: «после Edit вызови prettier». На практике — у тебя сразу 100 вопросов: какой формат события, как передать аргументы, что если хук упал, как не зациклить.

Disler разобрал это до атомов. В репо — рабочие примеры:
- PostToolUse → форматтер после каждой правки
- Stop → запуск всех тестов после задачи
- Stop → push в гит автоматом
- Notification → пуш в Telegram когда сломалось
- PreToolUse → блок опасных команд (`rm -rf`)

Ты не сидишь и не изобретаешь — копируешь готовый блок в свой `settings.json`, подставляешь свои пути, работает.

Антикритик: 3.5K звёзд — серьёзная цифра для нишевого инструмента. Но Disler любит экспериментальные вещи (см. [infinite-agentic-loop](infinite-agentic-loop.md)) — не всё что в репо боевое, читай комменты, фильтруй.

## Чем НЕ является

- НЕ инструмент — это коллекция примеров и гайд
- НЕ работает «из коробки» — копируешь конфиг в свой `settings.json`
- НЕ заменит документацию Anthropic (читай оба источника)
- НЕ для тех кто не открывал `settings.json` ни разу
- НЕ автоматизирует то что можно cron'ом или GitHub Actions (хуки про «после действия Claude», не про расписание)

## Что получаешь

- 30+ примеров хуков с разбором
- Рабочие конфиги для PostToolUse, Stop, Notification, PreToolUse
- Объяснение когда что вызывается
- Паттерны: автотесты, автокоммит, безопасность, нотификации
- Понимание архитектуры хуков (раз и навсегда)

## Как поставить

```bash
# 1. Клонируешь чтобы посмотреть примеры
git clone https://github.com/disler/claude-code-hooks-mastery
cd claude-code-hooks-mastery

# 2. Открываешь README, выбираешь нужный паттерн
cat README.md

# 3. Копируешь блок в свой ~/.claude/settings.json
nano ~/.claude/settings.json
```

Дальше — Claude Code сам читает настройки при старте.

## Кому подходит

- 🤖 Агент (Claude Code)
- Уровень: **опытным** (умеешь редактировать `settings.json`, понимаешь JSON)
- Задачи: автоматизация рутины (формат, тесты, коммит, алерты)

## Совместимость

- Только Claude Code (хуки — его внутренний механизм)
- Из РФ работает (Claude Code локально, репо на GitHub)
- Лицензия: <!-- TODO: license not set in repo --> не указана в репо
