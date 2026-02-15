"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export function VideoShowcase() {
    const containerRef = useRef(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section ref={containerRef} className="relative h-[80vh] md:h-screen overflow-hidden bg-forest-deep">
            {/* Video Container with Parallax */}
            <motion.div
                style={{ scale, opacity }}
                className="absolute inset-0 w-full h-full"
            >
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/products/fc-brightness.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-transparent opacity-90" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-gold-light text-xs tracking-[0.2em] uppercase font-medium mb-8 bg-black/20 backdrop-blur-md">
                        The Ritual
                    </span>

                    <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-8 leading-[0.95] tracking-tight">
                        Transform Your <br />
                        <span className="italic text-white/90">Daily Routine</span>
                    </h2>

                    <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-12 font-light">
                        Experience the luxury of nature-powered skincare. Each application
                        is a moment of self-care, designed to nourish both skin and soul.
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <button
                            onClick={togglePlay}
                            className="w-16 h-16 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-forest transition-all duration-500 group"
                        >
                            {isPlaying ? (
                                <Pause className="w-6 h-6 fill-current" />
                            ) : (
                                <Play className="w-6 h-6 fill-current ml-1" />
                            )}
                        </button>
                        <span className="text-white/60 text-xs tracking-widest uppercase">
                            {isPlaying ? "Pause Video" : "Play Video"}
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
