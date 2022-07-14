import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Popup from '../common/Popup';

function Youtube() {
	const [Vids, setVids] = useState([]);
	const path = process.env.PUBLIC_URL;
	const [Open, setOpen] = useState(false);
	const [Index, setIndex] = useState(0);

	useEffect(() => {
		const key = 'AIzaSyBLdlm9RlOXSuE2ACgPflc0wFh_G0MgGRs';
		const playlist = 'PLPBzlS6qg86dubydgHXGKYPvm2umIRO5A';

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

				<section className='class2'>
					<h1>Today's Hobby</h1>
					<div className='inner'>
						{Vids.map((vid, idx) => {
							const tit = vid.snippet.title;
							const desc = vid.snippet.description;
							const date = vid.snippet.publishedAt;

							return (
								<article key={idx}>
									<div className='classVids2'>
										<div
											className='classPic2'
											onClick={() => {
												setOpen(true);
												setIndex(idx);
											}}>
											<img
												src={vid.snippet.thumbnails.standard.url}
												alt={vid.snippet.title}
											/>
										</div>

										<div className='classtxt2'>
											<h2>
												{tit.length > 30 ? tit.substr(0, 30) + '...' : tit}
											</h2>
											<p>
												{desc.length > 60 ? desc.substr(0, 60) + '...' : desc}
											</p>
											<span>{date.split('T')[0]}</span>
										</div>
									</div>
								</article>
							);
						})}
					</div>
				</section>
			</Layout>
			{Open && (
				<Popup setOpen={setOpen}>
					<iframe
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
						frameborder='0'></iframe>
				</Popup>
			)}
		</>
	);
}

export default Youtube;
