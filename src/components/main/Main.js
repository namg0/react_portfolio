import Header from '../common/Header';
import Comments from './Comments';
import Content from './Content';
import Vid from './Vid';
import Visual from './Visual';

function Main() {
	return (
		<main>
			<Header type={'main'} />
			<Visual></Visual>
			<Content></Content>
			<Vid></Vid>
			<Comments></Comments>
		</main>
	);
}
export default Main;
