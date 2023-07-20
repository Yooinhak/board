/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts'],
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      pure: true,
    },
  },
};

module.exports = nextConfig;
