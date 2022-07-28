import Visual from './Visual';
import Content from './Content';
import Vid from './Vid';
import Comments from './Comments';
import { useEffect, useRef } from 'react';

function Main() {
	const main = useRef(null);

	return (
		<main ref={main}>
			<Visual></Visual>
			<Content></Content>
			<Vid></Vid>
			<Comments></Comments>
		</main>
	);
}

export default Main;
