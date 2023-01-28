/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.marcelgolob.com",
      },
    ],
  },
};

module.exports = nextConfig;
