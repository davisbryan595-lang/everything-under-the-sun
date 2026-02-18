/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: '**.v0.app',
      },
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
      },
    ],
    unoptimized: true,
  },
  // Optimized for Vercel deployment
  poweredByHeader: false,
  compress: true,
}

export default nextConfig
