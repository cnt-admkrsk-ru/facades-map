const colors = {
  red: 'Проблемные фасады',
  yellow: 'В ремонте или запланированы к ремонту до 2028 года',
  green: 'Удовлетворительное состояние фасада'
};
const photoExtensions = ['jpg', 'jpeg', 'png', 'webp'];
const byId = id => document.getElementById(id);
const basemapBounds = L.latLngBounds([56.004, 92.846], [56.021, 92.893]);
const mapBounds = L.latLngBounds([
  basemapBounds.getSouthWest(),
  basemapBounds.getNorthEast(),
  ...buildings.map(building => building.coords)
]).pad(0.03);
const map = L.map('map', {
  minZoom: 13,
  maxZoom: 19,
  maxBounds: mapBounds,
  maxBoundsViscosity: 1,
  zoomAnimation: false
});
map.zoomControl._zoomInButton.title = 'Приблизить';
map.zoomControl._zoomOutButton.title = 'Отдалить';
map.zoomControl._zoomInButton.setAttribute('aria-label', 'Приблизить');
map.zoomControl._zoomOutButton.setAttribute('aria-label', 'Отдалить');
map.attributionControl.setPrefix(false);
L.control.scale({imperial: false, maxWidth: 110}).addTo(map);
L.imageOverlay('map/center.svg', basemapBounds, {
  attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap contributors</a> · подложка исторического центра'
}).on('error', () => {
  byId('map-warning').hidden = false;
}).addTo(map);

let pinned = null;
let preview = null;
const entries = [];
const photo = byId('facade');
const placeholder = byId('photo-placeholder');
const viewer = byId('viewer');
let photoBuilding = null;
let photoRequest = 0;

function loadPhoto(path) {
  return new Promise(resolve => {
    const image = new Image();
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
    image.src = path;
  });
}

async function showPhoto(building) {
  const request = ++photoRequest;
  photo.hidden = true;
  placeholder.hidden = !building;
  if (!building) return;

  byId('photo-name').textContent = building.photo;
  for (const extension of photoExtensions) {
    const path = 'photos/' + building.photo + '.' + extension;
    const available = await loadPhoto(path);
    if (request !== photoRequest) return;
    if (!available) continue;

    photo.src = path;
    photo.alt = 'Фасад здания · ' + building.address;
    photo.hidden = false;
    placeholder.hidden = true;
    byId('enlarge').hidden = !pinned;
    return;
  }
}

function renderCard() {
  const building = pinned || preview;
  byId('card-label').textContent = pinned ? 'Карточка закреплена' : preview ? 'Предпросмотр' : 'Как пользоваться';
  byId('card-title').textContent = building ? building.address : 'Выбери здание';
  byId('hint').hidden = Boolean(building);
  byId('close').hidden = !pinned;
  byId('details').hidden = !building;
  const problem = byId('card-problem');
  problem.textContent = building?.problem ?? '';
  problem.hidden = !problem.textContent;

  if (building !== photoBuilding) {
    photoBuilding = building;
    showPhoto(building);
  }
  byId('enlarge').hidden = !pinned || photo.hidden;

  for (const {building: entry, button, marker} of entries) {
    button.setAttribute('aria-pressed', String(entry === pinned));
    marker.getElement().classList.toggle('active', entry === building);
  }
}

function pin(building) {
  pinned = building;
  preview = null;
  renderCard();
}

function showOverview() {
  map.fitBounds(L.latLngBounds(buildings.map(building => building.coords)), {
    padding: [52, 55],
    maxZoom: 16,
    animate: false
  });
}

showOverview();

const coordinateGroups = new Map();
for (const building of buildings) {
  const key = building.coords.join(',');
  if (!coordinateGroups.has(key)) coordinateGroups.set(key, []);
  coordinateGroups.get(key).push(building);
}
for (const building of buildings) {
  const number = document.createElement('span');
  number.textContent = building.number;
  const group = coordinateGroups.get(building.coords.join(','));
  // Separate overlapping icons without changing their source coordinates.
  const offset = (group.indexOf(building) - (group.length - 1) / 2) * 36;
  const marker = L.marker(building.coords, {
    icon: L.divIcon({
      className: 'marker ' + building.status, html: number, iconSize: [31, 31],
      iconAnchor: [15.5 - offset, 15.5]
    }),
    title: building.address,
    autoPanOnFocus: false
  }).addTo(map);
  const icon = marker.getElement();
  icon.setAttribute('aria-label', building.address);
  marker.on('mouseover', () => {
    preview = building;
    if (!pinned) renderCard();
  });
  marker.on('mouseout', () => {
    if (preview === building) preview = null;
    if (!pinned) renderCard();
  });
  marker.on('click', () => pin(building));
  icon.addEventListener('keydown', event => {
    if (event.key === ' ') {
      event.preventDefault();
      pin(building);
    }
  });

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'address';
  const dot = document.createElement('span');
  dot.className = 'dot ' + building.status;
  dot.setAttribute('aria-label', colors[building.status]);
  button.append(dot, building.address);
  button.addEventListener('click', () => {
    map.panInside(building.coords, {padding: [45, 45], animate: false});
    pin(building);
  });
  entries.push({building, button, marker});
}

const addressOrder = new Intl.Collator('ru', {numeric: true});
const streetName = building => building.address.split(',')[0].replace(/^(?:ул|пр)\.\s+/, '');
const sortedEntries = [...entries].sort((first, second) =>
  addressOrder.compare(streetName(first.building), streetName(second.building))
  || addressOrder.compare(first.building.number, second.building.number)
);
for (const {button} of sortedEntries) {
  byId('addresses').append(button);
}

for (const [color, label] of Object.entries(colors)) {
  const item = document.createElement('li');
  const dot = document.createElement('span');
  dot.className = 'dot ' + color;
  item.append(dot, label);
  byId('legend').append(item);
}
byId('count').textContent = buildings.length;
byId('close').addEventListener('click', () => {
  const previous = pinned;
  pin(null);
  entries.find(entry => entry.building === previous)?.marker.getElement().focus();
});
byId('reset').addEventListener('click', () => {
  pin(null);
  showOverview();
});
byId('enlarge').addEventListener('click', () => {
  if (!pinned || photo.hidden) return;
  byId('viewer-title').textContent = pinned.address;
  byId('large-photo').src = photo.src;
  byId('large-photo').alt = photo.alt;
  viewer.showModal();
});

renderCard();
