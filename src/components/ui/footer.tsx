"use client";

import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const footerLinks = {
    shop: [
        { label: "كريمات الوجه", href: "#products" },
        { label: "المنظفات", href: "#products" },
        { label: "العناية بالجسم", href: "#products" },
        { label: "العناية الخاصة", href: "#products" },
        { label: "وصل حديثاً", href: "#featured" },
        { label: "الأكثر مبيعاً", href: "#featured" },
    ],
    company: [
        { label: "قصتنا", href: "#story" },
        { label: "المكونات", href: "#science" },
        { label: "الاستدامة", href: "#" },
        { label: "الصحافة", href: "#" },
        { label: "الوظائف", href: "#" },
    ],
    support: [
        { label: "اتصل بنا", href: "#" },
        { label: "الشحن والإرجاع", href: "#" },
        { label: "الأسئلة الشائعة", href: "#" },
        { label: "تتبع الطلب", href: "#" },
        { label: "دليل المقاسات", href: "#" },
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
                            انضمي إلى مجتمع BioClean
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            اشتركي لتصلكِ آخر التحديثات، والعروض الحصرية، والمزيد.
                        </p>
                    </div>

                    <form className="flex w-full max-w-sm border-b border-white/20 pb-2 focus-within:border-white transition-colors duration-300">
                        <input
                            type="email"
                            placeholder="أدخلي بريدك الإلكتروني"
                            className="w-full bg-transparent border-none text-white focus:ring-0 placeholder-white/40 pb-2 text-right"
                        />
                        <button type="submit" className="text-white hover:text-gold-light transition-colors">
                            <ArrowRight className="w-5 h-5 transform rotate-180" />
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
                            علم العناية بالبشرة النقي. تركيبات نباتية فاخرة مصنوعة من مكونات طبيعية 100% لبشرة صحية ومشرقة.
                        </p>

                        <div className="space-y-4 pt-4">
                            <a href="mailto:info@bioclean.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                                <Mail className="w-4 h-4 ml-2" /> info@bioclean.com
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="space-y-6">
                        <h3 className="font-medium text-white text-xs tracking-[0.2em] uppercase">المتجر</h3>
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
                        <h3 className="font-medium text-white text-xs tracking-[0.2em] uppercase">الشركة</h3>
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
                        <h3 className="font-medium text-white text-xs tracking-[0.2em] uppercase">الدعم</h3>
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
                        © 2026 BioClean. جميع الحقوق محفوظة.
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
