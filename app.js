
const i18n = {
  en: {
    pageTitle: 'Awesome 3D Printing Atlas',
    subtitle: 'A dense and practical map of the 3D printing ecosystem.',
    searchLabel: 'Search',
    sectionLabel: 'Section',
    sortLabel: 'Sort',
    tagLabel: 'Tag',
    levelLabel: 'Level',
    typeLabel: 'Printer Type',
    allSections: 'All sections',
    allTags: 'All tags',
    allLevels: 'All levels',
    allTypes: 'All types',
    sourceBadge: 'Data: awesome-3d-printing (GitHub)',
    open: 'Open',
    noDescription: 'Description is not provided in the source list.',
    translatedFrom: 'Original EN',
    stats: { sections: 'Sections', items: 'Resources', visible: 'Visible', fav: 'Favorites' },
    sort: { relevance: 'Relevance', az: 'A-Z', popularity: 'Popularity', updated: 'Recently updated' },
  },
  ru: {
    pageTitle: 'Атлас 3D-печати',
    subtitle: 'Плотная и практичная карта экосистемы 3D-печати.',
    searchLabel: 'Поиск',
    sectionLabel: 'Раздел',
    sortLabel: 'Сортировка',
    tagLabel: 'Тег',
    levelLabel: 'Уровень',
    typeLabel: 'Тип принтера',
    allSections: 'Все разделы',
    allTags: 'Все теги',
    allLevels: 'Любой уровень',
    allTypes: 'Любой тип',
    sourceBadge: 'Данные: awesome-3d-printing (GitHub)',
    open: 'Открыть',
    noDescription: 'В исходном списке описание не указано.',
    translatedFrom: 'Оригинал EN',
    stats: { sections: 'Разделов', items: 'Ресурсов', visible: 'Показано', fav: 'Избранное' },
    sort: { relevance: 'Релевантность', az: 'A-Я', popularity: 'Популярность', updated: 'Сначала новое' },
  },
};

const sectionGuides = {
  '3D Printer Brands': { en: 'Manufacturers of printers.', ru: 'Производители 3D-принтеров.' },
  'CAD Tools': { en: 'Software to design models.', ru: 'ПО для проектирования моделей.' },
  'Control Software': { en: 'Printer host/control software.', ru: 'ПО управления принтером.' },
  'AMS / Filament Changer': { en: 'Multi-color and multi-material systems.', ru: 'Системы смены филамента и многоцвета.' },
  '3D Printer Firmware': { en: 'Firmware running on printer boards.', ru: 'Прошивки для контроллеров принтера.' },
  'File Formats': { en: 'Common file standards.', ru: 'Ключевые форматы файлов.' },
  Slicers: { en: 'Converts model to G-code.', ru: 'Нарезка моделей в G-code.' },
  Scanner: { en: '3D scanning ecosystem.', ru: 'Экосистема 3D-сканирования.' },
  'Online 3D Model Repositories': { en: 'Model libraries and repositories.', ru: 'Онлайн-библиотеки моделей.' },
  'Online Tools': { en: 'Browser tools for mesh prep.', ru: 'Онлайн-инструменты обработки моделей.' },
  'On Demand 3D Printing Services': { en: 'Manufacturing on demand.', ru: 'Сервисы печати на заказ.' },
  Marketplaces: { en: 'Shops and digital product markets.', ru: 'Маркетплейсы и магазины.' },
  'On Demand 3D Printing Price Comparison': { en: 'Price aggregators.', ru: 'Сравнение цен сервисов.' },
  Technologies: { en: 'Core additive technologies.', ru: 'Базовые технологии аддитивки.' },
  Filaments: { en: 'FDM materials.', ru: 'Материалы для FDM-печати.' },
  Related: { en: 'Related resources.', ru: 'Смежные ресурсы.' },
};

const mistakes = {
  en: ['Wrong first-layer setup', 'Ignoring moisture in filament', 'Too high speed without tuning', 'No temperature tower tests', 'No enclosure for technical polymers'],
  ru: ['Плохая калибровка первого слоя', 'Игнорирование влаги в филаменте', 'Слишком высокая скорость без тюна', 'Без температурных тестов', 'Печать техпластиками без камеры'],
};

const firstGuide = {
  en: ['Pick reliable FDM printer with active community', 'Start with PLA', 'Master first-layer and bed adhesion', 'Use standard slicer profile first', 'Only then optimize speed and quality'],
  ru: ['Выбери надежный FDM с активным комьюнити', 'Начни с PLA', 'Освой первый слой и адгезию', 'Стартуй со стандартного профиля слайсера', 'Потом уже разгоняй скорость и качество'],
};

const LS = {
  favorites: 'atlas:favorites',
  history: 'atlas:history',
  compare: 'atlas:compare',
  edits: 'atlas:edits',
  theme: 'atlas:theme',
  lang: 'atlas:lang',
  langMode: 'atlas:langMode',
  dataCache: 'atlas:dataCache',
  lastSync: 'atlas:lastSync',
};

