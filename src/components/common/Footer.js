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
						<NavLink to='/department'>Department</NavLink>
					</li>
					<li>
						<NavLink to='/gallery'>Gallery</NavLink>
					</li>
					<li>
						<NavLink to='/youtube'>Youtube</NavLink>
					</li>
					<li>
						<NavLink to='/community'>Community</NavLink>
					</li>
					<li>
						<NavLink to='/location'>Location</NavLink>
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
						<NavLink to='/join'>
							<span>Go</span>
						</NavLink>
					</li>
				</div>
				<p>2022 HOBBYBOX &copy; All Rights Reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
