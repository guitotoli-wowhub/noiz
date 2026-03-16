"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { BookOpen, TrendingUp, ChevronRight, Download, Users, Network } from 'lucide-react';

export default function EstudosPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#FF00FF] selection:text-white relative">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-zinc-900 bg-zinc-950">
                <div className="absolute inset-0 bg-[#FF00FF]/5 mix-blend-screen pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 text-zinc-400 rounded-full text-sm font-bold uppercase mb-6 border border-zinc-800">
                        <BookOpen size={16} /> Hub de Materiais
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Estudos & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-purple-500">Pesquisas</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl font-light leading-relaxed">
                        Deep Research, tendências e análises estratégicas produzidas pela inteligência da Noiz Assessoria.
                    </p>
                </div>
            </section>

            {/* Grid de Estudos */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {/* Card: O Estado da Influência */}
                        <div className="group relative bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 flex flex-col">
                            {/* Glow Effect on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF00FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            
                            {/* Card Header (Visual) */}
                            <div className="h-48 bg-black relative border-b border-zinc-800 overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                                <div className="absolute w-32 h-32 bg-[#FF00FF]/20 rounded-full blur-2xl" />
                                <TrendingUp className="w-16 h-16 text-[#FF00FF] relative z-10 opacity-80 group-hover:scale-110 transition-transform duration-500" />
                            </div>

                            {/* Card Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex gap-2 mb-4">
                                    <span className="px-2 py-1 bg-zinc-800 text-zinc-300 text-xs font-bold rounded-md">Deep Research</span>
                                    <span className="px-2 py-1 bg-zinc-800 text-zinc-300 text-xs font-bold rounded-md">2026</span>
                                </div>
                                <h2 className="text-2xl font-bold mb-3 text-white">O Estado da Influência</h2>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-1">
                                    Uma análise abrangente sobre a saturação digital, a economia da queixa e por que a "Fogueira Digital" (comunidades proprietárias) é o único seguro contra a tirania dos algoritmos.
                                </p>
                                
                                {/* Links para as Partes */}
                                <div className="space-y-3">
                                    <Link href="/materiais/estado-da-influencia" className="flex items-center justify-between p-4 bg-black border border-zinc-800 hover:border-[#FF00FF] hover:bg-[#FF00FF]/5 rounded-xl transition-all group/link">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover/link:text-[#FF00FF] transition-colors">
                                                <span className="font-bold text-sm">P1</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm text-white">A Crise da Queixa</p>
                                                <p className="text-xs text-zinc-500">A Morte do Social & Cases Infalíveis</p>
                                            </div>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-zinc-600 group-hover/link:text-[#FF00FF] transform group-hover/link:translate-x-1 transition-all" />
                                    </Link>

                                    <Link href="/materiais/estado-da-influencia-parte-2" className="flex items-center justify-between p-4 bg-black border border-zinc-800 hover:border-[#FF00FF] hover:bg-[#FF00FF]/5 rounded-xl transition-all group/link">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover/link:text-[#FF00FF] transition-colors">
                                                <span className="font-bold text-sm">P2</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm text-white">A Fogueira Digital</p>
                                                <p className="text-xs text-zinc-500">Escada de Envolvimento N1-N5</p>
                                            </div>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-zinc-600 group-hover/link:text-[#FF00FF] transform group-hover/link:translate-x-1 transition-all" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
