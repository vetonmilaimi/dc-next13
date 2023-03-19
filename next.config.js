/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api2.duraj.org',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
