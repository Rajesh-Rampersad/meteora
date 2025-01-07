/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // // assetPrefix: '/out',
  // trailingSlash: true,

  images: {
    loader: "custom",
    loaderFile: "./src/app/imagem.js"    
  },
}

export default nextConfig;
