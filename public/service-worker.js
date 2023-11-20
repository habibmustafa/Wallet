const CACHE_NAME = 'my-cache';
const urlsToCache = [
  '/',
  '/index.html',
  '/favicon.ico',
  './android-chrome-192x192.png',
  './android-chrome-512x512.png',
  './fonts',
  './favicon-16x16.png',
  './favicon-32x32.png',
  './maskable_icon.png'
  // ... diğer statik dosyalarınızı ekleyin
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});