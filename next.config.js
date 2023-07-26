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
  exportPathMap: function () {
    return {
      "/": { page: "/dashboard/account_overview" }, // Specify your desired root page here
    };
  },
};

module.exports = nextConfig;