const storage = (() => {
  try {
    const test = '__atlas_test__';
    window.localStorage.setItem(test, '1');
    window.localStorage.removeItem(test);
    return window.localStorage;
  } catch (_) {
    return {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
    };
  }
})();

const state = {
  lang: storage.getItem(LS.lang) || 'en',
  langMode: storage.getItem(LS.langMode) || 'both',
  theme: storage.getItem(LS.theme) || 'default',
  search: '',
  section: 'all',
  sort: 'relevance',
  tag: 'all',
  level: 'all',
  printerType: 'all',
  viewMode: 'all',
  beginnerMode: false,
  adminMode: false,
  data: null,
  flat: [],
  favorites: loadJSON(LS.favorites, []),
  history: loadJSON(LS.history, []),
  compare: loadJSON(LS.compare, []),
  edits: loadJSON(LS.edits, {}),
};

const els = bindEls();
window.addEventListener('error', (event) => {
  showRuntimeError(event?.error?.message || event.message || 'Unknown runtime error');
});
window.addEventListener('unhandledrejection', (event) => {
  showRuntimeError(event?.reason?.message || String(event.reason || 'Unhandled promise rejection'));
});
init().catch((err) => showRuntimeError(err?.message || String(err)));

function bindEls() {
  return {
    heroTitle: byId('heroTitle'), heroSubtitle: byId('heroSubtitle'), sourceBadge: byId('sourceBadge'), stats: byId('stats'),
    langToggle: byId('langToggle'), themeToggle: byId('themeToggle'), syncBtn: byId('syncBtn'), syncStatus: byId('syncStatus'), diffStatus: byId('diffStatus'),
    searchLabel: byId('searchLabel'), searchInput: byId('searchInput'), sectionLabel: byId('sectionLabel'), sectionFilter: byId('sectionFilter'),
    sortLabel: byId('sortLabel'), sortSelect: byId('sortSelect'), tagLabel: byId('tagLabel'), tagFilter: byId('tagFilter'),
    levelLabel: byId('levelLabel'), levelFilter: byId('levelFilter'), typeLabel: byId('typeLabel'), typeFilter: byId('typeFilter'),
    showFavBtn: byId('showFavBtn'), showHistoryBtn: byId('showHistoryBtn'), randomBtn: byId('randomBtn'), beginnerBtn: byId('beginnerBtn'), langModeBtn: byId('langModeBtn'),
    exportMdBtn: byId('exportMdBtn'), exportJsonBtn: byId('exportJsonBtn'), exportPdfBtn: byId('exportPdfBtn'), importFavBtn: byId('importFavBtn'), exportFavBtn: byId('exportFavBtn'), adminBtn: byId('adminBtn'),
    stackTitle: byId('stackTitle'), stackPrinter: byId('stackPrinter'), stackCad: byId('stackCad'), stackSlicer: byId('stackSlicer'), stackFirmware: byId('stackFirmware'), stackResult: byId('stackResult'),
    compareTitle: byId('compareTitle'), compareTableWrap: byId('compareTableWrap'),
    costResult: byId('costResult'), timeResult: byId('timeResult'),
    guideTitle: byId('guideTitle'), guideList: byId('guideList'), mistakesTitle: byId('mistakesTitle'), mistakesList: byId('mistakesList'),
    sidebar: byId('sidebar'), sectionNav: byId('sectionNav'), grid: byId('grid'), template: byId('cardTemplate'), favFileInput: byId('favFileInput'),
  };
}

async function init() {
  applyTheme();
  await loadData();
  bindEvents();
  renderAll();
  registerSW();
  applyHashTarget();
}

function showRuntimeError(message) {
  const el = byId('runtimeError');
  if (!el) return;
  el.hidden = false;
  el.textContent = `Runtime error: ${message}`;
}

async function loadData() {
  if (window.__RESOURCES_DATA__) {
    state.data = enrichData(window.__RESOURCES_DATA__);
    return;
  }
  try {
    const cached = loadJSON(LS.dataCache, null);
    if (cached) state.data = enrichData(cached);
    const r = await fetch('./data/resources.json');
    if (r.ok) {
      const json = await r.json();
      storage.setItem(LS.dataCache, JSON.stringify(json));
      state.data = enrichData(json);
    }
  } catch (_) {
    if (!state.data) {
      state.data = enrichData({ source: '', stats: { sections: 0, items: 0 }, sections: [] });
    }
  }
}

