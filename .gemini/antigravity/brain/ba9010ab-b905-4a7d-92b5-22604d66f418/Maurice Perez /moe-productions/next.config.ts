import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Moe',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Exclude admin routes from static export if needed
  // They will still work via client-side routing
};

export default nextConfig;
