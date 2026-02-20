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
  basePath: '/weddingwebsite', // ← your repo name
  assetPrefix: '/weddingwebsite/',          // use relative paths for _next
  trailingSlash: true,  
};

export default nextConfig;