function enrichData(raw) {
  const edits = state.edits || {};
  const sections = (raw.sections || []).map((s) => {
    const slug = slugify(s.title_en);
    const items = (s.items || []).map((it, idx) => {
      const id = slugify(s.title_en + '-' + it.name);
      const e = edits[id] || {};
      const description_en = e.description_en ?? it.description_en ?? '';
      const description_ru = e.description_ru ?? it.description_ru ?? '';
      const tags = deriveTags(s.title_en, it.name, description_en + ' ' + description_ru);
      const level = deriveLevel(s.title_en, it.name, description_en);
      const printerType = derivePrinterType(s.title_en, it.name, description_en);
      return {
        ...it,
        id,
        section_en: s.title_en,
        section_ru: s.title_ru || s.title_en,
        description_en,
        description_ru,
        tags,
        level,
        printerType,
        popularity: 1000 - (hash(it.name) % 500),
        updatedScore: hash(it.name + idx),
      };
    });
    return { ...s, slug, items };
  });

  const flat = sections.flatMap((s) => s.items);
  state.flat = flat;
  return {
    ...raw,
    sections,
    stats: { sections: sections.length, items: flat.length },
  };
}
function bindEvents() {
  els.langToggle.addEventListener('click', () => {
    state.lang = state.lang === 'en' ? 'ru' : 'en';
    storage.setItem(LS.lang, state.lang);
    renderAll();
  });
  els.themeToggle.addEventListener('click', cycleTheme);
  els.syncBtn.addEventListener('click', syncFromGithub);

  els.searchInput.addEventListener('input', (e) => { state.search = e.target.value.trim().toLowerCase(); renderDataViews(); });
  els.sectionFilter.addEventListener('change', (e) => { state.section = e.target.value; renderDataViews(); updateSEO(); });
  els.sortSelect.addEventListener('change', (e) => { state.sort = e.target.value; renderDataViews(); });
  els.tagFilter.addEventListener('change', (e) => { state.tag = e.target.value; renderDataViews(); });
  els.levelFilter.addEventListener('change', (e) => { state.level = e.target.value; renderDataViews(); });
  els.typeFilter.addEventListener('change', (e) => { state.printerType = e.target.value; renderDataViews(); });

  els.showFavBtn.addEventListener('click', () => { state.viewMode = state.viewMode === 'favorites' ? 'all' : 'favorites'; renderDataViews(); });
  els.showHistoryBtn.addEventListener('click', () => { state.viewMode = state.viewMode === 'history' ? 'all' : 'history'; renderDataViews(); });
  els.randomBtn.addEventListener('click', randomTool);
  els.beginnerBtn.addEventListener('click', () => { state.beginnerMode = !state.beginnerMode; renderDataViews(); });
  els.langModeBtn.addEventListener('click', cycleLangMode);

  els.exportMdBtn.addEventListener('click', exportMarkdown);
  els.exportJsonBtn.addEventListener('click', exportVisibleJson);
  els.exportPdfBtn.addEventListener('click', () => window.print());
  els.exportFavBtn.addEventListener('click', exportFavorites);
  els.importFavBtn.addEventListener('click', () => els.favFileInput.click());
  els.favFileInput.addEventListener('change', importFavorites);
  els.adminBtn.addEventListener('click', () => { state.adminMode = !state.adminMode; renderDataViews(); });

  ['calcWeight', 'calcPriceKg', 'calcPower', 'calcHours', 'calcKwh', 'timeLayer', 'timeHeight', 'timeSpeed', 'timePath'].forEach((id) => {
    byId(id).addEventListener('input', renderCalculators);
  });

  [els.stackPrinter, els.stackCad, els.stackSlicer, els.stackFirmware].forEach((el) => el.addEventListener('change', renderStackResult));
  window.addEventListener('hashchange', applyHashTarget);
}

function renderAll() {
  const t = i18n[state.lang];
  document.documentElement.lang = state.lang;
  document.title = t.pageTitle;
  els.heroTitle.textContent = t.pageTitle;
  els.heroSubtitle.textContent = t.subtitle;
  els.sourceBadge.textContent = t.sourceBadge;
  els.searchLabel.textContent = t.searchLabel;
  els.sectionLabel.textContent = t.sectionLabel;
  els.sortLabel.textContent = t.sortLabel;
  els.tagLabel.textContent = t.tagLabel;
  els.levelLabel.textContent = t.levelLabel;
  els.typeLabel.textContent = t.typeLabel;
  els.langToggle.textContent = state.lang === 'en' ? 'RU' : 'EN';
  els.langModeBtn.textContent = state.langMode.toUpperCase();

  renderFilters();
  renderSidebarAndNav();
  renderPanels();
  renderDataViews();
  renderCalculators();
  updateSEO();
}

