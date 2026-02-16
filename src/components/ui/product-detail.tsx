"use client";

import { Product, products } from "@/data/products";
import { useCartStore } from "@/store/cart";
import { motion } from "framer-motion";
import { ChevronRight, Minus, Plus, ShoppingBag, Star, Leaf, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CartSheet } from "@/components/ui/cart-sheet";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export function ProductDetail({ product }: { product: Product }) {
    const addItem = useCartStore((state) => state.addItem);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addItem(product);
        }
    };

    const discount = Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
    );

    // Related products
    const related = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="min-h-screen bg-ivory">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">
                {/* Breadcrumb */}
                <nav className="flex items-center text-sm text-warm-gray mb-10">
                    <Link href="/" className="hover:text-forest transition-colors">الرئيسية</Link>
                    <ChevronRight className="w-4 h-4 mx-2 rotate-180" />
                    <Link href={`/?category=${product.category}#products`} className="hover:text-forest transition-colors text-warm-gray">
                        {product.category}
                    </Link>
                    <ChevronRight className="w-4 h-4 mx-2 rotate-180" />
                    <span className="text-forest font-medium">{product.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Product Media */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="aspect-[3/4] relative bg-sand overflow-hidden sticky top-28">
                            {product.video ? (
                                <video
                                    src={product.video}
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            ) : product.image ? (
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sage/5 to-gold/5">
                                    <span className="font-serif text-6xl text-sage/20 font-bold">
                                        {product.name.charAt(0)}
                                    </span>
                                </div>
                            )}

                            {/* Discount Badge */}
                            {discount > 0 && (
                                <span className="absolute top-4 right-4 bg-sage text-white text-xs tracking-wider uppercase font-bold px-4 py-2 z-10">
                                    توفير {discount}%
                                </span>
                            )}
                        </div>
                    </motion.div>

                    {/* Product Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col"
                    >
                        {/* Category */}
                        <span className="text-sage text-xs tracking-[0.3em] uppercase font-medium mb-3">
                            {product.category}
                        </span>

                        <h1 className="font-serif text-3xl md:text-4xl font-bold text-forest mb-4 leading-tight">
                            {product.name}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                                ))}
                            </div>
                            <span className="text-warm-gray text-sm">(24 تقييم)</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline gap-4 mb-8">
                            <span className="text-2xl font-bold text-forest">
                                {product.price.toLocaleString()} د.ع
                            </span>
                            <span className="text-lg text-warm-gray/60 line-through">
                                {product.originalPrice.toLocaleString()} د.ع
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-warm-gray leading-relaxed mb-8 text-base">
                            {product.description}
                        </p>

                        {/* Volume */}
                        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-light-gray">
                            <span className="text-xs tracking-wider uppercase text-warm-gray">الحجم:</span>
                            <span className="px-4 py-2 border border-sage text-sage text-sm font-medium">
                                {product.volume}
                            </span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {product.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-1.5 bg-sage/8 text-sage text-[11px] tracking-wider uppercase font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Add to Cart */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <div className="flex items-center border border-light-gray">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-12 h-12 flex items-center justify-center text-warm-gray hover:text-forest transition-colors"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-12 h-12 flex items-center justify-center font-bold text-forest">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-12 h-12 flex items-center justify-center text-warm-gray hover:text-forest transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                className="flex-1 bg-forest hover:bg-sage text-ivory font-semibold py-4 px-8 text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <ShoppingBag className="w-4 h-4" />
                                إضافة إلى الحقيبة
                            </button>
                        </div>

                        {/* Trust Signals */}
                        <div className="space-y-3 py-6 border-t border-light-gray">
                            <div className="flex items-center gap-3 text-sm text-warm-gray">
                                <Leaf className="w-4 h-4 text-sage flex-shrink-0" />
                                <span>مكونات نباتية طبيعية 100%</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-warm-gray">
                                <ShieldCheck className="w-4 h-4 text-sage flex-shrink-0" />
                                <span>تم اختباره واعتماده من قبل أطباء الجلدية</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-warm-gray">
                                <Truck className="w-4 h-4 text-sage flex-shrink-0" />
                                <span>شحن مجاني للطلبات التي تزيد عن 25,000 د.ع</span>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="border-t border-light-gray pt-8 mt-4">
                            <div className="flex gap-8 mb-6">
                                {["description", "ingredients", "usage"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-2 text-sm font-medium capitalize tracking-wide transition-colors ${activeTab === tab
                                            ? "text-forest border-b-2 border-sage"
                                            : "text-warm-gray hover:text-forest"
                                            }`}
                                    >
                                        {tab === "usage" ? "طريقة الاستخدام" : tab === "ingredients" ? "المكونات" : "الوصف"}
                                    </button>
                                ))}
                            </div>

                            <div className="text-warm-gray leading-relaxed text-sm">
                                {activeTab === "description" && (
                                    <p>
                                        جربي أقصى درجات الرفاهية في العناية بالبشرة مع {product.name}.
                                        تمت صياغته بدقة باستخدام مكونات نباتية مثبتة سريرياً
                                        لتقديم فوائد {product.category} التي يمكنك رؤيتها والشعور بها.
                                        كل عبوة مصنوعة في دفعات صغيرة لضمان أقصى قدر من الفعالية والنضارة.
                                    </p>
                                )}
                                {activeTab === "ingredients" && (
                                    <p>
                                        أكوا (ماء)، جليسرين، {product.tags.join(", ")}، كحول سيتيريل،
                                        زبدة بوتيروسبيرموم باركي (الشيا)، زيت بذور سيموندسيا تشينينسيس (الجوجوبا)،
                                        توكوفيرول (فيتامين E)، فينوكسي إيثانول، إيثيل هكسيل جليسرين.
                                    </p>
                                )}
                                {activeTab === "usage" && (
                                    <p>
                                        ضعي كمية صغيرة على بشرة نظيفة وجافة. دلكي بلطف بحركات دائرية
                                        لأعلى حتى يتم امتصاصه بالكامل. استخدميه صباحاً ومساءً للحصول على أفضل
                                        النتائج. لأفضل النتائج، استخدميه مع غسول الوجه الرغوي BioClean من نفس المجموعة.
                                    </p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Related Products */}
                {related.length > 0 && (
                    <div className="mt-24 pt-16 border-t border-light-gray">
                        <div className="text-center mb-12">
                            <span className="text-sage text-xs tracking-[0.3em] uppercase font-medium">
                                قد يعجبكِ أيضاً
                            </span>
                            <h2 className="font-serif text-3xl text-forest mt-3 font-bold">
                                منتجات ذات صلة
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {related.map((p) => (
                                <Link key={p.id} href={`/products/${p.id}`} className="group">
                                    <div className="aspect-[3/4] relative bg-sand overflow-hidden mb-3">
                                        {p.image ? (
                                            <Image
                                                src={p.image}
                                                alt={p.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        ) : p.video ? (
                                            <video
                                                src={p.video}
                                                muted
                                                playsInline
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sage/5 to-gold/5">
                                                <span className="font-serif text-2xl text-sage/20 font-bold">
                                                    {p.name.charAt(0)}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="font-serif text-sm font-semibold text-forest group-hover:text-sage transition-colors line-clamp-1">
                                        {p.name}
                                    </h3>
                                    <span className="text-sm text-forest font-bold mt-1 block">
                                        {p.price.toLocaleString()} د.ع
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <Footer />
            <CartSheet />
        </div>
    );
}
