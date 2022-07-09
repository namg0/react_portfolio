function Header(props) {
	return (
		<header className={props.type}>
			<div className='inner'>
				<h1>HOBBYBOX</h1>

				<ul id='nav'>
					<li>About Us</li>
					<li>Gallery</li>
					<li>Class</li>
					<li>Community</li>
					<li>Contact Us</li>
				</ul>

				<ul id='util'>
					<li>Login</li>
					<li>Join</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
