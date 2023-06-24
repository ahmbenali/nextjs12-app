import awaitSleep from 'await-sleep';

export default function Home({ forecast }) {
	return (
		<>
			<h1>Welcome to my nextJS app</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo mollitia
				vel quam eveniet dolorem pariatur quisquam eius tempore quae nesciunt?
			</p>
			<div>
				<strong>The weather:</strong>
				<section
					style={{
						marginInlineStart: '1em',
						paddingLeft: '15px',
						borderLeft: 'solid 2px teal',
					}}>
					{forecast}
				</section>
			</div>
		</>
	);
}

export async function getServerSideProps() {
	const response = await fetch(
		`${process.env.weatherURL}/gridpoints/MFL/109,49/forecast`
	);

	const data = await response.json();

	//todo do not use it in production -> only to show that the rendering is purely dynamic server side (no cache or whatever from client side) > every time your refresh the site you have to wait 3 seconds
	// await awaitSleep( 3000 );

	return {
		props: {
			forecast: data.properties.periods[0].detailedForecast,
		},
	};
}
