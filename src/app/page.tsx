import { Navbar } from "@/components/ui/navbar";
import { AnnouncementBar } from "@/components/ui/announcement-bar";
import { Hero } from "@/components/ui/hero";
import { BrandPromise } from "@/components/ui/brand-promise";
import { FeaturedCarousel } from "@/components/ui/featured-carousel";
import { BrandStory } from "@/components/ui/brand-story";
import { CategoryGrid } from "@/components/ui/category-grid";
import { ScienceSection } from "@/components/ui/science-section";
import { VideoShowcase } from "@/components/ui/video-showcase";
import { ProductCard } from "@/components/ui/product-card";
import { Testimonials } from "@/components/ui/testimonials";
import { Newsletter } from "@/components/ui/newsletter";
import { Footer } from "@/components/ui/footer";
import { CartSheet } from "@/components/ui/cart-sheet";
import { products } from "@/data/products";

export default function Home() {
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

      {/* All Products Grid */}
      <section className="py-20 md:py-28 bg-ivory" id="products">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-sage text-xs tracking-[0.3em] uppercase font-medium">
              The Collection
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mt-3 font-bold">
              All Products
            </h2>
            <p className="text-warm-gray max-w-lg mx-auto mt-4 text-base">
              Explore our complete range of botanical skincare, meticulously crafted for every skin concern.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

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
