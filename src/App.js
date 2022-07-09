import './scss/style.scss';

//common
import './components/common/Header';
import './components/common/Footer';

//main
import './components/main/Visual';
import './components/main/Content';

//sub
import './components/sub/Department';
import './components/sub/Gallery';
import './components/sub/Youtube';
import './components/sub/Community';
import './components/sub/Location';
import './components/sub/Members';
import Header from './components/common/Header';

function App() {
	return (
		<>
			<Header />
		</>
	);
}

export default App;
