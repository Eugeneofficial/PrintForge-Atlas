
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
    toolbar: {
      favorites: 'Favorites',
      history: 'History',
      random: 'Random Tool',
      beginner: 'Beginner Mode',
      exportMd: 'Export MD',
      exportJson: 'Export JSON',
      exportPdf: 'Export PDF',
      importFav: 'Import Fav',
      exportFav: 'Export Fav',
    },
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
    toolbar: {
      favorites: 'Избранное',
      history: 'История',
      random: 'Случайный инструмент',
      beginner: 'Режим новичка',
      exportMd: 'Экспорт MD',
      exportJson: 'Экспорт JSON',
      exportPdf: 'Экспорт PDF',
      importFav: 'Импорт избранного',
      exportFav: 'Экспорт избранного',
    },
    open: 'Открыть',
    noDescription: 'В исходном списке описание не указано.',
    translatedFrom: 'Оригинал EN',
    stats: { sections: 'Разделов', items: 'Ресурсов', visible: 'Показано', fav: 'Избранное' },
    sort: { relevance: 'Релевантность', az: 'A-Я', popularity: 'Популярность', updated: 'Сначала новое' },
  },
  de: {
    pageTitle: '3D-Druck Atlas',
    subtitle: 'Eine dichte und praktische Karte des 3D-Druck-Ökosystems.',
    searchLabel: 'Suche',
    sectionLabel: 'Bereich',
    sortLabel: 'Sortierung',
    tagLabel: 'Tag',
    levelLabel: 'Level',
    typeLabel: 'Druckertyp',
    allSections: 'Alle Bereiche',
    allTags: 'Alle Tags',
    allLevels: 'Alle Level',
    allTypes: 'Alle Typen',
    sourceBadge: 'Daten: awesome-3d-printing (GitHub)',
    toolbar: {
      favorites: 'Favoriten',
      history: 'Verlauf',
      random: 'Zufälliges Tool',
      beginner: 'Anfänger-Modus',
      exportMd: 'Export MD',
      exportJson: 'Export JSON',
      exportPdf: 'Export PDF',
      importFav: 'Favoriten importieren',
      exportFav: 'Favoriten exportieren',
    },
    open: 'Öffnen',
    noDescription: 'In der Quellliste ist keine Beschreibung vorhanden.',
    translatedFrom: 'Original EN',
    stats: { sections: 'Bereiche', items: 'Ressourcen', visible: 'Sichtbar', fav: 'Favoriten' },
    sort: { relevance: 'Relevanz', az: 'A-Z', popularity: 'Popularität', updated: 'Zuletzt aktualisiert' },
  },
};
if (window.APP_CONFIG && window.APP_CONFIG.i18n) {
  Object.assign(i18n, window.APP_CONFIG.i18n);
}

const sectionGuides = {
  '3D Printer Brands': { en: 'Manufacturers of printers.', ru: 'Производители 3D-принтеров.', de: 'Hersteller von 3D-Druckern.' },
  'CAD Tools': { en: 'Software to design models.', ru: 'ПО для проектирования моделей.', de: 'Software zur Modellkonstruktion.' },
  'Control Software': { en: 'Printer host/control software.', ru: 'ПО управления принтером.', de: 'Host- und Steuerungssoftware für Drucker.' },
  'AMS / Filament Changer': { en: 'Multi-color and multi-material systems.', ru: 'Системы смены филамента и многоцвета.', de: 'Systeme für Mehrfarben- und Mehrmaterialdruck.' },
  '3D Printer Firmware': { en: 'Firmware running on printer boards.', ru: 'Прошивки для контроллеров принтера.', de: 'Firmware für Drucker-Controller.' },
  'File Formats': { en: 'Common file standards.', ru: 'Ключевые форматы файлов.', de: 'Gängige Dateiformate und Standards.' },
  Slicers: { en: 'Converts model to G-code.', ru: 'Нарезка моделей в G-code.', de: 'Konvertiert Modelle in G-Code.' },
  Scanner: { en: '3D scanning ecosystem.', ru: 'Экосистема 3D-сканирования.', de: '3D-Scanning-Ökosystem.' },
  'Online 3D Model Repositories': { en: 'Model libraries and repositories.', ru: 'Онлайн-библиотеки моделей.', de: 'Online-Bibliotheken für 3D-Modelle.' },
  'Online Tools': { en: 'Browser tools for mesh prep.', ru: 'Онлайн-инструменты обработки моделей.', de: 'Browser-Tools zur Modellvorbereitung.' },
  'On Demand 3D Printing Services': { en: 'Manufacturing on demand.', ru: 'Сервисы печати на заказ.', de: 'On-Demand-Fertigungsdienste.' },
  Marketplaces: { en: 'Shops and digital product markets.', ru: 'Маркетплейсы и магазины.', de: 'Marktplätze und Shops.' },
  'On Demand 3D Printing Price Comparison': { en: 'Price aggregators.', ru: 'Сравнение цен сервисов.', de: 'Preisvergleichsplattformen.' },
  Technologies: { en: 'Core additive technologies.', ru: 'Базовые технологии аддитивки.', de: 'Kerntechnologien der additiven Fertigung.' },
  Filaments: { en: 'FDM materials.', ru: 'Материалы для FDM-печати.', de: 'Materialien für FDM-Druck.' },
  Related: { en: 'Related resources.', ru: 'Смежные ресурсы.', de: 'Verwandte Ressourcen.' },
};

const mistakes = {
  en: ['Wrong first-layer setup', 'Ignoring moisture in filament', 'Too high speed without tuning', 'No temperature tower tests', 'No enclosure for technical polymers'],
  ru: ['Плохая калибровка первого слоя', 'Игнорирование влаги в филаменте', 'Слишком высокая скорость без тюна', 'Без температурных тестов', 'Печать техпластиками без камеры'],
  de: ['Falsche First-Layer-Einstellungen', 'Feuchtigkeit im Filament ignorieren', 'Zu hohe Geschwindigkeit ohne Tuning', 'Keine Temperaturtests', 'Kein Gehäuse für technische Materialien'],
};

const firstGuide = {
  en: ['Pick reliable FDM printer with active community', 'Start with PLA', 'Master first-layer and bed adhesion', 'Use standard slicer profile first', 'Only then optimize speed and quality'],
  ru: ['Выбери надежный FDM с активным комьюнити', 'Начни с PLA', 'Освой первый слой и адгезию', 'Стартуй со стандартного профиля слайсера', 'Потом уже разгоняй скорость и качество'],
  de: ['Wähle einen zuverlässigen FDM-Drucker mit aktiver Community', 'Starte mit PLA', 'Beherrsche First Layer und Haftung', 'Nutze zuerst Standard-Slicer-Profile', 'Optimiere erst dann Tempo und Qualität'],
};

const LS = {
  favorites: 'atlas:favorites',
  history: 'atlas:history',
  compare: 'atlas:compare',
  linkHealth: 'atlas:linkHealth',
  calcPreset: 'atlas:calcPreset:v1',
  introSeen: 'atlas:introSeen:v2',
  introSound: 'atlas:introSound',
  theme: 'atlas:theme',
  lang: 'atlas:lang',
  langMode: 'atlas:langMode',
  dataCache: 'atlas:dataCache',
  lastSync: 'atlas:lastSync',
  density: 'atlas:density',
  collapsedSections: 'atlas:collapsedSections',
  hotkeyHintDismissed: 'atlas:hotkeyHintDismissed',
};

