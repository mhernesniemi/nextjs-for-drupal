/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.NEXT_IMAGE_DOMAIN],
  },
  env: {
    ALGOLIA_APPLICATION_ID: process.env.ALGOLIA_APPLICATION_ID,
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
  },
};

module.exports = nextConfig;
