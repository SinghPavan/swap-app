/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	reactStrictMode: false,
};

module.exports = nextConfig;

module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "assets.unileversolutions.com",
			},
		],
	},
};
