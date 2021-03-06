import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
function Department() {
	const path = process.env.PUBLIC_URL;
	return (
		<Layout name={'Department'}>
			<section className='about'>
				<div className='inner'>
					<h1>About Us.</h1>
					<div className='aboutTxt'>
						<h2>
							More About Us <br /> Our Services <br /> Our Story
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
							quaerat possimus optio consequuntur iure magnam exercitationem
							ipsa quod cum at! <br />
							<br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Quas asperiores nisi provident corporis laborum nihil similique in
							assumenda eos magnam.{' '}
							<span>Incidunt consectetur beatae earum!</span> Neque placeat
							pariatur vero animi? Repellat, placeat! Et.
						</p>
					</div>
					<div className='aboutImg'>
						<img src={`${path}/img/about us1.jpg`} alt='' />
					</div>
				</div>
			</section>
			<section className='slogan'>
				<div className='inner'>
					<div className='sloganTxt'>
						<FontAwesomeIcon icon={faQuoteLeft} />
						<p>
							Challenges are gifts that force us to search for a new center of
							gravity. Don't fight them. Just find a different way to stand.
						</p>
						<FontAwesomeIcon icon={faQuoteRight} />
					</div>
					<div className='sloganImg'>
						<img src={`${path}/img/about us2.jpg`} alt='' />
					</div>
				</div>
			</section>
			<section className='team'>
				<div className='inner'>
					<div className='teamImg'>
						<article className='team1'>
							<img src={`${path}/img/mem1.jpg`} alt='' />
							<p>
								<span>Olivia</span>
								<br />
								CEO
							</p>
						</article>
						<article className='team2'>
							<img src={`${path}/img/mem2.jpg`} alt='' />
							<p>
								<span>Daniel</span> <br />
								ENGINEER
							</p>
						</article>
						<article className='team3'>
							<img src={`${path}/img/mem3.jpg`} alt='' />
							<p>
								<span>Abigail</span> <br />
								DESIGNER
							</p>
						</article>
					</div>
					<div className='teamTxt'>
						<h1>Our Team.</h1>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Aspernatur, ad laudantium doloribus quae quidem error recusandae
							dolorum. <br /> <br /> Dolor dolore magnam ex eveniet. Numquam
							minima mollitia temporibus, fugit nostrum at. Placeat veniam
							dolore, ipsam hic mollitia assumenda unde illo. Facilis voluptas
							harum sint eligendi quaerat voluptatem quo totam modi tempora
							corrupti.
						</p>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Department;
