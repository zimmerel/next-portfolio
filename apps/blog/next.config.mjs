/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
    externalDir: true,
  },
  transpilePackages: ['testing', 'markdown', 'date-util', 'ui', 'styles'],
};

export default nextConfig;
