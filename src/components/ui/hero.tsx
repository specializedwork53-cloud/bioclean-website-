"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
                >
                    Cinematic Vision
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
                >
                    Crafting stories that move the world. Experience the art of visual
                    storytelling.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-12"
                >
                    <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
                        View Project
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            >
                <div className="flex flex-col items-center text-white/80">
                    <span className="text-sm mb-2">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ChevronDown className="w-6 h-6" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
