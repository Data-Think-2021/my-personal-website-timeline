import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/personal-website-timeline', 
  assetPrefix: '/personal-website-timeline/',
};

export default nextConfig;
