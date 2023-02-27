/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withTwin = require("./withTwin.js");

const baseUrl = "";

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTwin(
  withBundleAnalyzer({
    reactStrictMode: true, // < Recommended by Next
    poweredByHeader: false,
    trailingSlash: true,
    basePath: baseUrl,
    env: {
      baseUrl,
    },
    // The starter code load resources from `public` folder with `router.basePath` in React components.
    // So, the source code is "basePath-ready".
    // You can remove `basePath` if you don't need it.
    images: {
      // fixes build error (see commit message for details)
      unoptimized: true,
    },
    experimental: {
      appDir: true,
    },
  })
);