function renderFilters() {
  const t = i18n[state.lang];
  setSelect(els.sectionFilter, [{ v: 'all', l: t.allSections }, ...state.data.sections.map((s) => ({ v: s.title_en, l: pickLang(s.title_en, s.title_ru) }))], state.section);
  setSelect(els.sortSelect, [
    { v: 'relevance', l: t.sort.relevance },
    { v: 'az', l: t.sort.az },
    { v: 'popularity', l: t.sort.popularity },
    { v: 'updated', l: t.sort.updated },
  ], state.sort);
  const tags = unique(state.flat.flatMap((x) => x.tags)).sort();
  const levels = ['beginner', 'intermediate', 'pro'];
  const types = unique(state.flat.map((x) => x.printerType)).sort();
  setSelect(els.tagFilter, [{ v: 'all', l: t.allTags }, ...tags.map((x) => ({ v: x, l: x }))], state.tag);
  setSelect(els.levelFilter, [{ v: 'all', l: t.allLevels }, ...levels.map((x) => ({ v: x, l: x }))], state.level);
  setSelect(els.typeFilter, [{ v: 'all', l: t.allTypes }, ...types.map((x) => ({ v: x, l: x }))], state.printerType);
}

function renderSidebarAndNav() {
  const t = i18n[state.lang];
  const all = `<button class="section-chip${state.section === 'all' ? ' active' : ''}" data-section="all">${esc(t.allSections)}</button>`;
  const chips = state.data.sections.map((s) => `<button class="section-chip${state.section === s.title_en ? ' active' : ''}" data-section="${esc(s.title_en)}">${esc(pickLang(s.title_en, s.title_ru))}</button>`).join('');
  els.sectionNav.innerHTML = all + chips;
  els.sidebar.innerHTML = all + chips;
  [...els.sectionNav.querySelectorAll('.section-chip'), ...els.sidebar.querySelectorAll('.section-chip')].forEach((chip) => {
    chip.addEventListener('click', () => {
      state.section = chip.dataset.section;
      els.sectionFilter.value = state.section;
      renderDataViews();
      renderSidebarAndNav();
      updateSEO();
    });
  });
}

function renderPanels() {
  els.guideTitle.textContent = state.lang === 'ru' ? 'Гайд по первому принтеру' : 'First Printer Guide';
  els.mistakesTitle.textContent = state.lang === 'ru' ? 'Типичные ошибки' : 'Common Mistakes';
  els.guideList.innerHTML = firstGuide[state.lang].map((x) => `<li>${esc(x)}</li>`).join('');
  els.mistakesList.innerHTML = mistakes[state.lang].map((x) => `<li>${esc(x)}</li>`).join('');
  renderStackSelectors();
  renderCompare();
}

function renderStackSelectors() {
  fillStack(els.stackPrinter, '3D Printer Brands');
  fillStack(els.stackCad, 'CAD Tools');
  fillStack(els.stackSlicer, 'Slicers');
  fillStack(els.stackFirmware, '3D Printer Firmware');
  renderStackResult();
}

function fillStack(selectEl, sectionName) {
  if (selectEl.options.length) return;
  const section = state.data.sections.find((s) => s.title_en === sectionName);
  const opts = (section?.items || []).slice(0, 25);
  selectEl.innerHTML = opts.map((x) => `<option value="${esc(x.id)}">${esc(x.name)}</option>`).join('');
}

function renderStackResult() {
  const ids = [els.stackPrinter.value, els.stackCad.value, els.stackSlicer.value, els.stackFirmware.value].filter(Boolean);
  const picks = ids.map((id) => state.flat.find((x) => x.id === id)).filter(Boolean);
  const lines = picks.map((x) => `<a href="${esc(x.url)}" target="_blank" rel="noreferrer noopener">${esc(x.name)}</a>`);
  els.stackResult.innerHTML = lines.length ? lines.join(' + ') : '';
}

function renderDataViews() {
  renderGrid();
  renderStats();
  renderCompare();
  renderCalculators();
}

function getFilteredSections() {
  const historySet = new Set(state.history.map((x) => x.id));
  const favSet = new Set(state.favorites);
  const q = state.search;

  const filtered = state.data.sections
    .filter((s) => state.section === 'all' || s.title_en === state.section)
    .map((s) => {
      let items = s.items.filter((item) => {
        if (state.viewMode === 'favorites' && !favSet.has(item.id)) return false;
        if (state.viewMode === 'history' && !historySet.has(item.id)) return false;
        if (state.beginnerMode && item.level !== 'beginner') return false;
        if (state.tag !== 'all' && !item.tags.includes(state.tag)) return false;
        if (state.level !== 'all' && item.level !== state.level) return false;
        if (state.printerType !== 'all' && item.printerType !== state.printerType) return false;
        if (!q) return true;
        return [item.name, item.description_en, item.description_ru, s.title_en, s.title_ru, item.tags.join(' ')].join(' ').toLowerCase().includes(q);
      });

      items = sortItems(items);
      return { ...s, items };
    })
    .filter((s) => s.items.length);

  return filtered;
}

