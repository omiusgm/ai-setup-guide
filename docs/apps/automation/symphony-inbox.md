---
title: "Symphony inbox"
category: automation
tags:
  - automation
  - inbox
  - tasks
  - claude
---

# Symphony inbox

!!! info "Единая очередь задач"
    Сюда можно складывать задачи, которые потом подхватит Symphony planner.

## Кто может писать сюда

- пользователь
- система
- Claude / другой агент, если он нашёл полезную следующую задачу

## Источник правды

Живая очередь хранится в файле:

- `data/symphony-inbox.json`

Эта страница показывает схему и смысл очереди. Актуальные записи должны жить в JSON-файле, чтобы их можно было читать и обновлять автоматически.

## Текущие задачи

!!! tip "Живая очередь"
    Задачи хранятся в `data/symphony-inbox.json` — не в этой странице. Эта страница — только документация.

Просмотр текущей очереди:

```bash
jq '.items[] | select(.status != "done") | {id, title, priority, status}' data/symphony-inbox.json
```

Добавить задачу через CLI:

```bash
# Добавить запись в inbox (пример)
jq '.items += [{
  "id": "inbox-NNN",
  "title": "...",
  "goal": "...",
  "priority": "high",
  "source": "claude",
  "status": "queued",
  "notes": "..."
}] | .updated_at = (now | todate)' data/symphony-inbox.json > /tmp/inbox.json && mv /tmp/inbox.json data/symphony-inbox.json
```

## Формат записи

Каждая задача в inbox должна быть короткой и понятной:

- `title`
- `goal`
- `priority`
- `source`
- `notes`

Пример:

```md
- title: Add build verification
  goal: Ensure docs and app changes are validated automatically
  priority: high
  source: claude
  notes: Missing check in autonomous workflow
```

## Правило обработки

Symphony должен:

1. прочитать inbox
2. выбрать самые полезные задачи
3. перевести их в нормальные тикеты
4. убрать или пометить обработанные записи

## Когда использовать

Используй inbox, если:

- ты хочешь быстро накидать идеи
- Claude нашёл следующий шаг во время работы
- задача пока не готова в полноценный тикет
- нужно собрать очередь перед запуском планировщика

## Связанные страницы

- [Symphony task schema](symphony-task-schema.md)
- [Autonomous worker](autonomous-worker.md)
- [Главная](index.md)
