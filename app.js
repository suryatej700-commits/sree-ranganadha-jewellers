const STORAGE_KEY = 'srj-premium-site-v1';
const starterData = {
  version: 3,
  phone: '9392738383',
  ownerName: 'N. V. Ranga Ramanuja',
  address: 'Opp. Kollabazar, M.G. Road\nVizianagaram, Andhra Pradesh',
  ownerBlurb: 'శ్రీ రంగనాధ జువెల్లర్స్‌లో మీకు వ్యక్తిగత శ్రద్ధ మా మొదటి ప్రాధాన్యత. ప్రశ్నలు అడగండి, మీకు సరిపోయే నగను సంతోషంగా ఎంచుకోండి.',
  announcement: 'మీ ప్రత్యేక క్షణాల కోసం బంగారు & వెండి ఆభరణాలు · Gold & silver for your meaningful moments.',
  products: [
    { category: 'Bridal', name: 'టెంపుల్ బ్రైడల్ సెట్', note: 'Temple bridal set · Heritage gold edit', image: 'assets/collection-bridal-blue.png', focus: '50% 55%' },
    { category: 'Bridal', name: 'లక్ష్మీ హారం', note: 'Lakshmi haaram · Wedding heirloom style', image: 'assets/bridal-necklace.png', focus: '50% 58%' },
    { category: 'Bridal', name: 'రూబీ వెడ్డింగ్ సెట్', note: 'Ruby wedding set · Traditional detail', image: 'assets/hero-jewellery.png', focus: '68% 47%' },
    { category: 'Gold', name: 'క్లాసిక్ గోల్డ్ చైన్స్', note: 'Classic gold chains · Timeless staples', image: 'assets/collection-gold-tray.png', focus: '42% 75%' },
    { category: 'Gold', name: 'జుంకీ కలెక్షన్', note: 'Jhumka collection · Occasion ready', image: 'assets/hero-jewellery.png', focus: '38% 64%' },
    { category: 'Gold', name: 'హెరిటేజ్ గాజుల సెట్', note: 'Heritage bangles · Detailed gold work', image: 'assets/collection-gold-tray.png', focus: '52% 32%' },
    { category: 'Everyday', name: 'డైలీ వేర్ పెండెంట్స్', note: 'Everyday pendants · Light & meaningful', image: 'assets/collection-everyday.png', focus: '38% 49%' },
    { category: 'Everyday', name: 'స్టడ్స్ & హూప్స్', note: 'Studs & hoops · Easy elegance', image: 'assets/collection-everyday.png', focus: '75% 28%' },
    { category: 'Everyday', name: 'రింగ్స్ ఎడిట్', note: 'Daily rings · Your personal signature', image: 'assets/collection-gifting.png', focus: '67% 68%' },
    { category: 'Silver', name: 'వెండి పూజా సేకరణ', note: 'Silver puja collection · Sacred rituals', image: 'assets/collection-silver.png', focus: '47% 33%' },
    { category: 'Silver', name: 'పట్టీలు & మెట్టెలు', note: 'Anklets & toe rings · Traditional silver', image: 'assets/collection-silver.png', focus: '47% 60%' },
    { category: 'Silver', name: 'వెండి బహుమతి ఎడిట్', note: 'Silver gifting edit · Thoughtful keepsakes', image: 'assets/collection-silver.png', focus: '47% 84%' },
    { category: 'Gifting', name: 'మైల్స్‌టోన్ బహుమతులు', note: 'Milestone gifts · Made for memories', image: 'assets/collection-gifting.png', focus: '55% 55%' },
    { category: 'Gifting', name: 'చిన్నారుల ఆశీస్సులు', note: 'Newborn blessings · Treasured beginnings', image: 'assets/collection-everyday.png', focus: '35% 74%' },
    { category: 'Gifting', name: 'పండుగ కానుకలు', note: 'Festive keepsakes · Share the joy', image: 'assets/hero-jewellery.png', focus: '45% 39%' },
    { category: 'Mens', name: 'పురుషుల గోల్డ్ చైన్స్', note: 'Men’s gold chains · Strong classics', image: 'assets/collection-mens.png', focus: '36% 37%' },
    { category: 'Mens', name: 'సిగ్నెట్ రింగ్స్', note: 'Signet rings · A mark of self', image: 'assets/collection-mens.png', focus: '76% 39%' },
    { category: 'Mens', name: 'వెండి బ్రేస్‌లెట్స్', note: 'Silver bracelets · Easy statement', image: 'assets/collection-mens.png', focus: '62% 76%' }
  ]
};

