/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'github.com',
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
