"use client";

import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const footerLinks = {
    shop: [
        { label: "Face Creams", href: "#products" },
        { label: "Cleansers", href: "#products" },
        { label: "Body Care", href: "#products" },
        { label: "Intimate Care", href: "#products" },
        { label: "New Arrivals", href: "#featured" },
        { label: "Best Sellers", href: "#featured" },
    ],
    company: [
        { label: "Our Story", href: "#story" },
        { label: "Ingredients", href: "#science" },
        { label: "Sustainability", href: "#" },
        { label: "Press", href: "#" },
        { label: "Careers", href: "#" },
    ],
    support: [
        { label: "Contact Us", href: "#" },
        { label: "Shipping & Returns", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Track Order", href: "#" },
        { label: "Size Guide", href: "#" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-forest-deep text-white/80 border-t border-white/5">
            {/* Top Section - Newsletter */}
            <div className="border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                    <div className="max-w-md">
                        <h3 className="font-serif text-3xl font-medium text-white mb-4">
                            Join the BioClean Community
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </p>
                    </div>

                    <form className="flex w-full max-w-sm border-b border-white/20 pb-2 focus-within:border-white transition-colors duration-300">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-transparent border-none text-white focus:ring-0 placeholder-white/40 pb-2"
                        />
                        <button type="submit" className="text-white hover:text-gold-light transition-colors">
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-20 pb-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-2 space-y-8">
                        <span className="font-serif text-2xl font-bold text-white tracking-wide">
                            BioClean
                        </span>
                        <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                            Pure science skincare. Luxury botanical formulations crafted with
                            100% natural ingredients for radiant, healthy skin.
                        </p>

                        <div className="space-y-4 pt-4">
                            <a href="mailto:info@bioclean.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                                <Mail className="w-4 h-4" /> info@bioclean.com
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="space-y-6">
                        <h3 className="font-medium text-white text-xs tracking-[0.2em] uppercase">Shop</h3>
                        <ul className="space-y-4">
                            {footerLinks.shop.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-white/60 hover:text-gold-light transition-colors duration-300 block">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="font-medium text-white text-xs tracking-[0.2em] uppercase">Company</h3>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-white/60 hover:text-gold-light transition-colors duration-300 block">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="font-medium text-white text-xs tracking-[0.2em] uppercase">Support</h3>
                        <ul className="space-y-4">
                            {footerLinks.support.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-white/60 hover:text-gold-light transition-colors duration-300 block">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
                    <p className="text-xs text-white/30">
                        © 2026 BioClean. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        {[Instagram, Facebook, Twitter].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="text-white/40 hover:text-white transition-colors duration-300"
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
