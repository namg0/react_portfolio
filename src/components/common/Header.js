import Menu from './Menu';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

function Header(props) {
	const menu = useRef(null);
	const active = {
		fontWeight: 'bold',
		color: 'rgb(186, 120, 120)',
	};
	return (
		<header className={props.type}>
			<div className='inner'>
				<h1>
					<Link to='/'>HOBBYBOX</Link>
				</h1>

				<ul id='nav'>
					<li>
						<NavLink to='/department' activeStyle={active}>
							Department
						</NavLink>
					</li>
					<li>
						<NavLink to='/gallery' activeStyle={active}>
							Gallery
						</NavLink>
					</li>

					<li>
						<NavLink to='/youtube' activeStyle={active}>
							Youtube
						</NavLink>
					</li>
					<li>
						<NavLink to='/community' activeStyle={active}>
							Community
						</NavLink>
					</li>
					<li>
						<NavLink to='/location' activeStyle={active}>
							Location
						</NavLink>
					</li>
				</ul>

				<ul id='util'>
					<li>
						<NavLink to='/join' activeStyle={active}>
							Join
						</NavLink>
					</li>
				</ul>
				<FontAwesomeIcon
					icon={faBars}
					onClick={() => {
						console.log(menu.current);
						menu.current.toggle();
					}}
				/>
			</div>
			<Menu ref={menu} />
		</header>
	);
}

export default Header;
