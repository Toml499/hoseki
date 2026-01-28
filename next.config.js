/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/hoseki' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hoseki/' : '',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'cdn.shopify.com'],
  },
  trailingSlash: true,
}

module.exports = nextConfig
