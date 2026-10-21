const root = document.documentElement;
const preferencesKey = 'job-2027-evidence-preferences-v1';
const guideProgressKey = 'job-2027-evidence-guide-progress-v1';
const readPreferences = () => {
  try { return JSON.parse(localStorage.getItem(preferencesKey) || '{}') || {}; }
  catch { return {}; }
};
const writePreferences = value => {
  try { localStorage.setItem(preferencesKey, JSON.stringify(value)); }
  catch { /* Private browsing may disable storage; the current page still works. */ }
};
const initialPreferences = readPreferences();
if (['light', 'dark'].includes(initialPreferences.theme)) root.dataset.theme = initialPreferences.theme;

const themeToggle = document.querySelector('#theme-toggle');
const activeTheme = () => root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
function updateThemeToggle() {
  if (!themeToggle) return;
  const dark = activeTheme() === 'dark';
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.textContent = 'Dark appearance';
  themeToggle.title = dark ? 'Dark appearance is active. Select to switch to light appearance.' : 'Select to use dark appearance.';
}
updateThemeToggle();
themeToggle?.addEventListener('click', () => {
  const next = activeTheme() === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  writePreferences({ ...readPreferences(), theme: next });
  updateThemeToggle();
});
matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', () => {
  if (!root.dataset.theme) updateThemeToggle();
});

const buildProvenance = document.querySelector('#build-provenance');
async function loadBuildProvenance() {
  if (!buildProvenance) return;
  const fallback = 'Version and updated-at details are unavailable because build metadata could not be read.';
  try {
    const response = await fetch(new URL('build-info.json', document.baseURI), { cache: 'no-store' });
    if (!response.ok) throw new Error('Build metadata unavailable');
    const info = await response.json();
    if (info.schemaVersion !== 1 || !/^[a-f0-9]{40,64}$/u.test(info.revision || '') || !info.updatedAt) throw new Error('Build metadata incomplete');
    const date = new Date(info.updatedAt);
    if (!Number.isFinite(date.getTime())) throw new Error('Build timestamp unavailable');
    const formatter = new Intl.DateTimeFormat(undefined, {
      year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short'
    });
    const version = document.createElement('code');
    version.textContent = info.revision;
    const versionLine = document.createElement('span');
    versionLine.append('Source version: ', version);
    const timeLine = document.createElement('span');
    timeLine.textContent = `Updated at: ${formatter.format(date)} (local time; timezone shown)`;
    buildProvenance.replaceChildren(versionLine, timeLine);
  } catch {
    buildProvenance.textContent = fallback;
  }
}

