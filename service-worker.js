/**
 * Service Worker · Mapa Conceptual Ingeniería en Computación (UNLP)
 * Proporciona soporte offline completo y carga instantánea PWA
 */

const CACHE_NAME = 'ic-unlp-mapa';

const STATIC_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data.js',
  './data_2024.js',
  './optativas_data.js',
  './manifest.json',
  './assets/favicon-32x32.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/apple-touch-icon.png',
  './assets/faculty_logo_wide.png'
];

// 1. Instalación: precachear recursos base
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// 2. Activación: limpiar caches antiguas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Intercepción de peticiones (Network First con fallback a Cache y actualización continua)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // No interceptar peticiones a otros dominios externos salvo Google Fonts
  if (url.origin !== location.origin && !url.origin.includes('fonts.googleapis.com') && !url.origin.includes('fonts.gstatic.com')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(async () => {
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }
        // Fallback de navegación si está offline
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      })
  );
});
