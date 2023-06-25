/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    mdxRs: true, // TODO Experimental, maybe bad idea?
  },
};
 
const withMDX = require('@next/mdx')({
  options: {
    providerImportSource: '@mdx-js/react',
  }
});
module.exports = withMDX(nextConfig);