function sortItems(items) {
  if (state.sort === 'az') return [...items].sort((a, b) => a.name.localeCompare(b.name));
  if (state.sort === 'popularity') return [...items].sort((a, b) => b.popularity - a.popularity);
  if (state.sort === 'updated') return [...items].sort((a, b) => b.updatedScore - a.updatedScore);
  return items;
}
function renderGrid() {
  const t = i18n[state.lang];
  const favSet = new Set(state.favorites);
  const cmpSet = new Set(state.compare);
  const sections = getFilteredSections();
  els.grid.innerHTML = '';

  if (!sections.length) {
    els.grid.innerHTML = `<p class="empty">${state.lang === 'ru' ? 'Ничего не найдено' : 'No resources found'}</p>`;
    return;
  }

  sections.forEach((section, sectionIdx) => {
    const block = document.createElement('section');
    block.className = 'section-block';
    block.id = `section-${section.slug}`;
    block.innerHTML = `<h2 class="section-title">${esc(pickLang(section.title_en, section.title_ru))}</h2><p class="section-guide">${esc(sectionGuides[section.title_en]?.[state.lang] || pickLang(section.title_en, section.title_ru))}</p>`;
    const list = document.createElement('div');
    list.className = 'resource-grid';

    section.items.forEach((item, idx) => {
      const card = els.template.content.firstElementChild.cloneNode(true);
      card.id = item.id;
      card.style.animationDelay = `${Math.min(0.35, (sectionIdx * 0.02) + (idx * 0.01))}s`;
      card.querySelector('.card-title').textContent = item.name;

      const link = card.querySelector('.card-link');
      link.textContent = t.open;
      link.href = item.url || state.data.source;
      link.addEventListener('click', () => pushHistory(item));

      const desc = state.lang === 'ru' ? (item.description_ru || item.description_en) : (item.description_en || item.description_ru);
      card.querySelector('.card-description').innerHTML = highlight(desc || t.noDescription, state.search);

      const descEn = card.querySelector('.card-description-en');
      if (state.langMode === 'ru') {
        descEn.remove();
      } else if (state.langMode === 'en') {
        card.querySelector('.card-description').innerHTML = highlight(item.description_en || t.noDescription, state.search);
        descEn.remove();
      } else if (state.lang === 'ru' && item.description_en) {
        descEn.textContent = `${t.translatedFrom}: ${item.description_en}`;
      } else {
        descEn.remove();
      }

      card.querySelector('.card-analysis').textContent = buildAnalysis(item);
      card.querySelector('.card-section').textContent = pickLang(section.title_en, section.title_ru);
      card.querySelector('.card-level').textContent = item.level;
      card.querySelector('.card-type').textContent = item.printerType;
      card.querySelector('.tag-row').innerHTML = item.tags.map((x) => `<span class="tag">${esc(x)}</span>`).join('');

      const recs = findSimilar(item).slice(0, 3);
      const recRow = card.querySelector('.rec-row');
      recRow.innerHTML = recs.map((r) => `<button class="rec-link" type="button" data-jump="${esc(r.id)}">${esc(r.name)}</button>`).join('');
      recRow.querySelectorAll('[data-jump]').forEach((btn) => btn.addEventListener('click', () => jumpToCard(btn.dataset.jump)));

      const favBtn = card.querySelector('.js-fav');
      favBtn.textContent = favSet.has(item.id) ? 'Unfav' : 'Fav';
      favBtn.addEventListener('click', () => toggleFavorite(item.id));

      const cmpBtn = card.querySelector('.js-compare');
      cmpBtn.textContent = cmpSet.has(item.id) ? 'DelCmp' : 'Cmp';
      cmpBtn.addEventListener('click', () => toggleCompare(item.id));

      card.querySelector('.js-copy').addEventListener('click', () => copyDeepLink(item.id));
      const editBtn = card.querySelector('.js-edit');
      editBtn.style.display = state.adminMode ? 'inline-block' : 'none';
      editBtn.addEventListener('click', () => editDescription(item));
      card.querySelector('.js-report').addEventListener('click', () => reportBroken(item));

      list.appendChild(card);
    });

    block.appendChild(list);
    els.grid.appendChild(block);
  });
}

function renderStats() {
  const st = i18n[state.lang].stats;
  const visible = getFilteredSections().reduce((sum, s) => sum + s.items.length, 0);
  els.stats.innerHTML = [
    statHtml(state.data.stats.sections, st.sections),
    statHtml(state.data.stats.items, st.items),
    statHtml(visible, st.visible),
    statHtml(state.favorites.length, st.fav),
  ].join('');
}

