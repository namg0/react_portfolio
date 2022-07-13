import Layout from '../common/Layout';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect } from 'react';
function Location() {
	const { kakao } = window;
	const container = useRef(null);
	const mapOption = {
		center: new kakao.maps.LatLng(35.1602001, 129.1665767),
		level: 3,
	};

	useEffect(() => {
		const map_result = new kakao.maps.Map(container.current, mapOption);

		const markerPosition = new kakao.maps.LatLng(35.1602001, 129.1665767);

		const marker = new kakao.maps.Marker({
			position: markerPosition,
		});

		marker.setMap(map_result);

		const mapTypeControl = new kakao.maps.MapTypeControl();

		map_result.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);

		const zoomControl = new kakao.maps.ZoomControl();
		map_result.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMLEFT);
	}, []);
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

			<div id='map' ref={container}></div>

			<section className='booking'>
				<div className='inner'>
					<h1>
						I'M READY FOR <br /> BETTER BOOKING
					</h1>
					<NavLink to='/join'>Sign Up</NavLink>
				</div>
			</section>

			<div className='locaB'>
				<section className='qna'>
					<div className='inner'>
						<article>
							<h1 className='qnaA'>More About HobbyBox</h1>
							<NavLink to='/department'>About Us> </NavLink>
						</article>
						<article>
							<h1 className='qnaH'>Do you have any questions?</h1>
							<NavLink to='/community'>Click Me ></NavLink>
						</article>
					</div>
				</section>
			</div>
		</Layout>
	);
}

export default Location;
