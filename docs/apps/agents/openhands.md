---
title: "OpenHands — автономный ИИ-инженер"
category: agents
tags:
  - бесплатно
  - открытый-код
  - технарям
stars: 71000
github: All-Hands-AI/OpenHands
updated: 2026-04-16
---

# 🤲 OpenHands

> 87% на SWE-bench — один из самых сильных автономных ИИ-инженеров в опенсорсе. Ставишь задачу — уходишь пить кофе.

## Что делает

OpenHands не помощник. Это автономный инженер, который работает по задаче от начала до конца. Тебе не надо подсказывать на каждом шагу — он САМ открывает файлы, правит код, запускает тесты, исправляет ошибки, пушит в гит.

Результат на бенчмарке SWE-bench — 87%. Для справки: это тесты с реальными issue с GitHub. Человек-джун даёт около 70%, сеньор — 85-90%. OpenHands работает на уровне живого мидла/сеньора.

71 тысяча звёзд. Консорциум разработчиков (All-Hands-AI) активно развивает.

## Кому подходит

- ✅ Есть большие задачи — перепиши модуль, закрой 10 issue, отрефакторь
- ✅ Нужна автономия — хочешь чтобы работало без тебя часами
- ✅ Не боишься Docker и серверных штук
- ❌ НЕ подходит для мелких задач — избыточно
- ❌ Если не понимаешь что такое Docker — сначала разберись

## Установка

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

## Первый запуск

1. Запустил Docker-контейнер
2. Открыл localhost:3000 — появился веб-интерфейс
3. Указал провайдера модели и API ключ
4. Подключил репозиторий (GitHub URL или локальную папку)
5. Написал задачу в формате: «Сделай X, учти Y, не трогай Z»
6. Ушёл на час — вернулся к результату

## Нюансы

- Жрёт токены как не в себя — большие задачи могут стоить $5-20
- Не оставляй без присмотра на опасных задачах (миграции БД, продакшн)
- Docker-контейнер требует ~8 ГБ RAM, слабые компы не вытянут

## Ссылки

- [GitHub ⭐ 71K](https://github.com/All-Hands-AI/OpenHands)
- [Документация](https://docs.all-hands.dev)
- [SWE-bench лидерборд](https://www.swebench.com/)
- Альтернативы: [Claude Code](https://claude.com/claude-code), [Codex CLI](codex-cli.md)

---

*Подходит для: технарям · большие задачи · автономная работа*
