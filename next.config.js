/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api",
        destination: process.env.NEXT_PUBLIC_API_URL,
      },
    ];
  },
};

module.exports = nextConfig;