const introCopy = {
  en: {
    title: 'Industrial-grade 3D Printing Atlas',
    subtitle: 'Tools, firmware, materials, services, and marketplaces in one practical map.',
    sound: 'Sound On',
    soundOn: 'Sound:On',
    enter: 'Enter Atlas',
    skip: 'Skip intro next time',
  },
  ru: {
    title: 'Профессиональный атлас 3D-печати',
    subtitle: 'Инструменты, прошивки, материалы, сервисы и маркетплейсы в одной практичной карте.',
    sound: 'Включить звук',
    soundOn: 'Звук:Вкл',
    enter: 'Открыть атлас',
    skip: 'Больше не показывать',
  },
  de: {
    title: 'Professioneller 3D-Druck-Atlas',
    subtitle: 'Tools, Firmware, Materialien, Services und Marktplätze in einer praktischen Karte.',
    sound: 'Ton an',
    soundOn: 'Ton:An',
    enter: 'Atlas öffnen',
    skip: 'Intro nicht mehr zeigen',
  },
};

const LANGS = ['en', 'ru', 'de'];
const CALC_DEFAULTS = {
  calcWeight: 120,
  calcPriceKg: 22,
  calcPower: 120,
  calcHours: 6,
  calcKwh: 0.2,
  calcMarkup: 18,
  calcCurrency: 'USD',
  calcPrinterPrice: 350,
  calcPrinterLifeHours: 2000,
  calcFailureRate: 8,
  timeLayer: 0.2,
  timeHeight: 80,
  timeSpeed: 60,
  timePath: 1800,
  timeOverhead: 18,
};
const CALC_UI = {
  en: { title: 'Calculators', cost: 'Print Cost', time: 'Print Time', save: 'Save Preset', reset: 'Reset', useTime: 'Use for Cost', quality: 'Quality', balanced: 'Balanced', speed: 'Speed' },
  ru: { title: 'Калькуляторы', cost: 'Стоимость печати', time: 'Время печати', save: 'Сохранить пресет', reset: 'Сброс', useTime: 'Вставить во стоимость', quality: 'Качество', balanced: 'Баланс', speed: 'Скорость' },
  de: { title: 'Rechner', cost: 'Druckkosten', time: 'Druckzeit', save: 'Preset speichern', reset: 'Zurücksetzen', useTime: 'In Kosten einsetzen', quality: 'Qualität', balanced: 'Ausgewogen', speed: 'Geschwindigkeit' },
};
const THEME_QUOTES = {
  en: {
    dark: {
      start: ['Eyes opening for night shift', 'Dark mode reactor online', 'Summoning midnight print vibes', 'Retina recalibration: moon mode'],
      end: ['silence... the nozzle prowls.', 'layer lines now look cinematic.', 'printer hum unlocked.', 'night crew approved this transition.'],
    },
    light: {
      start: ['Closing eyes against the photon blast', 'Switching to daylight operation', 'Sunglasses firmware loading', 'Brightness emergency protocol'],
      end: ['retinas survived. barely.', 'even supports look cheerful now.', 'coffee mode activated.', 'day shift took over the printer.'],
    },
  },
  ru: {
    dark: {
      start: ['Открываю глаза для ночной смены', 'Тёмный режим выходит на смену', 'Вызываю полуночный вайб печати', 'Калибрую сетчатку под ночь'],
      end: ['тишина... сопло на охоте.', 'слои стали кинематографичными.', 'гул принтера официально включён.', 'ночная бригада одобрила переход.'],
    },
    light: {
      start: ['Закрываю глаза от фотонной атаки', 'Переключаюсь в дневной режим', 'Прошивка солнцезащитных очков загружается', 'Протокол спасения сетчатки активирован'],
      end: ['сетчатка выжила. почти.', 'даже саппорты выглядят бодро.', 'режим кофе активирован.', 'дневная смена приняла принтер.'],
    },
  },
  de: {
    dark: {
      start: ['Augen auf fuer die Nachtschicht', 'Dark-Mode-Reaktor online', 'Mitternachtsdruck wird beschworen', 'Netzhaut auf Nachtbetrieb kalibriert'],
      end: ['Stille... die Duese jagt.', 'die Layer sehen jetzt filmreif aus.', 'Druckerbrummen freigeschaltet.', 'Nachtschicht hat den Wechsel genehmigt.'],
    },
    light: {
      start: ['Augen zu gegen den Photonenangriff', 'Wechsel in den Tagesbetrieb', 'Sonnenbrillen-Firmware wird geladen', 'Notfallprotokoll Helligkeit aktiv'],
      end: ['Netzhaut hat ueberlebt. knapp.', 'sogar Supports wirken froehlich.', 'Kaffeemodus aktiviert.', 'Tagschicht hat den Drucker uebernommen.'],
    },
  },
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

const storedLang = storage.getItem(LS.lang);
const initialLang = LANGS.includes(storedLang) ? storedLang : 'en';
const storedTheme = storage.getItem(LS.theme);
const storedIntroSound = storage.getItem(LS.introSound);
const initialTheme = ['light', 'dark'].includes(storedTheme)
  ? storedTheme
  : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

const state = {
  lang: initialLang,
  langMode: storage.getItem(LS.langMode) || 'both',
  theme: initialTheme,
  introSeen: storage.getItem(LS.introSeen) === '1',
  introSound: storedIntroSound === null ? true : storedIntroSound === '1',
  introUnlockArmed: false,
  introSoundUnlocked: false,
  search: '',
  section: 'all',
  sort: 'relevance',
  tag: 'all',
  level: 'all',
  printerType: 'all',
  viewMode: 'all',
  beginnerMode: false,
  data: null,
  flat: [],
  favorites: loadJSON(LS.favorites, []),
  history: loadJSON(LS.history, []),
  compare: loadJSON(LS.compare, []),
  linkHealth: loadJSON(LS.linkHealth, {}),
  calcComputedHours: 0,
  calcSaveTimer: null,
  themeAnimating: false,
  themeTimers: [],
  lastThemeQuote: '',
  toastTimer: null,
  hintTimer: null,
  density: storage.getItem(LS.density) || 'cozy',
  collapsedSections: loadJSON(LS.collapsedSections, []),
  hotkeyHintDismissed: storage.getItem(LS.hotkeyHintDismissed) === '1',
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
    themeBlink: byId('themeBlink'),
    themeBlinkQuote: byId('themeBlinkQuote'),
    introScreen: byId('introScreen'), introVideo: byId('introVideo'), introTitle: byId('introTitle'), introSubtitle: byId('introSubtitle'), introSoundBtn: byId('introSoundBtn'), introEnterBtn: byId('introEnterBtn'), introSkipBtn: byId('introSkipBtn'),
    heroTitle: byId('heroTitle'), heroSubtitle: byId('heroSubtitle'), sourceBadge: byId('sourceBadge'), stats: byId('stats'),
    langSelect: byId('langSelect'), themeToggle: byId('themeToggle'), syncBtn: byId('syncBtn'), syncStatus: byId('syncStatus'), diffStatus: byId('diffStatus'), lastUpdated: byId('lastUpdated'), checkLinksBtn: byId('checkLinksBtn'), suggestBtn: byId('suggestBtn'), clearFiltersBtn: byId('clearFiltersBtn'),
    searchLabel: byId('searchLabel'), searchInput: byId('searchInput'), sectionLabel: byId('sectionLabel'), sectionFilter: byId('sectionFilter'),
    sortLabel: byId('sortLabel'), sortSelect: byId('sortSelect'), tagLabel: byId('tagLabel'), tagFilter: byId('tagFilter'),
    levelLabel: byId('levelLabel'), levelFilter: byId('levelFilter'), typeLabel: byId('typeLabel'), typeFilter: byId('typeFilter'),
    showFavBtn: byId('showFavBtn'), showHistoryBtn: byId('showHistoryBtn'), randomBtn: byId('randomBtn'), beginnerBtn: byId('beginnerBtn'), langModeBtn: byId('langModeBtn'),
    exportMdBtn: byId('exportMdBtn'), exportJsonBtn: byId('exportJsonBtn'), exportPdfBtn: byId('exportPdfBtn'), importFavBtn: byId('importFavBtn'), exportFavBtn: byId('exportFavBtn'), densityBtn: byId('densityBtn'),
    stackTitle: byId('stackTitle'), stackPrinter: byId('stackPrinter'), stackCad: byId('stackCad'), stackSlicer: byId('stackSlicer'), stackFirmware: byId('stackFirmware'), stackResult: byId('stackResult'),
    compareTitle: byId('compareTitle'), compareTableWrap: byId('compareTableWrap'), compareExportCsvBtn: byId('compareExportCsvBtn'),
    costResult: byId('costResult'), timeResult: byId('timeResult'),
    guideTitle: byId('guideTitle'), guideList: byId('guideList'), mistakesTitle: byId('mistakesTitle'), mistakesList: byId('mistakesList'),
    sidebar: byId('sidebar'), sectionNav: byId('sectionNav'), grid: byId('grid'), template: byId('cardTemplate'), favFileInput: byId('favFileInput'), presetRow: byId('presetRow'),
    toTopBtn: byId('toTopBtn'), toastRoot: byId('toastRoot'),
    hotkeyHintCard: byId('hotkeyHintCard'), hotkeyHintTitle: byId('hotkeyHintTitle'), hotkeyHintSearch: byId('hotkeyHintSearch'), hotkeyHintTheme: byId('hotkeyHintTheme'), hotkeyHintDismissBtn: byId('hotkeyHintDismissBtn'),
  };
}

