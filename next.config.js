const createNextIntlPlugin = require('next-intl/plugin');

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ['en', 'sl'],
    defaultLocale: 'sl',
  }
};

module.exports = nextConfig;

