"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, Search, User, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/store/cart";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
    { label: "المتجر", href: "#products" },
    { label: "قصتنا", href: "#story" },
    { label: "المكونات", href: "#science" },
    { label: "آراء العملاء", href: "#reviews" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const items = useCartStore((s) => s.items);
    const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    scrolled
                        ? "bg-ivory/80 backdrop-blur-xl border-b border-black/5 py-4"
                        : "bg-transparent py-6"
                )}
            >
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">

                    {/* Left: Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-10 flex-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onMouseEnter={() => setHoveredLink(link.label)}
                                onMouseLeave={() => setHoveredLink(null)}
                                className={cn(
                                    "relative text-xs tracking-[0.2em] uppercase font-semibold transition-colors duration-300",
                                    scrolled ? "text-forest-deep hover:text-gold-dark" : "text-white hover:text-gold-light"
                                )}
                            >
                                {link.label}
                                {link.label === hoveredLink && (
                                    <motion.span
                                        layoutId="nav-underline"
                                        className={cn(
                                            "absolute -bottom-1 left-0 w-full h-[1px]",
                                            scrolled ? "bg-gold-dark" : "bg-gold-light"
                                        )}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Center: Logo */}
                    <Link href="/" className="flex-1 flex justify-center transform hover:scale-105 transition-transform duration-500">
                        <h1
                            className={cn(
                                "font-serif text-3xl md:text-4xl tracking-tight font-bold transition-colors duration-500",
                                scrolled ? "text-forest-deep" : "text-white"
                            )}
                        >
                            BioClean
                        </h1>
                    </Link>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-6 flex-1 justify-end">
                        <div className="hidden md:flex items-center gap-6">
                            <button
                                className={cn("transition-colors duration-300 hover:scale-110", scrolled ? "text-forest-deep hover:text-gold-dark" : "text-white hover:text-gold-light")}
                                aria-label="بحث"
                            >
                                <Search strokeWidth={1.5} className="w-5 h-5" />
                            </button>
                            <button
                                className={cn("transition-colors duration-300 hover:scale-110", scrolled ? "text-forest-deep hover:text-gold-dark" : "text-white hover:text-gold-light")}
                                aria-label="الحساب"
                            >
                                <User strokeWidth={1.5} className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Cart */}
                        <button
                            className={cn("relative transition-colors duration-300 hover:scale-110", scrolled ? "text-forest-deep hover:text-gold-dark" : "text-white hover:text-gold-light")}
                            aria-label="سلة التسوق"
                            onClick={() => document.getElementById("cart-toggle")?.click()}
                        >
                            <ShoppingBag strokeWidth={1.5} className="w-5 h-5" />
                            <AnimatePresence>
                                {cartCount > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="absolute -top-2 -right-2 bg-gold text-forest-deep text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
                                    >
                                        {cartCount}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className={cn("lg:hidden transition-colors duration-300", scrolled ? "text-forest-deep" : "text-white")}
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="القائمة"
                        >
                            <Menu strokeWidth={1.5} className="w-7 h-7" />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 w-full max-w-sm h-full bg-ivory z-[70] shadow-2xl p-8 flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <span className="font-serif text-2xl text-forest-deep font-bold">BioClean</span>
                                <button
                                    onClick={() => setMobileOpen(false)}
                                    className="p-2 -mr-2 text-warm-gray hover:text-forest-deep transition-colors"
                                    aria-label="إغلاق القائمة"
                                >
                                    <X strokeWidth={1.5} className="w-8 h-8" />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-6">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + (i * 0.1) }}
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="group flex items-center justify-between text-2xl font-serif text-forest-deep hover:text-gold-dark transition-colors"
                                    >
                                        {link.label}
                                        <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-gold" />
                                    </motion.a>
                                ))}
                            </nav>

                            <div className="mt-auto border-t border-sand pt-8 space-y-4">
                                <a href="#" className="flex items-center gap-4 text-warm-gray hover:text-forest-deep transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-cream group-hover:bg-sand flex items-center justify-center transition-colors">
                                        <User strokeWidth={1.5} className="w-5 h-5" />
                                    </div>
                                    <span className="uppercase tracking-widest text-xs font-semibold">الحساب</span>
                                </a>
                                <a href="#" className="flex items-center gap-4 text-warm-gray hover:text-forest-deep transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-cream group-hover:bg-sand flex items-center justify-center transition-colors">
                                        <Search strokeWidth={1.5} className="w-5 h-5" />
                                    </div>
                                    <span className="uppercase tracking-widest text-xs font-semibold">بحث</span>
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
