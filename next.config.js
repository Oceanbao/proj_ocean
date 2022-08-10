// const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');

// @ts-check
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: false,
  // webpack: (config, options) => {
  //   config.plugins.push(
  //     new CopyPlugin({
  //       patterns: [
  //         {
  //           from: path.join(path.dirname(require.resolve('pdfjs-dist/package.json')), 'cmaps'),
  //           to: 'cmaps/'
  //         },
  //       ],
  //     })
  //   )
  //   return config
  // },
})
module.exports = nextConfig
