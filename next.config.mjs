// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export', // ← required for static export
  basePath: '/wedding-invitation-website', // ← your repo name
  assetPrefix: '/wedding-invitation-website/',
};

export default nextConfig;