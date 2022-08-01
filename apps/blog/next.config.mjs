/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx'],
  eslint: {
    dirs: ['src', '_posts'],
  },
  experimental: { esmExternals: true },
  swcMinify: true,
};

export default nextConfig;
