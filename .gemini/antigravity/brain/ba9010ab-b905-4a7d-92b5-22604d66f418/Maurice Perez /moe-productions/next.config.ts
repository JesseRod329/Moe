import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/Moe",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
