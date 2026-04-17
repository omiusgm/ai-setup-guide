---
title: "3 варианта top-nav — на глаз"
hide:
  - navigation
  - toc
---

<style>
.nv-wrap { max-width: 1200px; margin: 2rem auto; padding: 0 1rem; }
.nv-label { display:inline-block; padding:0.4rem 1rem; background:#7c3aed; color:#fff; font-weight:700; border-radius:8px; margin-bottom:0.6rem; letter-spacing:0.05em; font-size:0.85rem; }
.nv-name { font-size:1.5rem; font-weight:800; margin:0.3rem 0; letter-spacing:-0.02em; }
.nv-tagline { color: var(--md-default-fg-color--light); margin-bottom:1rem; font-size:0.95rem; }
.nv-frame { background:#fff; border:1px solid rgba(0,0,0,0.1); border-radius:14px; padding:0; box-shadow: 0 12px 48px rgba(0,0,0,0.08); margin-bottom:3rem; overflow:hidden; }
[data-md-color-scheme="slate"] .nv-frame { background: #1e1e2e; border-color: rgba(255,255,255,0.08); }

/* ===== Общий header Material ===== */
.mat-header { background:#7c3aed; color:#fff; display:grid; grid-template-columns:auto 1fr auto; align-items:center; gap:1rem; padding:0.8rem 1.2rem; }
.mat-logo { display:flex; align-items:center; gap:0.5rem; font-weight:700; font-size:1rem; }
.mat-search { background:rgba(255,255,255,0.2); padding:0.5rem 0.8rem; border-radius:6px; font-size:0.85rem; }
.mat-icons { display:flex; gap:0.6rem; align-items:center; font-size:0.8rem; }

/* ===== A: Material tabs ===== */
.matA-tabs { background:#7c3aed; display:flex; gap:0; padding:0 1.2rem; border-top:1px solid rgba(255,255,255,0.12); }
.matA-tab { padding:0.8rem 1.3rem; color:rgba(255,255,255,0.85); font-weight:600; font-size:0.9rem; border-bottom:2px solid transparent; }
.matA-tab.active { color:#fff; border-bottom:2px solid #fff; font-weight:700; }
.matA-body { padding:1.5rem 1.2rem; }
.matA-crumbs { color:var(--md-default-fg-color--light); font-size:0.8rem; margin-bottom:0.8rem; }
.matA-h1 { font-size:1.6rem; font-weight:800; margin:0 0 0.3rem; }

/* ===== B: Кастом в шапке ===== */
.matB-header { background:#7c3aed; color:#fff; display:grid; grid-template-columns:auto auto 1fr auto auto; align-items:center; gap:1rem; padding:0.8rem 1.2rem; }
.matB-navbar { display:flex; gap:0.2rem; }
.matB-btn { padding:0.4rem 0.9rem; border-radius:6px; font-size:0.85rem; font-weight:600; color:rgba(255,255,255,0.9); display:inline-flex; align-items:center; gap:0.35rem; }
.matB-btn.active { background:rgba(255,255,255,0.2); color:#fff; }
.matB-badge { background:#f59e0b; color:#fff; font-size:0.65rem; padding:0.1rem 0.35rem; border-radius:10px; font-weight:700; }
.matB-body { padding:1.5rem 1.2rem; }

/* ===== C: Announcement полоска ===== */
.matC-announce { background:#1e1e2e; color:#fff; display:flex; justify-content:center; gap:1.5rem; padding:0.5rem 1rem; font-size:0.8rem; font-weight:600; }
.matC-announce a { color:rgba(255,255,255,0.85); padding:0.1rem 0.6rem; border-radius:4px; }
.matC-announce a.active { background:#7c3aed; color:#fff; }
.matC-body { padding:1.5rem 1.2rem; }

/* Общие карточки-превью */
.preview-cards { display:grid; grid-template-columns:repeat(4,1fr); gap:0.6rem; }
.preview-card { padding:0.8rem; border:1px solid rgba(0,0,0,0.08); border-radius:8px; font-size:0.75rem; }
.preview-card-emoji { font-size:1.2rem; }
.preview-card-name { font-weight:700; font-size:0.82rem; margin-top:0.2rem; }
</style>

<div class="nv-wrap">

<h1 style="text-align:center; margin-bottom:0.3rem;">3 варианта top-nav для 🦔 Ёжхаба</h1>
<p style="text-align:center; color:var(--md-default-fg-color--light); margin-bottom:2.5rem;">Видишь как смотрится шапка сайта в каждом варианте. Сверху — сам header, ниже — превью контента страницы.</p>

<!-- ===== A: Material tabs ===== -->
<span class="nv-label">ВАРИАНТ A · РЕКОМЕНДУЮ</span>
<div class="nv-name">🎯 Material navigation.tabs — нативные вкладки</div>
<div class="nv-tagline">Стандартная фича темы Material. Вкладки под шапкой, прилипают при скролле. Ноль JS, работает везде.</div>

<div class="nv-frame">

<div class="mat-header">
  <div class="mat-logo"><span style="font-size:1.4rem;">🦔</span> Ёжхаб</div>
  <div class="mat-search">🔍 Поиск</div>
  <div class="mat-icons">⚙️ · ☀️ · omiusgm/ai-setup-guide ⭐ 0</div>
</div>

<div class="matA-tabs">
  <div class="matA-tab active">📦 Арсенал</div>
  <div class="matA-tab">📚 Гайды</div>
  <div class="matA-tab">📰 Новости</div>
  <div class="matA-tab">🤔 Куда я попал</div>
</div>

<div class="matA-body">
  <div class="matA-crumbs">Ёжхаб / Арсенал / Агенты</div>
  <div class="matA-h1">🦔 Арсенал</div>
  <p style="color:var(--md-default-fg-color--light); margin:0 0 1rem;">30 инструментов. Steam-style фильтры. Вот последние добавленные:</p>
  <div class="preview-cards">
    <div class="preview-card"><div class="preview-card-emoji">🦸</div><div class="preview-card-name">Superpowers</div><div style="color:#666;">157K⭐</div></div>
    <div class="preview-card"><div class="preview-card-emoji">🎤</div><div class="preview-card-name">WhisperX</div><div style="color:#666;">21K⭐</div></div>
    <div class="preview-card"><div class="preview-card-emoji">🎥</div><div class="preview-card-name">YT Insight</div><div style="color:#666;">Free</div></div>
    <div class="preview-card"><div class="preview-card-emoji">🎙️</div><div class="preview-card-name">Handy</div><div style="color:#666;">20K⭐</div></div>
  </div>
</div>

</div>

<!-- ===== B: Кастом в шапке ===== -->
<span class="nv-label">ВАРИАНТ B</span>
<div class="nv-name">🛠 Кастомные кнопки в шапке + бейджи</div>
<div class="nv-tagline">Вкладки живут прямо в шапке, можно счётчики-бейджи. Компактнее, но кастомного CSS/HTML больше.</div>

<div class="nv-frame">

<div class="matB-header">
  <div class="mat-logo"><span style="font-size:1.4rem;">🦔</span> Ёжхаб</div>
  <div class="matB-navbar">
    <a class="matB-btn active">📦 Арсенал <span class="matB-badge">30</span></a>
    <a class="matB-btn">📚 Гайды <span class="matB-badge">11</span></a>
    <a class="matB-btn">📰 Новости <span class="matB-badge">44</span></a>
  </div>
  <div></div>
  <div class="mat-search">🔍 Поиск</div>
  <div class="mat-icons">☀️ · ⭐ 0</div>
</div>

<div class="matB-body">
  <div class="matA-crumbs">Ёжхаб / Арсенал</div>
  <div class="matA-h1">🦔 Арсенал</div>
  <p style="color:var(--md-default-fg-color--light); margin:0 0 1rem;">Счётчики в шапке говорят сразу: в каталоге 30, в гайдах 11, в ленте 44 поста. Видно что живёт.</p>
  <div class="preview-cards">
    <div class="preview-card"><div class="preview-card-emoji">🦸</div><div class="preview-card-name">Superpowers</div><div style="color:#666;">157K⭐</div></div>
    <div class="preview-card"><div class="preview-card-emoji">🎤</div><div class="preview-card-name">WhisperX</div><div style="color:#666;">21K⭐</div></div>
    <div class="preview-card"><div class="preview-card-emoji">🎥</div><div class="preview-card-name">YT Insight</div><div style="color:#666;">Free</div></div>
    <div class="preview-card"><div class="preview-card-emoji">🎙️</div><div class="preview-card-name">Handy</div><div style="color:#666;">20K⭐</div></div>
  </div>
</div>

</div>

<!-- ===== C: Announcement полоска ===== -->
<span class="nv-label">ВАРИАНТ C</span>
<div class="nv-name">📏 Тонкая announcement-полоска сверху</div>
<div class="nv-tagline">Минималистичная чёрная лента над основной шапкой. Основной header остаётся без изменений.</div>

<div class="nv-frame">

<div class="matC-announce">
  <a class="active">📦 Арсенал</a>
  <a>📚 Гайды</a>
  <a>📰 Новости</a>
  <a>🤔 Куда я попал</a>
</div>

<div class="mat-header">
  <div class="mat-logo"><span style="font-size:1.4rem;">🦔</span> Ёжхаб</div>
  <div class="mat-search">🔍 Поиск</div>
  <div class="mat-icons">⚙️ · ☀️ · omiusgm/ai-setup-guide ⭐ 0</div>
</div>

<div class="matC-body">
  <div class="matA-crumbs">Ёжхаб / Арсенал</div>
  <div class="matA-h1">🦔 Арсенал</div>
  <p style="color:var(--md-default-fg-color--light); margin:0 0 1rem;">Переключение — тонкая полоска сверху. Не отвлекает, но секции всегда под рукой.</p>
  <div class="preview-cards">
    <div class="preview-card"><div class="preview-card-emoji">🦸</div><div class="preview-card-name">Superpowers</div><div style="color:#666;">157K⭐</div></div>
    <div class="preview-card"><div class="preview-card-emoji">🎤</div><div class="preview-card-name">WhisperX</div><div style="color:#666;">21K⭐</div></div>
    <div class="preview-card"><div class="preview-card-emoji">🎥</div><div class="preview-card-name">YT Insight</div><div style="color:#666;">Free</div></div>
    <div class="preview-card"><div class="preview-card-emoji">🎙️</div><div class="preview-card-name">Handy</div><div style="color:#666;">20K⭐</div></div>
  </div>
</div>

</div>

<div style="text-align:center; margin-top:2rem; padding:1.5rem; background:rgba(124,58,237,0.05); border-radius:12px;">
  <div style="font-size:1.1rem; font-weight:700; margin-bottom:0.5rem;">Какой берём?</div>
  <div style="color: var(--md-default-fg-color--light); font-size:0.9rem;">A / B / C или микс («A + бейджи из B», «C но с бейджами»).</div>
</div>

</div>
