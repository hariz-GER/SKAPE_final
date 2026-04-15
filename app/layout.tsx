import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SKAPE | Design & Construction",
  description:
    "SKAPE Design & Construction. Architecture, interiors, planning, and build solutions based in Chennai."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
