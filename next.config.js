/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.prod.website-files.com',
      'd3e54v103j8qbb.cloudfront.net',
      'fonts.googleapis.com',
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
