/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
  experimental: {
    runtime: 'experimental-edge',
  },
  images: {
    domains: ['github.com'],
  },
}

module.exports = nextConfig
