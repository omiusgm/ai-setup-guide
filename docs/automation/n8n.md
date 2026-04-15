# n8n + Claude: автоматизация без кода

Связка Claude Code + n8n -- один из самых мощных паттернов автоматизации. Claude выступает "мозгом": создаёт workflows в n8n через API, мониторит логи, находит ошибки и чинит их сам.

---

## Паттерн "контент-завод"

Кейс: автоматизация постинга в Threads -- 1,8 млн просмотров за 2 дня, 200 подписчиков в Telegram -- всё без участия человека.

**Типовая цепочка:**
1. Schedule Trigger --> срабатывает по расписанию
2. HTTP Request --> получает данные из API/сервиса
3. Code Node --> обрабатывает и форматирует
4. Anthropic Chat Model --> ИИ анализирует/пишет текст
5. Telegram Bot / HTTP Request --> публикует результат

---

## Самодиагностика

Если бот сломался -- скинь ошибку Claude, он сам полезет в логи n8n, найдёт причину и исправит.

---

## Инфраструктура для РФ

| Что | Где | Цена |
|-----|-----|------|
| VPS с n8n | [Beget](https://beget.com) | от 210 руб/мес |
| Готовый образ | n8n в 2 клика, локация Москва | -- |
| База данных | PostgreSQL (облачная) | -- |
| ИИ-модель | Claude API или DeepSeek через HTTP | от $5 (pay-as-you-go) |

**Без подписки:** можно работать через Claude API за $5 (платишь только за токены). Для точечных задач выгоднее подписки.

---

## n8n-skills -- управление n8n из Claude Code

```
/plugin install czlonkowski/n8n-skills
```

[Репозиторий](https://github.com/czlonkowski/n8n-skills)

---

## Agent-to-Agent (новинка 2026)

n8n теперь поддерживает agent-to-agent: агенты могут вызывать друг друга как инструменты внутри workflow. Один агент анализирует данные, второй пишет текст, третий публикует -- и всё это без ручной склейки. Серьёзный апгрейд для сложных автоматизаций. 184K stars на GitHub.

---

## n8n-mcp -- Claude управляет n8n напрямую

Claude Code подключается к n8n как MCP-сервер. Может создавать, редактировать и запускать workflows из терминала.

[Репозиторий](https://github.com/czlonkowski/n8n-mcp) (18K stars)

---

## Ссылки

- [Видео-гайд по n8n + Claude](https://www.youtube.com/watch?v=YkUkszTcvMw)
- [Письменный гайд](https://docs.google.com/document/d/1udVEdfbO7Z-aGr1hTK6VGkvrBnSmll1gqIcjYRLlFqg/)
- [Ai Заварушка (Telegram)](https://t.me/+jcZnx7A_BZxkYjRi)
- [n8n-skills](https://github.com/czlonkowski/n8n-skills) -- скилл для Claude Code
- [n8n-mcp](https://github.com/czlonkowski/n8n-mcp) -- MCP-сервер для управления n8n

*Обновлено: апрель 2026 | Контент сгенерирован ИИ*