async function init() {
  applyTheme();
  bindIntroEvents();
  renderIntro();
  await loadData();
  loadCalcPreset();
  bindEvents();
  renderAll();
  registerSW();
  applyHashTarget();
  window.addEventListener('visibilitychange', onVisibilityChange);
  window.addEventListener('beforeunload', clearThemeTimers);
  applyDensity();
  updateHotkeyHintVisibility();
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
  const sections = (raw.sections || []).map((s) => {
    const slug = slugify(s.title_en);
    const items = (s.items || []).map((it, idx) => {
      const id = slugify(s.title_en + '-' + it.name);
      const description_en = it.description_en ?? '';
      const description_ru = it.description_ru ?? '';
      const description_de = it.description_de ?? '';
      const tags = deriveTags(s.title_en, it.name, description_en + ' ' + description_ru);
      const level = deriveLevel(s.title_en, it.name, description_en);
      const printerType = derivePrinterType(s.title_en, it.name, description_en);
      return {
        ...it,
        id,
        section_en: s.title_en,
        section_ru: s.title_ru || s.title_en,
        section_de: s.title_de || s.title_en,
        description_en,
        description_ru,
        description_de,
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
  els.langSelect.addEventListener('change', (event) => {
    state.lang = event.target.value;
    storage.setItem(LS.lang, state.lang);
    renderAll();
  });
  els.themeToggle.addEventListener('click', cycleTheme);
  els.syncBtn.addEventListener('click', syncFromGithub);
  els.checkLinksBtn.addEventListener('click', checkVisibleLinks);
  els.suggestBtn.addEventListener('click', () => window.open(buildSuggestionIssueUrl(), '_blank'));
  els.clearFiltersBtn?.addEventListener('click', clearAllFilters);

  els.searchInput.addEventListener('input', (e) => {
    clearTimeout(state.searchTimer);
    state.searchTimer = setTimeout(() => {
      state.search = e.target.value.trim().toLowerCase();
      renderDataViews();
    }, 180);
  });
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
  els.densityBtn?.addEventListener('click', toggleDensity);
  els.compareExportCsvBtn?.addEventListener('click', exportCompareCsv);
  els.toTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  els.hotkeyHintDismissBtn?.addEventListener('click', dismissHotkeyHint);
  window.addEventListener('scroll', onWindowScroll, { passive: true });
  document.addEventListener('keydown', handleGlobalKeydown);

  const calcIds = ['calcWeight', 'calcPriceKg', 'calcPower', 'calcHours', 'calcKwh', 'calcMarkup', 'calcCurrency', 'calcPrinterPrice', 'calcPrinterLifeHours', 'calcFailureRate', 'timeLayer', 'timeHeight', 'timeSpeed', 'timePath', 'timeOverhead'];
  calcIds.forEach((id) => {
    const el = byId(id);
    if (!el) return;
    const onCalcChange = () => {
      renderCalculators();
      scheduleCalcPresetSave();
    };
    el.addEventListener('input', onCalcChange);
    el.addEventListener('change', onCalcChange);
  });
  byId('calcSavePresetBtn')?.addEventListener('click', () => {
    saveCalcPreset();
    flashCalcAction(byId('calcSavePresetBtn'));
  });
  byId('calcResetPresetBtn')?.addEventListener('click', resetCalcPreset);
  byId('calcUseTimeBtn')?.addEventListener('click', () => {
    byId('calcHours').value = state.calcComputedHours.toFixed(2);
    renderCalculators();
    scheduleCalcPresetSave();
  });
  document.querySelectorAll('.calc-preset').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyCalcPreset(btn.dataset.calcProfile || 'balanced');
      scheduleCalcPresetSave();
    });
  });

  [els.stackPrinter, els.stackCad, els.stackSlicer, els.stackFirmware].forEach((el) => el.addEventListener('change', renderStackResult));
  els.presetRow?.querySelectorAll('.preset-btn').forEach((btn) => btn.addEventListener('click', () => applyPreset(btn.dataset.preset)));
  window.addEventListener('hashchange', applyHashTarget);
}

function bindIntroEvents() {
  if (!els.introScreen) return;
  const video = els.introVideo;
  els.introSoundBtn?.addEventListener('click', () => setIntroSound(true, true));
  els.introEnterBtn?.addEventListener('click', () => closeIntro(false));
  els.introSkipBtn?.addEventListener('click', () => closeIntro(true));
  armIntroSoundUnlock();
  video?.addEventListener('ended', () => {
    video.currentTime = 0;
    video.play().catch(() => {});
  });
  video?.addEventListener('timeupdate', () => {
    if (video.duration && (video.duration - video.currentTime) < 0.06) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  });
}

function renderAll() {
  const t = i18n[state.lang];
  const intro = introCopy[state.lang] || introCopy.en;
  document.documentElement.lang = state.lang;
  document.title = t.pageTitle;
  if (els.introTitle) els.introTitle.textContent = intro.title;
  if (els.introSubtitle) els.introSubtitle.textContent = intro.subtitle;
  if (els.introSoundBtn) els.introSoundBtn.textContent = state.introSound ? intro.soundOn : intro.sound;
  if (els.introEnterBtn) els.introEnterBtn.textContent = intro.enter;
  if (els.introSkipBtn) els.introSkipBtn.textContent = intro.skip;
  els.heroTitle.textContent = t.pageTitle;
  els.heroSubtitle.textContent = t.subtitle;
  els.sourceBadge.textContent = t.sourceBadge;
  els.searchLabel.textContent = t.searchLabel;
  els.sectionLabel.textContent = t.sectionLabel;
  els.sortLabel.textContent = t.sortLabel;
  els.tagLabel.textContent = t.tagLabel;
  els.levelLabel.textContent = t.levelLabel;
  els.typeLabel.textContent = t.typeLabel;
  els.langSelect.value = state.lang;
  els.langModeBtn.textContent = state.langMode.toUpperCase();
  els.showFavBtn.textContent = t.toolbar.favorites;
  els.showHistoryBtn.textContent = t.toolbar.history;
  els.randomBtn.textContent = t.toolbar.random;
  els.beginnerBtn.textContent = t.toolbar.beginner;
  els.exportMdBtn.textContent = t.toolbar.exportMd;
  els.exportJsonBtn.textContent = t.toolbar.exportJson;
  els.exportPdfBtn.textContent = t.toolbar.exportPdf;
  els.importFavBtn.textContent = t.toolbar.importFav;
  els.exportFavBtn.textContent = t.toolbar.exportFav;
  if (t.extra) {
    els.checkLinksBtn.textContent = t.extra.checkLinks;
    els.suggestBtn.textContent = t.extra.suggest;
    els.lastUpdated.textContent = `${t.extra.lastUpdated}: ${formatDate(state.data.generated_at)}`;
  }
  localizePresets();
  localizeExtraUi();
  updateHotkeyHintVisibility();

  renderFilters();
  renderSidebarAndNav();
  renderPanels();
  renderDataViews();
  renderCalculators();
  updateSEO();
}

function localizeExtraUi() {
  const dict = {
    en: {
      clear: 'Clear Filters',
      densityCozy: 'Density:Cozy',
      densityCompact: 'Density:Compact',
      csv: 'Export CSV',
      hintTitle: 'Hotkeys',
      hintSearch: 'Search',
      hintTheme: 'Theme',
    },
    ru: {
      clear: 'Сброс фильтров',
      densityCozy: 'Плотность:Комфорт',
      densityCompact: 'Плотность:Компакт',
      csv: 'Экспорт CSV',
      hintTitle: 'Горячие клавиши',
      hintSearch: 'Поиск',
      hintTheme: 'Тема',
    },
    de: {
      clear: 'Filter zurücksetzen',
      densityCozy: 'Dichte:Komfort',
      densityCompact: 'Dichte:Kompakt',
      csv: 'Export CSV',
      hintTitle: 'Hotkeys',
      hintSearch: 'Suche',
      hintTheme: 'Theme',
    },
  }[state.lang] || {};
  if (els.clearFiltersBtn) els.clearFiltersBtn.textContent = dict.clear || 'Clear Filters';
  if (els.densityBtn) els.densityBtn.textContent = state.density === 'compact' ? (dict.densityCompact || 'Density:Compact') : (dict.densityCozy || 'Density:Cozy');
  if (els.compareExportCsvBtn) els.compareExportCsvBtn.textContent = dict.csv || 'Export CSV';
  if (els.hotkeyHintTitle) els.hotkeyHintTitle.textContent = dict.hintTitle || 'Hotkeys';
  if (els.hotkeyHintSearch) els.hotkeyHintSearch.textContent = dict.hintSearch || 'Search';
  if (els.hotkeyHintTheme) els.hotkeyHintTheme.textContent = dict.hintTheme || 'Theme';
}

function renderFilters() {
  const t = i18n[state.lang];
  setSelect(els.sectionFilter, [{ v: 'all', l: t.allSections }, ...state.data.sections.map((s) => ({ v: s.title_en, l: pickLang(s.title_en, s.title_ru, s.title_de) }))], state.section);
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
  const chips = state.data.sections.map((s) => `<button class="section-chip${state.section === s.title_en ? ' active' : ''}" data-section="${esc(s.title_en)}">${esc(pickLang(s.title_en, s.title_ru, s.title_de))}</button>`).join('');
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
  const c = CALC_UI[state.lang] || CALC_UI.en;
  els.guideTitle.textContent = state.lang === 'ru' ? 'Гайд по первому принтеру' : (state.lang === 'de' ? 'Leitfaden für den ersten Drucker' : 'First Printer Guide');
  els.mistakesTitle.textContent = state.lang === 'ru' ? 'Типичные ошибки' : (state.lang === 'de' ? 'Häufige Fehler' : 'Common Mistakes');
  byId('calcTitle').textContent = c.title;
  byId('costCalcTitle').textContent = c.cost;
  byId('timeCalcTitle').textContent = c.time;
  byId('calcSavePresetBtn').textContent = c.save;
  byId('calcResetPresetBtn').textContent = c.reset;
  byId('calcUseTimeBtn').textContent = c.useTime;
  byId('calcPresetQuality').textContent = c.quality;
  byId('calcPresetBalanced').textContent = c.balanced;
  byId('calcPresetSpeed').textContent = c.speed;
  els.guideList.innerHTML = firstGuide[state.lang].map((x) => `<li>${esc(x)}</li>`).join('');
  els.mistakesList.innerHTML = mistakes[state.lang].map((x) => `<li>${esc(x)}</li>`).join('');
  renderStackSelectors();
  renderCompare();
}

function localizePresets() {
  const labels = {
    en: { beginner: 'Beginner', 'open-source': 'Open Source', firmware: 'Firmware', marketplaces: 'Marketplaces' },
    ru: { beginner: 'Новичок', 'open-source': 'Open Source', firmware: 'Прошивки', marketplaces: 'Маркетплейсы' },
    de: { beginner: 'Anfänger', 'open-source': 'Open Source', firmware: 'Firmware', marketplaces: 'Marktplätze' },
  };
  const map = labels[state.lang] || labels.en;
  els.presetRow?.querySelectorAll('.preset-btn').forEach((btn) => {
    btn.textContent = map[btn.dataset.preset] || btn.dataset.preset;
  });
}

function applyPreset(preset) {
  state.viewMode = 'all';
  state.section = 'all';
  state.tag = 'all';
  state.level = 'all';
  state.printerType = 'all';
  state.beginnerMode = false;
  if (preset === 'beginner') state.level = 'beginner';
  if (preset === 'open-source') state.tag = 'open-source';
  if (preset === 'firmware') state.section = '3D Printer Firmware';
  if (preset === 'marketplaces') state.section = 'Marketplaces';
  renderFilters();
  renderSidebarAndNav();
  renderDataViews();
}

function updatePresetActive() {
  const activePreset = state.level === 'beginner'
    ? 'beginner'
    : state.tag === 'open-source'
      ? 'open-source'
      : state.section === '3D Printer Firmware'
        ? 'firmware'
        : state.section === 'Marketplaces'
          ? 'marketplaces'
          : null;
  els.presetRow?.querySelectorAll('.preset-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.preset === activePreset);
  });
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
  updatePresetActive();
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
        return [item.name, item.description_en, item.description_ru, item.description_de, s.title_en, s.title_ru, s.title_de, item.tags.join(' ')].join(' ').toLowerCase().includes(q);
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
    els.grid.innerHTML = `<p class="empty">${state.lang === 'ru' ? 'Ничего не найдено' : (state.lang === 'de' ? 'Keine Ressourcen gefunden' : 'No resources found')}</p>`;
    return;
  }

  sections.forEach((section, sectionIdx) => {
    const block = document.createElement('section');
    block.className = 'section-block';
    block.id = `section-${section.slug}`;
    const collapsed = isSectionCollapsed(section.title_en);
    const collapseLabel = collapsed ? '+' : '-';
    block.innerHTML = `<h2 class="section-title">${esc(pickLang(section.title_en, section.title_ru, section.title_de))} <button class="mini-btn section-collapse-btn" type="button" data-section-collapse="${esc(section.title_en)}" aria-expanded="${collapsed ? 'false' : 'true'}">${collapseLabel}</button> <button class="mini-btn section-link-btn" type="button" data-section-link="${esc(block.id)}">#</button></h2><p class="section-guide">${esc(sectionGuides[section.title_en]?.[state.lang] || pickLang(section.title_en, section.title_ru, section.title_de))}</p>`;
    const list = document.createElement('div');
    list.className = 'resource-grid';
    if (collapsed) list.hidden = true;

    section.items.forEach((item, idx) => {
      const card = els.template.content.firstElementChild.cloneNode(true);
      card.id = item.id;
      card.style.animationDelay = `${Math.min(0.35, (sectionIdx * 0.02) + (idx * 0.01))}s`;
      card.querySelector('.card-title').textContent = item.name;

      const link = card.querySelector('.card-link');
      link.textContent = t.open;
      link.href = item.url || state.data.source;
      link.addEventListener('click', () => pushHistory(item));

      const desc = state.lang === 'ru'
        ? (item.description_ru || item.description_en)
        : state.lang === 'de'
          ? (item.description_de || item.description_en)
          : (item.description_en || item.description_ru);
      card.querySelector('.card-description').innerHTML = highlight(desc || t.noDescription, state.search);

      const descEn = card.querySelector('.card-description-en');
      if (state.langMode === 'ru') {
        descEn.remove();
      } else if (state.langMode === 'en') {
        card.querySelector('.card-description').innerHTML = highlight(item.description_en || t.noDescription, state.search);
        descEn.remove();
      } else if (state.lang !== 'en' && item.description_en) {
        descEn.textContent = `${t.translatedFrom}: ${item.description_en}`;
      } else {
        descEn.remove();
      }

      card.querySelector('.card-analysis').textContent = buildAnalysis(item);
      card.querySelector('.card-section').textContent = pickLang(section.title_en, section.title_ru, section.title_de);
      card.querySelector('.card-level').textContent = item.level;
      card.querySelector('.card-type').textContent = item.printerType;
      card.querySelector('.tag-row').innerHTML = item.tags.map((x) => `<span class="tag">${esc(x)}</span>`).join('');

      const recs = findSimilar(item).slice(0, 3);
      const recRow = card.querySelector('.rec-row');
      recRow.innerHTML = recs.map((r) => `<button class="rec-link" type="button" data-jump="${esc(r.id)}">${esc(r.name)}</button>`).join('');
      recRow.querySelectorAll('[data-jump]').forEach((btn) => btn.addEventListener('click', () => jumpToCard(btn.dataset.jump)));

      const favBtn = card.querySelector('.js-fav');
      const favOn = i18n[state.lang]?.cardActions?.unfav || 'Unfav';
      const favOff = i18n[state.lang]?.cardActions?.fav || 'Fav';
      favBtn.textContent = favSet.has(item.id) ? favOn : favOff;
      favBtn.setAttribute('aria-label', favBtn.textContent);
      favBtn.addEventListener('click', () => toggleFavorite(item.id));

      const cmpBtn = card.querySelector('.js-compare');
      cmpBtn.textContent = cmpSet.has(item.id)
        ? (i18n[state.lang]?.cardActions?.delCmp || 'DelCmp')
        : (i18n[state.lang]?.cardActions?.cmp || 'Cmp');
      cmpBtn.setAttribute('aria-label', cmpBtn.textContent);
      cmpBtn.addEventListener('click', () => toggleCompare(item.id));

      const copyBtn = card.querySelector('.js-copy');
      copyBtn.textContent = i18n[state.lang]?.cardActions?.link || 'Link';
      copyBtn.setAttribute('aria-label', copyBtn.textContent);
      copyBtn.addEventListener('click', () => copyDeepLink(item.id));
      const reportBtn = card.querySelector('.js-report');
      reportBtn.textContent = i18n[state.lang]?.cardActions?.report || 'Report broken link';
      reportBtn.addEventListener('click', () => reportBroken(item));

      const health = state.linkHealth[item.id] || 'unknown';
      const healthEl = card.querySelector('.card-health');
      healthEl.textContent = health.toUpperCase();
      healthEl.classList.add(`health-${health}`);

      list.appendChild(card);
    });

    block.appendChild(list);
    block.querySelector('.section-collapse-btn')?.addEventListener('click', (event) => {
      const sectionName = event.currentTarget.dataset.sectionCollapse;
      toggleSectionCollapsed(sectionName);
      renderDataViews();
    });
    block.querySelector('.section-link-btn')?.addEventListener('click', (event) => {
      const id = event.currentTarget.dataset.sectionLink;
      copyText(`${location.origin}${location.pathname}#${id}`);
      showToast(state.lang === 'ru' ? 'Ссылка на раздел скопирована' : (state.lang === 'de' ? 'Bereichslink kopiert' : 'Section link copied'));
      location.hash = id;
    });
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
  const compareLabel = state.lang === 'ru' ? 'Сравнение' : (state.lang === 'de' ? 'Vergleich' : 'Compare');
  els.compareTitle.textContent = `${compareLabel} (${picks.length}/4)`;
  if (!picks.length) {
    const hint = state.lang === 'ru' ? 'Добавь карточки кнопкой Cmp' : (state.lang === 'de' ? 'Füge Karten über Cmp hinzu' : 'Add cards with Cmp button');
    els.compareTableWrap.innerHTML = `<p class="muted">${hint}</p>`;
    return;
  }
  const header = picks.map((x) => `<th>${esc(x.name)}</th>`).join('');
  const row = (label, fn) => `<tr><td>${esc(label)}</td>${picks.map((x) => `<td>${esc(fn(x))}</td>`).join('')}</tr>`;
  els.compareTableWrap.innerHTML = `<table><thead><tr><th>Metric</th>${header}</tr></thead><tbody>${row('Section', (x) => pickLang(x.section_en, x.section_ru, x.section_de))}${row('Level', (x) => x.level)}${row('Type', (x) => x.printerType)}${row('Tags', (x) => x.tags.join(', '))}</tbody></table>`;
  if (els.compareExportCsvBtn) els.compareExportCsvBtn.disabled = picks.length === 0;
  persist(LS.compare, state.compare);
}

function renderCalculators() {
  const labels = {
    en: { est: 'Estimate', time: 'Time', material: 'Material', energy: 'Energy', amort: 'Amortization', subtotal: 'Subtotal', final: 'Final', layers: 'Layers', base: 'Base time', overhead: 'With overhead' },
    ru: { est: 'Оценка', time: 'Время', material: 'Материал', energy: 'Электроэнергия', amort: 'Амортизация', subtotal: 'База', final: 'Итог', layers: 'Слоёв', base: 'Базовое время', overhead: 'С учётом overhead' },
    de: { est: 'Schätzung', time: 'Zeit', material: 'Material', energy: 'Energie', amort: 'Abschreibung', subtotal: 'Zwischensumme', final: 'Gesamt', layers: 'Schichten', base: 'Basiszeit', overhead: 'Mit Overhead' },
  }[state.lang] || {};
  const currency = byId('calcCurrency').value || 'USD';
  const fmt = (v) => new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(v || 0));
  const fmtDuration = (seconds) => {
    const total = Math.max(0, Math.round(seconds));
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    return `${h}h ${m}m`;
  };

  const g = Math.max(0, num('calcWeight'));
  const priceKg = Math.max(0, num('calcPriceKg'));
  const powerW = Math.max(0, num('calcPower'));
  const h = Math.max(0, num('calcHours'));
  const kwh = Math.max(0, num('calcKwh'));
  const markupPct = Math.max(0, num('calcMarkup'));
  const printerPrice = Math.max(0, num('calcPrinterPrice'));
  const printerLifeHours = Math.max(1, num('calcPrinterLifeHours'));
  const failureRate = Math.max(0, num('calcFailureRate'));
  const matCost = (g / 1000) * priceKg;
  const powerCost = ((powerW * h) / 1000) * kwh;
  const amortCost = (printerPrice / printerLifeHours) * h * (1 + failureRate / 100);
  const subtotal = matCost + powerCost + amortCost;
  const final = subtotal * (1 + markupPct / 100);
  byId('calcMatLabel').textContent = labels.material;
  byId('calcEnergyLabel').textContent = labels.energy;
  byId('calcAmortLabel').textContent = labels.amort;
  byId('calcBaseLabel').textContent = labels.subtotal;
  byId('calcFinalLabel').textContent = labels.final;
  byId('costMaterial').textContent = fmt(matCost);
  byId('costEnergy').textContent = fmt(powerCost);
  byId('costAmort').textContent = fmt(amortCost);
  byId('costSubtotal').textContent = fmt(subtotal);
  byId('costFinal').textContent = fmt(final);
  els.costResult.textContent = `${labels.est}: ${fmt(final)}`;

  const layer = Math.max(0.01, num('timeLayer'));
  const height = Math.max(1, num('timeHeight'));
  const speed = Math.max(1, num('timeSpeed'));
  const path = Math.max(1, num('timePath'));
  const overheadPct = Math.max(0, num('timeOverhead'));
  const layers = Math.ceil(height / layer);
  const baseSec = (layers * path) / speed;
  const finalSec = baseSec * (1 + overheadPct / 100);
  state.calcComputedHours = finalSec / 3600;
  byId('timeLayersLabel').textContent = labels.layers;
  byId('timeBaseLabel').textContent = labels.base;
  byId('timeFinalLabel').textContent = labels.overhead;
  byId('timeLayers').textContent = String(layers);
  byId('timeBase').textContent = fmtDuration(baseSec);
  byId('timeFinal').textContent = fmtDuration(finalSec);
  els.timeResult.textContent = `${labels.time}: ${fmtDuration(finalSec)} (${state.calcComputedHours.toFixed(2)} h)`;
}

