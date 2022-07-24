import { Route, Switch } from 'react-router-dom';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main
import Main from './components/main/Main';

//sub nav
import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Youtube from './components/sub/Youtube';
import Community from './components/sub/Community';
import Location from './components/sub/Location';

//sub util
import Join from './components/sub/Join';

import './scss/style.scss';

function App() {
	return (
		<>
			<Switch>
				{/* main header */}
				<Route exact path='/'>
					<Header type={'main'} />
					<Main />
					<Footer type={'main'} />
				</Route>

				{/* sub */}
				<Route path='/'>
					<Header type={'sub'} />
					{/* nav */}
					<Route path='/department' component={Department} />
					<Route path='/gallery' component={Gallery} />
					<Route path='/youtube' component={Youtube} />
					<Route path='/community' component={Community} />
					<Route path='/location' component={Location} />
					{/* util */}
					<Route path='/join' component={Join} />
					<Footer type={'sub'} />
				</Route>
			</Switch>
			{/* nav */}
			{/* <Route path='/department' component={Department} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/community' component={Community} />
			<Route path='/location' component={Location} />
			<Route path='/members' component={Members} /> */}
			{/* util */}
			{/* <Route path='/login' component={Login} />
			<Route path='/join' component={Join} /> */}
			{/* <Footer /> */}
		</>
	);
}

export default App;
