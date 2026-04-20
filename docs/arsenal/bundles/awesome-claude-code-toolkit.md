---
title: "awesome-claude-code-toolkit · Тулкит расширений Claude Code от Rohit G"
category: bundles
tags:
  - набор
  - тулкит
  - claude-code
stars: 1317
github: rohitg00/awesome-claude-code-toolkit
updated: 2026-04-18
for: agent
ru: true
---

# awesome-claude-code-toolkit

<div class="product-hero" markdown>

**Тулкит расширений Claude Code от Rohit G**

#1 trending GitHub в феврале 2026. 135 агентов, 35 курированных скиллов (+400 тысяч через SkillKit), 42 команды, 176+ плагинов, 20 хуков, 15 правил, 7 шаблонов, 14 MCP-конфигов, 26 спутниковых приложений, 52 записи экосистемы. Один автор, одна репа, всё работает вместе.

<p class="product-hero-rating">
<span class="rating-badge">⭐ 1.3K</span>
<span class="rating-label">звёзд на GitHub · обновлён 18 апреля 2026</span>
</p>

```bash
git clone https://github.com/rohitg00/awesome-claude-code-toolkit
cd awesome-claude-code-toolkit
# Дальше — по README, агенты/скиллы копируешь в ~/.claude/
```

[:material-github: GitHub](https://github.com/rohitg00/awesome-claude-code-toolkit){ .md-button .md-button--primary }

</div>

## Зачем это нужно

Awesome-list (см. [hesreallyhim](awesome-claude-code.md)) даёт ссылки на чужие репо — ты сам ходишь и тащишь. Toolkit Rohit'а другое: он уже всё собрал в одну репу. Открыл, скопировал нужный агент в `~/.claude/agents/`, пошёл работать.

#1 trending в феврале 2026 — потому что человек сделал то что многие хотели но никто не делал: сборник «всё в одном» с реально работающими конфигами. Не просто ссылки, а готовые файлы.

Ёж: 1.3K звёзд (на 18 апреля) — это меньше чем у hesreallyhim (39K), но динамика другая — toolkit вышел недавно и набирает быстро. Trending на GitHub — это не количество, а скорость роста. Имей в виду — масштаб ещё небольшой.

## Чем НЕ является

- НЕ замена hesreallyhim/awesome-claude-code (тот — каталог ссылок, этот — конкретные файлы одного автора)
- НЕ значит что все 135 агентов отличного качества (один человек — субъективно)
- НЕ ставится одной командой (надо копировать файлы вручную)
- НЕ официальный продукт Anthropic — community-проект
- НЕ значит что 400K скиллов через SkillKit реально работают (цифра маркетинговая)

## Что получаешь

- 135 готовых агентов (`.md` файлы — копируй в `~/.claude/agents/`)
- 35 курированных скиллов (плюс хук в SkillKit для +400K)
- 42 слэш-команды
- 176+ конфигов плагинов
- 20 хуков (PostToolUse, Stop и т.д.)
- 14 готовых MCP-конфигов
- Шаблоны и правила для разных типов проектов

## Как поставить

```bash
# 1. Клонируешь
git clone https://github.com/rohitg00/awesome-claude-code-toolkit
cd awesome-claude-code-toolkit

# 2. Смотришь что есть
ls agents/ skills/ commands/ hooks/

# 3. Копируешь нужное в свой проект
cp agents/code-reviewer.md ~/.claude/agents/
cp skills/refactor.md ~/.claude/skills/
```

Полная установка через SkillKit — см. README репо.

## Кому подходит

- 🤖 Агент (Claude Code)
- Уровень: **опытным** (понимаешь структуру `.claude/`, копируешь руками то что нужно)
- Задачи: быстро поднять рабочее окружение, не собирать с нуля

## Совместимость

- Только Claude Code (агенты/скиллы — формат Claude)
- Из РФ работает (GitHub доступен)
- Лицензия: Apache 2.0 (можно использовать коммерчески)
