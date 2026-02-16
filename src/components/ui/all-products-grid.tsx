"use client";

import { useFilterStore } from "@/store/filter";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/product-card";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function AllProductsGrid() {
    const { activeIngredient, setActiveIngredient } = useFilterStore();

    const filteredProducts = activeIngredient
        ? products.filter((p) => p.tags.includes(activeIngredient))
        : products;

    return (
        <section className="py-20 md:py-28 bg-ivory" id="products">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <span className="text-sage text-xs tracking-[0.3em] uppercase font-medium">
                        المجموعة
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-forest mt-3 font-bold">
                        جميع المنتجات
                    </h2>
                    <p className="text-warm-gray max-w-lg mx-auto mt-4 text-base">
                        استكشفي مجموعتنا الكاملة من منتجات العناية بالبشرة النباتية، والمصممة بعناية لكل مشاكل البشرة.
                    </p>

                    <AnimatePresence>
                        {activeIngredient && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mt-8 flex justify-center"
                            >
                                <button
                                    onClick={() => setActiveIngredient(null)}
                                    className="flex items-center gap-2 px-4 py-2 bg-forest text-white rounded-full text-sm hover:bg-forest/90 transition-colors"
                                >
                                    <span>تمت التصفية حسب: {activeIngredient}</span>
                                    <X className="w-4 h-4" />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-warm-gray">
                        لا توجد منتجات تطابق هذا المكون حالياً.
                    </div>
                )}
            </div>
        </section>
    );
}