function renderCompare() {
  const picks = state.compare.map((id) => state.flat.find((x) => x.id === id)).filter(Boolean).slice(0, 4);
  els.compareTitle.textContent = (state.lang === 'ru' ? 'Сравнение' : 'Compare') + ` (${picks.length}/4)`;
  if (!picks.length) {
    els.compareTableWrap.innerHTML = `<p class="muted">${state.lang === 'ru' ? 'Добавь карточки кнопкой Cmp' : 'Add cards with Cmp button'}</p>`;
    return;
  }
  const header = picks.map((x) => `<th>${esc(x.name)}</th>`).join('');
  const row = (label, fn) => `<tr><td>${esc(label)}</td>${picks.map((x) => `<td>${esc(fn(x))}</td>`).join('')}</tr>`;
  els.compareTableWrap.innerHTML = `<table><thead><tr><th>Metric</th>${header}</tr></thead><tbody>${row('Section', (x) => pickLang(x.section_en, x.section_ru))}${row('Level', (x) => x.level)}${row('Type', (x) => x.printerType)}${row('Tags', (x) => x.tags.join(', '))}</tbody></table>`;
  persist(LS.compare, state.compare);
}

function renderCalculators() {
  const g = num('calcWeight');
  const priceKg = num('calcPriceKg');
  const powerW = num('calcPower');
  const h = num('calcHours');
  const kwh = num('calcKwh');
  const matCost = (g / 1000) * priceKg;
  const powerCost = ((powerW * h) / 1000) * kwh;
  const total = matCost + powerCost;
  els.costResult.textContent = (state.lang === 'ru' ? 'Оценка: ' : 'Estimate: ') + total.toFixed(2);

  const layer = Math.max(0.01, num('timeLayer'));
  const height = Math.max(1, num('timeHeight'));
  const speed = Math.max(1, num('timeSpeed'));
  const path = Math.max(1, num('timePath'));
  const layers = height / layer;
  const sec = (layers * path) / speed;
  const hours = sec / 3600;
  els.timeResult.textContent = (state.lang === 'ru' ? 'Время: ' : 'Time: ') + hours.toFixed(2) + (state.lang === 'ru' ? ' ч' : ' h');
}

function toggleFavorite(id) {
  if (state.favorites.includes(id)) state.favorites = state.favorites.filter((x) => x !== id);
  else state.favorites.unshift(id);
  persist(LS.favorites, state.favorites);
  renderDataViews();
}

function pushHistory(item) {
  state.history = [{ id: item.id, at: new Date().toISOString() }, ...state.history.filter((x) => x.id !== item.id)].slice(0, 100);
  persist(LS.history, state.history);
}

function toggleCompare(id) {
  if (state.compare.includes(id)) state.compare = state.compare.filter((x) => x !== id);
  else if (state.compare.length < 4) state.compare.push(id);
  renderDataViews();
}

function randomTool() {
  const items = getFilteredSections().flatMap((s) => s.items);
  if (!items.length) return;
  const pick = items[Math.floor(Math.random() * items.length)];
  jumpToCard(pick.id);
}

function cycleLangMode() {
  const seq = ['both', 'ru', 'en'];
  state.langMode = seq[(seq.indexOf(state.langMode) + 1) % seq.length];
  storage.setItem(LS.langMode, state.langMode);
  els.langModeBtn.textContent = state.langMode.toUpperCase();
  renderDataViews();
}

function exportMarkdown() {
  const lines = ['# Exported 3D Printing Stack'];
  getFilteredSections().forEach((s) => {
    lines.push(`\n## ${s.title_en}`);
    s.items.forEach((x) => lines.push(`- [${x.name}](${x.url}) - ${x.description_en || ''}`));
  });
  downloadFile('atlas-export.md', lines.join('\n'), 'text/markdown');
}

function exportVisibleJson() {
  const payload = { exportedAt: new Date().toISOString(), filters: { ...state, data: undefined, flat: undefined }, sections: getFilteredSections() };
  downloadFile('atlas-export.json', JSON.stringify(payload, null, 2), 'application/json');
}

function exportFavorites() {
  const payload = { favorites: state.favorites, exportedAt: new Date().toISOString() };
  downloadFile('favorites.json', JSON.stringify(payload, null, 2), 'application/json');
}

function importFavorites(e) {
  const file = e.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const json = JSON.parse(String(reader.result));
      const ids = Array.isArray(json.favorites) ? json.favorites : [];
      state.favorites = unique(ids.filter((id) => state.flat.some((x) => x.id === id)));
      persist(LS.favorites, state.favorites);
      renderDataViews();
    } catch (_) {}
  };
  reader.readAsText(file);
  e.target.value = '';
}

function editDescription(item) {
  const currentRu = item.description_ru || '';
  const currentEn = item.description_en || '';
  const nextRu = prompt('RU description', currentRu);
  if (nextRu === null) return;
  const nextEn = prompt('EN description', currentEn);
  if (nextEn === null) return;
  state.edits[item.id] = { description_ru: nextRu, description_en: nextEn };
  persist(LS.edits, state.edits);
  state.data = enrichData(state.data);
  renderDataViews();
}

async function copyDeepLink(id) {
  const url = `${location.origin}${location.pathname}#${id}`;
  await copyText(url);
  location.hash = id;
  applyHashTarget();
}

function jumpToCard(id) {
  location.hash = id;
  applyHashTarget();
}

