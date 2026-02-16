"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
            setEmail("");
        }
    };

    return (
        <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-sage text-xs tracking-[0.3em] uppercase font-medium">
                        ابقي على تواصل
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-forest mt-3 mb-4 font-bold">
                        انضمي لعائلة BioClean
                    </h2>
                    <p className="text-warm-gray text-base md:text-lg max-w-lg mx-auto mb-10">
                        اشتركي للحصول على عروض حصرية، نصائح للعناية بالبشرة، والوصول المبكر للمجموعات الجديدة.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="أدخلي بريدك الإلكتروني"
                            className="flex-1 px-6 py-4 bg-white border border-light-gray text-charcoal placeholder-warm-gray/50 text-sm tracking-wide focus:outline-none focus:border-sage transition-colors text-right"
                            required
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 bg-forest text-ivory text-sm tracking-widest uppercase font-medium hover:bg-sage transition-colors duration-500 flex items-center justify-center gap-2"
                        >
                            {submitted ? (
                                <span>شكراً لكِ ✓</span>
                            ) : (
                                <>
                                    اشتراك <Send className="w-4 h-4 rotate-180" />
                                </>
                            )}
                        </button>
                    </form>

                    <p className="text-warm-gray/60 text-xs mt-6 tracking-wide">
                        بالاشتراك، أنت توافقين على سياسة الخصوصية الخاصة بنا. يمكنك إلغاء الاشتراك في أي وقت.
                    </p>
                </motion.div>
            </div>

            {/* Decorative background */}
            <div className="absolute top-0 left-[10%] w-40 h-40 bg-sage/5 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute bottom-0 right-[10%] w-60 h-60 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
        </section>
    );
}
