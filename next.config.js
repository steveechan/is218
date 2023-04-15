/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com", "images.unsplash.com"],
  },
  i18n: {
    locales: ["en-US", "es"],
    localeDetection: true,
    defaultLocale: "en-US",
  },
};

module.exports = nextConfig;

