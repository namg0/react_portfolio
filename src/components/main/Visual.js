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
			<div className='inner'>
				<div className='visualTxt'>
					<h1 className='visualH'>
						Watch<span>.</span> <br /> Learn<span>.</span> <br /> Enjoy
						<span>.</span>
					</h1>
					<div className='visualP'>
						<p>Find your passion</p>
						<span>
							<NavLink to='/gallery'>Go</NavLink>
						</span>
					</div>
				</div>
				<div className='visualPic'>
					<div className='visualImg1'>
						<img src={`${path}/img/visual1.jpg`} alt='' />
						<h1>
							Photography <br /> Course1
						</h1>
					</div>
					<div className='visualImg2'>
						<img src={`${path}/img/visual2.jpg`} alt='' />
						<h1>
							Photography <br /> Course2
						</h1>
					</div>
					<div className='visualImg3'>
						<img src={`${path}/img/visual3.jpg`} alt='' />
						<h1>
							Photography <br /> Course3
						</h1>
					</div>
				</div>
			</div>
		</figure>
	);
}

export default Visual;
