import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Popup from '../common/Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';

function Youtube() {
	const pop = useRef(null);
	const [Vids, setVids] = useState([]);
	const path = process.env.PUBLIC_URL;
	const [Index, setIndex] = useState(0);

	useEffect(() => {
		const key = 'AIzaSyBLdlm9RlOXSuE2ACgPflc0wFh_G0MgGRs';
		const playlist = 'PLPBzlS6qg86eT7iAEa99MnLYoUpl5PzVZ';

		const num = 8;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;
		axios.get(url).then((json) => {
			console.log(json.data.items);
			setVids(json.data.items);
		});
	}, []);

	return (
		<>
			<Layout name={'Youtube'}>
				<section className='classBg'>
					<div className='inner'>
						<figure className='classBgPic'>
							<img src={`${path}/img/classBgPic.jpg`} alt='' />
						</figure>

						<div className='classBgTxt'>
							<h1>
								The gratification <br /> comes in the doing,
								<br /> not in the results
							</h1>
							<h2>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
								nemo unde error! Corporis facilis quasi repellat odio iusto ipsa
								ducimus nam corrupti?
							</h2>
						</div>
						<div className='started'>
							<p>Get Started</p>
							<FontAwesomeIcon icon={faArrowDownLong} />
						</div>
					</div>
				</section>

				<section className='class'>
					<div className='inner'>
						{Vids.map((vid, idx) => {
							const tit = vid.snippet.title;
							const desc = vid.snippet.description;
							const date = vid.snippet.publishedAt;

							return (
								<article key={idx}>
									<h1>0{idx + 1}</h1>
									<div className='classTxt'>
										<h2>{tit.length > 30 ? tit.substr(0, 30) + '...' : tit}</h2>
										<p>
											{desc.length > 60 ? desc.substr(0, 60) + '...' : desc}
										</p>
										<span>{date.split('T')[0]}</span>
									</div>
									<div className='classVids'>
										<div
											className='classPic'
											onClick={() => {
												pop.current.open();
												setIndex(idx);
											}}>
											<img
												src={vid.snippet.thumbnails.standard.url}
												alt={vid.snippet.title}
											/>
										</div>
									</div>
								</article>
							);
						})}
					</div>
				</section>
			</Layout>

			<Popup ref={pop}>
				{Vids.length !== 0 && (
					<iframe
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
						frameborder='0'></iframe>
				)}
			</Popup>
		</>
	);
}

export default Youtube;
