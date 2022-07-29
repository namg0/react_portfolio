import { useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
const Menu = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);
	const active = { fontWeight: 'bold', color: 'rgb(214, 142, 153)' };
	useImperativeHandle(ref, () => {
		return {
			toggle: () => setOpen(!Open),
		};
	});
	return (
		<AnimatePresence>
			{Open && (
				<motion.nav
					id='mobileGnb'
					initial={{ x: -320, opacity: 0 }}
					animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
					exit={{ x: -320, opacity: 0 }}
					onClick={() => setOpen(!Open)}>
					<h2>
						<NavLink to='/join' activeStyle={active}>
							Join
						</NavLink>
					</h2>

					<ul>
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

					<h1>
						<Link to='/'>HOBBYBOX.</Link>
					</h1>
				</motion.nav>
			)}
		</AnimatePresence>
	);
});
export default Menu;
