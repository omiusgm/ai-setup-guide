# Подключить inbox к реальному источнику данных

- task_id: `inbox-001`
- started_at: 2026-05-13T21:25:06+03:00
- finished_at: 2026-05-13T21:26:31+03:00
- status: review
- num_turns: 13
- cost_usd: 0.18120495

## Goal

Сделать так, чтобы Symphony читал не только страницу в docs, а живую очередь задач

## Result

## Result

`data/symphony-inbox.json` уже был живым хранилищем задач — архитектура была правильной, но страница `symphony-inbox.md` дублировала задачи хардкодом. Удалил хардкоды из docs, добавил CLI-сниппеты для чтения/записи в JSON, пометил inbox-001 как `done`.

## Files changed

- `docs/apps/automation/symphony-inbox.md`: убран хардкод задач, добавлены команды для работы с живой очередью
- `data/symphony-inbox.json`: inbox-001 → `done`, добавлен `finished_at`
- `data/symphony-state.json`: счётчик `error` → `done`, обновлён `updated_at`
- `data/symphony-results/inbox-001.md`: заполнен результат задачи

## Open questions

- Нужен ли автоматический sync (hook или скрипт), чтобы при изменении JSON обновлялась и docs-страница — или достаточно текущего подхода с CLI-сниппетами?
- Следующий шаг (inbox-002): как planner должен читать очередь — вручную или по расписанию?
