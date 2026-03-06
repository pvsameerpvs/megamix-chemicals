/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Cloudflare Pages is static hosting; disable Next.js image optimizer.
    unoptimized: true,
  },
  // Avoid Next.js picking the wrong workspace root when multiple
  // lockfiles exist on the build machine.
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
