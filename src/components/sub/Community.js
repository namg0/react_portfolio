import Layout from '../common/Layout';
import { useRef, useState, useEffect } from 'react';

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);
	const inputEdit = useRef(null);
	const textareaEdit = useRef(null);

	const getLocalData = () => {
		const dummyPosts = [
			{
				title: 'Expired period',
				content:
					'Sed, architecto asperiores voluptas, dignissimos vitae iste aliquam reprehenderit, magni numquam earum veritatis quo laborum eveniet error.',
			},
			{
				title: 'Simultaneous connection',
				content:
					'Quo assumenda eveniet possimus at molestiae perspiciatis soluta, sunt iusto consequatur dicta, aspernatur quam aliquid aliquam natus aut!',
			},
			{
				title: 'Delivery of supplies',
				content:
					'Voluptas ratione velit expedita commodi dolor illum corporis sit sint.',
			},
			{ title: 'A lecture extension', content: 'Lorem ipsum dolor sit.' },
			{
				title: 'Playback error',
				content: 'Quidem molestiae voluptatibus aliquid cum ipsum harum.',
			},
			{
				title: 'Change authentication device',
				content: 'Labore esse aperiam voluptates eum laboriosam ea minima',
			},
			{
				title: 'An intermediate refund',
				content:
					'Sit neque aperiam nobis temporibus nam voluptate autem aspernatur accusantium sequi odio',
			},
			{
				title: 'Submission of assignment',
				content: 'Adipisci labore a. Ut, provident officia.',
			},
			{
				title: 'Subtitle error',
				content:
					'Autem aspernatur accusantium sequi odio praesentium molestiae ipsum et.',
			},
			{
				title: 'Annual membership',
				content: 'Id voluptate illo ad dolor expedita sint dolores.',
			},
		];

		const data = localStorage.getItem('post');

		if (data) {
			return JSON.parse(data);
		} else {
			return dummyPosts;
		}
	};

	const [Posts, setPosts] = useState(getLocalData());
	const [Allowed, setAllowed] = useState(true);

	const resetForm = () => {
		input.current.value = '';
		textarea.current.value = '';
		if (inputEdit.current) {
			inputEdit.current.value = '';
			textareaEdit.current.value = '';
		}
	};

	const createPost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			resetForm();
			return alert('제목과 본문을 모두 입력하세요');
		}
		setPosts([
			...Posts,
			{ title: input.current.value, content: textarea.current.value },
		]);
		resetForm();
	};

	const deletePost = (index) => {
		setPosts(Posts.filter((_, idx) => idx !== index));
	};

	const enableUpdate = (index) => {
		if (!Allowed) return;
		setAllowed(false);
		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = true;
				return post;
			})
		);
	};

	const disableUpdate = (index) => {
		setAllowed(true);
		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = false;
				return post;
			})
		);
	};

	const updatePost = (index) => {
		if (!inputEdit.current.value.trim() || !textareaEdit.current.value.trim()) {
			resetForm();
			return alert('수정할 제목과 본문을 모두 입력하세요');
		}
		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) {
					post.title = inputEdit.current.value;
					post.content = textareaEdit.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);
	};

	useEffect(() => {
		console.log(Posts);

		localStorage.setItem('post', JSON.stringify(Posts));
	}, [Posts]);

	return (
		<Layout name={'Community'}>
			<h1 className='faqH'>FAQ</h1>
			<div className='FAQ'>
				<div className='inner'>
					<div className='faqArti'>
						<article>
							<div className='faqTxt'>
								<h2>01</h2>
								<h3>Password search</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
									aperiam omnis. Unde.
								</p>
							</div>
						</article>
						<article>
							<div className='faqTxt'>
								<h2>02</h2>
								<h3>A lecture refund</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Ratione rem ipsum deserunt ipsa sit, officia amet modi nihil
									incidunt unde.
								</p>
							</div>
						</article>
						<article>
							<div className='faqTxt'>
								<h2>03</h2>
								<h3>Purchase of supplies</h3>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Eaque.
								</p>
							</div>
						</article>
						<article>
							<div className='faqTxt'>
								<h2>04</h2>
								<h3>Leaving the site</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Possimus aperiam quae ullam molestias eveniet voluptates eius
									aut.
								</p>
							</div>
						</article>
					</div>
				</div>
			</div>

			<div className='inner'>
				<div className='inputBox'>
					<h2>More Questions</h2>
					<h1>Our Community</h1>
					<input type='text' placeholder='Please enter a title' ref={input} />
					<br />
					<textarea
						cols='30'
						rows='5'
						placeholder='Please enter the text'
						ref={textarea}></textarea>
					<br />
					<div className='btnSet'>
						<button onClick={resetForm}>CANCEL</button>
						<button onClick={createPost}>WRITE</button>
					</div>
				</div>
				<div className='showBox'>
					{Posts.map((post, idx) => {
						return (
							<article key={idx}>
								{post.enableUpdate ? (
									<>
										<div className='editTxt'>
											<input
												type='text'
												defaultValue={post.title}
												ref={inputEdit}
											/>
											<br />
											<textarea
												cols='30'
												rows='4'
												defaultValue={post.content}
												ref={textareaEdit}></textarea>
											<br />
										</div>
										<div className='btnSet'>
											<button onClick={() => disableUpdate(idx)}>CANCEL</button>
											<button onClick={() => updatePost(idx)}>UPDATE</button>
										</div>
									</>
								) : (
									<>
										<div className='txt'>
											<h2>{post.title}</h2>
											<p>{post.content}</p>
										</div>
										<div className='btnSet'>
											<button onClick={() => enableUpdate(idx)}>EDIT</button>
											<button onClick={() => deletePost(idx)}>DELELTE</button>
										</div>
									</>
								)}
							</article>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}
export default Community;