function applyCalcPreset(profile) {
  const presets = {
    quality: { timeLayer: 0.12, timeSpeed: 42, timePath: 2100, timeOverhead: 24 },
    balanced: { timeLayer: 0.2, timeSpeed: 60, timePath: 1800, timeOverhead: 18 },
    speed: { timeLayer: 0.28, timeSpeed: 95, timePath: 1450, timeOverhead: 12 },
  };
  const p = presets[profile] || presets.balanced;
  byId('timeLayer').value = p.timeLayer;
  byId('timeSpeed').value = p.timeSpeed;
  byId('timePath').value = p.timePath;
  byId('timeOverhead').value = p.timeOverhead;
  renderCalculators();
}

function loadCalcPreset() {
  const saved = loadJSON(LS.calcPreset, null);
  const src = saved && typeof saved === 'object' ? saved : CALC_DEFAULTS;
  Object.keys(CALC_DEFAULTS).forEach((key) => {
    const el = byId(key);
    if (!el) return;
    el.value = src[key] ?? CALC_DEFAULTS[key];
  });
}

function saveCalcPreset() {
  const payload = {};
  Object.keys(CALC_DEFAULTS).forEach((key) => {
    const el = byId(key);
    if (!el) return;
    payload[key] = el.value;
  });
  persist(LS.calcPreset, payload);
  showToast(state.lang === 'ru' ? 'Пресет сохранен' : (state.lang === 'de' ? 'Preset gespeichert' : 'Preset saved'));
}

