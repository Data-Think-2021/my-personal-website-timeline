import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/my-personal-website-timeline', 
  assetPrefix: '/my-personal-website-timeline/',
};

export default nextConfig;
