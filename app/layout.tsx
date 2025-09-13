

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YC Directory",
  description: "Pitch your startup",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-black">{children}</body>
    </html>
  );
}

