/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		TMDB_TOKEN: process.env.TMDB_TOKEN,
	},
};

export default nextConfig;
