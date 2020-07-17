
self.addEventListener('install', (event) => {
	console.log('[Service Worker] installed....', event);
});

self.addEventListener('activate', (event) => {
	console.log('[Service Worker] activated....', event);
	return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
	console.log('[Service Worker] fetched....', event);
});

(() => {
	fetch('https://httpbin.org/get')
		.then((data) => {
			console.log('send https://httpbin.org/get', new Date().toISOString(), )
			return data.json();
		})
		.then((data) => console.log('asdasd', data));
})();

