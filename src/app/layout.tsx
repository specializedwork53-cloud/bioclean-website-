import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "بيو كلين | علم العناية بالبشرة النقي",
  description: "عناية بالبشرة فاخرة مستوحاة من الطبيعة ومدعومة بالعلم. تركيبات طبيعية ونقية لبشرة صحية ومشرقة.",
  keywords: ["skincare", "natural", "organic", "cruelty-free", "BioClean", "beauty", "botanical", "عناية بالبشرة", "طبيعي", "بيوكلين"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable} scroll-smooth`}>
      <body className="font-sans bg-ivory text-charcoal antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
