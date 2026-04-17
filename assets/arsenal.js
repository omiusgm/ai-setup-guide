/* Steam-style фильтры Арсенала.
   Читает arsenal.json, рендерит облако тегов + поиск + сетку карточек.
   Активные теги в URL ?tags=mcp,бесплатно */
(function() {
  const WHITELIST = [
    "бесплатно", "mcp", "агент", "голос", "видео", "транскрибация",
    "crm", "автоматизация", "память", "документы", "локально",
    "опытным", "новичкам", "бизнесу", "диаризация", "whisper",
    "youtube", "gemini", "экономия", "player-coach",
    "многоагентность", "официальный", "открытый-код",
    "vision", "reels", "instagram"
  ];

  const root = document.getElementById("arsenal-root");
  const mustRoot = document.getElementById("arsenal-musthave");
  const hideCheck = document.getElementById("hide-musthave");
  if (!root && !mustRoot) return;

  let data = [];
  let activeTags = new Set();
  let sortBy = "stars";
  let query = "";

  const params = new URLSearchParams(location.search);
  if (params.get("tags")) {
    params.get("tags").split(",").forEach(t => activeTags.add(t));
  }

  // Определяем откуда читать JSON (в зависимости от того куда MkDocs положил)
  const JSON_URLS = [
    "/ai-setup-guide/_data/arsenal.json",
    "/ai-setup-guide/assets/arsenal-data.json",
  ];

  tryLoadJson(JSON_URLS, 0);

  function tryLoadJson(urls, i) {
    if (i >= urls.length) {
      if (root) root.innerHTML = "<p>Не удалось загрузить каталог. Проверь что arsenal.json на сервере.</p>";
      if (mustRoot) mustRoot.innerHTML = "";
      return;
    }
    fetch(urls[i])
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(json => { data = json; render(); })
      .catch(() => tryLoadJson(urls, i + 1));
  }

  function render() {
    // Must-have блок (рендерится ОДИН раз, если на странице есть #arsenal-musthave)
    if (mustRoot && !mustRoot.dataset.rendered) {
      const must = data.filter(d => d.must_have);
      mustRoot.innerHTML = must.length
        ? `<div class="ar-cards">${must.map(cardHTML).join("")}</div>`
        : "<p>Пусто</p>";
      mustRoot.dataset.rendered = "1";
    }

    if (!root) return; // Если нет основного каталога на странице — остановиться тут

    // Бинд чекбокса «скрыть must-have» (один раз)
    if (hideCheck && !hideCheck.dataset.bound) {
      hideCheck.dataset.bound = "1";
      hideCheck.addEventListener("change", render);
    }

    root.innerHTML = `
      <div class="ar-topbar">
        <input class="ar-search" placeholder="🔍 поиск по названию, описанию, тегам…" value="${escape(query)}">
        <select class="ar-sort">
          <option value="stars">⭐ по звёздам</option>
          <option value="updated">📅 по дате</option>
          <option value="name">🔤 по имени</option>
        </select>
      </div>
      <div class="ar-tags"></div>
      <div class="ar-active-row">
        <span class="ar-active-label"></span>
        <a class="ar-reset" href="#">🔄 Сбросить все</a>
      </div>
      <div class="ar-cards"></div>
    `;

    const searchInput = root.querySelector(".ar-search");
    const sortSelect = root.querySelector(".ar-sort");
    const tagsEl = root.querySelector(".ar-tags");
    const resetEl = root.querySelector(".ar-reset");
    const activeLabel = root.querySelector(".ar-active-label");
    const cardsEl = root.querySelector(".ar-cards");

    sortSelect.value = sortBy;
    searchInput.value = query;

    WHITELIST.forEach(tag => {
      const chip = document.createElement("span");
      chip.className = "ar-chip" + (activeTags.has(tag) ? " active" : "");
      chip.textContent = tag + (activeTags.has(tag) ? " ✕" : "");
      chip.addEventListener("click", () => {
        if (activeTags.has(tag)) activeTags.delete(tag);
        else activeTags.add(tag);
        updateURL();
        render();
      });
      tagsEl.appendChild(chip);
    });

    const hideMusthave = hideCheck && hideCheck.checked;
    let filtered = data.filter(item => {
      if (hideMusthave && item.must_have) return false;
      if (activeTags.size === 0) return true;
      return [...activeTags].every(t => (item.tags || []).includes(t));
    });

    const q = query.toLowerCase().trim();
    if (q) {
      filtered = filtered.filter(item =>
        (item.name || "").toLowerCase().includes(q) ||
        (item.tagline || "").toLowerCase().includes(q) ||
        (item.tags || []).some(t => t.toLowerCase().includes(q))
      );
    }

    if (sortBy === "stars") filtered.sort((a, b) => (b.stars || 0) - (a.stars || 0));
    else if (sortBy === "updated") filtered.sort((a, b) => (b.updated || "").localeCompare(a.updated || ""));
    else filtered.sort((a, b) => (a.name || "").localeCompare(b.name || ""));

    if (activeTags.size > 0 || q) {
      activeLabel.innerHTML = `Показано <strong>${filtered.length}</strong> из ${data.length}`;
    } else {
      activeLabel.textContent = `Всего: ${data.length} инструментов`;
    }

    cardsEl.innerHTML = filtered.map(cardHTML).join("") || "<p>По этим фильтрам ничего не найдено.</p>";

    searchInput.addEventListener("input", (e) => { query = e.target.value; renderCardsOnly(); });
    sortSelect.addEventListener("change", (e) => { sortBy = e.target.value; render(); });
    resetEl.addEventListener("click", (e) => { e.preventDefault(); activeTags.clear(); query = ""; updateURL(); render(); });
  }

  function cardHTML(item) {
    return `<a class="ar-card" href="${escapeAttr(item.url)}">
      <span class="ar-card-emoji">${escape(item.emoji)}</span>
      <div class="ar-card-body">
        <div class="ar-card-head">
          <span class="ar-card-name">${escape(item.name)}</span>
          <span class="ar-card-meta">${item.ru ? "🇷🇺 " : ""}${formatStars(item.stars)}</span>
        </div>
        <div class="ar-card-tagline">${escape(item.tagline || "")}</div>
        <div class="ar-card-tags">${(item.tags || []).slice(0, 3).map(t => `<span>${escape(t)}</span>`).join("")}</div>
      </div>
    </a>`;
  }

  function renderCardsOnly() {
    // При изменении поиска — не перерисовываем всё, только карточки (для фокуса инпута)
    render();
    const input = document.querySelector(".ar-search");
    if (input) { input.focus(); input.setSelectionRange(query.length, query.length); }
  }

  function formatStars(n) {
    if (!n || n === 0) return "";
    if (n >= 1000) return `⭐ ${(n/1000).toFixed(0)}K`;
    return `⭐ ${n}`;
  }

  function updateURL() {
    const url = new URL(location);
    if (activeTags.size) url.searchParams.set("tags", [...activeTags].join(","));
    else url.searchParams.delete("tags");
    history.pushState({}, "", url);
  }

  function escape(s) {
    return (s ?? "").toString().replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  function escapeAttr(s) {
    return escape(s);
  }
})();
