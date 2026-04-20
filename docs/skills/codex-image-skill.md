---
name: image-generation-via-codex
description: Generate images from any Claude Code project using OpenAI Codex CLI with ChatGPT Plus subscription (no OpenAI API key or tokens billed). Use this when the user asks for an image, cover, icon, meme, or illustration and has ChatGPT Plus subscription. Covers install steps, the critical --enable image_generation flag, the kyrillic-path websocket bug, parallel multi-variant generation, mandatory QA review, and retry-until-satisfied workflow. Activates on any request involving image creation, cover art, meme generation, or visual asset creation when Codex CLI is available locally.
---

# Генерация картинок через Codex CLI (ChatGPT Plus subscription)

Универсальный скилл для генерации картинок **из любого проекта Claude Code** через `codex exec --enable image_generation` + `gpt-image-1.5`. Без OpenAI API ключа, без биллинга по токенам — всё покрывается ChatGPT Plus подпиской ($20/мес).

!!! tip "Как установить этот скилл себе"
    1. Скачай этот файл ([raw .md на GitHub](https://raw.githubusercontent.com/omiusgm/ai-setup-guide/main/docs/skills/codex-image-skill.md))
    2. Положи в `~/.claude/skills/image-generation-via-codex/SKILL.md` (папку создать, если её нет)
    3. Перезапусти Claude Code — он сам подхватит скилл и начнёт использовать его автоматически, когда попросишь картинку

!!! note "Для человека-читателя"
    Этот файл написан для Claude Code — технический reference. Если ты читаешь глазами и хочешь понять **как это работает и зачем** — начни со статьи [«Картинки за $20 подписки ChatGPT»](../knowledge/image-gen-via-chatgpt.md). Там человеческим языком.

## Когда использовать этот skill

- Пользователь просит картинку / обложку / мем / иконку / иллюстрацию
- У пользователя есть ChatGPT Plus подписка
- Claude Code работает на macOS/Linux

## Когда НЕ использовать

- У пользователя нет ChatGPT Plus / не залогинен в Codex CLI
- Нужна фотореалистичная генерация (gpt-image-1.5 уровень иллюстрации, не фото)
- Нужен текст на изображении на русском (модель рендерит псевдо-кириллицу)
- Жёстко ограниченное время (одна генерация — 1-3 минуты)

## Предварительные требования (проверить перед первой генерацией)

```bash
# 1. Codex CLI установлен
which codex                    # должен вернуть путь
codex --version                # должен быть >= 0.121.0 (март 2026+)

# 2. Залогинен через ChatGPT OAuth
codex login status             # должен вернуть "Logged in using ChatGPT"

# 3. OPENAI_API_KEY НЕ выставлен в env (иначе перекрывает OAuth)
echo $OPENAI_API_KEY           # должно быть пусто
```

Если что-то не так:

```bash
# Установка
npm install -g @openai/codex
# или: brew install --cask codex

# Логин (откроется браузер)
codex login

# Убрать API_KEY если выставлен
unset OPENAI_API_KEY
# плюс убрать из ~/.zshrc, ~/.bashrc если там есть
```

## Обязательные флаги генерации

```bash
cd /tmp/codex-clean                               # ASCII-only рабочая папка (см. ниже)
codex exec \
  --enable image_generation \                     # КРИТИЧНО: без этого флага уходит в fallback и просит API key
  --full-auto \                                   # авто-одобрение действий
  --skip-git-repo-check \                         # не требовать git репо в cwd
  --image=/path/to/reference.png \                # опц: референс-картинка для удержания облика персонажа
  '$imagegen <prompt>. Save as /abs/path/out.png. Size 1536x1024 landscape.'
```

### Важный нюанс про `-i` / `--image`

Флаг `-i` **многоаргументный** (`<FILE>...`) и может «съесть» позиционный PROMPT, если идёт прямо перед ним. Симптом: `No prompt provided via stdin.` и Codex зависает. 

**Фикс — использовать форму `--image=<path>`** (через знак равенства) вместо `-i <path>`. Тогда промпт гарантированно останется позиционным.

### Когда использовать референс

Если у проекта есть канонический персонаж (аватар / маскот бренда) — **всегда передавай его как референс**. Это сохранит узнаваемый облик через разные сцены. Модель берёт с референса форму головы, аксессуары (очки, одежду), освещение лица — и рисует **того же персонажа** в новой обстановке.

Примеры когда референс обязателен:
- Hero-обложки статей / постов
- Портреты персонажа в разных ситуациях
- Любые новые картинки, где персонаж — в центре кадра

### Ключевые элементы промпта

- **`$imagegen`** в начале — триггер image-gen skill'а Codex
- **`Save as /abs/path/out.png`** — абсолютный путь куда сохранить (Codex копирует из `~/.codex/generated_images/<uuid>/`)
- **`Size WxH`** — `1024x1024` для квадрата, `1536x1024` для landscape
- **`NO readable text on image`** — обязательно, иначе модель рендерит псевдо-шрифт на русском

## Критичные грабли (ловушки)

### 1. Кириллица в пути workspace ломает websocket

**Симптом:** `ERROR: Reconnecting... X/5`, `failed to convert header 'x-codex-turn-metadata'`, задача падает.

**Причина:** Codex передаёт cwd в HTTP-заголовке. Non-ASCII (кириллица, иероглифы) ломают UTF-8 encoding headers.

**Фикс:** всегда работать в ASCII-only папке:

```bash
mkdir -p /tmp/codex-clean
cd /tmp/codex-clean
codex exec ...
```

Результат копируется в нужное место через `Save as /abs/path/`.

### 2. `OPENAI_API_KEY` молча перекрывает OAuth

**Симптом:** Codex просит API-ключ, говорит «нужен биллинг для image-gen».

**Причина:** issue #15151 — если env содержит `OPENAI_API_KEY` (даже с нулевым балансом), Codex использует его вместо ChatGPT OAuth, а через API gpt-image-1.5 платный.

**Фикс:** `unset OPENAI_API_KEY` перед запуском, проверить `~/.zshrc` / `~/.bashrc`.

### 3. Feature flag `image_generation` отключён в `codex exec` по умолчанию

**Симптом:** `The 'imagegen' skill requires the built-in 'image_gen' tool... Use the imagegen CLI fallback?`

**Фикс:** всегда добавлять `--enable image_generation` в `codex exec`.

## Правила генерации

### Правило 1 — Если пользователь ПРОСИТ выбор — делай несколько вариантов параллельно

Если пользователь просит **картинку для согласования** / «покажи варианты» / «какая лучше» — генерируй **2-3 версии одновременно в background**, с разными формулировками промпта. Пользователь выбирает, ты финализируешь.

```bash
# Паттерн: 3 варианта параллельно
codex exec --enable image_generation --full-auto --skip-git-repo-check '$imagegen PROMPT_VARIANT_A. Save as v1.png. Size 1024x1024.' > v1.log 2>&1 &
codex exec --enable image_generation --full-auto --skip-git-repo-check '$imagegen PROMPT_VARIANT_B. Save as v2.png. Size 1024x1024.' > v2.log 2>&1 &
codex exec --enable image_generation --full-auto --skip-git-repo-check '$imagegen PROMPT_VARIANT_C. Save as v3.png. Size 1024x1024.' > v3.log 2>&1 &
```

Варианты должны отличаться **композицией / ракурсом / акцентом**, не только «перегенерировать тот же промпт».

### Правило 2 — Если пользователь доверил тебе — генерируй до результата

Если пользователь **не уточнил** детали и доверяет тебе («сделай картинку для X») — генерируй столько вариантов, пока сам не будешь доволен QA-чеклистом.

**Подписка, не токены.** Нет стоимости за генерацию. Лимиты по квоте ChatGPT Plus — если упёрлись, подождать пока обновятся (обычно 1-6 часов). Не экономить на количестве попыток.

### Правило 3 — Обязательный QA после генерации

Каждую сгенерированную картинку прочти через `Read` tool и прогони чеклист:

- [ ] **Количество объектов** соответствует промпту (если «3 ножа» — ровно 3, не 2+«декоративный»)
- [ ] **Нет лишних конечностей** (третьей руки, двух голов, двойных глаз)
- [ ] **Нет объектов, воткнутых в персонажа** (ноут в голове, чашка в плече)
- [ ] **Читаемого неправильного текста нет** (если появилась псевдо-кириллица — перегенерить)
- [ ] **Композиция читается** — главный объект виден, не перекрыт
- [ ] **Палитра/настроение** соответствуют заказу
- [ ] **Альт-текст картинки можно написать с первого взгляда** (если не можешь — композиция плохая)

**Если ≥1 критичный пункт не прошёл — перегенерируй, не пытайся замазать.**

### Правило 4 — Если не указан персонаж / стиль — спроси или возьми дефолт

Перед генерацией уточни:
- **Формат:** квадрат (1024×1024) или landscape (1536×1024)
- **Тип:** обложка / мем / иконка / схема
- **Стиль:** фото / иллюстрация / мем / editorial-punk
- **Персонаж:** есть ли фирменный персонаж (у проекта @agentezh — Ёж с канонами)

Если проект имеет `docs/marketing/visual-style.md` — **читать его первым**, там стиль проекта.

## Типовой рабочий цикл

```
1. User: «Сгенери обложку для гайда про X»
2. Ты (Claude Code):
   - Уточнить: формат? 1 или 2-3 варианта?
   - Прочитать visual-style.md проекта (если есть)
   - Составить промпт по шаблону
   - Запустить: cd /tmp/codex-clean && codex exec ... (в background если параллель)
   - Ждать: until [ -f output.png ]; do sleep 5; done
   - Прочитать результат через Read
   - Прогнать QA-чеклист
   - Если провал — перегенерировать с уточнением
   - Если успех — скопировать в целевую папку проекта
3. Показать пользователю
4. Если пользователь говорит «круто» — зафиксировать промпт в архив проекта
5. Если «не то» — перегенерировать по его правкам
```

## Типовые промпт-шаблоны

### Обложка-настроение

```
$imagegen Editorial-style hero illustration: <character/scene description>. 
Background: <environment> with <lighting>.
Style: <grainy magazine-cover / clean vector / photorealistic>.
Color: <palette>.
NO readable text on image.
Size 1536x1024 landscape. Save as cover.png.
```

### Мем split-frame (сравнение)

```
$imagegen Meme illustration split in two halves vertically. 
LEFT HALF: <state A> — <mood A>, <lighting A>.
RIGHT HALF: <state B> — <mood B>, <lighting B>.
Same <character/object> in both halves for clarity.
<style>.
NO readable text on image (captions added separately by caller).
Size 1536x1024 landscape. Save as <name>.png.
```

### Комикс-полоса (процесс в 3 панели)

```
$imagegen Comic-style illustration in 3 horizontal panels in one frame.
LEFT panel: <step 1 — action A>.
MIDDLE panel: <step 2 — action B>.
RIGHT panel: <step 3 — action C>.
Arrows between panels indicating flow.
<style consistent across panels>.
Same character in all three for continuity.
NO readable text except <optional short English word if critical>.
Size 1536x1024 landscape. Save as <name>.png.
```

### Ситуация-метафора (объяснение через бытовой образ)

```
$imagegen Humorous illustration: <character> doing <metaphorical action> 
with <bytовой object> to represent <abstract concept>. 
<environment> setting, <lighting>.
<style> with <texture>.
NO readable text except <short label if critical to concept>.
Size 1024x1024 square. Save as <name>.png.
```

## Ограничения image-gen (что НЕ получится)

- **Читаемый русский текст** — псевдо-кириллица. Используй английский для коротких слов (YouTube, MCP, OK) либо добавляй русский text markdown'ом поверх.
- **Точное количество мелких объектов** (10+) — модель проигнорирует, нарисует «много».
- **Фотореалистичные лица реальных людей** — OpenAI фильтрует или выдаёт пластиковое подобие.
- **Конкретные логотипы компаний** — обычно защищены, рендерятся криво.
- **Длинные последовательные сцены** (4+ панелей) — смазывает консистентность.
- **Очень сложная композиция** (много персонажей, перспектива с 10+ объектами) — каша.

## Инструкция для пользователя (ссылка на нашу статью)

Подробная статья-инструкция с нашим опытом: [ai-setup-guide: генерация картинок через Codex CLI](https://omiusgm.github.io/ai-setup-guide/) (точный URL — после публикации).

GitHub Issue tracker для проблем с Codex image-gen: https://github.com/openai/codex/issues

## Связанные файлы в проектах

Если этот skill используется в проекте @agentezh (проект Ёж):
- `docs/marketing/visual-style.md` — визуальный стайлгайд персонажа
- `docs/marketing/visual-prompts-archive.md` — архив рабочих промптов
- `docs/marketing/codex-cli-notes.md` — расширенные технические заметки
- `.claude/agents/designer.md` — роль Ежа-Дизайнера

В других проектах — аналогичные файлы создавай по мере накопления опыта.
