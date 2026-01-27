import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import mequiBT21Image from '@/assets/d0df83858521cef99b468f431688439881e05aff.png';
import avonMoranguinhoImage from '@/assets/0aac566939b53c1c279e42332c4d6dc6b7dede57.png';

import osangCapa from '@/assets/cases/osang-cosmetic/capa.png';

import hellmannsCapa from '@/assets/cases/hellmanns/Capa.png';

import atacadaoCapa from '@/assets/cases/atacadao/Capa.png';

import ciaCapa from '@/assets/cases/cia-da-natureza/Capa.png';

// Placeholder for missing case images - reusing existing ones for layout demonstration
const hellmannsImage = mequiBT21Image;
const atacadaoImage = avonMoranguinhoImage;

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

export default function CasesSection() {
  return (
    <section id="cases" className="py-20 px-4 bg-black relative">
      {/* Decorative gradient background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-pink opacity-10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-violet opacity-10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4 section-title">
            cases de sucesso
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Projetos que transformaram marcas através da inteligência cultural e marketing de influência.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.slice(0, 3).map((currentCase, index) => (
            <motion.div
              key={currentCase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <Link href={`/cases/${currentCase.id}`} className="block h-full w-full">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${currentCase.image.src}')` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 group-hover:via-black/70" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex gap-2 mb-3">
                    {currentCase.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-accent-pink transition-colors">
                    {currentCase.title}
                  </h3>

                  <p className="text-gray-300 mb-4 line-clamp-2 text-sm">
                    {currentCase.description}
                  </p>

                  <div className="flex items-center text-accent-pink font-medium gap-2 group-hover:gap-3 transition-all">
                    Ver case
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link href="/cases">
            <button className="px-8 py-4 bg-transparent border border-[#FF00FF]/30 text-white rounded-full text-lg font-medium hover:bg-[#FF00FF]/10 hover:border-[#FF00FF] transition-all duration-300 flex items-center gap-2 mx-auto group">
              Ver todos os cases
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
