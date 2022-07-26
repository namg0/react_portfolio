function Content() {
	const path = process.env.PUBLIC_URL;
	return (
		<div id='Content'>
			<div className='inner'>
				<h1>
					Unlimited access to 100+ instructors<span>.</span>
				</h1>
				<div className='contentPic'>
					<div className='contentImg1'>
						<img src={`${path}/img/con1.jpg`} alt='' />
						<h2>Design</h2>
						<span>4month</span>
					</div>
					<div className='contentImg2'>
						<img src={`${path}/img/con2.jpg`} alt='' />
						<h2>Photo</h2>
						<span>2month</span>
					</div>
					<div className='contentImg3'>
						<img src={`${path}/img/con3.jpg`} alt='' />
						<h2>Baking</h2>
						<span>3month</span>
					</div>
					<div className='contentImg4'>
						<img src={`${path}/img/con4.jpg`} alt='' />
						<h2>Drawing</h2>
						<span>4month</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Content;
