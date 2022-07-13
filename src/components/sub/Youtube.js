import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Youtube() {
	const [Vids, setVids] = useState([]);
	const path = process.env.PUBLIC_URL;

	useEffect(() => {
		const key = 'AIzaSyBLdlm9RlOXSuE2ACgPflc0wFh_G0MgGRs';
		const playlist = 'PLPBzlS6qg86eDlAonSIK-HJaWxfzx_655';
		const num = 4;
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
							<img src={`${path}/img/classBg.jpg`} alt='' />
						</figure>

						<h1>
							The gratification <br /> comes in the doing,
							<br /> not in the results
						</h1>
					</div>
				</section>

				<section className='class'>
					<h1>Today's hobby</h1>
					<div className='inner'>
						{Vids.map((vid, idx) => {
							const tit = vid.snippet.title;
							const desc = vid.snippet.description;
							const date = vid.snippet.publishedAt;

							return (
								<article key={idx}>
									<div className='classPic'>
										<img
											src={vid.snippet.thumbnails.standard.url}
											alt={vid.snippet.title}
										/>
									</div>

									<div className='classtxt'>
										<h2>{tit.length > 25 ? tit.substr(0, 25) + '...' : tit}</h2>
										<p>
											{desc.length > 50 ? desc.substr(0, 50) + '...' : desc}
										</p>
										<span>{date.split('T')[0]}</span>
									</div>
								</article>
							);
						})}
					</div>
				</section>
			</Layout>
		</>
	);
}

export default Youtube;