function resetCalcPreset() {
  Object.keys(CALC_DEFAULTS).forEach((key) => {
    const el = byId(key);
    if (!el) return;
    el.value = CALC_DEFAULTS[key];
  });
  persist(LS.calcPreset, CALC_DEFAULTS);
  renderCalculators();
  showToast(state.lang === 'ru' ? 'Калькулятор сброшен' : (state.lang === 'de' ? 'Rechner zurückgesetzt' : 'Calculator reset'));
}

function toggleFavorite(id) {
  if (state.favorites.includes(id)) state.favorites = state.favorites.filter((x) => x !== id);
  else state.favorites.unshift(id);
  persist(LS.favorites, state.favorites);
  renderDataViews();
  showToast(state.lang === 'ru' ? 'Избранное обновлено' : (state.lang === 'de' ? 'Favoriten aktualisiert' : 'Favorites updated'));
}

function pushHistory(item) {
  state.history = [{ id: item.id, at: new Date().toISOString() }, ...state.history.filter((x) => x.id !== item.id)].slice(0, 100);
  persist(LS.history, state.history);
}

function toggleCompare(id) {
  if (state.compare.includes(id)) state.compare = state.compare.filter((x) => x !== id);
  else if (state.compare.length < 4) state.compare.push(id);
  else showToast(state.lang === 'ru' ? 'Максимум 4 позиции в сравнении' : (state.lang === 'de' ? 'Maximal 4 Positionen im Vergleich' : 'Comparison limit is 4 items'));
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

function clearAllFilters() {
  state.search = '';
  state.section = 'all';
  state.sort = 'relevance';
  state.tag = 'all';
  state.level = 'all';
  state.printerType = 'all';
  state.viewMode = 'all';
  state.beginnerMode = false;
  if (els.searchInput) els.searchInput.value = '';
  renderFilters();
  renderSidebarAndNav();
  renderDataViews();
  updateSEO();
  showToast(state.lang === 'ru' ? 'Фильтры очищены' : (state.lang === 'de' ? 'Filter zurückgesetzt' : 'Filters cleared'));
}

function toggleDensity() {
  state.density = state.density === 'compact' ? 'cozy' : 'compact';
  storage.setItem(LS.density, state.density);
  applyDensity();
  localizeExtraUi();
}

function applyDensity() {
  document.body.classList.toggle('density-compact', state.density === 'compact');
}

function isSectionCollapsed(sectionName) {
  return state.collapsedSections.includes(sectionName);
}

function toggleSectionCollapsed(sectionName) {
  if (!sectionName) return;
  if (isSectionCollapsed(sectionName)) {
    state.collapsedSections = state.collapsedSections.filter((s) => s !== sectionName);
  } else {
    state.collapsedSections = unique([...state.collapsedSections, sectionName]);
  }
  persist(LS.collapsedSections, state.collapsedSections);
}

function exportCompareCsv() {
  const picks = state.compare.map((id) => state.flat.find((x) => x.id === id)).filter(Boolean).slice(0, 4);
  if (!picks.length) {
    showToast(state.lang === 'ru' ? 'Сравнение пустое' : (state.lang === 'de' ? 'Vergleich ist leer' : 'Comparison is empty'));
    return;
  }
  const escCsv = (v) => `"${String(v ?? '').replaceAll('"', '""')}"`;
  const rows = [];
  rows.push(['Metric', ...picks.map((x) => x.name)].map(escCsv).join(','));
  rows.push(['Section', ...picks.map((x) => pickLang(x.section_en, x.section_ru, x.section_de))].map(escCsv).join(','));
  rows.push(['Level', ...picks.map((x) => x.level)].map(escCsv).join(','));
  rows.push(['Type', ...picks.map((x) => x.printerType)].map(escCsv).join(','));
  rows.push(['Tags', ...picks.map((x) => x.tags.join(', '))].map(escCsv).join(','));
  downloadFile('compare.csv', rows.join('\n'), 'text/csv');
  showToast('CSV exported');
}

function onWindowScroll() {
  if (!els.toTopBtn) return;
  els.toTopBtn.classList.toggle('show', window.scrollY > 340);
}

function dismissHotkeyHint() {
  state.hotkeyHintDismissed = true;
  storage.setItem(LS.hotkeyHintDismissed, '1');
  if (state.hintTimer) {
    window.clearTimeout(state.hintTimer);
    state.hintTimer = null;
  }
  if (els.hotkeyHintCard) els.hotkeyHintCard.hidden = true;
}

function updateHotkeyHintVisibility() {
  if (!els.hotkeyHintCard) return;
  const introVisible = !!(els.introScreen && !els.introScreen.hidden);
  if (introVisible || state.hotkeyHintDismissed) {
    els.hotkeyHintCard.hidden = true;
    return;
  }
  if (state.hintTimer) window.clearTimeout(state.hintTimer);
  state.hintTimer = window.setTimeout(() => {
    if (state.hotkeyHintDismissed) return;
    const stillIntroVisible = !!(els.introScreen && !els.introScreen.hidden);
    els.hotkeyHintCard.hidden = stillIntroVisible;
    state.hintTimer = null;
  }, 320);
}

function handleGlobalKeydown(event) {
  if (event.defaultPrevented) return;
  if (els.introScreen && !els.introScreen.hidden) return;
  const target = event.target;
  const isTyping = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || target.isContentEditable);
  if (event.key === 'Escape') return;
  if (isTyping) return;
  if (event.key === '/') {
    event.preventDefault();
    els.searchInput?.focus();
    return;
  }
  const key = String(event.key || '').toLowerCase();
  if (key === 't') cycleTheme();
  if (key === 'f') els.showFavBtn?.click();
  if (key === 'h') els.showHistoryBtn?.click();
  if (key === 'r') els.randomBtn?.click();
  if (key === 'b') els.beginnerBtn?.click();
}

