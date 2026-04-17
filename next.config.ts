import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const prodBasePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "/SKAPE_final").replace(
  /\/$/,
  ""
);

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(isProd
    ? {
        basePath: prodBasePath,
        assetPrefix: `${prodBasePath}/`,
      }
    : {}),
  trailingSlash: true,
};

export default nextConfig;
