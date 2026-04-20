---
title: "Gitlawb/openclaude · Альтернативный форк Claude Code"
category: agents
tags:
  - агент
  - форк
  - открытый-код
  - claude-code
stars: 22301
github: Gitlawb/openclaude
updated: 2026-04-18
for: agent
ru: true
---

# Gitlawb/openclaude

<div class="product-hero" markdown>

**Альтернативный форк Claude Code от Gitlawb после утечки исходника**

Тот же сюжет: после утечки исходников Claude Code Gitlawb сделал свой форк. Но пошёл дальше — переделал так, чтобы работало не только с Anthropic, но и с OpenAI, Gemini, DeepSeek, Ollama, Codex, GitHub Models и 200+ моделями через OpenAI-совместимые API.

<p class="product-hero-rating">
<span class="rating-badge">⭐ 22.3K</span>
<span class="rating-label">звёзд на GitHub · обновлён 18 апреля 2026</span>
</p>

```bash
npm install -g openclaude
openclaude --help
```

[:material-github: GitHub](https://github.com/Gitlawb/openclaude){ .md-button .md-button--primary }

</div>

## Зачем это нужно

Главная фишка — модель-агностичность. Официальный Claude Code работает только с Anthropic. Это значит:
- Платишь только Anthropic
- Если ты в РФ и санкции усиливаются — ты остался без агента
- Не можешь сравнить как тот же промпт работает на GPT-4 vs Claude vs Gemini

Openclaude от Gitlawb всё это решает. Один CLI — десятки моделей. Сегодня используешь Claude через свой API-ключ, завтра переключился на DeepSeek (китайские, дешевле, без санкций), послезавтра на локальную Ollama (бесплатно, без интернета).

22 тысячи звёзд — серьёзная цифра. Это значит: реально многим нужно «Claude Code-опыт но без зависимости от Anthropic».

Ёж: те же дисклеймеры что и у [ruvnet версии](open-claude-code-ruvnet.md) — форк, юридически серая зона, DMCA-риск. Но если ты сидишь без VPN и платёжных мостов — это рабочий вариант.

## Чем НЕ является

- НЕ официальный продукт Anthropic — форк после утечки
- НЕ identical-копия Claude Code — поведение может отличаться
- НЕ legal-safe — серая зона
- НЕ значит что 200+ моделей одинаково хорошо работают (промпты заточены под Claude)
- НЕ заменит Claude Code если у тебя стабильный доступ к Anthropic и тебе всё нравится

## Что получаешь

- CLI похожий на Claude Code
- Поддержку 200+ моделей через OpenAI-совместимые API
- Работу с DeepSeek, Gemini, OpenAI, Ollama, GitHub Models
- Возможность переключаться между моделями на лету
- Локальный режим через Ollama (без интернета вообще)

## Как поставить

```bash
# 1. Установка через npm
npm install -g openclaude

# 2. Конфиг провайдера (пример: DeepSeek)
openclaude config set provider deepseek
openclaude config set api_key sk-xxxxx

# 3. Запуск
openclaude
```

Полный список провайдеров и конфигов — в README репо.

## Кому подходит

- 🤖 Агент (для тех кто хочет независимость от Anthropic)
- Уровень: **опытным** (npm, конфиги, понимание разных API)
- Задачи: работа из РФ без VPN/платёжного моста, использование DeepSeek/локальных моделей, резерв на случай санкций

## Совместимость

- Кросс-платформа (npm)
- Из РФ работает напрямую (особенно с DeepSeek и Ollama — без санкций)
- Лицензия: NOASSERTION (см. репо, может быть кастомная — это форк)
