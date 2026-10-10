/**
 * Next.js configuration for the Invisalign Center Hyderabad site.
 *
 * Two supported build modes:
 *   npm run build         -> full Next.js app (needs Node on the server: cPanel "Setup Node.js App")
 *   npm run build:static  -> pre-rendered static export into ./out (upload to public_html)
 */
const isStaticExport = process.env.STATIC_EXPORT === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    // Keeps the build independent of native image tooling on shared hosting.
    unoptimized: true,
  },
  ...(isStaticExport
    ? {
        output: 'export',
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
