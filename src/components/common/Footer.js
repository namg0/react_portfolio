import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<footer>
			<div className='inner'>
				<h1>HOBBYBOX</h1>
				<div className='icons'>
					<FontAwesomeIcon icon={faFacebookF} />
					<FontAwesomeIcon icon={faInstagram} />
					<FontAwesomeIcon icon={faYoutube} />
				</div>
				<ul className='navF'>
					<li>
						<NavLink to='/department'>About Us</NavLink>
					</li>
					<li>
						<NavLink to='/gallery'>Gallery</NavLink>
					</li>
					<li>
						<NavLink to='/youtube'>Class</NavLink>
					</li>
					<li>
						<NavLink to='/community'>Community</NavLink>
					</li>
					<li>
						<NavLink to='/location'>Contact Us</NavLink>
					</li>
				</ul>
				<div className='subscribe'>
					<h2>Join our community</h2>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Enter your email'
					/>
					<li>
						<NavLink to='/join'>Go</NavLink>
					</li>
				</div>
				<p>2022 HOBBYBOX &copy; All Rights Reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
