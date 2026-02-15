"use client";

import { motion } from "framer-motion";
import { Leaf, Heart, ShieldCheck, Recycle } from "lucide-react";

const promises = [
    { icon: Leaf, label: "100% Natural", desc: "Pure botanical ingredients" },
    { icon: Heart, label: "Cruelty-Free", desc: "Never tested on animals" },
    { icon: ShieldCheck, label: "Dermatologist Tested", desc: "Clinically proven safe" },
    { icon: Recycle, label: "Eco-Friendly", desc: "Sustainable packaging" },
];

export function BrandPromise() {
    return (
        <section className="py-10 md:py-14 bg-cream border-y border-light-gray">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {promises.map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex flex-col items-center text-center group cursor-default"
                        >
                            <div className="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center mb-4 group-hover:bg-sage/20 transition-colors duration-300">
                                <item.icon className="w-6 h-6 text-sage" />
                            </div>
                            <h3 className="font-serif text-base font-semibold text-forest mb-1">
                                {item.label}
                            </h3>
                            <p className="text-xs text-warm-gray tracking-wide">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
