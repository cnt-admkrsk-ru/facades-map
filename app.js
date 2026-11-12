// app.js — метки и фото в Supabase. Автоконвертация в WebP.
const SUPABASE_URL = 'https://lifgmqcekizumhgldzjk.supabase.co';
const SUPABASE_KEY = 'sb_publishable_pNYuQiKd4IRAfPh1yd18Sw_GynFmbLz';
const BUCKET_NAME = 'photos';

const colors = {
  red: 'Проблемные фасады',
  yellow: 'В ремонте или запланированы к ремонту до 2028 года',
  green: 'Удовлетворительное состояние фасада'
};
const byId = id => document.getElementById(id);

const translitMap = {
  'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'e','ж':'zh','з':'z','и':'i','й':'y',
  'к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u','ф':'f',
  'х':'h','ц':'ts','ч':'ch','ш':'sh','щ':'sch','ъ':'','ы':'y','ь':'','э':'e','ю':'yu','я':'ya'
};
function slugify(str) {
  return str.toLowerCase().split('').map(ch => translitMap[ch] !== undefined ? translitMap[ch] : ch)
    .join('').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

// --- Конвертер в WebP ---
async function convertToWebP(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      // Сжимаем в webp с качеством 0.8 (хороший баланс)
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Ошибка конвертации в WebP'));
      }, 'image/webp', 0.8);
    };
    img.onerror = () => reject(new Error('Не удалось загрузить изображение'));
    img.src = URL.createObjectURL(file);
  });
}

// --- Supabase: фото ---
async function uploadToSupabase(file, fileName) {
  const url = `${SUPABASE_URL}/storage/v1/object/${BUCKET_NAME}/${fileName}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${SUPABASE_KEY}`, 'apikey': SUPABASE_KEY, 'x-upsert': 'true' },
    body: file
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(errText);
  }
  return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/${fileName}`;
}

async function deleteFromSupabase(fileName) {
  await fetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET_NAME}/${fileName}`, {
    method: 'DELETE', headers: { 'Authorization': `Bearer ${SUPABASE_KEY}`, 'apikey': SUPABASE_KEY }
  });
}

// --- Supabase: метки ---
async function loadMarkersFromSupabase() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/markers?select=*`, {
    headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.map(m => ({
    address: m.address, number: m.number, coords: [m.lat, m.lng],
    status: m.status, photo: m.photo, problem: m.problem || '', updated: m.updated || ''
  }));
}

async function saveMarkersToSupabase(markers) {
  await fetch(`${SUPABASE_URL}/rest/v1/markers?address=neq.`, {
    method: 'DELETE', headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
  });
  if (!markers.length) return;
  const rows = markers.map(m => ({
    address: m.address, number: m.number, lat: m.coords[0], lng: m.coords[1],
    status: m.status, photo: m.photo, problem: m.problem, updated: m.updated
  }));
  await fetch(`${SUPABASE_URL}/rest/v1/markers`, {
    method: 'POST',
    headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}`, 'Content-Type': 'application/json', 'Prefer': 'return=minimal' },
    body: JSON.stringify(rows)
  });
}

