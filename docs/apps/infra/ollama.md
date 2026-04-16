---
title: "Ollama — ИИ на своём компе"
category: infra
tags:
  - инфраструктура
  - бесплатно
  - из-рф
  - открытый-код
stars: 169000
github: ollama/ollama
updated: 2026-04-16
---

# 🦙 Ollama

> Запусти DeepSeek, Llama, Qwen локально на своём компьютере. Бесплатно. Без VPN. Без отправки данных никому.

## Что делает

Ollama — это «инсталлятор моделей». Одной командой качает и запускает любую open-source LLM: DeepSeek R1, Llama 3, Qwen 2.5, Mistral. Модель крутится локально, ответы генерируются у тебя.

Главное: всё бесплатно, всё приватно, ничего не уходит в облако. Интернет нужен только чтобы скачать модель первый раз.

169 тысяч звёзд. Один из самых популярных open-source проектов последних лет. Работает на Mac, Windows, Linux.

## Кому подходит

- ✅ В РФ, не хочешь VPN — всё локально
- ✅ Нужна приватность — данные не уходят в OpenAI/Anthropic
- ✅ Нет бюджета на API — Ollama бесплатная
- ✅ Разработка — тестить без расходов
- ❌ НЕ подходит если нужно качество GPT-5/Claude Opus — локалки слабее
- ❌ На слабом компе (<16GB RAM) большие модели не влезут

## Установка

**Mac/Linux:**

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

**Windows:** скачай установщик с [ollama.com/download](https://ollama.com/download)

## Первый запуск

```bash
# Скачать и запустить DeepSeek R1 (сильная open-source модель)
ollama run deepseek-r1

# Или Qwen 2.5 (китайская, отличная для русского)
ollama run qwen2.5

# Или Llama 3.3 (Meta, флагман)
ollama run llama3.3
```

Откроется интерактивный чат прямо в терминале.

## Подключить к агентам

Почти все ИИ-агенты поддерживают Ollama как провайдера:

- **[Goose](../agents/goose.md)** → в настройках выбери Ollama
- **[Cline](../agents/cline.md)** → API Provider: Ollama, URL: `http://localhost:11434`
- **[Claude Code](https://claude.com/claude-code)** → не поддерживает напрямую
- **[n8n](../automation/n8n.md)** → блок «Ollama» в списке

## Какую модель взять

- **DeepSeek R1** — для рассуждений, математики, кода
- **Qwen 2.5** — лучший русский язык в open-source
- **Llama 3.3 70B** — флагман, но нужен мощный комп (48+ GB RAM)
- **Qwen 2.5 7B** — для слабых компов, работает на 8 GB RAM

## Нюансы

- Большие модели (70B) требуют видеокарту или 64+ ГБ RAM
- Скорость ответа зависит от железа — на Mac M1 норм, на стареньком Intel медленно
- Для агентов лучше брать модели ≥7B — 3B тупят

## Ссылки

- [GitHub ⭐ 169K](https://github.com/ollama/ollama)
- [ollama.com](https://ollama.com)
- [Каталог моделей](https://ollama.com/library)
- Альтернативы: LM Studio (GUI), llama.cpp (низкоуровнево)

---

*Подходит для: из РФ · бесплатно · приватности*
