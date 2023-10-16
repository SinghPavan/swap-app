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
			{
				protocol: "https",
				hostname: "images.ctfassets.net",
			},
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
			},
			{
				protocol: "https",
				hostname: "i.postimg.cc",
			},
		],
	},
};
