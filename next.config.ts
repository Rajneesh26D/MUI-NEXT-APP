// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fastly.picsum.photos'],
  },
  output: 'export',
  basePath: '/MUI-NEXT-APP',
  trailingSlash: true,
  
};

module.exports = nextConfig;