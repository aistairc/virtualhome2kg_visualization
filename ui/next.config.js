const isProd = process.env.GHPAGES === 'true';

/** @type {import('next').NextConfig} */
module.exports = {
  assetPrefix: isProd ? '/virtualhome2kg_visualization' : '',
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { net: false, fs: false, child_process: false }
    return config
  }
}
