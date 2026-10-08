/* ARCH 360 Tour — service worker.
   Pages & data: network first (so updates show up), falling back to cache when offline.
   Panoramas, icons and the A-Frame library: cache first (they rarely change, and they're big).
   Bump CACHE when you want every installed app to drop its old cache. */
const CACHE = 'arch360-v1';
const SHELL = ['./', './index.html', './tour.html', './tour_data.js', './manifest.json',
               './images/logo.png', './images/icon-192.png', './images/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const isAsset = /\.(jpg|jpeg|png|webp)$/i.test(url.pathname) || url.hostname === 'aframe.io';

  if (isAsset) {                                   // cache first
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    })));
  } else if (url.origin === location.origin) {     // network first
    e.respondWith(fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req).then(hit => hit || caches.match('./index.html'))));
  }
});