function showToast(message) {
  if (!els.toastRoot || !message) return;
  els.toastRoot.textContent = message;
  els.toastRoot.classList.add('show');
  if (state.toastTimer) window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => {
    els.toastRoot.classList.remove('show');
    state.toastTimer = null;
  }, 1800);
}

function exportMarkdown() {
  const lines = ['# Exported 3D Printing Stack'];
  getFilteredSections().forEach((s) => {
    lines.push(`\n## ${s.title_en}`);
    s.items.forEach((x) => lines.push(`- [${x.name}](${x.url}) - ${x.description_en || ''}`));
  });
  downloadFile('atlas-export.md', lines.join('\n'), 'text/markdown');
  showToast('Markdown exported');
}

function exportVisibleJson() {
  const payload = { exportedAt: new Date().toISOString(), filters: { ...state, data: undefined, flat: undefined }, sections: getFilteredSections() };
  downloadFile('atlas-export.json', JSON.stringify(payload, null, 2), 'application/json');
  showToast('JSON exported');
}

function exportFavorites() {
  const payload = { favorites: state.favorites, exportedAt: new Date().toISOString() };
  downloadFile('favorites.json', JSON.stringify(payload, null, 2), 'application/json');
  showToast(state.lang === 'ru' ? 'Избранное экспортировано' : (state.lang === 'de' ? 'Favoriten exportiert' : 'Favorites exported'));
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
      showToast(state.lang === 'ru' ? 'Избранное импортировано' : (state.lang === 'de' ? 'Favoriten importiert' : 'Favorites imported'));
    } catch (_) {}
  };
  reader.readAsText(file);
  e.target.value = '';
}

