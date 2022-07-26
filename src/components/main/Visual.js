function Visual() {
	const path = process.env.PUBLIC_URL;
	return (
		<figure id='visual'>
			<div className='inner'>
				<div className='visualTxt'>
					<h1 className='visualH'>
						Watch<span>.</span> <br /> Learn<span>.</span> <br /> Enjoy
						<span>.</span>
					</h1>
					<div className='visualP'>
						<p>Find your passion</p>
						<span>Go</span>
					</div>
				</div>
				<div className='visualPic'>
					<div className='visualImg1'>
						<img src={`${path}/img/visual1.jpg`} alt='' />
					</div>
					<div className='visualImg2'>
						<img src={`${path}/img/visual2.jpg`} alt='' />
					</div>
					<div className='visualImg3'>
						<img src={`${path}/img/visual3.jpg`} alt='' />
					</div>
				</div>
			</div>
		</figure>
	);
}

export default Visual;
