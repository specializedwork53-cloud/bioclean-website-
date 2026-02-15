"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-32 bg-black text-white relative overflow-hidden flex items-center justify-center">
            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight">
                        Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Vibe Code</span>?
                    </h2>
                    <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                        Join the revolution of high-end, animated web experiences.
                        Start building your dream projects today.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 overflow-hidden"
                    >
                        <span className="absolute inset-0 w-full h-full -mt-10 transition-all duration-1000 ease-out transform translate-x-0 -skew-x-12 bg-purple-600 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                        <span className="relative flex items-center gap-2">
                            Buy Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </motion.button>

                    <p className="mt-6 text-sm text-zinc-500">
                        Limited time offer. 30-day money-back guarantee.
                    </p>
                </motion.div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-purple-500/10 pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
