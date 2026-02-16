"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";

const reviews = [
    {
        name: "سارة م.",
        product: "كريم الوجه للإشراق",
        rating: 5,
        text: "أستخدم كريم الإشراق من BioClean منذ 3 أشهر والنتائج مذهلة. تلاشت البقع الداكنة بشكل ملحوظ وأصبحت بشرتي تتمتع بنضارة طبيعية لم أكن أتخيلها.",
        avatar: "S",
        verified: true,
    },
    {
        name: "ليلى ك.",
        product: "كريم حب الشباب BHA",
        rating: 5,
        text: "أخيراً وجدت شيئاً يعمل فعلاً لبشرتي المعرضة لحب الشباب. تركيبة BHA لطيفة ولكنها فعالة. صفيت بشرتي خلال أسابيع وأصبح ملمسها أكثر نعومة.",
        avatar: "L",
        verified: true,
    },
    {
        name: "نور أ.",
        product: "كريم التوازن",
        rating: 5,
        text: "كريم التوازن غيّر منطقة T الدهنية تماماً. بشرتي تشعر بالتوازن والانتعاش، والتغليف جميل جداً. يستحق كل دينار!",
        avatar: "N",
        verified: true,
    },
    {
        name: "ريم ح.",
        product: "كريم الإصلاح",
        rating: 5,
        text: "بعد سنوات من تجربة علامات تجارية مختلفة، كريم الإصلاح من BioClean كان نقطة تحول. بشرتي الحساسة تحب تركيبة البانثينول. أشعر وكأنها رفاهية في عبوة.",
        avatar: "R",
        verified: true,
    },
    {
        name: "زينب ت.",
        product: "كريم مضاد للأكسدة",
        rating: 5,
        text: "الكريم المضاد للأكسدة يحافظ على بشرتي شابة ومحمية. أحب أنه طبيعي 100%. فيتامين E يحدث فرقاً ملحوظاً في نعومة البشرة.",
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
                        آراء العملاء
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-forest mt-3 font-bold">
                        أحبته الآلاف
                    </h2>
                    <div className="flex items-center justify-center gap-1 mt-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                        ))}
                        <span className="text-warm-gray text-sm mr-2">متوسط تقييم 4.9</span>
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
                                                موثق
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
