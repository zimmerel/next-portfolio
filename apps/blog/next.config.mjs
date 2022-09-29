/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
    externalDir: true,
  },
  swcMinify: true,
};

export default nextConfig;
