import React, { useEffect } from "react";

const Component1 = () => {
	useEffect(() => {
		fetch('https://httpbin.org/get?comp=1')
			.then((data) => {
				return data.json();
			})
			.then((data) => console.log('fetch', data));
	}, []);

	return (
		<div>
			<p>Component 1</p>
		</div>
	);
};
export default Component1;
