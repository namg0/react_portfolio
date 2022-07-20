import Layout from '../common/Layout';
import Popup from '../common/Popup';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Masonry from 'react-masonry-component';
function Gallery() {
	const frame = useRef(null);
	const input = useRef(null);
	const pop = useRef(null);
	const [Items, setItems] = useState([]);
	const [Loading, setLoading] = useState(true);
	const [EnableClick, setEnableClick] = useState(true);
	const [Index, setIndex] = useState(0);
	const masonryOptions = { transitionDuration: '0.5s' };

	const getFlickr = async (opt) => {
		const key = '550234a469c2728e691ea9c24ed31ebe';
		const method_search = 'flickr.photos.search';
		const method_user = 'flickr.people.getPhotos';
		const num = 500;
		let url = '';

		if (opt.type === 'search') {
			url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tags}`;
		}
		if (opt.type === 'user') {
			url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${opt.user}`;
		}
		await axios.get(url).then((json) => {
			console.log(json.data.photos.photo);
			if (json.data.photos.photo.length === 0)
				return alert('해당 검색어의 결과 이미지가 없습니다.');
			setItems(json.data.photos.photo);
		});
		setTimeout(() => {
			setLoading(false);
			frame.current.classList.add('on');
			setTimeout(() => {
				setEnableClick(true);
			}, 500);
		}, 1000);
	};
	const showSearch = () => {
		const result = input.current.value.trim();
		input.current.value = '';
		if (!result) return alert('검색어를 입력하세요.');
		if (!EnableClick) return;
		setEnableClick(false);
		setLoading(true);
		frame.current.classList.remove('on');
		getFlickr({
			type: 'search',
			tags: result,
		});
	};
	useEffect(() => {
		getFlickr({ type: 'user', user: '195940776@N07' });
	}, []);
	return (
		<>
			<Layout name={'Gallery'}>
				<div className='galleryTxt'>
					<h1>GALLERY</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum in
						ab delectus perspiciatis ipsa, maiores debitis similique, natus
						eaque pariatur eum quaerat vero repellendus, obcaecati
						exercitationem modi?
					</p>
				</div>
				{Loading && (
					<img
						className='loading'
						src={`${process.env.PUBLIC_URL}/img/loading1.gif`}
					/>
				)}

				<div className='gallBtns'>
					<button
						className='btnG'
						onClick={() => {
							if (!EnableClick) return;
							setEnableClick(false);
							setLoading(true);
							frame.current.classList.remove('on');
							getFlickr({ type: 'user', user: '195940776@N07' });
						}}>
						Our Gallery
					</button>
					<div className='searchBox'>
						<input
							type='text'
							ref={input}
							placeholder='Search Photos.'
							onKeyUp={(e) => {
								if (e.key === 'Enter') showSearch();
							}}
						/>
						<button className='btnS' onClick={showSearch}>
							SEARCH
						</button>
					</div>
				</div>
				<div className='frame' ref={frame}>
					<Masonry elementType={'div'} options={masonryOptions}>
						{Items.map((item, idx) => {
							return (
								<article key={idx}>
									<div className='inner'>
										<div
											className='pic'
											onClick={() => {
												pop.current.open();
												setIndex(idx);
											}}>
											<img
												src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
												alt={item.title}
											/>
										</div>
										<h2>{item.title}</h2>
										<div className='profile'>
											<img
												src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`}
												alt={item.owner}
												onError={(e) => {
													e.target.setAttribute(
														'src',
														'https://www.flickr.com/images/buddyicon.gif'
													);
												}}
											/>
											<span
												onClick={(e) => {
													if (!EnableClick) return;
													setEnableClick(true);
													setLoading(true);
													frame.current.classList.remove('on');
													getFlickr({
														type: 'user',
														user: e.target.innerText,
													});
												}}>
												{item.owner}
											</span>
										</div>
									</div>
								</article>
							);
						})}
					</Masonry>
				</div>
			</Layout>

			<Popup ref={pop}>
				{Items.length !== 0 && (
					<img
						src={`https://live.staticflickr.com/${Items[Index].server}/${Items[Index].id}_${Items[Index].secret}_b.jpg`}
						alt={Items[Index].title}
					/>
				)}
			</Popup>
		</>
	);
}
export default Gallery;
