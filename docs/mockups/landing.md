---
title: "3 варианта новой главной — на глаз"
hide:
  - navigation
  - toc
---

<style>
.mock-wrap { max-width: 1100px; margin: 2rem auto; padding: 0 1rem; }
.mock-label { display:inline-block; padding:0.4rem 1rem; background:#7c3aed; color:#fff; font-weight:700; border-radius:8px; margin-bottom:0.6rem; letter-spacing:0.05em; font-size:0.85rem; }
.mock-name { font-size:1.5rem; font-weight:800; margin:0.3rem 0; letter-spacing:-0.02em; }
.mock-tagline { color: var(--md-default-fg-color--light); margin-bottom:1.2rem; font-size:0.95rem; }
.mock-frame { background:#fff; border:1px solid rgba(0,0,0,0.08); border-radius:14px; padding:1.5rem 1.4rem; box-shadow: 0 12px 48px rgba(0,0,0,0.08); margin-bottom:3rem; overflow:hidden; }
[data-md-color-scheme="slate"] .mock-frame { background: #1e1e2e; border-color: rgba(255,255,255,0.08); }

/* === A: Минималист === */
.mockA-hero { text-align:center; padding:2rem 1rem 1rem; }
.mockA-hero h1 { font-size:2rem; margin:0.2rem 0; font-weight:800; letter-spacing:-0.02em; }
.mockA-hero p { color: var(--md-default-fg-color--light); margin:0.3rem 0 1rem; }
.mockA-buttons { display:flex; gap:0.6rem; justify-content:center; }
.mockA-btn { padding:0.5rem 1.2rem; border-radius:8px; font-weight:600; font-size:0.85rem; }
.mockA-btn-prim { background:#7c3aed; color:#fff; }
.mockA-btn-sec { background:transparent; color:#7c3aed; border:1px solid #7c3aed; }
.mockA-section { padding:1.2rem 0; border-top:1px dashed rgba(124,58,237,0.2); }
.mockA-h { font-size:1.3rem; font-weight:800; margin-bottom:0.8rem; }
.mockA-cards { display:grid; grid-template-columns:repeat(3,1fr); gap:0.6rem; }
.mockA-card { padding:0.8rem; border:1px solid rgba(0,0,0,0.08); border-radius:8px; font-size:0.8rem; }
.mockA-guide { display:grid; grid-template-columns:2fr 1fr; gap:1rem; }
.mockA-guide-big { background:linear-gradient(135deg,#7c3aed 0%,#a78bfa 100%); color:#fff; padding:1.2rem; border-radius:10px; }
.mockA-guide-list { display:flex; flex-direction:column; gap:0.4rem; }
.mockA-guide-item { padding:0.6rem 0.8rem; background:rgba(124,58,237,0.05); border-radius:6px; font-size:0.85rem; }
.mockA-news { display:flex; flex-direction:column; gap:0.5rem; }
.mockA-post { padding:0.7rem 0.9rem; border-left:3px solid #7c3aed; background:rgba(124,58,237,0.04); font-size:0.85rem; border-radius:0 6px 6px 0; }
.mockA-post-meta { font-size:0.7rem; color: var(--md-default-fg-color--light); margin-top:0.2rem; }

/* === B: Магазинный === */
.mockB-banner { background:linear-gradient(135deg,#7c3aed 0%,#5b21b6 100%); color:#fff; padding:2rem; border-radius:12px; margin-bottom:1.2rem; display:grid; grid-template-columns:auto 1fr; gap:1.2rem; align-items:center; }
.mockB-banner-emoji { font-size:3.5rem; }
.mockB-banner-name { font-weight:800; font-size:1.4rem; }
.mockB-banner-tag { font-size:0.85rem; opacity:0.85; margin:0.3rem 0 0.5rem; }
.mockB-banner-stats { font-size:0.75rem; opacity:0.7; }
.mockB-row { margin-bottom:1.2rem; }
.mockB-row-h { font-size:0.95rem; font-weight:800; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em; color: var(--md-default-fg-color--light); }
.mockB-carousel { display:flex; gap:0.6rem; overflow-x:auto; padding-bottom:0.5rem; }
.mockB-mini { flex:0 0 130px; padding:0.7rem; border:1px solid rgba(0,0,0,0.08); border-radius:8px; font-size:0.75rem; }
.mockB-mini-emoji { font-size:1.5rem; }
.mockB-mini-name { font-weight:700; margin:0.2rem 0; font-size:0.85rem; }
.mockB-cat-row { display:grid; grid-template-columns:repeat(4,1fr); gap:0.5rem; }
.mockB-cat { padding:1rem 0.5rem; text-align:center; background:rgba(124,58,237,0.05); border-radius:8px; font-size:0.8rem; }
.mockB-ticker { background:#1e1e2e; color:#fff; padding:0.7rem 1rem; border-radius:8px; font-size:0.8rem; display:flex; gap:1rem; }
.mockB-ticker-label { background:#7c3aed; padding:0.15rem 0.5rem; border-radius:4px; font-weight:700; font-size:0.65rem; text-transform:uppercase; }

/* === C: Лента === */
.mockC-tabs { display:flex; gap:0.4rem; margin-bottom:1rem; border-bottom:1px solid rgba(0,0,0,0.08); padding-bottom:0.6rem; }
.mockC-tab { padding:0.5rem 1rem; border-radius:6px; font-size:0.8rem; cursor:pointer; }
.mockC-tab.active { background:#7c3aed; color:#fff; font-weight:700; }
.mockC-tab.inactive { background:rgba(0,0,0,0.04); color: var(--md-default-fg-color--light); }
.mockC-feed { display:flex; flex-direction:column; gap:0.6rem; }
.mockC-item { display:grid; grid-template-columns:auto 1fr auto; gap:1rem; padding:0.9rem 1rem; border:1px solid rgba(0,0,0,0.06); border-radius:8px; align-items:center; }
.mockC-icon { font-size:1.5rem; }
.mockC-title { font-weight:700; font-size:0.9rem; }
.mockC-meta { font-size:0.7rem; color: var(--md-default-fg-color--light); margin-top:0.15rem; }
.mockC-tag { padding:0.2rem 0.5rem; border-radius:4px; font-size:0.65rem; font-weight:700; }
.mockC-tag-tool { background:#dbeafe; color:#1e40af; }
.mockC-tag-guide { background:#dcfce7; color:#166534; }
.mockC-tag-news { background:#fef3c7; color:#92400e; }
[data-md-color-scheme="slate"] .mockC-tag-tool { background:rgba(59,130,246,0.2); color:#93c5fd; }
[data-md-color-scheme="slate"] .mockC-tag-guide { background:rgba(34,197,94,0.2); color:#86efac; }
[data-md-color-scheme="slate"] .mockC-tag-news { background:rgba(234,179,8,0.2); color:#fde047; }
</style>

<div class="mock-wrap">

<h1 style="text-align:center; margin-bottom:0.3rem;">3 варианта новой главной 🦔 Ёжхаба</h1>
<p style="text-align:center; color:var(--md-default-fg-color--light); margin-bottom:2.5rem;">Скрол вниз. Решай на глаз. Каждый мокап в своей рамке.</p>

<!-- ===== A: Минималист ===== -->
<span class="mock-label">ВАРИАНТ A · РЕКОМЕНДУЮ</span>
<div class="mock-name">🍎 Минималист (Stripe / Linear style)</div>
<div class="mock-tagline">Hero → 3 равновесные секции одной длины. Чисто, фокусно, быстро.</div>

<div class="mock-frame">

<div class="mockA-hero">
  <div style="font-size:3rem;">🦔</div>
  <h1>Ёжхаб</h1>
  <p>Всё про ИИ из РФ — каталог, гайды, новости</p>
  <div class="mockA-buttons">
    <span class="mockA-btn mockA-btn-prim">Начать с нуля →</span>
    <span class="mockA-btn mockA-btn-sec">Я уже в теме →</span>
  </div>
</div>

<div class="mockA-section">
<div class="mockA-h">📦 Свежее в каталоге</div>
<div class="mockA-cards">
  <div class="mockA-card"><strong>🦸 Superpowers</strong><br><span style="color:#666;font-size:0.7rem;">157K⭐ · Автономный код</span></div>
  <div class="mockA-card"><strong>🎙️ Handy</strong><br><span style="color:#666;font-size:0.7rem;">20K⭐ · Голос → текст</span></div>
  <div class="mockA-card"><strong>🎥 YouTube Insight</strong><br><span style="color:#666;font-size:0.7rem;">Free · Видео → разбор</span></div>
  <div class="mockA-card"><strong>🎤 Транскрибация</strong><br><span style="color:#666;font-size:0.7rem;">5 способов</span></div>
  <div class="mockA-card"><strong>🔥 Firecrawl</strong><br><span style="color:#666;font-size:0.7rem;">110K⭐ · Скрапинг</span></div>
  <div class="mockA-card"><strong>📄 Pretty-Docs</strong><br><span style="color:#666;font-size:0.7rem;">Skill · Доки в Google</span></div>
</div>
</div>

<div class="mockA-section">
<div class="mockA-h">📚 Свежий гайд</div>
<div class="mockA-guide">
  <div class="mockA-guide-big">
    <div style="font-size:0.7rem;letter-spacing:0.1em;text-transform:uppercase;opacity:0.85;">ГАЙД НЕДЕЛИ</div>
    <div style="font-size:1.3rem;font-weight:800;margin:0.5rem 0;">10 правил вайбкодинга</div>
    <div style="opacity:0.85;font-size:0.85rem;">Грабли на которые наступают все. Чат закончил → новый. Git твои сейвы. Сначала план.</div>
  </div>
  <div class="mockA-guide-list">
    <div class="mockA-guide-item">🇷🇺 Россия: VPN и оплата</div>
    <div class="mockA-guide-item">💰 Бюджет: $0 → $200</div>
    <div class="mockA-guide-item">🎭 Мифы про ИИ</div>
    <div class="mockA-guide-item">📊 4 уровня ИИ</div>
  </div>
</div>
</div>

<div class="mockA-section">
<div class="mockA-h">📰 Из канала @agentezh</div>
<div class="mockA-news">
  <div class="mockA-post">
    <strong>Opus 4.7 вышел. Reddit в бешенстве</strong>
    <div class="mockA-post-meta">17 апреля · #еженовости · 234 просмотра</div>
  </div>
  <div class="mockA-post">
    <strong>Хватит ебаться с установкой (Docker MCP)</strong>
    <div class="mockA-post-meta">15 апреля · #ежефишечка · 187 просмотров</div>
  </div>
  <div class="mockA-post">
    <strong>Помнишь рилсы где армия агентов</strong>
    <div class="mockA-post-meta">14 апреля · #еженовости · 156 просмотров</div>
  </div>
</div>
</div>

</div>

<!-- ===== B: Магазинный ===== -->
<span class="mock-label">ВАРИАНТ B</span>
<div class="mock-name">🛍 Магазинный (Apple App Store / Google Play)</div>
<div class="mock-tagline">Большой featured-баннер + горизонтальные ряды-карусели. Много контента в экране.</div>

<div class="mock-frame">

<div class="mockB-banner">
  <div class="mockB-banner-emoji">🦸</div>
  <div>
    <div style="font-size:0.7rem;letter-spacing:0.1em;text-transform:uppercase;opacity:0.7;">ИНСТРУМЕНТ НЕДЕЛИ</div>
    <div class="mockB-banner-name">Superpowers</div>
    <div class="mockB-banner-tag">Методология G3 для Claude Code: код пишется сам, ИИ проверяет ИИ. 2-3 часа без тебя.</div>
    <div class="mockB-banner-stats">⭐ 157 027 · 16 апреля</div>
  </div>
</div>

<div class="mockB-row">
<div class="mockB-row-h">🏆 Топ скачиваний</div>
<div class="mockB-carousel">
  <div class="mockB-mini"><div class="mockB-mini-emoji">⚙️</div><div class="mockB-mini-name">n8n</div><span style="color:#666;">184K⭐</span></div>
  <div class="mockB-mini"><div class="mockB-mini-emoji">🔧</div><div class="mockB-mini-name">Everything CC</div><span style="color:#666;">158K⭐</span></div>
  <div class="mockB-mini"><div class="mockB-mini-emoji">🔥</div><div class="mockB-mini-name">Firecrawl</div><span style="color:#666;">110K⭐</span></div>
  <div class="mockB-mini"><div class="mockB-mini-emoji">🖱️</div><div class="mockB-mini-name">Browser Use</div><span style="color:#666;">88K⭐</span></div>
  <div class="mockB-mini"><div class="mockB-mini-emoji">🎙️</div><div class="mockB-mini-name">Handy</div><span style="color:#666;">20K⭐</span></div>
  <div class="mockB-mini"><div class="mockB-mini-emoji">🔌</div><div class="mockB-mini-name">Composio</div><span style="color:#666;">28K⭐</span></div>
</div>
</div>

<div class="mockB-row">
<div class="mockB-row-h">🦔 Must-have от Ежа</div>
<div class="mockB-carousel">
  <div class="mockB-mini"><div class="mockB-mini-emoji">🦸</div><div class="mockB-mini-name">Superpowers</div></div>
  <div class="mockB-mini"><div class="mockB-mini-emoji">🎥</div><div class="mockB-mini-name">YouTube Insight</div></div>
  <div class="mockB-mini"><div class="mockB-mini-emoji">🎙️</div><div class="mockB-mini-name">Handy</div></div>
  <div class="mockB-mini"><div class="mockB-mini-emoji">🗣️</div><div class="mockB-mini-name">Caveman</div></div>
  <div class="mockB-mini"><div class="mockB-mini-emoji">📄</div><div class="mockB-mini-name">Pretty-Docs</div></div>
  <div class="mockB-mini"><div class="mockB-mini-emoji">🧠</div><div class="mockB-mini-name">Handoff</div></div>
</div>
</div>

<div class="mockB-row">
<div class="mockB-row-h">📂 Категории</div>
<div class="mockB-cat-row">
  <div class="mockB-cat">🤖 Агенты</div>
  <div class="mockB-cat">🧠 Память</div>
  <div class="mockB-cat">⚡ Автоматизация</div>
  <div class="mockB-cat">🔌 Интеграции</div>
</div>
</div>

<div class="mockB-row">
<div class="mockB-row-h">📚 Гайд недели</div>
<div style="padding:1rem; border:1px solid rgba(124,58,237,0.2); border-radius:8px; background: rgba(124,58,237,0.04);">
  <strong style="font-size:1rem;">10 правил вайбкодинга</strong><br>
  <span style="font-size:0.8rem; color: var(--md-default-fg-color--light);">Грабли которые ловят всех новичков.</span>
</div>
</div>

<div class="mockB-row">
<div class="mockB-row-h">📰 Лента канала</div>
<div class="mockB-ticker">
  <span class="mockB-ticker-label">Сейчас</span>
  <span>Opus 4.7 вышел. Reddit в бешенстве — почему «вернули нормальный 4.6»</span>
</div>
</div>

</div>

<!-- ===== C: Лента ===== -->
<span class="mock-label">ВАРИАНТ C</span>
<div class="mock-name">📰 Лента (Reddit / Hacker News)</div>
<div class="mock-tagline">Хронологическая лента всего что произошло за неделю с табами фильтрации.</div>

<div class="mock-frame">

<div class="mockA-hero" style="padding:1rem 1rem 0.5rem;">
  <h1 style="font-size:1.6rem;">🦔 Ёжхаб · что нового</h1>
  <p style="font-size:0.85rem;">Всё за неделю в одной ленте</p>
</div>

<div class="mockC-tabs">
  <span class="mockC-tab active">🔥 Всё</span>
  <span class="mockC-tab inactive">📦 Каталог</span>
  <span class="mockC-tab inactive">📚 Гайды</span>
  <span class="mockC-tab inactive">📰 Новости</span>
</div>

<div class="mockC-feed">
  <div class="mockC-item">
    <div class="mockC-icon">📰</div>
    <div>
      <div class="mockC-title">Opus 4.7 вышел. Reddit в бешенстве</div>
      <div class="mockC-meta">17 апр · @agentezh · 234 просмотра</div>
    </div>
    <span class="mockC-tag mockC-tag-news">НОВОСТЬ</span>
  </div>
  <div class="mockC-item">
    <div class="mockC-icon">🎤</div>
    <div>
      <div class="mockC-title">Транскрибация аудио — 5 способов от бесплатного до локального</div>
      <div class="mockC-meta">17 апр · добавлено в каталог · WhisperX 21K⭐</div>
    </div>
    <span class="mockC-tag mockC-tag-tool">ИНСТРУМЕНТ</span>
  </div>
  <div class="mockC-item">
    <div class="mockC-icon">🎥</div>
    <div>
      <div class="mockC-title">YouTube Insight — кидаешь ссылку, ИИ смотрит видео</div>
      <div class="mockC-meta">17 апр · добавлено в каталог · Free</div>
    </div>
    <span class="mockC-tag mockC-tag-tool">ИНСТРУМЕНТ</span>
  </div>
  <div class="mockC-item">
    <div class="mockC-icon">📚</div>
    <div>
      <div class="mockC-title">Обновления моделей: Opus 4.7 + подорожание токенов 35%</div>
      <div class="mockC-meta">17 апр · обновлён гайд</div>
    </div>
    <span class="mockC-tag mockC-tag-guide">ГАЙД</span>
  </div>
  <div class="mockC-item">
    <div class="mockC-icon">📰</div>
    <div>
      <div class="mockC-title">Хватит ебаться с установкой (Docker MCP)</div>
      <div class="mockC-meta">15 апр · @agentezh · 187 просмотров</div>
    </div>
    <span class="mockC-tag mockC-tag-news">НОВОСТЬ</span>
  </div>
  <div class="mockC-item">
    <div class="mockC-icon">🦸</div>
    <div>
      <div class="mockC-title">Superpowers — добавлен в каталог как must-have</div>
      <div class="mockC-meta">15 апр · добавлено в каталог · 157K⭐</div>
    </div>
    <span class="mockC-tag mockC-tag-tool">ИНСТРУМЕНТ</span>
  </div>
</div>

</div>

<div style="text-align:center; margin-top:2rem; padding:1.5rem; background:rgba(124,58,237,0.05); border-radius:12px;">
  <div style="font-size:1.1rem; font-weight:700; margin-bottom:0.5rem;">Какой берём?</div>
  <div style="color: var(--md-default-fg-color--light); font-size:0.9rem;">Скажи буквой или микс (например «A с лентой из C снизу»). Можно сказать что в каждом нравится / бесит — соберу финал.</div>
</div>

</div>
