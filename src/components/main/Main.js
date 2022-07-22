import Header from '../common/Header';
import Visual from './Visual';
import Content from './Content';
import Vid from './Vid';
import Comments from './Comments';
import Footer from '../common/Footer';

function Main() {
	return (
		<main className='main'>
			<Visual></Visual>
			<Content></Content>
			<Vid></Vid>
			<Comments></Comments>
		</main>
	);
}

export default Main;