async function copyDeepLink(id) {
  const url = `${location.origin}${location.pathname}#${id}`;
  await copyText(url);
  showToast(state.lang === 'ru' ? 'Ссылка скопирована' : (state.lang === 'de' ? 'Link kopiert' : 'Link copied'));
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
  showToast(state.lang === 'ru' ? 'Открыт репорт в GitHub' : (state.lang === 'de' ? 'GitHub-Issue geöffnet' : 'Opened GitHub issue form'));
}

function buildSuggestionIssueUrl() {
  try {
    const p = String(location.pathname || '/').split('/').filter(Boolean);
    if (location.hostname.endsWith('github.io') && p.length >= 1) {
      const owner = location.hostname.split('.')[0];
      const repo = p[0];
      return `https://github.com/${owner}/${repo}/issues/new?template=resource_suggestion.yml`;
    }
  } catch (_) {}
  return 'https://github.com/issues/new';
}

function buildAnalysis(item) {
  const pros = item.tags.slice(0, 2).join(', ');
  const cons = item.level === 'pro'
    ? (state.lang === 'ru' ? 'высокий порог входа' : (state.lang === 'de' ? 'höhere Einstiegshürde' : 'higher learning curve'))
    : (state.lang === 'ru' ? 'ограниченные продвинутые фичи' : (state.lang === 'de' ? 'weniger fortgeschrittene Optionen' : 'fewer advanced controls'));
  const who = state.lang === 'ru' ? `Кому: ${item.level}` : (state.lang === 'de' ? `Für: ${item.level}` : `For: ${item.level}`);
  const prosLabel = state.lang === 'ru' ? 'Плюсы' : (state.lang === 'de' ? 'Vorteile' : 'Pros');
  const consLabel = state.lang === 'ru' ? 'Минусы' : (state.lang === 'de' ? 'Nachteile' : 'Cons');
  return `${prosLabel}: ${pros}. ${consLabel}: ${cons}. ${who}.`;
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
  els.syncStatus.textContent = state.lang === 'ru' ? 'Синхронизация...' : (state.lang === 'de' ? 'Synchronisierung...' : 'Syncing...');
  try {
    const res = await fetch('https://raw.githubusercontent.com/ad-si/awesome-3d-printing/main/readme.md');
    if (!res.ok) throw new Error('bad');
    const md = await res.text();
    const next = parseReadme(md);

    const ruMap = new Map(state.flat.map((x) => [x.name.toLowerCase(), x.description_ru]));
    const deMap = new Map(state.flat.map((x) => [x.name.toLowerCase(), x.description_de]));
    next.sections.forEach((s) => {
      s.title_ru = s.title_ru || s.title_en;
      s.title_de = s.title_de || s.title_en;
      s.items.forEach((it) => {
        it.description_ru = ruMap.get(it.name.toLowerCase()) || it.description_en || '';
        it.description_de = deMap.get(it.name.toLowerCase()) || it.description_en || '';
      });
    });

    const prevNames = new Set(state.flat.map((x) => x.name));
    const nextNames = new Set(next.sections.flatMap((s) => s.items.map((x) => x.name)));
    const added = [...nextNames].filter((x) => !prevNames.has(x));
    const removed = [...prevNames].filter((x) => !nextNames.has(x));

    storage.setItem(LS.dataCache, JSON.stringify(next));
    storage.setItem(LS.lastSync, new Date().toISOString());
    state.data = enrichData(next);
    renderAll();
    const addedLabel = state.lang === 'ru' ? 'Добавлено' : (state.lang === 'de' ? 'Hinzugefügt' : 'Added');
    const removedLabel = state.lang === 'ru' ? 'Удалено' : (state.lang === 'de' ? 'Entfernt' : 'Removed');
    els.syncStatus.textContent = state.lang === 'ru' ? 'Синхронизировано' : (state.lang === 'de' ? 'Synchronisiert' : 'Synced');
    els.diffStatus.textContent = `${addedLabel}: ${added.length}, ${removedLabel}: ${removed.length}`;
    showToast(state.lang === 'ru' ? 'Синхронизация завершена' : (state.lang === 'de' ? 'Sync abgeschlossen' : 'Sync completed'));
  } catch (_) {
    els.syncStatus.textContent = state.lang === 'ru' ? 'Ошибка синхронизации' : (state.lang === 'de' ? 'Synchronisierung fehlgeschlagen' : 'Sync failed');
    showToast(state.lang === 'ru' ? 'Синхронизация не удалась' : (state.lang === 'de' ? 'Sync fehlgeschlagen' : 'Sync failed'));
  }
}

async function checkVisibleLinks() {
  const items = getFilteredSections().flatMap((s) => s.items).slice(0, 40);
  els.syncStatus.textContent = state.lang === 'ru' ? 'Проверка ссылок...' : (state.lang === 'de' ? 'Link-Prüfung...' : 'Checking links...');
  for (const item of items) {
    state.linkHealth[item.id] = await checkUrl(item.url);
  }
  persist(LS.linkHealth, state.linkHealth);
  els.syncStatus.textContent = state.lang === 'ru' ? 'Проверка завершена' : (state.lang === 'de' ? 'Prüfung abgeschlossen' : 'Check complete');
  renderGrid();
  showToast(state.lang === 'ru' ? 'Проверка ссылок завершена' : (state.lang === 'de' ? 'Link-Prüfung abgeschlossen' : 'Link check completed'));
}

