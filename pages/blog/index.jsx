import Link from 'next/link';

export default function Blog({ posts }) {
	return (
		<>
			<h2> Blog About Pets </h2>
			{posts.map(({ slug, title, content }) => {
				return (
					<div key={slug}>
						<h3>
							<Link href={`/blog/${slug}`}>{title}</Link>
						</h3>
						<p>{content}</p>
						<hr />
					</div>
				);
			})}
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch(process.env.baseURL);
	const data = await res.json();

	return {
		props: {
			posts: data.posts,
			// other props can be added here
		},
	};
}
