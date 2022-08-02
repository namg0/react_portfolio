import { useState, useEffect } from 'react';

function Comments() {
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

	const [Posts] = useState(getLocalData());

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, []);

	return (
		<div id='Comments' className='myScroll'>
			<section id='comm'>
				<h1>
					What our customer say<span>.</span>
				</h1>

				{Posts.map((post, idx) => {
					if (idx >= 5) return;
					return (
						<article key={idx}>
							<h2>{post.title}</h2>
							<p>{post.content}</p>
						</article>
					);
				})}
			</section>
		</div>
	);
}

export default Comments;
