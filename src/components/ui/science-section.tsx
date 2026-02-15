"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, FlaskConical, Droplets, Sun, Heart, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ingredients = [
    {
        name: "Alpha-Arbutin",
        description: "A natural skin brightener that reduces melanin formation, fading age spots and promoting luminous, even-toned skin.",
        icon: Sun,
        color: "text-gold",
    },
    {
        name: "Niacinamide B3",
        description: "Minimizes pores, balances oil production, strengthens the skin barrier, and improves uneven skin tone for a smoother complexion.",
        icon: ShieldCheck,
        color: "text-sage",
    },
    {
        name: "Salicylic Acid",
        description: "A beta hydroxy acid that deeply cleanses pores, sheds dead skin buildup, and reduces inflammation for clear, refined skin.",
        icon: FlaskConical,
        color: "text-white",
    },
    {
        name: "Hyaluronic Acid",
        description: "Holds 1000x its weight in water, providing intense deep hydration, plumping fine lines, and restoring skin's youthful bounce.",
        icon: Droplets,
        color: "text-sage",
    },
    {
        name: "Panthenol (B5)",
        description: "Deeply penetrating moisturizer that soothes, heals, and repairs damaged skin while strengthening the protective barrier.",
        icon: Heart,
        color: "text-gold",
    },
    {
        name: "Vitamin E",
        description: "A powerful antioxidant that neutralizes free radicals, prolongs cell life, and softens skin with lasting nourishment.",
        icon: Sparkles,
        color: "text-white",
    },
];

export function ScienceSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-24 md:py-36 bg-forest-deep text-white relative overflow-hidden" id="science">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-black" />
                <div className="absolute top-[20%] -left-32 w-96 h-96 bg-sage/20 rounded-full blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-[10%] -right-32 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
                >
                    <div className="max-w-2xl">
                        <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-gold-light text-xs tracking-[0.2em] uppercase font-medium mb-6">
                            Powered By Nature
                        </span>
                        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1]">
                            The Science <span className="italic text-gold-light">Within</span>
                        </h2>
                    </div>
                    <p className="text-white/70 max-w-sm text-base md:text-lg leading-relaxed mb-2">
                        Our formulations harness clinically proven botanical ingredients,
                        each selected for its transformative power. Pure science, pure results.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
                    {ingredients.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative group bg-forest-deep p-10 h-full border hover:z-10 hover:border-gold/30 transition-all duration-300 border-transparent"
                        >
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={cn("p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300", item.color)}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <Plus className="w-4 h-4 text-white/20 group-hover:text-gold group-hover:rotate-90 transition-all duration-500" />
                                </div>

                                <h3 className="font-serif text-2xl font-medium mb-4 text-white group-hover:text-gold-light transition-colors duration-300">
                                    {item.name}
                                </h3>

                                <p className="text-white/60 leading-relaxed text-sm group-hover:text-white/90 transition-colors duration-300">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
