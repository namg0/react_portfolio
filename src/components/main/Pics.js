import { NavLink } from 'react-router-dom';
function Pics() {
	const path = process.env.PUBLIC_URL;
	return (
		<section id='pics' className='myScroll'>
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
		</section>
	);
}

export default Pics;
