import { Route, Switch } from 'react-router-dom';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main
import Visual from './components/main/Visual';
import Content from './components/main/Content';

//sub nav
import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Youtube from './components/sub/Youtube';
import Community from './components/sub/Community';
import Location from './components/sub/Location';
import Members from './components/sub/Members';

//sub util
import Login from './components/sub/Login';
import Join from './components/sub/Join';

import './scss/style.scss';

function App() {
	return (
		<>
			<Switch>
				{/* main header */}
				<Route exact path='/'>
					<Header type={'main'} />
					<Visual />
					<Content />
				</Route>

				{/* sub */}
				<Route path='/'>
					<Header type={'sub'} />
				</Route>
			</Switch>
			{/* nav */}
			<Route path='/department' component={Department} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/community' component={Community} />
			<Route path='/location' component={Location} />
			<Route path='/members' component={Members} />
			{/* util */}
			<Route path='/login' component={Login} />
			<Route path='/join' component={Join} />
			<Footer />
		</>
	);
}

export default App;
