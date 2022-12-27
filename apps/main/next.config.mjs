/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
    externalDir: true,
  },
  transpilePackages: ['ui'],
};

export default nextConfig;
