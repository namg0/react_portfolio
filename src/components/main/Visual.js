import { NavLink } from 'react-router-dom';
function Visual() {
	const path = process.env.PUBLIC_URL;
	return (
		<figure id='visual' className='myScroll'>
			<div className='fsVid'>
				<h1>DO YOU WANT TO FIND A HOBBY?</h1>
				<div className='fsVidT'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas
						numquam quibusdam dolor harum non necessitatibus ducimus tenetur
						consequatur earum. Aperiam necessitatibus sequi porro animi quis
						dolore!
					</p>
					<h3>
						<NavLink to='/youtube'>View More</NavLink>
					</h3>
				</div>

				<video src={`${path}/img/fsVid.mp4`} autoPlay loop muted></video>
			</div>
		</figure>
	);
}

export default Visual;