function createUI() {
  if (!byId('theme-toggle')) {
    const btn = document.createElement('button');
    btn.id = 'theme-toggle'; btn.type = 'button'; btn.className = 'theme-toggle';
    btn.textContent = '🌙'; btn.setAttribute('aria-label', 'Тема');
    const ta = document.querySelector('.top-actions'); if (ta) ta.appendChild(btn);
  }
  const legendUl = byId('legend');
  if (!byId('add-point') && legendUl) {
    const btn = document.createElement('button');
    btn.id = 'add-point'; btn.type = 'button'; btn.className = 'add-point';
    btn.textContent = '+ Добавить метку'; legendUl.after(btn);
  }
  if (!byId('save-map') && legendUl) {
    const wrap = document.createElement('div'); wrap.className = 'data-buttons';
    const btn = document.createElement('button');
    btn.id = 'save-map'; btn.type = 'button'; btn.className = 'data-btn primary-btn';
    btn.textContent = 'Сохранить карту'; wrap.appendChild(btn);
    const anchor = byId('add-point') || legendUl; anchor.after(wrap);
  }
  if (!byId('delete-point')) {
    const details = byId('details');
    if (details) {
      const btn = document.createElement('button');
      btn.id = 'delete-point'; btn.type = 'button'; btn.className = 'delete-point';
      btn.textContent = 'Удалить метку'; btn.hidden = true; details.appendChild(btn);
    }
  }
  if (!byId('photo-input')) {
    const details = byId('details');
    if (details) {
      const label = document.createElement('label'); label.className = 'upload-btn';
      const input = document.createElement('input');
      input.type = 'file'; input.id = 'photo-input'; input.accept = 'image/*'; input.hidden = true;
      const span = document.createElement('span'); span.textContent = 'Загрузить фото';
      label.append(input, span); details.appendChild(label);
    }
  }
  if (!byId('status-editor')) {
    const details = byId('details');
    if (details) {
      const div = document.createElement('div');
      div.id = 'status-editor'; div.className = 'status-editor'; div.hidden = true;
      div.innerHTML = '<div class="status-label">Изменить статус:</div>' +
        '<div class="status-buttons">' +
        '<button type="button" class="status-btn red" data-status="red"></button>' +
        '<button type="button" class="status-btn yellow" data-status="yellow"></button>' +
        '<button type="button" class="status-btn green" data-status="green"></button>' +
        '</div>' +
        '<label class="date-label">Дата изменения: <input type="date" id="edit-date"></label>';
      details.appendChild(div);
    }
  }
  if (!byId('add-dialog')) {
    const dialog = document.createElement('dialog'); dialog.id = 'add-dialog';
    dialog.innerHTML = '<form method="dialog" class="add-form">' +
      '<h2>Новая метка</h2>' +
      '<label>Адрес (имя файла фото) <input type="text" id="new-address" placeholder="ул. Ленина, 100" required></label>' +
      '<label>Координаты (широта, долгота) <input type="text" id="new-coords" placeholder="56.012345, 92.876543" required></label>' +
      '<label>Категория <select id="new-status"><option value="green">Удовлетворительно</option><option value="yellow">В ремонте / план</option><option value="red">Проблемный</option></select></label>' +
      '<div class="form-actions"><button type="button" id="cancel-add">Отмена</button><button type="submit" id="confirm-add">Добавить</button></div>' +
      '</form>';
    document.body.appendChild(dialog);
  }
}
document.addEventListener('DOMContentLoaded', createUI);

