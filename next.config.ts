import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // ✅ VERY IMPORTANT
  images: {
    unoptimized: true,  // ✅ required for GitHub Pages
  },
  basePath: "/skape-parallax",   // ⚠️ replace with your repo name
  assetPrefix: "/skape-parallax/",
};

export default nextConfig;