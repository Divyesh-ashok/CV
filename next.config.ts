import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '/CV',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
