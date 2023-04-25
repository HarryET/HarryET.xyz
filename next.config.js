const { withPlausibleProxy } = require('next-plausible')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
  images: {
    domains: ['github.com'],
  },
  async redirects() {
    return [
      {
        source: '/api/talks',
        destination: '/data/talks.json',
        permanent: true,
      },
      {
        source: '/api/papers',
        destination: '/data/papers.json',
        permanent: true,
      },
      {
        source: '/api/langs',
        destination: '/data/langs.json',
        permanent: true,
      },
      {
        source: '/api/experience',
        destination: '/data/experience.json',
        permanent: true,
      },
    ]
  },
}

module.exports = withPlausibleProxy({
  customDomain: 'https://analytics.harryet.xyz'
})(nextConfig)
