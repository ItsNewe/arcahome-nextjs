import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'arcafin.fr',
        pathname: '/content/**',
      }
    ],
  },
  basePath: isProd ? '/arcahome-nextjs' : '',
  assetPrefix: isProd ? '/arcahome-nextjs' : '',
};

export default nextConfig;