/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // FIXME: remove once fixed in GitHub Action
  assetPrefix: '/martinpetlus.sk/',
  images: { unoptimized: true },
};

module.exports = nextConfig;
