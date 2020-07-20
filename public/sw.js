const STATIC_CACHE = 'STATIC_CACHE';
const DYNAMIC_CACHE = 'DYNAMIC_CACHE';

self.addEventListener('install', (event) => {
	console.log('[Service Worker] installed....', event);
	event.waitUntil(
		caches.open(STATIC_CACHE)
			.then((cache) => {
				console.log('[Service Worker] precaching app shell');
				cache.addAll([
					'/',
					'/index.html',
					'/js/app.js',
					'/static/css/main.5f361e03.chunk.css'
				]);
			})
	);
});

self.addEventListener('activate', async (event) => {
	console.log('[Service Worker] activated.... 1', event);
	const keys = await caches.keys();
	await Promise.all(
		keys.map((cacheName) => {
			if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
				return caches.delete(cacheName);
			}
		})
	);
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
					return fetch(event.request)
						.then((resp) => {
							return caches.open(DYNAMIC_CACHE)
							.then((cache) => {
								cache.put(event.request.url, resp.clone());	
								return resp;				
							});

						}).catch((err) => console.log('err', err));
				}
			})
	);
});

