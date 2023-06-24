/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		baseURL: 'https://learnwebcode.github.io/json-example/posts.json',
		githubURL: 'https://api.github.com',
		weatherURL: 'https://api.weather.gov',
	},
};

module.exports = nextConfig;
