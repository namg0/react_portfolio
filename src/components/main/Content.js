import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Content() {
	const path = process.env.PUBLIC_URL;
	return (
		<div id='Content' className='myScroll'>
			<div className='inner'>
				<h1>
					Unlimited access to 100+ instructors<span>.</span>
				</h1>
				<div className='contentPic'>
					<div className='contentImg1'>
						<img src={`${path}/img/con1.jpg`} alt='' />
						<FontAwesomeIcon icon={faArrowUp} />
						<h2>
							<NavLink to='/youtube'>Design</NavLink>
						</h2>
						<span>4month</span>
					</div>
					<div className='contentImg2'>
						<img src={`${path}/img/con2.jpg`} alt='' />
						<FontAwesomeIcon icon={faArrowUp} />
						<h2>
							<NavLink to='/youtube'>Photo</NavLink>
						</h2>
						<span>2month</span>
					</div>
					<div className='contentImg3'>
						<img src={`${path}/img/con3.jpg`} alt='' />
						<FontAwesomeIcon icon={faArrowUp} />
						<h2>
							<NavLink to='/youtube'>Baking</NavLink>
						</h2>
						<span>3month</span>
					</div>
					<div className='contentImg4'>
						<img src={`${path}/img/con4.jpg`} alt='' />
						<FontAwesomeIcon icon={faArrowUp} />
						<h2>
							<NavLink to='/youtube'>Drawing</NavLink>
						</h2>
						<span>4month</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Content;
