import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/SKAPE_final",
  assetPrefix: "/SKAPE_final/",
  trailingSlash: true,   // ✅ ADD THIS
};

export default nextConfig;