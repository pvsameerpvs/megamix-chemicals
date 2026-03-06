/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Cloudflare Pages is static hosting; disable Next.js image optimizer.
    unoptimized: true,
  },
};

module.exports = nextConfig;
