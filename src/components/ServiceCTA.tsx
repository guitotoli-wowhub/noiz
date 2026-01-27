"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServiceCTA() {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-950/20">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-white mb-6"
                >
                    Vamos conversar sobre o seu projeto?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-300 mb-10"
                >
                    Descubra como podemos escalar seus resultados com estratégias personalizadas.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors group"
                    >
                        Falar com especialista
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
