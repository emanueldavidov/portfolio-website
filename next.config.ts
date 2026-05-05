import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
    remotePatterns: [
      { hostname: 'res.cloudinary.com', protocol: 'https' },
      { hostname: 'avatars.githubusercontent.com', protocol: 'https' },
      { hostname: 'imgur.com', protocol: 'https' },
      { hostname: 'media2.dev.to', protocol: 'https' },
    ],
  },
  // מוסיף את שם הריפוזיטורי לכל הנתיבים באתר כדי שהם יעבדו ב-GitHub Pages
  basePath: '/portfolio-website', 
  assetPrefix: '/portfolio-website', 
};

export default nextConfig;