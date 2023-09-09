const rehypePrettyCode = require('rehype-pretty-code');

/** @type {import('rehype-pretty-code').Options} */
const rehypeOptions = {};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
};

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig);
