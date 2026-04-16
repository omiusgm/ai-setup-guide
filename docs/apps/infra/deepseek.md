---
title: "DeepSeek — бесплатный ИИ из Китая"
category: infra
tags:
  - инфраструктура
  - бесплатно
  - из-рф
  - новичкам
updated: 2026-04-16
---

# 🐋 DeepSeek

> Китайская альтернатива ChatGPT. Работает из РФ без VPN. Бесплатный тир + API по $0.27/1M токенов (в 10 раз дешевле GPT).

## Что делает

DeepSeek — это и чат (как ChatGPT), и API для разработчиков. Главные плюсы для нас: работает из РФ без VPN, бесплатный тир щедрый, API копеечный.

Модель DeepSeek R1 — одна из сильнейших в мире по рассуждениям и математике. Уровень сравнимый с GPT-4 и Claude, но в разы дешевле.

V4 выходит в конце апреля 2026 — первая модель полностью на чипах Huawei (без Nvidia).

## Кому подходит

- ✅ В РФ, нужен ИИ без VPN
- ✅ Хочешь API, но дорого OpenAI/Anthropic
- ✅ Математика, код, рассуждения — R1 сильна
- ✅ Новичкам — бесплатный тир большой, можно учиться
- ❌ НЕ подходит для чувствительных данных — серверы в Китае
- ❌ Для creative writing — русская языковая модель слабее (но улучшается)

## Как пользоваться

### Через чат (как ChatGPT)

1. Открой [chat.deepseek.com](https://chat.deepseek.com)
2. Регистрация по email (можно российскую почту)
3. Пиши — отвечает
4. Бесплатно без лимитов на личном аккаунте

### Через API (для разработчиков)

```python
from openai import OpenAI

client = OpenAI(
    api_key="твой-ключ",
    base_url="https://api.deepseek.com"
)

response = client.chat.completions.create(
    model="deepseek-reasoner",
    messages=[{"role": "user", "content": "Объясни квантовую механику"}]
)
```

Совместим с OpenAI SDK — можно подменить только base_url в существующем коде.

## Как получить API ключ

1. [platform.deepseek.com](https://platform.deepseek.com)
2. Регистрация → пополнение ($5 хватит на месяцы экспериментов)
3. В разделе API Keys — создаёшь ключ

## Подключить к агентам

- **[Cline](../agents/cline.md)** → API Provider: DeepSeek, base URL: `https://api.deepseek.com`
- **[Goose](../agents/goose.md)** → через OpenAI-совместимый API
- **[n8n](../automation/n8n.md)** → блок OpenAI, подмени base URL

## Нюансы

- В РФ работает, но серверы в Китае — конфиденциальные данные не лей
- Модели бывают обновляют с релизом новых версий — следи за именами
- В чате нет MCP/инструментов — только текст. Для агентов нужен отдельный API

## Ссылки

- [chat.deepseek.com](https://chat.deepseek.com) — чат
- [platform.deepseek.com](https://platform.deepseek.com) — API
- [deepseek.com](https://deepseek.com) — сайт компании
- Альтернативы: [Ollama](ollama.md) (локально), Anthropic (нужен VPN)

---

*Подходит для: из РФ · бесплатно · новичкам · разработчикам*
