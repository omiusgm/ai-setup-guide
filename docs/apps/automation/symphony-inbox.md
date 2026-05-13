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

```md
- title: Подключить inbox к реальному источнику данных
  goal: Сделать так, чтобы Symphony читал не только страницу в docs, а живую очередь задач
  priority: high
  source: system
  notes: Сейчас inbox существует как документация; нужен настоящий список задач или файл-хранилище

- title: Автоматически подхватывать задачи из inbox в planner
  goal: Чтобы planner сначала смотрел inbox, а потом уже предлагал новые задачи
  priority: high
  source: system
  notes: Это ключевой шаг к автономии — без него система не замыкается в один поток

- title: Добавить правило для Claude / агентов на запись follow-up задач
  goal: Чтобы любой агент мог быстро класть полезные задачи в inbox, не ломая workflow
  priority: high
  source: claude
  notes: Нужен единый формат записи и короткое объяснение пользы задачи

- title: Сделать удобный просмотр очереди задач
  goal: Чтобы пользователь видел inbox без чтения markdown-файлов вручную
  priority: medium
  source: system
  notes: Подойдёт простая веб-страница или блок в текущем интерфейсе

- title: Описать критерии готовности и проверки для автономных тикетов
  goal: Убрать неопределённость, когда задача может считаться завершённой
  priority: medium
  source: system
  notes: Нужны checks, ready_for_check и done criteria в одном месте

- title: Настроить уведомление о новых важных задачах
  goal: Чтобы ты узнавал о новых задачах без ручной проверки inbox
  priority: medium
  source: system
  notes: Можно через digest или короткое сообщение по расписанию
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