let site = getSite();
let activeFilter = 'All';
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function cloneStarter() { return JSON.parse(JSON.stringify(starterData)); }
function getSite() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    const savedProducts = saved.version >= 3 && Array.isArray(saved.products) ? saved.products : cloneStarter().products;
    return { ...cloneStarter(), ...saved, products: savedProducts, version: 3 };
  } catch { return cloneStarter(); }
}
function saveSite() { localStorage.setItem(STORAGE_KEY, JSON.stringify(site)); updateSiteDetails(); }
function normalisedPhone() { return `91${String(site.phone).replace(/\D/g, '').replace(/^91/, '')}`; }
function whatsappUrl(message = 'Hello Sree Ranganadha Jewellers, I would like to know more about your jewellery collection.') { return `https://wa.me/${normalisedPhone()}?text=${encodeURIComponent(message)}`; }
function refreshIcons() { if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.6 } }); }

function updateSiteDetails() {
  $('#announcementText').textContent = site.announcement;
  $('#ownerName').textContent = site.ownerName;
  $('#ownerNameDetails').textContent = site.ownerName;
  $('#ownerBlurb').textContent = site.ownerBlurb;
  $('#businessAddress').innerHTML = site.address.replace(/\n/g, '<br>');
  const readablePhone = `+91 ${String(site.phone).replace(/\D/g, '').replace(/^91/, '').replace(/(\d{5})(\d+)/, '$1 $2')}`;
  $('#businessPhone').textContent = readablePhone;
  $('#businessPhone').href = whatsappUrl();
  $('#ownerWhatsapp').textContent = readablePhone;
  $('#ownerWhatsapp').href = whatsappUrl();
  $('#mapsLink').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.replace(/\n/g, ', '))}`;
  renderProducts();
}

const categoryLabels = {
  All: 'అన్నీ · All',
  Bridal: 'పెళ్లి నగలు · Bridal',
  Gold: 'బంగారం · Gold',
  Everyday: 'రోజువారీ · Everyday',
  Silver: 'వెండి · Silver',
  Gifting: 'బహుమతులు · Gifting',
  Mens: 'పురుషుల కోసం · Men'
};
function categoryLabel(category) { return categoryLabels[category] || `${category} · Collection`; }
function productCategories() { return ['All', ...new Set(site.products.map(product => product.category).filter(Boolean))]; }
function renderFilters() {
  $('#collectionFilters').innerHTML = productCategories().map(category => `<button class="filter ${category === activeFilter ? 'active' : ''}" data-filter="${escapeHtml(category)}">${escapeHtml(categoryLabel(category))}</button>`).join('');
  $$('.filter').forEach(button => button.addEventListener('click', () => { activeFilter = button.dataset.filter; renderProducts(); renderFilters(); }));
}
function renderProducts() {
  renderFilters();
  const target = $('#productGrid');
  const products = activeFilter === 'All' ? site.products : site.products.filter(product => product.category === activeFilter);
  target.innerHTML = '';
  products.forEach((product, index) => {
    const card = $('#productTemplate').content.cloneNode(true);
    const image = $('img', card); image.src = product.image || 'assets/hero-jewellery.png'; image.alt = product.name;
    $('p', card).textContent = categoryLabel(product.category || 'Collection');
    const title = $('h3', card); title.textContent = product.name || 'Untitled piece'; title.lang = 'te';
    $('small', card).textContent = product.note || 'Enquire for details';
    if (product.focus) image.style.objectPosition = product.focus;
    $('.product-card', card).style.animationDelay = `${Math.min(index, 4) * .07}s`;
    $$('.product-inquiry', card).forEach(button => button.addEventListener('click', () => openInquiry(product)));
    target.append(card);
  });
  if (!products.length) target.innerHTML = '<p class="empty-state">No pieces in this edit yet. Please choose another collection or ask us directly.</p>';
  refreshIcons();
}
function escapeHtml(value = '') { return String(value).replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' })[char]); }

const inquiryDialog = $('#inquiryDialog');
function openInquiry(product) { inquiryDialog.dataset.product = product ? product.name : ''; inquiryDialog.showModal(); }
function closeInquiry() { inquiryDialog.close(); }
$$('[data-whatsapp]').forEach(button => button.addEventListener('click', () => openInquiry()));
$('#announcementWhatsapp').addEventListener('click', () => openInquiry());
$$('[data-close-dialog]').forEach(button => button.addEventListener('click', closeInquiry));
$('#inquiryForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const product = inquiryDialog.dataset.product;
  const name = form.get('name'); const interest = form.get('interest'); const message = form.get('message');
  const detail = product ? ` I am interested in the ${product}.` : '';
  const text = `Hello Sree Ranganadha Jewellers, I am ${name}.${detail}\n\nI am looking for: ${interest}.${message ? `\n\nMy note: ${message}` : ''}`;
  window.open(whatsappUrl(text), '_blank', 'noopener'); closeInquiry(); event.currentTarget.reset();
});

function toggleMobileNavigation() {
  const nav = $('.main-nav'); const active = nav.classList.toggle('open');
  $('.mobile-nav-toggle').setAttribute('aria-label', active ? 'Close menu' : 'Open menu');
}
$('.mobile-nav-toggle').addEventListener('click', toggleMobileNavigation);
$$('.main-nav a').forEach(link => link.addEventListener('click', () => $('.main-nav').classList.remove('open')));
$$('[data-set-filter]').forEach(link => link.addEventListener('click', () => { activeFilter = link.dataset.setFilter; setTimeout(() => { renderProducts(); renderFilters(); }, 0); }));

const adminDialog = $('#adminDialog');
function openAdmin() { adminDialog.showModal(); if (sessionStorage.getItem('srj-admin') === 'open') showAdminPanel(); }
function closeAdmin() { adminDialog.close(); }
$('#adminOpen').addEventListener('click', openAdmin); $('#adminOpen2').addEventListener('click', openAdmin); $$('[data-close-admin]').forEach(button => button.addEventListener('click', closeAdmin));
function showAdminPanel() { $('#adminLogin').hidden = true; $('#adminPanel').hidden = false; populateBusinessEditor(); renderAdminProducts(); }
function showLogin() { $('#adminLogin').hidden = false; $('#adminPanel').hidden = true; $('#adminLoginForm').reset(); }
$('#adminLoginForm').addEventListener('submit', event => { event.preventDefault(); const passcode = new FormData(event.currentTarget).get('passcode'); if (passcode === 'SRJ2026') { sessionStorage.setItem('srj-admin', 'open'); $('#loginError').textContent = ''; showAdminPanel(); } else $('#loginError').textContent = 'That passcode did not match. Please try again.'; });
$('#adminLogout').addEventListener('click', () => { sessionStorage.removeItem('srj-admin'); showLogin(); });
$$('.admin-tabs button').forEach(button => button.addEventListener('click', () => { $$('.admin-tabs button').forEach(item => item.classList.toggle('active', item === button)); $$('.admin-tab').forEach(pane => pane.classList.toggle('active', pane.dataset.pane === button.dataset.tab)); }));
function populateBusinessEditor() { const form = $('#businessEditor'); form.phone.value = site.phone; form.ownerName.value = site.ownerName; form.address.value = site.address; form.ownerBlurb.value = site.ownerBlurb; form.announcement.value = site.announcement; }
$('#businessEditor').addEventListener('submit', event => { event.preventDefault(); const form = new FormData(event.currentTarget); site.phone = form.get('phone'); site.ownerName = form.get('ownerName'); site.address = form.get('address'); site.ownerBlurb = form.get('ownerBlurb'); site.announcement = form.get('announcement'); saveSite(); toast('Website details saved'); });
function renderAdminProducts() {
  const root = $('#adminProducts');
  root.innerHTML = site.products.map((product, index) => `<article class="admin-product" data-index="${index}"><div class="image-preview"><img src="${escapeHtml(product.image || 'assets/hero-jewellery.png')}" alt="" /></div><label>Category<input data-field="category" value="${escapeHtml(product.category)}" /></label><label>Piece name<input data-field="name" value="${escapeHtml(product.name)}" /></label><label>Supporting line<input data-field="note" value="${escapeHtml(product.note)}" /></label><label>Image path or URL<input data-field="image" value="${escapeHtml(product.image)}" /></label><button class="remove-product" title="Remove card" aria-label="Remove card"><i data-lucide="trash-2"></i></button></article>`).join('');
  $$('.remove-product', root).forEach(button => button.addEventListener('click', event => { event.currentTarget.closest('.admin-product').remove(); })); refreshIcons();
}
$('#addProduct').addEventListener('click', () => { site.products.push({ category:'Gold', name:'New collection piece', note:'Add a short supporting line', image:'assets/hero-jewellery.png' }); renderAdminProducts(); });
$('#saveProducts').addEventListener('click', () => { site.products = $$('.admin-product').map(row => { const get = field => $(`[data-field="${field}"]`, row).value.trim(); return { category:get('category') || 'Collection', name:get('name') || 'Untitled piece', note:get('note'), image:get('image') || 'assets/hero-jewellery.png' }; }); saveSite(); toast('Collection saved'); });
$('#restoreDefaults').addEventListener('click', () => { if (!window.confirm('Restore the starter content? Your saved local edits will be replaced.')) return; site = cloneStarter(); saveSite(); populateBusinessEditor(); renderAdminProducts(); toast('Starter content restored'); });
function toast(message) { let el = $('.toast'); if (!el) { el = document.createElement('div'); el.className = 'toast'; document.body.append(el); } el.textContent = message; el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 2200); }

$('#year').textContent = new Date().getFullYear();
updateSiteDetails(); refreshIcons();
