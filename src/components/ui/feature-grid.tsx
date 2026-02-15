"use client";

import { motion } from "framer-motion";
import { MoveRight, Sparkles, Zap, Layers } from "lucide-react";

const features = [
    {
        icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
        title: "AI-Powered Design",
        description: "Generative aesthetics that adapt to your brand's unique voice.",
    },
    {
        icon: <Zap className="w-8 h-8 text-blue-400" />,
        title: "Lightning Performance",
        description: "Optimized for speed with Next.js and Turbopack under the hood.",
    },
    {
        icon: <Layers className="w-8 h-8 text-purple-400" />,
        title: "Seamless Integration",
        description: "Drop-in components that work with your existing stack effortlessly.",
    },
];

export function FeatureGrid() {
    return (
        <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-tr from-white to-zinc-500">
                        Beyond the Ordinary
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Experience a new standard of web development where creativity meets code.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10 group cursor-pointer backdrop-blur-sm"
                        >
                            <div className="mb-6 p-3 bg-white/5 rounded-full w-fit group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-zinc-400 leading-relaxed mb-6">
                                {feature.description}
                            </p>
                            <div className="flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                                Learn more <MoveRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none sticky-gradient-container">
                <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>
        </section>
    );
}
