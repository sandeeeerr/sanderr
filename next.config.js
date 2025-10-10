/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "dev.sanderr.nl",
      },
      {
        protocol: "https",
        hostname: "dwgzzuilbkcqyhlhnquk.supabase.co",
      },
    ],
    formats: ['image/avif', 'image/webp'], // Use modern image formats
    minimumCacheTTL: 60, // Cache optimized images for 60 seconds
  },
  experimental: {
    serverActions: true,
  },
  // Enable production optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
};

module.exports = nextConfig;
