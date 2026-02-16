"use client";

import { Navbar } from "@/components/ui/navbar";
import { AnnouncementBar } from "@/components/ui/announcement-bar";
import { Hero } from "@/components/ui/hero";
import { BrandPromise } from "@/components/ui/brand-promise";
import { FeaturedCarousel } from "@/components/ui/featured-carousel";
import { BrandStory } from "@/components/ui/brand-story";
import { CategoryGrid } from "@/components/ui/category-grid";
import { ScienceSection } from "@/components/ui/science-section";
import { VideoShowcase } from "@/components/ui/video-showcase";
import { Newsletter } from "@/components/ui/newsletter";
import { Footer } from "@/components/ui/footer";
import { CartSheet } from "@/components/ui/cart-sheet";
import { AllProductsGrid } from "@/components/ui/all-products-grid";
import { Testimonials } from "@/components/ui/testimonials";
import { useEffect, Suspense } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      {/* Navigation */}
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Brand Promise Bar */}
      <BrandPromise />

      {/* Featured Bestsellers Carousel */}
      <FeaturedCarousel />

      {/* Brand Story */}
      <BrandStory />

      {/* Category Grid */}
      <CategoryGrid />

      {/* Science Section */}
      <ScienceSection />

      {/* Video Showcase */}
      <VideoShowcase />

      {/* All Products Grid with Filter */}
      <Suspense fallback={<div className="py-20 text-center text-sage">جاري التحميل...</div>}>
        <AllProductsGrid />
      </Suspense>

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />

      {/* Cart Sheet */}
      <CartSheet />
    </main>
  );
}
