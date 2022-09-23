/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx'],
  eslint: {
    dirs: ['src'],
  },
  experimental: { esmExternals: true },
  swcMinify: true,
};

export default nextConfig;
