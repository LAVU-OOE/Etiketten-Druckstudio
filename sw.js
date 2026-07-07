const CACHE_NAME = 'lavu-studio-v8-cache-v2';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    // Füge hier weitere lokale Assets hinzu (z.B. CSS oder Icons), falls vorhanden
];

// Installations-Event: Assets in den Cache laden
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Service Worker: Assets werden gecacht...');
            return cache.addAll(ASSETS);
        })
    );
});

// Aktivierungs-Event: Alte Caches löschen
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Service Worker: Althergebrachter Cache wird gelöscht...', cache);
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Claim clients immediately so the new worker controls the open page
    );
});

// Fetch-Event: Netzwerk-Anfragen abfangen und aus dem Cache bedienen (Offline-Support)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        })
    );
});

// Listen for messages from the client to skip the waiting sequence
self.addEventListener('message', (event) => {
    if (event.data && event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});