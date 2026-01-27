import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import mequiBT21Image from 'figma:asset/d0df83858521cef99b468f431688439881e05aff.png';
import avonMoranguinhoImage from 'figma:asset/0aac566939b53c1c279e42332c4d6dc6b7dede57.png';

const cases = [
  {
    id: 'mequi-bt21',
    title: 'Méqui e BT21',
    subtitle: 'alto impacto com a cultura pop.',
    description: 'Entregamos em tempo recorde a validação de orçamentos, aprovação de perfis, conteúdos e publicações com significado e alta relevância para um dos maiores fandoms do mundo.',
    image: mequiBT21Image,
    tags: ['Marketing de Influência', 'Cultura Pop'],
    metrics: { impressions: '+40 mil', engagement: '+400 mil', reach: 'Alta conversa' }
  },
  {
    id: 'avon-moranguinho',
    title: 'Avon Moranguinho',
    subtitle: 'beleza com o poder da nostalgia.',
    description: 'A participação das influenciadoras Amanda Carmo e Iasmin Oda na campanha resgatou memórias afetivas delas e da audiência.',
    image: avonMoranguinhoImage,
    tags: ['Nostalgia Marketing', 'Beauty'],
    metrics: { impressions: 'Tradução de contexto', engagement: 'Buzz positivo', reach: 'Conexão emocional' }
  }
];

interface CasesSectionProps {
  onCaseClick?: (caseId: string) => void;
}

export default function CasesSection({ onCaseClick }: CasesSectionProps = {}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.8,
      z: -400
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      z: 0
    },
    exit: (direction: number) => ({
      rotateY: direction < 0 ? 90 : -90,
      opacity: 0,
      scale: 0.8,
      z: -400
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return cases.length - 1;
      if (nextIndex >= cases.length) return 0;
      return nextIndex;
    });
  };

  const currentCase = cases[currentIndex];

  return (
    <section id="cases" className="py-32 px-4 bg-black relative overflow-hidden min-h-screen flex items-center">
      {/* Decorative gradient background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-pink opacity-10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-violet opacity-10 blur-3xl rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
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
        
        {/* 3D Carousel Container */}
        <div className="relative" style={{ perspective: '2000px' }}>
          <div className="relative h-[600px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  rotateY: { type: "spring", stiffness: 100, damping: 20 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 }
                }}
                className="absolute w-full max-w-5xl"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  {/* Background image */}
                  <div 
                    className="w-full h-[500px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${currentCase.image}')` }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                    {/* Tags */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {currentCase.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + tagIndex * 0.1 }}
                          className="px-4 py-2 rounded-full border border-accent-pink text-accent-pink text-sm backdrop-blur-sm bg-black/30"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-3xl md:text-5xl text-white mb-3"
                    >
                      {currentCase.title}
                    </motion.h3>
                    
                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-gray-300 text-lg mb-4"
                    >
                      {currentCase.subtitle}
                    </motion.p>
                    
                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-gray-400 max-w-2xl mb-6"
                    >
                      {currentCase.description}
                    </motion.p>
                    
                    {/* Metrics */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="flex flex-wrap gap-8 mb-6"
                    >
                      <div>
                        <div className="text-2xl text-accent-pink mb-1">{currentCase.metrics.impressions}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">Interações</div>
                      </div>
                      <div>
                        <div className="text-2xl text-accent-pink mb-1">{currentCase.metrics.engagement}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">Views Orgânicos</div>
                      </div>
                      <div>
                        <div className="text-2xl text-accent-pink mb-1">{currentCase.metrics.reach}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">com o público</div>
                      </div>
                    </motion.div>
                    
                    {/* CTA */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      onClick={() => onCaseClick?.(currentCase.id)}
                      className="flex items-center gap-2 text-accent-pink hover:gap-3 transition-all duration-300 w-fit"
                    >
                      <span>Ver case completo</span>
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                  
                  {/* Hover border effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-pink/30 rounded-3xl transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center px-4 pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => paginate(-1)}
              className="glass-pink w-14 h-14 rounded-full flex items-center justify-center text-white hover:bg-accent-pink/20 transition-all duration-300 pointer-events-auto"
              aria-label="Previous case"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => paginate(1)}
              className="glass-pink w-14 h-14 rounded-full flex items-center justify-center text-white hover:bg-accent-pink/20 transition-all duration-300 pointer-events-auto"
              aria-label="Next case"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {cases.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-12 h-2 bg-accent-pink'
                  : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to case ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-8 text-gray-500"
        >
          <span className="text-accent-pink">{String(currentIndex + 1).padStart(2, '0')}</span>
          {' / '}
          <span>{String(cases.length).padStart(2, '0')}</span>
        </motion.div>
      </div>
    </section>
  );
}
