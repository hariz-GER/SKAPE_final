import type { Metadata } from "next";
import type { CSSProperties } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "SKAPE | Design & Construction",
  description:
    "SKAPE Design & Construction. Architecture, interiors, planning, and build solutions based in Chennai."
};

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd
  ? (process.env.NEXT_PUBLIC_BASE_PATH ?? "/SKAPE_final").replace(/\/$/, "")
  : "";

const rootStyle = {
  ["--wordmark-house" as string]: `url('${basePath}/assets/house.webp')`
} as CSSProperties;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={rootStyle}>
      <body>{children}</body>
    </html>
  );
}
