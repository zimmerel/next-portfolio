/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx"],
  experimental: { esmExternals: true },
};

module.exports = nextConfig;
