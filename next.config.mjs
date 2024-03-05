/** @type {import('next').NextConfig} */
const nextConfig = {
	env: { BASE_IMAGE_URL: process.env.BASE_IMAGE_URL },
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "image.tmdb.org",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
