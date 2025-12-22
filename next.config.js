/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  allowedDevOrigins: ['192.168.0.106:3001', '192.168.0.106:3000'],
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [100, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/gopichakradhar/sagensalt/**',
      },
    ],
  },
  // Empty turbopack config to silence Next.js 16 warning
  turbopack: {},
}

module.exports = nextConfig
