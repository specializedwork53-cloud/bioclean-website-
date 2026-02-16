"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-forest-deep" id="hero">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-90"
                    // Fallback image if video fails to load or while loading
                    poster="/images/hero-poster.jpg"
                >
                    {/* We will update this source once we confirm the valid video path */}
                    <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">

                {/* Eyebrow Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mb-6"
                >
                    <span className="inline-block py-1 px-3 rounded-full border border-gold/30 bg-black/20 backdrop-blur-md text-gold-light text-xs md:text-sm tracking-[0.3em] uppercase font-medium">
                        علم النباتات النقي
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-medium tracking-tight leading-[1.1] mb-8"
                >
                    الطبيعة تلتقي <br />
                    <span className="italic text-gold-light relative inline-block">
                        بالابتكار
                        <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
                            className="absolute -bottom-2 right-0 h-[2px] bg-gold-light"
                        />
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-12"
                >
                    تركيبات مثبتة سريرياً تجمع تناغم أقوى النباتات في الطبيعة مع أحدث العلوم الجلدية.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-5 items-center"
                >
                    <a
                        href="#products"
                        className="group relative px-8 py-4 bg-white text-forest-deep min-w-[200px] text-center font-sans text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-300 hover:bg-gold-light overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            تسوقي المجموعة
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1 rotate-180" />
                        </span>
                    </a>

                    <a
                        href="#brand-story"
                        className="group px-8 py-4 bg-transparent border border-white/30 text-white min-w-[200px] text-center font-sans text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:bg-white/10 hover:border-white"
                    >
                        فلسفتنا
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-white/60 text-[10px] uppercase tracking-[0.2em]">مرري لاكتشاف المزيد</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="p-2 rounded-full border border-white/20"
                    >
                        <ChevronDown className="w-4 h-4 text-white/80" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
