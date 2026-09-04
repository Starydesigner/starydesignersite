const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = 'starydesignersite';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH !== undefined 
    ? process.env.NEXT_PUBLIC_BASE_PATH 
    : (isGithubActions ? `/${repo}` : ''),
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? (process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/` : '')
    : (isGithubActions ? `/${repo}/` : ''),
};

export default nextConfig;
