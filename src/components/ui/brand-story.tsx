"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function BrandStory() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Parallax effects
    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

    return (
        <section ref={ref} className="py-32 md:py-48 bg-cream overflow-hidden border-t border-sand/30" id="story">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">

                    {/* Visual Side - Editorial Composition */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Decorative typographic element */}
                        <div className="absolute -top-32 -left-20 text-[200px] leading-none font-serif text-sage/5 select-none pointer-events-none z-0">
                            Bio
                        </div>

                        <div className="relative z-10 w-[85%] aspect-[4/5] overflow-hidden">
                            <motion.div style={{ y: y1 }} className="absolute inset-[-10%]">
                                <Image
                                    src="/images/Balance cream.jpeg"
                                    alt="BioClean botanical skincare ritual"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>

                        {/* Secondary Image - Overlapping */}
                        <motion.div
                            style={{ y: y2 }}
                            className="absolute -bottom-12 -right-4 md:-right-12 w-[55%] aspect-square overflow-hidden border-8 border-cream z-20 shadow-2xl"
                        >
                            <Image
                                src="/images/Acne cream.jpeg"
                                alt="Natural ingredients detail"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Narrative Side */}
                    <div className="w-full lg:w-1/2 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block py-1 px-3 border border-forest/20 rounded-full text-forest text-xs tracking-[0.2em] uppercase font-medium mb-6">
                                الأصل
                            </span>
                            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-forest font-medium leading-[1.1] mb-8">
                                صُنع بالعلم، <br />
                                <span className="italic text-gold-dark relative">
                                    مستوحى من الطبيعة
                                </span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6 text-lg text-warm-gray leading-relaxed max-w-xl"
                        >
                            <p>
                                <span className="text-forest font-serif text-2xl ml-1">B</span>
                                وُلدت BioClean من إيمان بسيط وعميق: أن أقوى حلول العناية بالبشرة
                                توجد عندما يلتقي البحث الجلدي المتقدم مع القوة الجامحة لعالم الطبيعة.
                            </p>
                            <p>
                                نحن نرفض التنازل بين الفعالية السريرية والمركبات النقية.
                                كل زجاجة تمثل توازناً متناغماً—صُنعت بدقة في دفعات صغيرة
                                لضمان أعلى درجات الفعالية، والنضارة، والروح.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="pt-4"
                        >
                            <div className="grid grid-cols-3 gap-8 mb-10 border-y border-forest/10 py-8">
                                <div>
                                    <span className="block font-serif text-4xl text-forest mb-1">98%</span>
                                    <span className="text-xs uppercase tracking-wider text-warm-gray">أصل طبيعي</span>
                                </div>
                                <div>
                                    <span className="block font-serif text-4xl text-forest mb-1">100%</span>
                                    <span className="text-xs uppercase tracking-wider text-warm-gray">نباتي 100%</span>
                                </div>
                                <div>
                                    <span className="block font-serif text-4xl text-forest mb-1">20+</span>
                                    <span className="text-xs uppercase tracking-wider text-warm-gray">نباتات نشطة</span>
                                </div>
                            </div>

                            <a
                                href="#science"
                                className="group inline-flex items-center gap-3 text-forest text-sm tracking-[0.2em] uppercase font-semibold border-b border-forest/30 pb-1 hover:border-forest transition-all"
                            >
                                اكتشفي عمليتنا
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1 rotate-180" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
