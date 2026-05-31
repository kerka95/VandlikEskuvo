/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/VandlikEskuvo',
  images: {
    loader: 'custom',
    loaderFile: './src/imageLoader.js',
  },
};

export default nextConfig;
