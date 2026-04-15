import type { NextConfig } from "next";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/SKAPE_final",   // ✅ match repo name EXACTLY
  assetPrefix: "/SKAPE_final/",
};

export default nextConfig;