function addText(parent, tag, className, value) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = value ?? '';
  parent.append(element);
  return element;
}
function detailPair(dl, label, value) {
  if (value === null || value === undefined || value === '') return;
  addText(dl, 'dt', '', label);
  addText(dl, 'dd', '', String(value));
}
function makeEvidenceCard(item) {
  if (!/^captures\/[a-z0-9][a-z0-9/_-]*\.png$/u.test(item.path || '') || item.path.split('/').includes('..')) return null;
  const article = document.createElement('article');
  article.className = 'capture-card';
  article.dataset.search = item.search || `${item.title} ${item.caption} ${(item.limits || []).join(' ')}`;
  article.dataset.category = item.category || 'other';
  article.dataset.theme = item.theme || 'unspecified';
  article.dataset.language = normalizeLanguage(item.language);
  article.dataset.viewportWidth = item.viewportWidth == null ? '' : String(item.viewportWidth);
  article.dataset.evidenceSet = item.evidenceSet || '';

  const link = document.createElement('a');
  link.className = 'image-link';
  link.href = item.path;
  link.setAttribute('aria-label', `Open original image: ${item.title}`);
  const image = document.createElement('img');
  image.src = item.path;
  image.alt = item.alt || item.title;
  image.width = item.width;
  image.height = item.height;
  image.loading = 'lazy';
  image.decoding = 'async';
  link.append(image);
  article.append(link);

  const copy = document.createElement('div');
  copy.className = 'card-copy';
  addText(copy, 'p', 'card-kicker', `${item.category} · ${item.theme} · ${item.language}`);
  addText(copy, 'h3', '', item.title || item.state);
  addText(copy, 'p', '', item.caption);
  if (item.runStatus) addText(copy, 'p', 'evidence-state', item.runStatus);

  const details = document.createElement('details');
  details.className = 'capture-details';
  addText(details, 'summary', '', 'Capture details and limits');
  const dl = document.createElement('dl');
  const captured = item.capturedAt
    ? `${item.capturedAt} (${item.timestampBasis || 'timestamp basis unavailable'})`
    : 'Unavailable in the reviewed source record';
  detailPair(dl, 'Recorded at', captured);
  detailPair(dl, 'Viewport / device scale', item.viewportWidth == null ? 'Unavailable' : `${item.viewportWidth} × ${item.viewportHeight} CSS pixels · ${item.deviceScaleFactor}×`);
  detailPair(dl, 'PNG dimensions', `${item.width} × ${item.height}`);
  detailPair(dl, 'Source revision', item.sourceRevision);
  detailPair(dl, 'Source image digest', item.sourceImageId);
  detailPair(dl, 'PNG SHA-256', item.sha256);
  detailPair(dl, 'Source binding', item.sourceBinding);
  details.append(dl);
  if (Array.isArray(item.limits) && item.limits.length) {
    const list = document.createElement('ul');
    list.className = 'limits';
    for (const limit of item.limits) addText(list, 'li', '', limit);
    details.append(list);
  }
  copy.append(details);
  article.append(copy);
  return article;
}

function addLedgerRow(tbody, item) {
  const row = document.createElement('tr');
  row.dataset.search = item.search || `${item.title} ${item.caption} ${(item.limits || []).join(' ')}`;
  row.dataset.category = item.category || 'other';
  row.dataset.theme = item.theme || 'unspecified';
  row.dataset.language = normalizeLanguage(item.language);
  row.dataset.viewportWidth = item.viewportWidth == null ? '' : String(item.viewportWidth);
  const fileCell = document.createElement('td');
  const link = document.createElement('a');
  link.href = item.path;
  link.textContent = item.title || item.state;
  fileCell.append(link);
  row.append(fileCell);
  for (const value of [item.category, item.theme, item.language, item.capturedAt ? `${item.capturedAt} (${item.timestampBasis || 'timezone unavailable'})` : 'Unavailable', item.viewportWidth == null ? 'Unavailable' : `${item.viewportWidth} × ${item.viewportHeight} · ${item.deviceScaleFactor}×`, item.sourceRevision || 'Unavailable', item.sha256]) {
    addText(row, 'td', '', value);
  }
  tbody.append(row);
}

