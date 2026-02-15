"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";

const reviews = [
    {
        name: "Sarah M.",
        product: "BRIGHTNESS Face Cream",
        rating: 5,
        text: "I've been using BioClean Brightness for 3 months and the results are incredible. My dark spots have faded significantly and my skin has a natural glow I never thought possible.",
        avatar: "S",
        verified: true,
    },
    {
        name: "Layla K.",
        product: "ACNE BHA Face Cream",
        rating: 5,
        text: "Finally found something that actually works for my acne-prone skin. The BHA formula is gentle yet effective. My skin cleared up within weeks and the texture is so much smoother.",
        avatar: "L",
        verified: true,
    },
    {
        name: "Noor A.",
        product: "BALANCE Face Cream",
        rating: 5,
        text: "The Balance cream transformed my oily T-zone completely. My skin feels balanced, fresh, and the packaging is absolutely beautiful. Worth every dinar!",
        avatar: "N",
        verified: true,
    },
    {
        name: "Reem H.",
        product: "REPAIR Face Cream",
        rating: 5,
        text: "After years of trying different brands, BioClean Repair was a game-changer. My sensitive skin loves the Panthenol formula. It feels like luxury in a jar.",
        avatar: "R",
        verified: true,
    },
    {
        name: "Zainab T.",
        product: "ANTIOXIDANT Face Cream",
        rating: 5,
        text: "The antioxidant cream keeps my skin feeling youthful and protected. I love that it's 100% natural. The Vitamin E makes such a noticeable difference in skin softness.",
        avatar: "Z",
        verified: true,
    },
];

export function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 md:py-32 bg-sand overflow-hidden" id="reviews">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sage text-xs tracking-[0.3em] uppercase font-medium">
                        Testimonials
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-forest mt-3 font-bold">
                        Loved By Thousands
                    </h2>
                    <div className="flex items-center justify-center gap-1 mt-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                        ))}
                        <span className="text-warm-gray text-sm ml-2">4.9 avg rating</span>
                    </div>
                </motion.div>

                {/* Reviews Carousel */}
                <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="min-w-[320px] md:min-w-[380px] bg-white p-8 rounded-sm border border-light-gray snap-start hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Stars */}
                            <div className="flex gap-0.5 mb-4">
                                {[...Array(review.rating)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-charcoal/80 text-sm leading-relaxed mb-6 line-clamp-4">
                                &ldquo;{review.text}&rdquo;
                            </p>

                            {/* Reviewer */}
                            <div className="flex items-center gap-3 pt-4 border-t border-light-gray">
                                <div className="w-10 h-10 rounded-full bg-sage/15 flex items-center justify-center">
                                    <span className="font-serif text-sm font-bold text-sage">
                                        {review.avatar}
                                    </span>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-sm text-forest">{review.name}</span>
                                        {review.verified && (
                                            <span className="text-[9px] tracking-wider uppercase text-sage bg-sage/10 px-2 py-0.5 rounded-full">
                                                Verified
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-warm-gray text-xs">{review.product}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
