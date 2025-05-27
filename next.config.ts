import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 	images: {
    	remotePatterns: [new URL('https://arcafin.fr/content/**')],
  	},
	basePath: '/arcahome-nextjs'
};

export default nextConfig;
