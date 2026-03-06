import type { NextConfig } from "next";
//import withExportOptimizeImages from "next-export-optimize-images";
const nextConfig: NextConfig = {
  turbopack: {}, 
  /**/
  //reactStrictMode: true,
  output: 'export',
  // 
  //trailingSlash: false,
  // 
  images: {
    
    unoptimized: true,

    /*unoptimized: false,
    loader: "custom", 
    loaderFile: './src/utils/imageLoader.ts',
    unoptimized: false, 
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    /**/
  },
  /**/
};
export default nextConfig;
//export default withExportOptimizeImages(nextConfig);
