import Layout from '../common/Layout';
import Popup from '../common/Popup';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFlickr } from '../../redux/flickrSlice';
import { useEffect, useState, useRef } from 'react';
import Masonry from 'react-masonry-component';

function Gallery() {
	const dispatch = useDispatch();
	const frame = useRef(null);
	const input = useRef(null);
	const pop = useRef(null);
	const [Opt, setOpt] = useState({ type: 'user', user: '195940776@N07' });
	const [Loading, setLoading] = useState(true);
	const [Index, setIndex] = useState(0);
	const masonryOptions = { transitionDuration: '0.5s' };

	const Items = useSelector((store) => store.flickr.data);

	const showSearch = () => {
		const result = input.current.value.trim();
		input.current.value = '';
		if (!result) return alert('검색어를 입력하세요.');

		setLoading(true);
		frame.current.classList.remove('on');

		setOpt({
			type: 'search',
			tags: result,
		});
	};

	const showUser = (e) => {
		setLoading(true);
		frame.current.classList.remove('on');
		setOpt({ type: 'user', user: e.target.innerText });
	};

	const showMine = () => {
		setLoading(true);
		frame.current.classList.remove('on');
		setOpt({ type: 'user', user: '195940776@N07' });
	};

	useEffect(() => {
		dispatch(fetchFlickr(Opt));
	}, [Opt]);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
			frame.current.classList.add('on');
		}, 1000);
	}, [Items]);

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
					<button className='btnG' onClick={showMine}>
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
											<span onClick={showUser}>{item.owner}</span>
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
