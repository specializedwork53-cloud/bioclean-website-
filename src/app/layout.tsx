import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Video by Me | Vibe Coding Style",
  description: "A high-end animated website showcasing video production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
