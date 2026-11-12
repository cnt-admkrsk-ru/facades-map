// app.js — метки и фото в Supabase.
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
  if
