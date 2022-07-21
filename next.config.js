/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV == "production";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isPord ? "/all-things-serverless" : "",
};

module.exports = nextConfig;
