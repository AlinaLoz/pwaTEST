(async () => {
	if ('serviceWorker' in navigator) {
		let resRegister = null;
		try {
			resRegister = await navigator.serviceWorker.register('/sw.js');
			console.log('resRegister', resRegister);
			console.log('Service worker registered');
		} catch(err) {
			console.log('err', err);
		}
	}
})();

