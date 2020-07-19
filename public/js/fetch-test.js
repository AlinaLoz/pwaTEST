(() => {
	document.getElementById('test-fetch').addEventListener('click', () => {
		fetch('https://httpbin.org/get')
			.then((data) => {
				return data.json();
			})
			.then((data) => console.log('fetch', data));
	});
})();
