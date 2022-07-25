import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-solid-svg-icons';

function vid() {
	const path = process.env.PUBLIC_URL;
	return (
		<div className='Vid'>
			<div className='inner'>
				<div className='vidH'>
					<h1>
						Get the skills you <br /> need for a hobby that <br /> is in demand.
					</h1>
					<p>
						The modern labor market dictates its own terms. <br /> Today, to be
						a competitive specialist requires more <br />
						than professional skills.
					</p>
				</div>
				<div className='vidContents'>
					<div className='vidText'>
						<div className='vidTxt1'>
							<FontAwesomeIcon icon={faUsers} />
							<div className='vidTxtG'>
								<h2>Leadership</h2>
								<p>
									Fully committed to the <br />
									success company
								</p>
							</div>
						</div>
						<div className='vidTxt2'>
							<FontAwesomeIcon icon={faMedal} />
							<div className='vidTxtG'>
								<h2>Responsibility</h2>
								<p>
									Employees will always <br />
									be my top priority
								</p>
							</div>
						</div>

						<div className='vidTxt3'>
							<FontAwesomeIcon icon={faGem} />
							<div className='vidTxtG'>
								<h2>Flexibility</h2>
								<p>
									The ability to switch is <br />
									an important skill
								</p>
							</div>
						</div>
					</div>
					<div className='vidVideo'>
						<video src={`${path}/img/vid.mp4`}></video>
					</div>
				</div>
				<div className='vidBox'>
					<h2>10</h2>
					<p>
						YEARS <br />
						EXPERIENCES
					</p>
					<h3>250</h3>
					<p>
						TYPES OF <br /> COURSES
					</p>
				</div>
			</div>
		</div>
	);
}

export default vid;
