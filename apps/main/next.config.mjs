// import nextTM from 'next-transpile-modules';

// const withTM = nextTM(['ui'], { debug: true });

// const nextConfig = withTM({
//   reactStrictMode: true,
//   pageExtensions: ['ts', 'tsx'],
//   eslint: {
//     dirs: ['src'],
//   },
//   experimental: { esmExternals: true },
//   swcMinify: true,
// });

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx'],
  eslint: {
    dirs: ['src'],
  },
  experimental: {
    esmExternals: true,
    externalDir: true,
  },
  swcMinify: true,
};

export default nextConfig;
