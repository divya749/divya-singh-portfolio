
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "export", // Ensures static export for GitHub Pages
  images: {
    unoptimized: true, // Prevents Next.js from optimizing images (needed for GitHub Pages)
  },
  basePath: process.env.NODE_ENV === 'production' ? '/divya-singh-portfolio' : '', // Sets correct base path for static files
  assetPrefix: process.env.NODE_ENV === 'production' ? '/divya-singh-portfolio/' : '', // Ensures correct asset loading
};

export default nextConfig;
