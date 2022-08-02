import Header from '../common/Header';
import Comments from './Comments';
import Content from './Content';
import Vid from './Vid';
import Visual from './Visual';
import Pics from './Pics';
import Btns from './Btns';
import Anime from '../../asset/anim';
import { useRef, useEffect, useState } from 'react';

function Main() {
	const main = useRef(null);
	const pos = useRef([]);
	const [Index, setIndex] = useState(0);
	const [Scrolled, setScrolled] = useState(0);
	let secs = null;

	const getPos = () => {
		pos.current = [];
		secs = main.current.querySelectorAll('.myScroll');
		for (const sec of secs) pos.current.push(sec.offsetTop);
	};

	const activation = () => {
		const base = -window.innerHeight / 2;
		const scroll = window.scrollY;
		const btns = main.current.querySelectorAll('.scroll_navi li');

		setScrolled(scroll);
		pos.current.map((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				for (const sec of secs) sec.classList.remove('on');
				btns[idx].classList.add('on');
				secs[idx].classList.add('on');
			}
		});
	};
	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);
		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, []);
	useEffect(() => {
		new Anime(window, {
			prop: 'scroll',
			value: pos.current[Index],
			duration: 500,
		});
	}, [Index]);
	return (
		<main ref={main}>
			<Header type={'main'} />
			<Visual></Visual>
			<Pics></Pics>
			<Content></Content>
			<Vid></Vid>
			<Comments></Comments>
			<Btns setIndex={setIndex} />
		</main>
	);
}
export default Main;