try {
  if (typeof L === 'undefined') {
    console.error('ОШИБКА: Leaflet не загружен.');
  } else {
    const activeStatuses = new Set(Object.keys(colors));
    let customBuildings = [];
    let hiddenAddresses = [];
    let pinned = null, preview = null;
    const entries = [];
    let photoBuilding = null, photoRequest = 0;

    const basemapBounds = L.latLngBounds([56.004, 92.846], [56.021, 92.893]);
    const allBuildings = () => {
      const base = buildings.filter(b => !hiddenAddresses.includes(b.address));
      return [...base, ...customBuildings];
    };
    const mapBounds = L.latLngBounds([
      basemapBounds.getSouthWest(), basemapBounds.getNorthEast(),
      ...allBuildings().map(b => b.coords)
    ]).pad(0.03);

    const map = L.map('map', {
      center: [56.0125, 92.8695], zoom: 15, minZoom: 13, maxZoom: 19,
      maxBounds: mapBounds, maxBoundsViscosity: 1,
      zoomAnimation: true, fadeAnimation: true, markerZoomAnimation: true
    });
    map.zoomControl._zoomInButton.title = 'Приблизить';
    map.zoomControl._zoomOutButton.title = 'Отдалить';
    map.attributionControl.setPrefix(false);
    L.control.scale({ imperial: false, maxWidth: 110 }).addTo(map);

    L.imageOverlay('map/center.png', basemapBounds, {
      attribution: '© OpenStreetMap contributors'
    }).on('error', () => {
      const w = byId('map-warning'); if (w) w.hidden = false;
    }).addTo(map);

    map.on('contextmenu', (e) => {
      const dialog = byId('add-dialog'); if (!dialog) return;
      byId('new-coords').value = e.latlng.lat.toFixed(6) + ', ' + e.latlng.lng.toFixed(6);
      byId('new-address').value = ''; dialog.showModal();
    });

    const photo = byId('facade'), placeholder = byId('photo-placeholder'), viewer = byId('viewer');

    async function showPhoto(building) {
      const request = ++photoRequest;
      photo.hidden = true; placeholder.hidden = !building;
      if (!building) return;
      byId('photo-name').textContent = building.photo;
      
      // Теперь всегда ищем только .webp
      const url = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/${building.photo}.webp`;
      
      try {
        const res = await fetch(url, { method: 'HEAD' });
        if (res.ok) {
          if (request !== photoRequest) return;
          photo.src = url; photo.alt = 'Фасад · ' + building.address;
          photo.hidden = false; placeholder.hidden = true;
          if (byId('enlarge')) byId('enlarge').hidden = !pinned || photo.hidden;
          return;
        }
      } catch (e) {}
      placeholder.hidden = false;
    }

    function isCustom(b) { return customBuildings.includes(b); }

    function renderCard() {
      const building = pinned || preview;
      byId('card-label').textContent = pinned ? 'Карточка закреплена' : preview ? 'Предпросмотр' : 'Как пользоваться';
      byId('card-title').textContent = building ? building.address : 'Выбери здание';
      byId('hint').hidden = Boolean(building);
      byId('close').hidden = !pinned;
      byId('details').hidden = !building;

      let coordsEl = byId('card-coords');
      if (!coordsEl) {
        coordsEl = document.createElement('div'); coordsEl.id = 'card-coords';
        coordsEl.style.fontSize = '12px'; coordsEl.style.color = 'var(--muted)';
        coordsEl.style.marginTop = '4px'; coordsEl.style.marginBottom = '8px';
        const title = byId('card-title'); if (title) title.after(coordsEl);
      }
      if (building && building.coords) {
        coordsEl.textContent = 'Координаты: ' + building.coords[0].toFixed(6) + ', ' + building.coords[1].toFixed(6);
        coordsEl.hidden = false;
      } else coordsEl.hidden = true;

      const problem = byId('card-problem');
      problem.textContent = building?.problem ?? ''; problem.hidden = !problem.textContent;

      const del = byId('delete-point');
      if (del) del.hidden = !(pinned && isCustom(pinned));

      const editBlock = byId('status-editor');
      if (editBlock) {
        editBlock.hidden = !pinned;
        if (pinned) {
          editBlock.querySelectorAll('.status-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.status === pinned.status));
          const dateInput = editBlock.querySelector('#edit-date');
          if (dateInput) dateInput.value = pinned.updated || '';
        }
      }
      if (building !== photoBuilding) { photoBuilding = building; showPhoto(building); }
      byId('enlarge').hidden = true;

      for (const { building: entry, button, marker } of entries) {
        button.setAttribute('aria-pressed', String(entry === pinned));
        const el = marker.getElement(); if (el) el.classList.toggle('active', entry === building);
      }
    }

    function pin(b) { pinned = b; preview = null; renderCard(); }

    function showOverview() {
      const list = allBuildings().filter(b => activeStatuses.has(b.status));
      if (!list.length) return;
      map.flyToBounds(L.latLngBounds(list.map(b => b.coords)), { padding: [52, 55], maxZoom: 16, duration: 0.9 });
    }

    function buildMarkers() {
      for (const { marker } of entries) map.removeLayer(marker);
      entries.length = 0; byId('addresses').innerHTML = '';

      const list = allBuildings().filter(b => activeStatuses.has(b.status));
      const groups = new Map();
      for (const b of list) {
        const key = b.coords.join(',');
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(b);
      }
      for (const b of list) {
        const number = document.createElement('span'); number.textContent = b.number;
        const group = groups.get(b.coords.join(','));
        const offset = (group.indexOf(b) - (group.length - 1) / 2) * 36;
        const marker = L.marker(b.coords, {
          icon: L.divIcon({ className: 'marker ' + b.status, html: number, iconSize: [31, 31], iconAnchor: [15.5 - offset, 15.5] }),
          title: b.address
        }).addTo(map);
        marker.on('mouseover', () => { preview = b; if (!pinned) renderCard(); });
        marker.on('mouseout', () => { if (preview === b) preview = null; if (!pinned) renderCard(); });
        marker.on('click', () => pin(b));
        const button = document.createElement('button');
        button.type = 'button'; button.className = 'address';
        const dot = document.createElement('span'); dot.className = 'dot ' + b.status;
        button.append(dot, b.address);
        button.addEventListener('click', () => { map.flyTo(b.coords, 17, { duration: 0.8 }); pin(b); });
        entries.push({ building: b, button, marker });
      }

      const streets = new Map();
      for (const { building, button } of entries) {
        const streetName = building.address.split(',')[0].trim();
        if (!streets.has(streetName)) streets.set(streetName, []);
        streets.get(streetName).push({ button, building });
      }
      const collator = new Intl.Collator('ru', { numeric: true });
      const sortedStreets = [...streets.keys()].sort((a, b) => collator.compare(a, b));

      for (const streetName of sortedStreets) {
        const group = streets.get(streetName);
        group.sort((a, b) => collator.compare(a.building.number, b.building.number));
        const groupDiv = document.createElement('div');
        groupDiv.className = 'address-group';
        const header = document.createElement('div');
        header.className = 'group-header';
        header.innerHTML = `<span>${streetName}</span><span class="arrow">▶</span>`;
        const content = document.createElement('div');
        content.className = 'group-content';
        for (const item of group) content.appendChild(item.button);
        header.addEventListener('click', () => groupDiv.classList.toggle('open'));
        groupDiv.append(header, content);
        byId('addresses').appendChild(groupDiv);
      }
      byId('count').textContent = list.length;
    }

    function buildLegend() {
      const ul = byId('legend'); ul.innerHTML = '';
      for (const [color, label] of Object.entries(colors)) {
        const li = document.createElement('li');
        const sw = document.createElement('label'); sw.className = 'switch';
        const cb = document.createElement('input'); cb.type = 'checkbox'; cb.checked = activeStatuses.has(color);
        const slider = document.createElement('span'); slider.className = 'slider';
        sw.append(cb, slider);
        cb.addEventListener('change', () => {
          if (cb.checked) activeStatuses.add(color); else activeStatuses.delete(color);
          if (pinned && !activeStatuses.has(pinned.status)) pin(null);
          buildMarkers(); renderCard();
        });
        const dot = document.createElement('span'); dot.className = 'dot ' + color;
        const text = document.createElement('span'); text.textContent = label;
        li.append(sw, dot, text); ul.append(li);
      }
    }

    function initTheme() {
      const saved = localStorage.getItem('facades_theme') || 'light';
      document.documentElement.dataset.theme = saved;
      const btn = byId('theme-toggle'); if (!btn) return;
      btn.textContent = saved === 'dark' ? '☀️' : '🌙';
      btn.addEventListener('click', () => {
        const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        localStorage.setItem('facades_theme', next);
        btn.textContent = next === 'dark' ? '☀️' : '🌙';
      });
    }

    function initPhotoUpload() {
      const input = byId('photo-input'); if (!input) return;
      input.addEventListener('change', async () => {
        const file = input.files && input.files[0]; if (!file || !pinned) return;
        
        byId('photo-name').textContent = 'Конвертация...';
        try {
          // 1. Конвертируем в WebP
          const webpBlob = await convertToWebP(file);
          // 2. Имя файла всегда .webp
          const fileName = pinned.photo + '.webp';
          
          byId('photo-name').textContent = 'Загрузка...';
          // 3. Загружаем в Supabase
          await uploadToSupabase(webpBlob, fileName);
          await showPhoto(pinned);
        } catch (e) {
          alert('Ошибка: ' + e.message);
          byId('photo-name').textContent = 'Ошибка';
        }
        input.value = '';
      });
    }

    function initAddPoint() {
      const dialog = byId('add-dialog'); if (!dialog) return;
      const addBtn = byId('add-point');
      if (addBtn) addBtn.addEventListener('click', () => {
        const c = map.getCenter();
        byId('new-coords').value = c.lat.toFixed(6) + ', ' + c.lng.toFixed(6);
        byId('new-address').value = ''; dialog.showModal();
      });
      byId('cancel-add').addEventListener('click', () => dialog.close());
      byId('confirm-add').addEventListener('click', (e) => {
        e.preventDefault();
        const addressInput = byId('new-address').value.trim();
        const raw = byId('new-coords').value.trim();
        const status = byId('new-status').value;
        if (!addressInput) return alert('Введите адрес');
        const parts = raw.split(/[,;\s]+/).filter(Boolean);
        if (parts.length < 2) return alert('Введите координаты: широта, долгота');
        const lat = parseFloat(parts[0]), lng = parseFloat(parts[1]);
        if (isNaN(lat) || isNaN(lng)) return alert('Неверные координаты');
        const safeName = slugify(addressInput); if (!safeName) return alert('Адрес содержит только недопустимые символы');
        let finalName = safeName; let counter = 1;
        const existingNames = new Set([...buildings.map(b => b.photo), ...customBuildings.map(b => b.photo)]);
        while (existingNames.has(finalName)) { finalName = safeName + '-' + counter; counter++; }
        const newB = { address: addressInput, number: addressInput.split(',').pop().trim() || lat.toFixed(4) + ',' + lng.toFixed(4), coords: [lat, lng], status, photo: finalName, problem: '', updated: '' };
        customBuildings.push(newB); activeStatuses.add(status);
        buildLegend(); buildMarkers(); dialog.close();
        map.flyTo([lat, lng], 17, { duration: 0.8 }); pin(newB);
      });
    }

    function initDeletePoint() {
      const btn = byId('delete-point'); if (!btn) return;
      btn.addEventListener('click', async () => {
        if (!pinned || !isCustom(pinned)) return;
        if (!confirm(`Удалить метку «${pinned.address}»?`)) return;
        const fileName = pinned.photo + '.webp';
        try { await deleteFromSupabase(fileName); } catch (e) {}
        const idx = customBuildings.indexOf(pinned);
        if (idx !== -1) customBuildings.splice(idx, 1);
        pin(null); buildMarkers(); renderCard();
      });
    }

    function initStatusEditor() {
      const div = byId('status-editor'); if (!div) return;
      div.querySelectorAll('.status-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
          if (!pinned) return;
          const newStatus = btn.dataset.status;
          const dateInput = byId('edit-date');
          if (!dateInput.value) {
            const t = new Date();
            dateInput.value = `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}`;
          }
          div.querySelectorAll('.status-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active');
          if (buildings.includes(pinned) && !isCustom(pinned)) {
            if (!hiddenAddresses.includes(pinned.address)) hiddenAddresses.push(pinned.address);
            const copy = { address: pinned.address, number: pinned.number, coords: pinned.coords, status: newStatus, photo: pinned.photo, problem: pinned.problem || '', updated: dateInput.value };
            customBuildings.push(copy); buildMarkers(); pin(copy);
          } else {
            pinned.status = newStatus; pinned.updated = dateInput.value; buildMarkers(); renderCard();
          }
        });
      });
      const dateInput = byId('edit-date');
      if (dateInput) dateInput.addEventListener('change', () => { const activeBtn = div.querySelector('.status-btn.active'); if (activeBtn && pinned) activeBtn.click(); });
    }

    async function saveMap() {
      try {
        await saveMarkersToSupabase(customBuildings);
        alert('Метки сохранены в облако Supabase. Все пользователи увидят изменения.');
      } catch (e) {
        alert('Ошибка сохранения: ' + e.message);
      }
    }

    (async () => {
      try {
        const cloudMarkers = await loadMarkersFromSupabase();
        customBuildings = cloudMarkers;
      } catch (e) { console.warn('Не удалось загрузить метки из Supabase', e); }

      buildLegend(); buildMarkers();
      initTheme(); initPhotoUpload(); initAddPoint(); initDeletePoint(); initStatusEditor();
      const saveBtn = byId('save-map'); if (saveBtn) saveBtn.addEventListener('click', saveMap);
      const closeBtn = byId('close');
      if (closeBtn) closeBtn.addEventListener('click', () => { const p = pinned; pin(null); entries.find(e => e.building === p)?.marker.getElement()?.focus(); });
      const resetBtn = byId('reset'); if (resetBtn) resetBtn.addEventListener('click', () => { pin(null); showOverview(); });
      const enlargeBtn = byId('enlarge');
      if (enlargeBtn) enlargeBtn.addEventListener('click', () => {
        if (!pinned || photo.hidden) return;
        byId('viewer-title').textContent = pinned.address; byId('large-photo').src = photo.src; viewer.showModal();
      });
      showOverview(); renderCard();
    })();
  }
} catch (e) {
  console.error('Ошибка в app.js:', e);
  alert('Ошибка скрипта: ' + e.message);
}
