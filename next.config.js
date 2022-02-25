/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx"],
  images: {
    domains: ["wallpapercave.com"],
  },
};

module.exports = nextConfig;
