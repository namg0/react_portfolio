import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
	const active = {
		fontWeight: 'bold',
		color: 'rgb(91, 130, 86)',
	};
	return (
		<header className={props.type}>
			<div className='inner'>
				<h1>
					<Link exact to='/'>
						HOBBYBOX
					</Link>
				</h1>

				<ul id='nav'>
					<li>
						<NavLink to='/department' activeStyle={active}>
							About Us
						</NavLink>
					</li>
					<li>
						<NavLink to='/gallery' activeStyle={active}>
							Gallery
						</NavLink>
					</li>
					<li>
						<NavLink to='/youtube' activeStyle={active}>
							Class
						</NavLink>
					</li>
					<li>
						<NavLink to='/community' activeStyle={active}>
							Community
						</NavLink>
					</li>
					<li>
						<NavLink to='/location' activeStyle={active}>
							Contact Us
						</NavLink>
					</li>
				</ul>
				<FontAwesomeIcon icon={faBars} activeStyle={active} />

				<ul id='util'>
					<li>
						<NavLink to='/login' activeStyle={active}>
							Login
						</NavLink>
					</li>
					<li>
						<NavLink to='/join' activeStyle={active}>
							Join
						</NavLink>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