const filters = {
  query: document.querySelector('#evidence-search'),
  category: document.querySelector('#filter-category'),
  theme: document.querySelector('#filter-theme'),
  language: document.querySelector('#filter-language'),
  viewport: document.querySelector('#filter-viewport'),
  count: document.querySelector('#result-count'),
  empty: document.querySelector('#empty-state'),
  panel: document.querySelector('#filters-panel'),
  active: document.querySelector('#active-filter-count')
};
const clearButton = document.querySelector('#clear-filters');
function categoryForCard(card) {
  if (card.dataset.category) return card.dataset.category;
  const section = card.closest('.gallery');
  if (section?.dataset.category) return section.dataset.category;
  const text = `${card.dataset.search || ''} ${card.textContent}`.toLowerCase();
  if (/authenticator|security|sign-in|two-step/u.test(text)) return 'security';
  if (/mail|attachment|provider/u.test(text)) return 'mail';
  if (/resume|profile|job experience document/u.test(text)) return 'profile';
  if (/color plane|appearance/u.test(text)) return 'appearance';
  if (/documentation|worker article|task guide/u.test(text)) return 'documentation';
  return 'workspace';
}
function normalizeLanguage(value) {
  const text = String(value || '').toLowerCase();
  if (text === 'en' || text.includes('english')) return 'English';
  if (text === 'yue' || text.includes('cantonese')) return 'Cantonese';
  if (text === 'both' || text.includes('bilingual')) return 'Bilingual';
  return 'unspecified';
}
function inferred(card, key) {
  if (card.dataset[key]) return card.dataset[key];
  const kicker = card.querySelector('.card-kicker')?.textContent.toLowerCase() || '';
  const text = `${kicker} ${card.dataset.search || ''}`.toLowerCase();
  if (key === 'theme') return /dark/u.test(text) ? 'dark' : /light/u.test(text) ? 'light' : 'unspecified';
  if (key === 'language') return normalizeLanguage(text);
  return '';
}
function viewportWidth(card) {
  if (card.dataset.viewportWidth) return Number(card.dataset.viewportWidth);
  const details = card.querySelector('dl')?.textContent || '';
  const match = details.match(/Viewport\s*\/\s*DPR\s*(\d+)\s*[×x]\s*(\d+)/iu);
  return match ? Number(match[1]) : null;
}
function persistFilters() {
  const current = readPreferences();
  writePreferences({
    ...current,
    query: filters.query?.value || '',
    category: filters.category?.value || 'all',
    themeFilter: filters.theme?.value || 'all',
    languageFilter: filters.language?.value || 'all',
    viewportFilter: filters.viewport?.value || 'all',
    filtersOpen: Boolean(filters.panel?.open)
  });
}
function updateFilterSummary(activeCount) {
  if (filters.active) filters.active.textContent = activeCount ? `${activeCount} active` : 'No active filters';
}
function applyFilters() {
  const cards = [...document.querySelectorAll('.capture-card')];
  const rows = [...document.querySelectorAll('#capture-ledger tbody tr')];
  const query = (filters.query?.value || '').trim().toLocaleLowerCase();
  const category = filters.category?.value || 'all';
  const theme = filters.theme?.value || 'all';
  const language = filters.language?.value || 'all';
  const viewport = filters.viewport?.value || 'all';
  let visible = 0;
  const targets = [...cards, ...rows];
  for (const target of targets) {
    const content = `${target.dataset.search || ''} ${target.textContent}`.toLocaleLowerCase();
    const targetCategory = target.dataset.category || categoryForCard(target);
    const targetTheme = target.dataset.theme || inferred(target, 'theme');
    const targetLanguage = target.dataset.language || inferred(target, 'language');
    const width = viewportWidth(target);
    const matchesViewport = viewport === 'all'
      || (viewport === 'narrow' && width !== null && width <= 390)
      || (viewport === 'desktop' && width !== null && width > 390)
      || (viewport === 'unspecified' && width === null);
    const matches = (!query || content.includes(query))
      && (category === 'all' || targetCategory === category)
      && (theme === 'all' || targetTheme === theme)
      && (language === 'all' || targetLanguage === language)
      && matchesViewport;
    target.hidden = !matches;
    visible += Number(matches);
  }
  if (filters.count) filters.count.textContent = `Showing ${visible} of ${targets.length} evidence records`;
  if (filters.empty) filters.empty.hidden = visible !== 0;
  updateFilterSummary(Number(Boolean(query)) + Number(category !== 'all') + Number(theme !== 'all') + Number(language !== 'all') + Number(viewport !== 'all'));
  persistFilters();
}
function restoreFilters() {
  const saved = readPreferences();
  if (filters.query) filters.query.value = saved.query || '';
  if (filters.category && saved.category) filters.category.value = saved.category;
  if (filters.theme && saved.themeFilter) filters.theme.value = saved.themeFilter;
  if (filters.language && saved.languageFilter) filters.language.value = saved.languageFilter;
  if (filters.viewport && saved.viewportFilter) filters.viewport.value = saved.viewportFilter;
  if (filters.panel && typeof saved.filtersOpen === 'boolean') filters.panel.open = saved.filtersOpen;
  const params = new URLSearchParams(location.search);
  if (filters.category && params.has('category')) filters.category.value = params.get('category');
  if (filters.theme && params.has('theme')) filters.theme.value = params.get('theme');
  if (filters.language && params.has('language')) filters.language.value = params.get('language');
  if (filters.viewport && params.has('viewport')) filters.viewport.value = params.get('viewport');
  if (params.size && filters.panel) filters.panel.open = true;
}

