
self.addEventListener('install', (event) => {
	console.log('[Service Worker] installed....', event);
	event.waitUntil(
		caches.open('testcash')
			.then((cache) => {
				console.log('[Service Worker] precaching app shell');
				cache.add('/');
				cache.add('/index.html');
				cache.add('/js/app.js');
			})
	);
	caches.open()
});

self.addEventListener('activate', (event) => {
	console.log('[Service Worker] activated....', event);
	return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
	console.log('[Service Worker] fetched....', event);
	event.respondWith(
		caches.match(event.request)
			.then((response) => {
				console.log('response', response);
				
				if (response) {
					return response
				} else {
					return fetch(event.request);
				}
			})
	);
});

