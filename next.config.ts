import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
 	images: {
    	remotePatterns: [new URL('https://arcafin.fr/content/**')]
  	},
	basePath: isProd ? '/arcahome-nextjs' : '',
  	assetPrefix: isProd ? '/arcahome-nextjs' : '',
};

export default nextConfig;
