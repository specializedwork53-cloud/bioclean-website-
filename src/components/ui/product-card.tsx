"use client";

import { Product } from "@/data/products";
import { useCartStore } from "@/store/cart";
import { motion } from "framer-motion";
import { Plus, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const addItem = useCartStore((state) => state.addItem);
    const discount = Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative"
        >
            {/* Image/Video Container */}
            <Link
                href={`/products/${product.id}`}
                className="block aspect-[3/4] relative bg-sand overflow-hidden"
            >
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
                    <div className="w-full h-full bg-gradient-to-br from-sage/5 to-gold/5 flex items-center justify-center">
                        <span className="font-serif text-4xl text-sage/20 font-bold">
                            {product.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                        </span>
                    </div>
                )}

                {/* Subtle dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                    {discount > 0 && (
                        <span className="bg-white/90 backdrop-blur-sm text-forest text-[10px] tracking-wider uppercase font-bold px-2 py-1">
                            -{discount}%
                        </span>
                    )}
                    {product.tags.includes("New") && (
                        <span className="bg-forest text-white text-[10px] tracking-wider uppercase font-medium px-2 py-1">
                            New
                        </span>
                    )}
                </div>

                {/* Quick Add Button - Rises from bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            addItem(product);
                        }}
                        className="w-full py-3 bg-white/95 backdrop-blur-md text-forest hover:bg-forest hover:text-white transition-all duration-300 text-xs tracking-widest uppercase font-semibold border border-white/20 shadow-lg"
                    >
                        Quick Add
                    </button>
                </div>
            </Link>

            {/* Product Info */}
            <div className="pt-4 pb-2 text-center group-hover:-translate-y-1 transition-transform duration-500">
                <Link href={`/products/${product.id}`}>
                    <h3 className="font-serif text-lg text-forest hover:text-gold-dark transition-colors duration-300">
                        {product.name}
                    </h3>
                </Link>
                <div className="text-warm-gray/80 text-xs tracking-wider uppercase mt-1 mb-2">
                    {product.category}
                </div>
                <div className="flex items-center justify-center gap-3">
                    <span className="text-forest font-medium">{product.price.toLocaleString()} IQD</span>
                    {product.originalPrice > product.price && (
                        <span className="text-warm-gray/50 text-xs line-through decoration-warm-gray/50">
                            {product.originalPrice.toLocaleString()} IQD
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
