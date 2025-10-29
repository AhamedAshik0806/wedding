/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false, // optional but helps with Tailwind 4 builds
  },
};

export default nextConfig;
