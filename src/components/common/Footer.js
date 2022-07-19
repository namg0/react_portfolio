import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Footer(props) {
	return (
		<footer className={props.type}>
			<div className='inner'>
				<h1>HOBBYBOX</h1>
				<div className='icons'>
					<a href='https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Fprivacy%2Fconsent%2Fpipa%2F%3Fparams%255Bpft_surface%255D%3Dfacebook_comet%26params%255Bis_new_user_blocking_flow%255D%3Dfalse%26params%255Bpft_session_key%255D%3D2069acdd-b5bb-4ed9-8dc0-92f91cb95ec2%26params%255Bis_existing_user_blocking_flow%255D%26source%3Dpipa_blocking_flow'>
						<FontAwesomeIcon icon={faFacebookF} />
					</a>
					<a href='https://www.instagram.com/'>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a href='https://www.youtube.com/'>
						<FontAwesomeIcon icon={faYoutube} />
					</a>
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
