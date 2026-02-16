"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        name: "كريمات الوجه",
        description: "علاجات مستهدفة لكل المشاكل",
        image: "/images/Skin repair cream.jpeg",
        href: "#products",
        count: "6 منتجات",
    },
    {
        name: "المنظفات",
        description: "غسول وجه رغوي لطيف",
        image: "/images/Acne Foam.jpeg",
        href: "#products",
        count: "6 منتجات",
    },
    {
        name: "العناية بالجسم",
        description: "تغذية من الرأس إلى القدمين",
        image: "/images/Brightness.jpeg",
        href: "#products",
        count: "3 منتجات",
    },
    {
        name: "العناية الخاصة",
        description: "نظافة يومية لطيفة",
        image: "/images/Antioxidant cream.jpeg",
        href: "#products",
        count: "3 منتجات",
    },
];

export function CategoryGrid() {
    return (
        <section className="py-20 md:py-28 bg-ivory" id="categories">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <span className="text-sage text-xs tracking-[0.3em] uppercase font-medium">
                        اكتشفي
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-forest mt-3 font-bold">
                        تسوقي حسب الفئة
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                        >
                            <Link href={cat.href} className="block group relative">
                                <div className="aspect-[3/4] relative overflow-hidden">
                                    <Image
                                        src={cat.image}
                                        alt={cat.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent transition-all duration-500 group-hover:from-forest/90" />

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <span className="text-[10px] tracking-[0.3em] uppercase text-gold-light font-medium">
                                            {cat.count}
                                        </span>
                                        <h3 className="font-serif text-2xl font-bold mt-1 mb-1">
                                            {cat.name}
                                        </h3>
                                        <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            {cat.description}
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-white/60">
                                        <svg className="w-4 h-4 text-white transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
