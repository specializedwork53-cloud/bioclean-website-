"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/store/cart";
import Image from "next/image";

export function CartSheet() {
    const [isOpen, setIsOpen] = useState(false);
    const { items, removeItem, updateQuantity, clearCart, total } = useCartStore();
    const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <>
            {/* Hidden trigger for navbar */}
            <button
                id="cart-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="hidden"
                aria-hidden="true"
            />

            {/* Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 z-[70] backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Cart Sheet */}
            <motion.div
                initial={false}
                animate={isOpen ? { x: 0 } : { x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed top-0 right-0 w-full max-w-md h-full bg-ivory z-[80] shadow-2xl flex flex-col"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-light-gray">
                    <div className="flex items-center gap-3">
                        <ShoppingBag className="w-5 h-5 text-forest" />
                        <h2 className="font-serif text-xl font-bold text-forest">
                            حقيبتك
                        </h2>
                        <span className="text-xs text-warm-gray">({cartCount} عناصر)</span>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-8 h-8 flex items-center justify-center text-warm-gray hover:text-forest transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                            <div className="text-forest/20">
                                <ShoppingBag className="w-16 h-16" strokeWidth={1} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-serif text-2xl text-forest">حقيبتك فارغة</h3>
                                <p className="text-warm-gray text-sm">اكتشفي مجموعتنا النباتية للعناية بالبشرة.</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-8 py-3 bg-forest text-ivory text-xs tracking-[0.2em] uppercase font-medium hover:bg-sage transition-all duration-300"
                            >
                                تسوقي الآن
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {items.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="flex gap-5"
                                >
                                    {/* Product Thumbnail */}
                                    <div className="w-24 aspect-[3/4] bg-sand relative overflow-hidden flex-shrink-0">
                                        {item.image ? (
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : item.video ? (
                                            <video
                                                src={item.video}
                                                muted
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-sand/50">
                                                <span className="font-serif text-2xl text-sage/40">
                                                    {item.name.charAt(0)}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex-1 flex flex-col justify-between py-1">
                                        <div>
                                            <div className="flex justify-between items-start gap-4">
                                                <h3 className="font-serif text-base font-medium text-forest line-clamp-2 leading-tight">
                                                    {item.name}
                                                </h3>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-warm-gray/40 hover:text-red-500 transition-colors"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <p className="text-[10px] tracking-wide text-warm-gray uppercase mt-1">{item.volume}</p>
                                        </div>

                                        <div className="flex items-end justify-between">
                                            {/* Quantity */}
                                            <div className="flex items-center border border-forest/10">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-8 h-8 flex items-center justify-center text-forest/60 hover:text-forest hover:bg-forest/5 transition-colors"
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="w-8 h-8 flex items-center justify-center text-xs font-medium text-forest">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-8 h-8 flex items-center justify-center text-forest/60 hover:text-forest hover:bg-forest/5 transition-colors"
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>

                                            <span className="font-medium text-forest text-sm">
                                                {(item.price * item.quantity).toLocaleString()} د.ع
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="border-t border-light-gray p-6 space-y-4">
                        {/* Subtotal */}
                        <div className="flex items-center justify-between">
                            <span className="text-warm-gray text-sm">المجموع الفرعي</span>
                            <span className="font-serif text-xl font-bold text-forest">
                                {total().toLocaleString()} د.ع
                            </span>
                        </div>

                        <p className="text-[11px] text-warm-gray text-center">
                            يتم حساب الشحن عند الدفع
                        </p>

                        {/* Checkout Button */}
                        <button className="w-full py-4 bg-forest text-ivory text-sm tracking-widest uppercase font-semibold hover:bg-sage transition-colors duration-300 flex items-center justify-center gap-2">
                            التقدم للدفع <ArrowRight className="w-4 h-4 transform rotate-180" />
                        </button>

                        {/* Clear Cart */}
                        <button
                            onClick={clearCart}
                            className="w-full text-center text-xs text-warm-gray/60 hover:text-red-500 transition-colors underline"
                        >
                            إفراغ الحقيبة
                        </button>
                    </div>
                )}
            </motion.div>
        </>
    );
}