function applyHashTarget() {
  const targetId = decodeURIComponent(location.hash.replace('#', ''));
  if (!targetId) return;
  const el = document.getElementById(targetId);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  el.style.outline = '2px solid var(--accent)';
  setTimeout(() => { el.style.outline = ''; }, 1000);
}

function reportBroken(item) {
  const title = encodeURIComponent(`Broken link: ${item.name}`);
  const body = encodeURIComponent(`Resource: ${item.name}\nURL: ${item.url}\nSection: ${item.section_en}`);
  window.open(`https://github.com/ad-si/awesome-3d-printing/issues/new?title=${title}&body=${body}`, '_blank');
}

function buildAnalysis(item) {
  const pros = item.tags.slice(0, 2).join(', ');
  const cons = item.level === 'pro' ? (state.lang === 'ru' ? 'высокий порог входа' : 'higher learning curve') : (state.lang === 'ru' ? 'ограниченные продвинутые фичи' : 'fewer advanced controls');
  const who = state.lang === 'ru' ? `Кому: ${item.level}` : `For: ${item.level}`;
  return `${state.lang === 'ru' ? 'Плюсы' : 'Pros'}: ${pros}. ${state.lang === 'ru' ? 'Минусы' : 'Cons'}: ${cons}. ${who}.`;
}

function findSimilar(item) {
  return state.flat
    .filter((x) => x.id !== item.id)
    .map((x) => ({ x, score: overlap(item.tags, x.tags) + (x.section_en === item.section_en ? 1 : 0) }))
    .filter((m) => m.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((m) => m.x);
}
async function syncFromGithub() {
  els.syncStatus.textContent = state.lang === 'ru' ? 'Синхронизация...' : 'Syncing...';
  try {
    const res = await fetch('https://raw.githubusercontent.com/ad-si/awesome-3d-printing/main/readme.md');
    if (!res.ok) throw new Error('bad');
    const md = await res.text();
    const next = parseReadme(md);

    const ruMap = new Map(state.flat.map((x) => [x.name.toLowerCase(), x.description_ru]));
    next.sections.forEach((s) => {
      s.title_ru = s.title_ru || s.title_en;
      s.items.forEach((it) => { it.description_ru = ruMap.get(it.name.toLowerCase()) || it.description_en || ''; });
    });

    const prevNames = new Set(state.flat.map((x) => x.name));
    const nextNames = new Set(next.sections.flatMap((s) => s.items.map((x) => x.name)));
    const added = [...nextNames].filter((x) => !prevNames.has(x));
    const removed = [...prevNames].filter((x) => !nextNames.has(x));

    storage.setItem(LS.dataCache, JSON.stringify(next));
    storage.setItem(LS.lastSync, new Date().toISOString());
    state.data = enrichData(next);
    renderAll();
    els.syncStatus.textContent = state.lang === 'ru' ? 'Синхронизировано' : 'Synced';
    els.diffStatus.textContent = `${state.lang === 'ru' ? 'Добавлено' : 'Added'}: ${added.length}, ${state.lang === 'ru' ? 'Удалено' : 'Removed'}: ${removed.length}`;
  } catch (_) {
    els.syncStatus.textContent = state.lang === 'ru' ? 'Ошибка синхронизации' : 'Sync failed';
  }
}

function parseReadme(text) {
  const lines = text.split(/\r?\n/);
  const refs = {};
  lines.forEach((ln) => {
    const m = ln.match(/^\[([^\]]+)\]:\s+(\S+)\s*$/);
    if (m) refs[m[1].trim()] = m[2].trim();
  });

  const sections = [];
  let current = null;
  let inContents = false;
  let buf = [];

  const flush = () => {
    if (!current || !buf.length) { buf = []; return; }
    const raw = buf.join(' ').trim();
    const m = raw.match(/^\[([^\]]+)\](?:\s*-\s*(.*))?$/);
    if (m) current.items.push({ name: m[1].trim(), url: refs[m[1].trim()] || '', description_en: (m[2] || '').trim(), description_ru: '' });
    buf = [];
  };

  lines.forEach((ln) => {
    const t = ln.trimEnd();
    if (t.trim() === '## Contents') { inContents = true; return; }
    const h = t.match(/^##\s+(.*)$/);
    if (inContents) {
      if (h) inContents = false;
      else return;
    }
    if (h) {
      flush();
      const title = h[1].trim();
      if (title.toLowerCase() === 'license') { current = null; return; }
      current = { title_en: title, title_ru: title, items: [] };
      sections.push(current);
      return;
    }
    if (!current) return;
    const b = t.trim().match(/^-\s+(.*)$/);
    if (b) { flush(); buf.push(b[1].trim()); return; }
    if (buf.length && (t.startsWith('    ') || t.startsWith('\t'))) { buf.push(t.trim()); return; }
    flush();
  });
  flush();

  const clean = sections.filter((s) => s.items.length);
  return {
    source: 'https://github.com/ad-si/awesome-3d-printing',
    generated_at: new Date().toISOString(),
    stats: { sections: clean.length, items: clean.reduce((a, s) => a + s.items.length, 0) },
    sections: clean,
  };
}

