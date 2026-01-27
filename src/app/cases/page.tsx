"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Importing images
import mequiBT21Image from '@/assets/d0df83858521cef99b468f431688439881e05aff.png';
import avonMoranguinhoImage from '@/assets/case-avon-thumb.png';

import osangCapa from '@/assets/case-osang-hero.png';

import hellmannsCapa from '@/assets/case-hellmanns-hero.png';

import atacadaoCapa from '@/assets/case-atacadao-hero.png';

import ciaCapa from '@/assets/case-cia-hero.png';

// Manually defining cases array to ensure consistency with CasesSection
const cases = [
    {
        id: 'avon-moranguinho',
        title: 'Avon & Moranguinho',
        subtitle: 'Nostalgia Marketing',
        description: 'Resgatando memórias afetivas conectando o clássico ao atual.',
        image: avonMoranguinhoImage,
        tags: ['Beauty', 'Nostalgia'],
    },
    {
        id: 'osang-cosmetic',
        title: 'Osang Cosmetic',
        subtitle: 'K-Beauty',
        description: 'Lançamento de marca de skincare coreano no Brasil.',
        image: osangCapa,
        tags: ['Skincare', 'K-Beauty'],
    },
    {
        id: 'atacadao',
        title: 'Atacadão Pet',
        subtitle: 'Varejo',
        description: 'Levando tutores do digital para a loja física.',
        image: atacadaoCapa,
        tags: ['Varejo', 'Drive-to-store'],
    },
    {
        id: 'cia-da-natureza',
        title: 'Cia da Natureza',
        subtitle: 'Licenciamento',
        description: 'Conectando fãs de Kuromi e Hello Kitty aos produtos.',
        image: ciaCapa,
        tags: ['Licenciamento', 'Fandom'],
    },
    {
        id: 'hellmanns',
        title: "Hellmann's",
        subtitle: 'Criatividade',
        description: 'Transformando maionese em ingrediente de receita doce.',
        image: hellmannsCapa,
        tags: ['Food', 'Creators'],
    }
];

export default function CasesPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#FF00FF]/30">
            <Header />

            <main className="pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-16 relative">
                        <Link href="/">
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                whileHover={{ x: -5 }}
                                className="mb-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                            >
                                <ArrowLeft size={20} />
                                Voltar
                            </motion.button>
                        </Link>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FF00FF] to-[#9D00FF] bg-clip-text text-transparent mb-6"
                        >
                            Todos os Cases
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-400 max-w-2xl"
                        >
                            Explore nossa coleção completa de histórias de sucesso, onde estratégia e criatividade se encontram.
                        </motion.p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cases.map((currentCase, index) => (
                            <motion.div
                                key={currentCase.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer bg-white/5 border border-white/10"
                            >
                                <Link href={`/cases/${currentCase.id}`} className="block h-full w-full">
                                    {/* Background Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                        style={{ backgroundImage: `url('${currentCase.image.src}')` }}
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <div className="flex gap-2 mb-3">
                                            {currentCase.tags.map((tag) => (
                                                <span key={tag} className="text-xs bg-[#FF00FF]/20 px-3 py-1 rounded-full text-[#FF00FF] border border-[#FF00FF]/20 font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#FF00FF] transition-colors">
                                            {currentCase.title}
                                        </h3>

                                        <p className="text-gray-300 mb-6 line-clamp-3 text-sm leading-relaxed">
                                            {currentCase.description}
                                        </p>

                                        <div className="flex items-center text-[#FF00FF] font-medium gap-2 group-hover:gap-3 transition-all pt-4 border-t border-white/10">
                                            Ler história completa
                                            <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