async function checkUrl(url) {
  if (!url) return 'fail';
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 5000);
  try {
    await fetch(url, { method: 'GET', mode: 'no-cors', signal: controller.signal, cache: 'no-store' });
    clearTimeout(timer);
    return 'ok';
  } catch (_) {
    clearTimeout(timer);
    return 'fail';
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
    if (m) current.items.push({ name: m[1].trim(), url: refs[m[1].trim()] || '', description_en: (m[2] || '').trim(), description_ru: '', description_de: '' });
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
      current = { title_en: title, title_ru: title, title_de: title, items: [] };
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

function renderIntro() {
  if (!els.introScreen) return;
  const show = !state.introSeen;
  els.introScreen.hidden = !show;
  document.body.classList.toggle('intro-active', show);
  if (show && els.introVideo) {
    els.introVideo.loop = true;
    els.introVideo.currentTime = 0;
    els.introVideo.play().catch(() => {});
    armIntroSoundUnlock();
  }
  setIntroSound(state.introSound, false);
  updateHotkeyHintVisibility();
}

function closeIntro(skipNextTime) {
  if (skipNextTime) {
    state.introSeen = true;
    storage.setItem(LS.introSeen, '1');
  }
  els.introScreen.hidden = true;
  document.body.classList.remove('intro-active');
  els.introVideo?.pause();
  updateHotkeyHintVisibility();
}

window.__atlasEnterIntro = () => closeIntro(false);
window.__atlasSkipIntro = () => closeIntro(true);
window.__atlasIntroSound = () => setIntroSound(true, true);

function armIntroSoundUnlock() {
  if (state.introUnlockArmed || !state.introSound || state.introSeen) return;
  state.introUnlockArmed = true;
  const opts = { passive: true };
  const unlock = () => {
    if (state.introSoundUnlocked) return;
    state.introSoundUnlocked = true;
    window.removeEventListener('pointerdown', unlock, opts);
    window.removeEventListener('touchstart', unlock, opts);
    setIntroSound(true, true);
  };
  window.addEventListener('pointerdown', unlock, opts);
  window.addEventListener('touchstart', unlock, opts);
}

function setIntroSound(on, fromUser) {
  const video = els.introVideo;
  state.introSound = !!on;
  storage.setItem(LS.introSound, state.introSound ? '1' : '0');
  if (!video) return;
  const canUnmuteNow = !!fromUser || !!(navigator.userActivation && navigator.userActivation.hasBeenActive);
  if (!state.introSound) {
    video.muted = true;
  } else if (canUnmuteNow) {
    state.introSoundUnlocked = true;
    video.muted = false;
    video.volume = 1;
    if (video.paused) video.play().catch(() => {});
  } else {
    // Keep muted until a real user gesture; avoids browser autoplay warnings.
    video.muted = true;
  }
  if (els.introSoundBtn) {
    const intro = introCopy[state.lang] || introCopy.en;
    els.introSoundBtn.textContent = state.introSound ? intro.soundOn : intro.sound;
  }
}

function updateSEO() {
  const selected = state.section === 'all' ? null : state.data.sections.find((x) => x.title_en === state.section);
  const title = selected ? `${pickLang(selected.title_en, selected.title_ru, selected.title_de)} | ${i18n[state.lang].pageTitle}` : i18n[state.lang].pageTitle;
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

function cycleTheme(event) {
  if (state.themeAnimating) return;
  const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
  const blink = els.themeBlink;
  if (!blink || document.hidden) {
    state.theme = nextTheme;
    storage.setItem(LS.theme, state.theme);
    applyTheme();
    return;
  }

  state.themeAnimating = true;
  clearThemeTimers();
  const px = Number.isFinite(event?.clientX) ? event.clientX : (window.innerWidth / 2);
  const py = Number.isFinite(event?.clientY) ? event.clientY : (window.innerHeight / 2);
  const nx = ((px / Math.max(1, window.innerWidth)) - 0.5) * 2;
  const ny = ((py / Math.max(1, window.innerHeight)) - 0.5) * 2;
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const variants = ['variant-a', 'variant-b', 'variant-c'];
  const variant = variants[Math.floor(Math.random() * variants.length)];
  const quote = generateThemeQuote(nextTheme);
  blink.style.setProperty('--pupil-x', `${clamp(nx * 12, -12, 12)}px`);
  blink.style.setProperty('--pupil-y', `${clamp(ny * 8, -8, 8)}px`);
  blink.classList.remove('active', 'preclosed', 'preblink', 'anim-open', 'anim-close', 'show-quote', 'hide-quote', 'variant-a', 'variant-b', 'variant-c');
  blink.classList.add(variant);
  void blink.offsetWidth;
  if (els.themeBlinkQuote) els.themeBlinkQuote.textContent = quote;

  if (nextTheme === 'dark') {
    // Dark theme feels like "eyes opening": lids start closed, then open.
    blink.classList.add('active', 'preclosed', 'show-quote');
    state.theme = nextTheme;
    storage.setItem(LS.theme, state.theme);
    applyTheme();
    requestAnimationFrame(() => {
      blink.classList.remove('preclosed');
      blink.classList.add('anim-open');
    });
    scheduleTheme(() => {
      blink.classList.add('hide-quote');
    }, 2480);
    scheduleTheme(() => {
      blink.classList.remove('active', 'anim-open', 'show-quote', 'hide-quote');
      state.themeAnimating = false;
    }, 2720);
    return;
  }

  // Light theme feels like "eyes closing": lids close over the whole screen.
  blink.classList.add('active', 'show-quote');
  scheduleTheme(() => {
    blink.classList.add('preblink');
  }, 1400);
  scheduleTheme(() => {
    blink.classList.remove('preblink');
    blink.classList.add('anim-close');
  }, 1640);
  scheduleTheme(() => {
    state.theme = nextTheme;
    storage.setItem(LS.theme, state.theme);
    applyTheme();
  }, 2140);
  scheduleTheme(() => {
    blink.classList.add('hide-quote');
  }, 2240);
  scheduleTheme(() => {
    blink.classList.remove('active', 'preblink', 'anim-close', 'preclosed', 'show-quote', 'hide-quote');
    state.themeAnimating = false;
  }, 2700);
}

function generateThemeQuote(targetTheme) {
  const langSet = THEME_QUOTES[state.lang] || THEME_QUOTES.en;
  const mode = targetTheme === 'dark' ? 'dark' : 'light';
  const set = langSet[mode] || THEME_QUOTES.en[mode];
  let candidate = '';
  for (let i = 0; i < 4; i += 1) {
    const a = set.start[Math.floor(Math.random() * set.start.length)];
    const b = set.end[Math.floor(Math.random() * set.end.length)];
    candidate = `${a}... ${b}`;
    if (candidate !== state.lastThemeQuote) break;
  }
  state.lastThemeQuote = candidate;
  return candidate;
}

function scheduleTheme(fn, delay) {
  const id = window.setTimeout(fn, delay);
  state.themeTimers.push(id);
}

function clearThemeTimers() {
  state.themeTimers.forEach((id) => window.clearTimeout(id));
  state.themeTimers = [];
}

function onVisibilityChange() {
  if (!document.hidden || !state.themeAnimating) return;
  clearThemeTimers();
  const blink = els.themeBlink;
  if (blink) {
    blink.classList.remove('active', 'preclosed', 'preblink', 'anim-open', 'anim-close', 'show-quote', 'hide-quote', 'variant-a', 'variant-b', 'variant-c');
  }
  state.themeAnimating = false;
}

function scheduleCalcPresetSave() {
  if (state.calcSaveTimer) window.clearTimeout(state.calcSaveTimer);
  state.calcSaveTimer = window.setTimeout(() => {
    saveCalcPreset();
    state.calcSaveTimer = null;
  }, 220);
}

function flashCalcAction(btn) {
  if (!btn) return;
  btn.classList.add('is-active');
  window.setTimeout(() => btn.classList.remove('is-active'), 220);
}

function applyTheme() {
  document.body.classList.remove('theme-dark');
  if (state.theme === 'dark') document.body.classList.add('theme-dark');
  if (els.themeToggle) els.themeToggle.textContent = state.theme === 'dark' ? 'Theme:Dark' : 'Theme:Light';
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
function formatDate(v) {
  if (!v) return '-';
  try {
    return new Date(v).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  } catch (_) {
    return v;
  }
}

function byId(id) { return document.getElementById(id); }
function pickLang(en, ru, de) {
  if (state.lang === 'ru') return ru || en;
  if (state.lang === 'de') return de || en;
  return en;
}
function setSelect(el, opts, value) { el.innerHTML = opts.map((o) => `<option value="${esc(o.v)}">${esc(o.l)}</option>`).join(''); el.value = value; }
function statHtml(value, label) { return `<div class="stat"><strong>${value}</strong><span>${esc(label)}</span></div>`; }
function num(id) {
  const raw = String(byId(id)?.value ?? '0').trim().replace(',', '.');
  const value = Number(raw);
  return Number.isFinite(value) ? value : 0;
}
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