function registerSW() {
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('./service-worker.js').catch(() => {});
}

function updateSEO() {
  const selected = state.section === 'all' ? null : state.data.sections.find((x) => x.title_en === state.section);
  const title = selected ? `${pickLang(selected.title_en, selected.title_ru)} | ${i18n[state.lang].pageTitle}` : i18n[state.lang].pageTitle;
  document.title = title;
  const meta = document.querySelector('meta[name="description"]');
  const desc = selected ? (sectionGuides[selected.title_en]?.[state.lang] || i18n[state.lang].subtitle) : i18n[state.lang].subtitle;
  if (meta) meta.setAttribute('content', desc);

  let ld = document.getElementById('seo-jsonld');
  if (!ld) {
    ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.id = 'seo-jsonld';
    document.head.appendChild(ld);
  }
  ld.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'CollectionPage', name: title, description: desc, inLanguage: state.lang });
}

function cycleTheme() {
  const seq = ['default', 'neon', 'industrial'];
  state.theme = seq[(seq.indexOf(state.theme) + 1) % seq.length];
  storage.setItem(LS.theme, state.theme);
  applyTheme();
}

function applyTheme() {
  document.body.classList.remove('theme-neon', 'theme-industrial');
  if (state.theme === 'neon') document.body.classList.add('theme-neon');
  if (state.theme === 'industrial') document.body.classList.add('theme-industrial');
  if (els.themeToggle) els.themeToggle.textContent = `Theme:${state.theme}`;
}

function deriveTags(section, name, text) {
  const s = `${section} ${name} ${text}`.toLowerCase();
  const tags = [];
  if (s.includes('open source') || s.includes('open-source') || s.includes('github')) tags.push('open-source');
  if (s.includes('commercial') || s.includes('paid')) tags.push('commercial');
  if (s.includes('browser') || s.includes('web') || s.includes('online')) tags.push('cloud');
  if (s.includes('firmware')) tags.push('firmware');
  if (s.includes('slicer') || section === 'Slicers') tags.push('slicer');
  if (section.includes('CAD')) tags.push('cad');
  if (section.includes('Filament')) tags.push('materials');
  if (!tags.length) tags.push('general');
  return unique(tags);
}

function deriveLevel(section, name, text) {
  const s = `${section} ${name} ${text}`.toLowerCase();
  if (s.includes('tinkercad') || s.includes('beginner') || s.includes('affordable')) return 'beginner';
  if (s.includes('advanced') || s.includes('highly customizable') || s.includes('kernel')) return 'pro';
  if (section === '3D Printer Firmware') return 'pro';
  return 'intermediate';
}

function derivePrinterType(section, name, text) {
  const s = `${section} ${name} ${text}`.toLowerCase();
  if (s.includes('sla') || s.includes('resin')) return 'SLA';
  if (s.includes('sls')) return 'SLS';
  if (s.includes('belt')) return 'Belt FDM';
  if (s.includes('delta')) return 'Delta FDM';
  return 'FDM';
}

function highlight(text, query) {
  const safe = esc(text || '');
  if (!query) return safe;
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return safe.replace(new RegExp(`(${q})`, 'ig'), '<mark>$1</mark>');
}

function copyText(v) {
  return navigator.clipboard?.writeText(v).catch(() => {});
}

function byId(id) { return document.getElementById(id); }
function pickLang(en, ru) { return state.lang === 'ru' ? (ru || en) : en; }
function setSelect(el, opts, value) { el.innerHTML = opts.map((o) => `<option value="${esc(o.v)}">${esc(o.l)}</option>`).join(''); el.value = value; }
function statHtml(value, label) { return `<div class="stat"><strong>${value}</strong><span>${esc(label)}</span></div>`; }
function num(id) { return Number(byId(id).value || 0); }
function unique(arr) { return [...new Set(arr)]; }
function overlap(a, b) { const s = new Set(a); return b.reduce((n, x) => n + (s.has(x) ? 1 : 0), 0); }
function slugify(s) { return String(s).toLowerCase().replace(/[^a-z0-9а-яё]+/gi, '-').replace(/^-+|-+$/g, ''); }
function hash(s) { let h = 0; for (let i = 0; i < s.length; i += 1) h = ((h << 5) - h + s.charCodeAt(i)) | 0; return Math.abs(h); }
function esc(text) { return String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;'); }
function persist(key, value) { storage.setItem(key, JSON.stringify(value)); }
function loadJSON(key, fallback) { try { return JSON.parse(storage.getItem(key) || ''); } catch (_) { return fallback; } }
function downloadFile(name, content, mime) {
  const blob = new Blob([content], { type: `${mime};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
