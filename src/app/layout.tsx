import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BioClean | Pure Science Skincare",
  description: "Luxury botanical skincare powered by science. Natural, cruelty-free formulations for radiant, healthy skin. Discover the BioClean difference.",
  keywords: ["skincare", "natural", "organic", "cruelty-free", "BioClean", "beauty", "botanical"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans bg-ivory text-charcoal antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
