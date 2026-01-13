import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Optimize build performance
  swcMinify: true,
};

export default nextConfig;
