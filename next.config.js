/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // reactStrictMode: false,
  distDir: "output",
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  // Other Next.js configuration options
});

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