async function loadInventory() {
  const status = document.querySelector('#inventory-status');
  try {
    const response = await fetch(new URL('captures.json', document.baseURI), { cache: 'no-store' });
    if (!response.ok) throw new Error('Inventory unavailable');
    const inventory = await response.json();
    const latestGrid = document.querySelector('#latest-evidence-grid');
    const earlierGrid = document.querySelector('#earlier-save-grid');
    const currentSets = new Set(['current-profile-matrix', 'current-terminology', 'unverified-paused-association']);
    for (const item of inventory.images || []) {
      if (!['current-profile-matrix', 'current-terminology', 'unverified-paused-association', 'earlier-original-file-saves'].includes(item.evidenceSet)) continue;
      const card = makeEvidenceCard(item);
      if (!card) continue;
      const destination = item.evidenceSet === 'earlier-original-file-saves' ? earlierGrid : latestGrid;
      if (destination) destination.append(card);
    }
    const ledger = document.querySelector('#capture-ledger tbody');
    if (ledger) for (const item of inventory.images || []) addLedgerRow(ledger, item);
    if (status) status.textContent = 'Reviewed capture inventory loaded. Each record includes its source binding and evidence limits.';
  } catch {
    if (status) status.textContent = 'The reviewed capture inventory could not be loaded. Existing page content remains visible.';
  }
}

function wireGuideProgress() {
  const controls = [...document.querySelectorAll('[data-guide-progress]')];
  if (!controls.length) return;
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(guideProgressKey) || '{}') || {}; } catch { saved = {}; }
  const status = document.querySelector('#guide-progress-status');
  const update = () => {
    const state = Object.fromEntries(controls.map(control => [control.dataset.guideProgress, control.checked]));
    try { localStorage.setItem(guideProgressKey, JSON.stringify(state)); } catch { /* Current-page progress still works. */ }
    if (status) status.textContent = `${Object.values(state).filter(Boolean).length} of ${controls.length} reading steps marked complete on this device.`;
  };
  for (const control of controls) {
    control.checked = Boolean(saved[control.dataset.guideProgress]);
    control.addEventListener('change', update);
  }
  update();
}
function wireGalleryExamples() {
  for (const button of document.querySelectorAll('[data-gallery-example]')) {
    button.addEventListener('click', () => {
      const params = new URLSearchParams();
      for (const key of ['category', 'theme', 'language', 'viewport']) {
        const value = button.dataset[key];
        if (value) params.set(key, value);
      }
      const base = new URL('index.html', document.baseURI);
      base.search = params.toString();
      base.hash = 'filters-panel';
      location.href = base.toString();
    });
  }
}

(async () => {
  await Promise.all([loadBuildProvenance(), loadInventory()]);
  restoreFilters();
  const controls = [filters.query, filters.category, filters.theme, filters.language, filters.viewport].filter(Boolean);
  for (const control of controls) control.addEventListener('input', applyFilters);
  for (const control of controls) control.addEventListener('change', applyFilters);
  filters.panel?.addEventListener('toggle', persistFilters);
  clearButton?.addEventListener('click', () => {
    if (filters.query) filters.query.value = '';
    history.replaceState(null, '', location.pathname);
    for (const select of [filters.category, filters.theme, filters.language, filters.viewport]) if (select) select.value = 'all';
    applyFilters();
    filters.query?.focus();
  });
  applyFilters();
  wireGuideProgress();
  wireGalleryExamples();
})();
