/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["itanks.eu"],
  },
};

module.exports = nextConfig;
