"use client";

import { motion } from "framer-motion";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cart";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export function FeaturedCarousel() {
    const featured = products.filter((p) => p.video || p.image).slice(0, 8);
    const addItem = useCartStore((s) => s.addItem);
    // Double for infinite illusion
    const items = [...featured, ...featured];
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === "left" ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="py-20 md:py-28 bg-ivory overflow-hidden relative" id="featured">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] bg-sage/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-gold/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-xl"
                >
                    <span className="text-sage text-xs tracking-[0.3em] uppercase font-medium">
                        مختارة لكِ
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-forest mt-3 font-bold mb-4">
                        الأكثر مبيعاً
                    </h2>
                    <p className="text-warm-gray text-sm md:text-base leading-relaxed">
                        اكتشفي تركيباتنا الأكثر محبوبية، المدعومة بالعلم والمفضلة لدى مجتمعنا.
                    </p>
                </motion.div>

                {/* Navigation Buttons (Absolute) */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 z-20 p-4 rounded-full bg-gold text-forest shadow-lg hover:bg-gold-dark hover:scale-110 transition-all duration-300 hidden md:block"
                    aria-label="Scroll right"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={() => scroll("left")}
                    className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-20 p-4 rounded-full bg-gold text-forest shadow-lg hover:bg-gold-dark hover:scale-110 transition-all duration-300 hidden md:block"
                    aria-label="Scroll left"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Horizontal Scroll */}
            <div className="relative z-10">
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto no-scrollbar px-6 pb-12 snap-x snap-mandatory scroll-pl-6"
                >
                    {items.map((product, i) => (
                        <motion.div
                            key={`${product.id}-${i}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: Math.min(i * 0.05, 0.3) }}
                            className="min-w-[280px] md:min-w-[320px] snap-start group"
                        >
                            <Link href={`/products/${product.id}`} className="block">
                                <div className="aspect-[3/4] relative bg-sand overflow-hidden mb-5">
                                    {product.video ? (
                                        <video
                                            src={product.video}
                                            muted
                                            loop
                                            playsInline
                                            onMouseOver={(e) => e.currentTarget.play()}
                                            onMouseOut={(e) => {
                                                e.currentTarget.pause();
                                                e.currentTarget.currentTime = 0;
                                            }}
                                            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                        />
                                    ) : product.image ? (
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-sage/10 to-gold/10 flex items-center justify-center">
                                            <span className="font-serif text-3xl text-sage/30">{product.name.charAt(0)}</span>
                                        </div>
                                    )}

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                                    {/* Quick Add - Centered Circle */}
                                    <motion.button
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            addItem(product);
                                        }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-forest shadow-xl z-20"
                                    >
                                        <Plus className="w-6 h-6" />
                                    </motion.button>

                                    {/* Tag */}
                                    {product.tags[0] && (
                                        <span className="absolute top-4 right-4 text-[9px] tracking-[0.2em] uppercase font-bold bg-white/90 backdrop-blur-sm text-forest px-3 py-1.5 z-10">
                                            {product.tags[0]}
                                        </span>
                                    )}
                                </div>
                            </Link>

                            <div className="text-center group-hover:-translate-y-1 transition-transform duration-500 px-2">
                                <Link href={`/products/${product.id}`}>
                                    <h3 className="font-serif text-lg font-medium text-forest hover:text-gold-dark transition-colors line-clamp-1 mb-1">
                                        {product.name}
                                    </h3>
                                </Link>
                                <div className="flex items-center justify-center gap-3">
                                    <span className="text-forest text-sm font-semibold">
                                        {product.price.toLocaleString()} د.ع
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Fade edges */}
                <div className="absolute top-0 right-0 w-8 md:w-16 h-full bg-gradient-to-l from-ivory to-transparent pointer-events-none z-10" />
                <div className="absolute top-0 left-0 w-8 md:w-16 h-full bg-gradient-to-r from-ivory to-transparent pointer-events-none z-10" />
            </div>
        </section>
    );
}
