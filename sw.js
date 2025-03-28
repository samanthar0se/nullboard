const CACHE_NAME = 'nullboard-cache-v1';
const urlsToCache = [
  '/',
  '/nullboard.html',
  '/manifest.json',
  '/images/favicon-96x96.png',
  '/images/favicon.svg',
  '/images/favicon.ico',
  '/extras/jquery-3.6.0.min.js',
  '/extras/Barlow-Medium.woff',
  '/extras/Barlow-Regular.woff',
  '/extras/IBMPlexSans-Medium.woff',
  '/extras/IBMPlexSans-Regular.woff',
  '/extras/OpenSans-600.woff',
  '/extras/OpenSans-Regular.woff',
  '/extras/MavenPro-500.woff',
  '/extras/MavenPro-Regular.woff',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached response if found
        if (response) {
          return response;
        }
        
        // Clone the request because it's a one-time use
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Don't cache responses that aren't successful or aren't GET requests
          if (!response || response.status !== 200 || response.type !== 'basic' || event.request.method !== 'GET') {
            return response;
          }
          
          // Clone the response because it's a one-time use
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        }).catch(() => {
          // If fetch fails, try to return the offline page
          if (event.request.mode === 'navigate') {
            return caches.match('/');
          }
          
          return new Response('Network error', {
            status: 408,
            headers: { 'Content-Type': 'text/plain' }
          });
        });
      })
  );
});

// Clean up old caches when a new service worker is activated
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 