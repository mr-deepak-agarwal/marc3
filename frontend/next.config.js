/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'www.marcglocal.com' },
    ],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
}

module.exports = nextConfig
