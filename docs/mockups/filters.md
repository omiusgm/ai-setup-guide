---
title: "3 варианта фильтров в Арсенале — на глаз"
hide:
  - navigation
  - toc
---

<style>
.filt-wrap { max-width: 1100px; margin: 2rem auto; padding: 0 1rem; }
.filt-label { display:inline-block; padding:0.4rem 1rem; background:#7c3aed; color:#fff; font-weight:700; border-radius:8px; margin-bottom:0.6rem; letter-spacing:0.05em; font-size:0.85rem; }
.filt-name { font-size:1.5rem; font-weight:800; margin:0.3rem 0; letter-spacing:-0.02em; }
.filt-tagline { color: var(--md-default-fg-color--light); margin-bottom:1.2rem; font-size:0.95rem; }
.filt-frame { background:#fff; border:1px solid rgba(0,0,0,0.08); border-radius:14px; padding:1.5rem 1.4rem; box-shadow: 0 12px 48px rgba(0,0,0,0.08); margin-bottom:3rem; }
[data-md-color-scheme="slate"] .filt-frame { background: #1e1e2e; border-color: rgba(255,255,255,0.08); }

/* Общие карточки-миниатюры */
.mini-cards { display:grid; grid-template-columns:repeat(4,1fr); gap:0.6rem; }
.mini-card { padding:0.8rem; border:1px solid rgba(0,0,0,0.08); border-radius:8px; font-size:0.8rem; }
.mini-card-emoji { font-size:1.5rem; margin-bottom:0.3rem; }
.mini-card-name { font-weight:700; font-size:0.85rem; }
.mini-card-meta { color:#666; font-size:0.7rem; margin-top:0.15rem; }
[data-md-color-scheme="slate"] .mini-card-meta { color: rgba(255,255,255,0.5); }

/* === A: Steam-style === */
.steam-topbar { display:grid; grid-template-columns:1fr auto; gap:0.6rem; margin-bottom:0.8rem; }
.steam-search { padding:0.6rem 1rem; border:1px solid rgba(0,0,0,0.1); border-radius:8px; background:rgba(0,0,0,0.02); font-size:0.9rem; }
[data-md-color-scheme="slate"] .steam-search { background:rgba(255,255,255,0.05); border-color:rgba(255,255,255,0.08); }
.steam-sort { padding:0.6rem 1rem; border:1px solid rgba(0,0,0,0.1); border-radius:8px; background:rgba(0,0,0,0.02); font-size:0.85rem; }
[data-md-color-scheme="slate"] .steam-sort { background:rgba(255,255,255,0.05); border-color:rgba(255,255,255,0.08); }
.steam-tags { display:flex; flex-wrap:wrap; gap:0.35rem; margin-bottom:0.8rem; padding:0.7rem; background:rgba(124,58,237,0.04); border-radius:8px; }
.steam-chip { padding:0.25rem 0.7rem; background:rgba(0,0,0,0.04); border-radius:20px; font-size:0.75rem; border:1px solid transparent; }
[data-md-color-scheme="slate"] .steam-chip { background:rgba(255,255,255,0.06); }
.steam-chip.active { background:#7c3aed; color:#fff; font-weight:600; }
.steam-active-row { display:flex; gap:0.4rem; margin-bottom:0.8rem; align-items:center; font-size:0.8rem; }
.steam-active-label { color: var(--md-default-fg-color--light); }
.steam-reset { color:#7c3aed; font-weight:600; cursor:pointer; margin-left:auto; font-size:0.8rem; }

/* === B: Магазинный сайдбар === */
.shop-layout { display:grid; grid-template-columns:200px 1fr; gap:1rem; }
.shop-sidebar { padding:0.8rem; background:rgba(124,58,237,0.04); border-radius:8px; font-size:0.8rem; }
.shop-group { margin-bottom:1rem; }
.shop-group-h { font-weight:800; text-transform:uppercase; font-size:0.7rem; letter-spacing:0.06em; margin-bottom:0.4rem; color:var(--md-default-fg-color--light); }
.shop-check { display:flex; align-items:center; gap:0.5rem; padding:0.2rem 0; font-size:0.8rem; }
.shop-check input { accent-color:#7c3aed; }
.shop-count { color: var(--md-default-fg-color--light); font-size:0.7rem; margin-left:auto; }
.shop-right { display:flex; flex-direction:column; gap:0.6rem; }
.shop-sort-bar { display:flex; gap:0.5rem; justify-content:space-between; align-items:center; padding:0.5rem 0.8rem; background:rgba(0,0,0,0.03); border-radius:6px; font-size:0.8rem; }
[data-md-color-scheme="slate"] .shop-sort-bar { background:rgba(255,255,255,0.04); }

/* === C: Минимальный === */
.min-toggle-row { display:flex; gap:0.5rem; justify-content:center; margin-bottom:0.8rem; }
.min-toggle { padding:0.6rem 1.3rem; border-radius:10px; background:rgba(0,0,0,0.04); font-size:0.9rem; font-weight:600; cursor:pointer; }
[data-md-color-scheme="slate"] .min-toggle { background:rgba(255,255,255,0.05); }
.min-toggle.active { background:#7c3aed; color:#fff; }
.min-search-row { display:grid; grid-template-columns:1fr auto; gap:0.6rem; margin-bottom:1rem; }

</style>

<div class="filt-wrap">

<h1 style="text-align:center; margin-bottom:0.3rem;">3 варианта фильтров в 🦔 Арсенале</h1>
<p style="text-align:center; color:var(--md-default-fg-color--light); margin-bottom:2.5rem;">Скрол вниз. Решай на глаз.</p>

<!-- ===== A: Steam-style ===== -->
<span class="filt-label">ВАРИАНТ A · РЕКОМЕНДУЮ</span>
<div class="filt-name">🎮 Steam-style — облако тегов</div>
<div class="filt-tagline">Поиск + сортировка сверху, облако кликабельных тегов, лента карточек внизу. Клик тег = фильтр, несколько тегов = AND.</div>

<div class="filt-frame">

<div class="steam-topbar">
  <div class="steam-search">🔍 поиск по названию, описанию, тегам…</div>
  <div class="steam-sort">Сортировать: ⭐ по звёздам ▾</div>
</div>

<div class="steam-tags">
  <span class="steam-chip active">бесплатно ✕</span>
  <span class="steam-chip active">из-рф ✕</span>
  <span class="steam-chip">mcp</span>
  <span class="steam-chip">агент</span>
  <span class="steam-chip">голос</span>
  <span class="steam-chip">видео</span>
  <span class="steam-chip">транскрибация</span>
  <span class="steam-chip">crm</span>
  <span class="steam-chip">автоматизация</span>
  <span class="steam-chip">память</span>
  <span class="steam-chip">документы</span>
  <span class="steam-chip">локально</span>
  <span class="steam-chip">опытным</span>
  <span class="steam-chip">новичкам</span>
  <span class="steam-chip">бизнесу</span>
  <span class="steam-chip">диаризация</span>
  <span class="steam-chip">whisper</span>
  <span class="steam-chip">youtube</span>
  <span class="steam-chip">gemini</span>
  <span class="steam-chip">экономия</span>
  <span class="steam-chip">player-coach</span>
  <span class="steam-chip">многоагентность</span>
  <span class="steam-chip">официальный</span>
  <span class="steam-chip">открытый-код</span>
  <span class="steam-chip">и ещё 15 ▾</span>
</div>

<div class="steam-active-row">
  <span class="steam-active-label">Активные фильтры: <strong>бесплатно + из-рф</strong> · показано 12 из 30</span>
  <span class="steam-reset">🔄 Сбросить все</span>
</div>

<div class="mini-cards">
  <div class="mini-card"><div class="mini-card-emoji">🎙️</div><div class="mini-card-name">Handy</div><div class="mini-card-meta">20K⭐ · Голос → текст</div></div>
  <div class="mini-card"><div class="mini-card-emoji">🎤</div><div class="mini-card-name">WhisperX</div><div class="mini-card-meta">21K⭐ · Диаризация</div></div>
  <div class="mini-card"><div class="mini-card-emoji">🦢</div><div class="mini-card-name">Goose</div><div class="mini-card-meta">42K⭐ · Агент локально</div></div>
  <div class="mini-card"><div class="mini-card-emoji">🗣️</div><div class="mini-card-name">Caveman</div><div class="mini-card-meta">Skill · Экономия</div></div>
</div>

</div>

<!-- ===== B: Магазинный сайдбар ===== -->
<span class="filt-label">ВАРИАНТ B</span>
<div class="filt-name">🛒 Магазинный сайдбар — как Wildberries / Ozon</div>
<div class="filt-tagline">Слева колонка с группами фильтров (чекбоксы), центр — карточки. Сверху полоса сортировки.</div>

<div class="filt-frame">

<div class="shop-layout">
  <div class="shop-sidebar">
    <div class="shop-group">
      <div class="shop-group-h">Цена</div>
      <label class="shop-check"><input type="checkbox" checked> Бесплатно <span class="shop-count">18</span></label>
      <label class="shop-check"><input type="checkbox"> От $1 до $20 <span class="shop-count">7</span></label>
      <label class="shop-check"><input type="checkbox"> $20+ <span class="shop-count">5</span></label>
    </div>
    <div class="shop-group">
      <div class="shop-group-h">Для кого</div>
      <label class="shop-check"><input type="checkbox"> 💬 Чатбот <span class="shop-count">8</span></label>
      <label class="shop-check"><input type="checkbox" checked> 🤖 Агент <span class="shop-count">22</span></label>
      <label class="shop-check"><input type="checkbox"> Оба <span class="shop-count">6</span></label>
    </div>
    <div class="shop-group">
      <div class="shop-group-h">Категория</div>
      <label class="shop-check"><input type="checkbox"> 🤖 Агенты <span class="shop-count">7</span></label>
      <label class="shop-check"><input type="checkbox"> 🧠 Память <span class="shop-count">3</span></label>
      <label class="shop-check"><input type="checkbox"> ⚡ Автоматизация <span class="shop-count">4</span></label>
      <label class="shop-check"><input type="checkbox"> 🔌 Интеграции <span class="shop-count">7</span></label>
      <label class="shop-check"><input type="checkbox"> 🎨 Контент <span class="shop-count">4</span></label>
    </div>
    <div class="shop-group">
      <div class="shop-group-h">Гео</div>
      <label class="shop-check"><input type="checkbox" checked> Работает из РФ <span class="shop-count">25</span></label>
      <label class="shop-check"><input type="checkbox"> Нужен VPN <span class="shop-count">5</span></label>
    </div>
  </div>

  <div class="shop-right">
    <div class="shop-sort-bar">
      <span>Найдено: <strong>22 инструмента</strong></span>
      <span>Сортировать: ⭐ по звёздам ▾</span>
    </div>
    <div class="mini-cards" style="grid-template-columns:repeat(3,1fr);">
      <div class="mini-card"><div class="mini-card-emoji">🦸</div><div class="mini-card-name">Superpowers</div><div class="mini-card-meta">157K⭐ · Автономный код</div></div>
      <div class="mini-card"><div class="mini-card-emoji">🦢</div><div class="mini-card-name">Goose</div><div class="mini-card-meta">42K⭐ · Агент локально</div></div>
      <div class="mini-card"><div class="mini-card-emoji">🖱️</div><div class="mini-card-name">Browser Use</div><div class="mini-card-meta">88K⭐ · Клики ИИ</div></div>
      <div class="mini-card"><div class="mini-card-emoji">🎙️</div><div class="mini-card-name">Handy</div><div class="mini-card-meta">20K⭐ · Голос</div></div>
      <div class="mini-card"><div class="mini-card-emoji">🎤</div><div class="mini-card-name">WhisperX</div><div class="mini-card-meta">21K⭐ · Диаризация</div></div>
      <div class="mini-card"><div class="mini-card-emoji">🎥</div><div class="mini-card-name">YT Insight</div><div class="mini-card-meta">Free · Видео разбор</div></div>
    </div>
  </div>
</div>

</div>

<!-- ===== C: Минимальный ===== -->
<span class="filt-label">ВАРИАНТ C</span>
<div class="filt-name">🍎 Минимальный — 3 тумблера</div>
<div class="filt-tagline">Только аудитория (чатбот / агент / оба) + поиск + сортировка. Никаких тегов. Просто и чисто.</div>

<div class="filt-frame">

<div class="min-toggle-row">
  <span class="min-toggle">💬 Чатботу</span>
  <span class="min-toggle active">🤖 Агенту</span>
  <span class="min-toggle">Обоим</span>
</div>

<div class="min-search-row">
  <div class="steam-search">🔍 поиск по всему каталогу…</div>
  <div class="steam-sort">⭐ по звёздам ▾</div>
</div>

<div class="mini-cards">
  <div class="mini-card"><div class="mini-card-emoji">🦸</div><div class="mini-card-name">Superpowers</div><div class="mini-card-meta">157K⭐ · Автономный код</div></div>
  <div class="mini-card"><div class="mini-card-emoji">⚙️</div><div class="mini-card-name">n8n</div><div class="mini-card-meta">184K⭐ · Автоматизация</div></div>
  <div class="mini-card"><div class="mini-card-emoji">🔥</div><div class="mini-card-name">Firecrawl</div><div class="mini-card-meta">110K⭐ · Скрапинг</div></div>
  <div class="mini-card"><div class="mini-card-emoji">🦢</div><div class="mini-card-name">Goose</div><div class="mini-card-meta">42K⭐ · Агент</div></div>
  <div class="mini-card"><div class="mini-card-emoji">🖱️</div><div class="mini-card-name">Browser Use</div><div class="mini-card-meta">88K⭐ · Клики</div></div>
  <div class="mini-card"><div class="mini-card-emoji">🎤</div><div class="mini-card-name">WhisperX</div><div class="mini-card-meta">21K⭐ · Транскрибация</div></div>
  <div class="mini-card"><div class="mini-card-emoji">🎙️</div><div class="mini-card-name">Handy</div><div class="mini-card-meta">20K⭐ · Голос</div></div>
  <div class="mini-card"><div class="mini-card-emoji">🔌</div><div class="mini-card-name">Composio</div><div class="mini-card-meta">28K⭐ · 1000+ инт</div></div>
</div>

</div>

<div style="text-align:center; margin-top:2rem; padding:1.5rem; background:rgba(124,58,237,0.05); border-radius:12px;">
  <div style="font-size:1.1rem; font-weight:700; margin-bottom:0.5rem;">Какой берём?</div>
  <div style="color: var(--md-default-fg-color--light); font-size:0.9rem;">A / B / C или микс («A с сайдбаром из B для 'Для кого'»). Скажи что нравится и что бесит.</div>
</div>

</div>
