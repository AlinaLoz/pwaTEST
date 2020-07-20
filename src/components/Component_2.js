import React, { useEffect } from "react";

const Component2 = () => {

	useEffect(() => {
		fetch('https://httpbin.org/get?comp=2')
			.then((data) => {
				return data.json();
			})
			.then((data) => console.log('fetch', data));
	}, []);

	return (
		<p>Component 2</p>
	);
};
export default Component2;
