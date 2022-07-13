import Layout from '../common/Layout';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Location() {
	// 35.1602001!4d129.1665767
	return (
		<Layout name={'Location'}>
			<section className='contactUs'>
				<div className='inner'>
					<h1>Contact Us</h1>
					<p>
						Fugiat veniam nobis minima iste quas vitae beatae harum obcaecati
						natus dolore odio, <br /> culpa laborum! Expedita eius mollitia
						quisquam.
					</p>
					<div className='icon'>
						<article>
							<FontAwesomeIcon icon={faLocationDot} />
							<h2>Find Us</h2>
							<p>
								24, Haeundaehaebyeon-ro 298beon-gil, Haeundae-gu, Busan,
								Republic of Korea
							</p>
						</article>
						<article>
							<FontAwesomeIcon icon={faPhone} />
							<h2>Tel</h2>
							<p>+82 220 7140 242</p>
						</article>
						<article>
							<FontAwesomeIcon icon={faEnvelope} />
							<h2>Email</h2>
							<p>hobbybox@contact.com</p>
						</article>
					</div>
				</div>
			</section>
			{/* <div id='map' ref={container}></div> */}
			<section className='booking'>
				<h1>
					I'M READY FOR <br /> BETTER BOOKING
				</h1>
				<NavLink to='/join'>Join</NavLink>
			</section>
		</Layout>
	);
}

export default Location;
