/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    esmExternals: true,
    externalDir: true,
  },
  transpilePackages: ['ui'],
};

export default nextConfig;
