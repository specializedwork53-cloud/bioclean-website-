"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface VibeSectionProps {
    title: string;
    description: string;
    reversed?: boolean;
}

export function VibeSection({ title, description, reversed = false }: VibeSectionProps) {
    const containerRef = useRef(null);

    return (
        <section className="min-h-screen flex items-center justify-center p-8 bg-black text-white overflow-hidden relative">
            <div className={`container mx-auto flex flex-col md:flex-row items-center gap-12 ${reversed ? 'md:flex-row-reverse' : ''}`}>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: reversed ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 space-y-6"
                >
                    <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                        {description}
                    </p>
                </motion.div>

                {/* Visual Element (Placeholder for now) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-800 flex items-center justify-center"
                >
                    <span className="text-gray-600 font-mono">Visual Placeholder</span>
                </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}
