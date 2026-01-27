import { motion } from 'motion/react';
import { TrendingUp, Lightbulb, Users, Zap, Brain, Database, TestTube, Sparkles } from 'lucide-react';

const differentials = [
  {
    title: 'Resultados',
    subtitle: 'Data-Driven & Mensuráveis',
    description: 'Impacto real comprovado por dados, analytics avançado e casting estratégico que converte.',
    icon: TrendingUp,
    level: 3,
    techPoints: [
      'Dashboards em tempo real',
      'ROI e ROAS detalhados por perfil',
      'Análise preditiva com IA'
    ],
    badge: Database
  },
  {
    title: 'Criatividade',
    subtitle: 'Inovação Tech-Powered',
    description: 'Ideias disruptivas com perfis criativos selecionados para cada conceito e validados por testes A/B.',
    icon: Lightbulb,
    level: 2,
    techPoints: [
      'Testes A/B de conceitos e creators',
      'Trend forecasting com AI',
      'Curadoria criativa personalizada'
    ],
    badge: Sparkles
  },
  {
    title: 'Conexão',
    subtitle: 'Casting Escolhido a Dedo',
    description: 'Cada perfil é cuidadosamente selecionado e validado para conectar autenticamente com seu público-alvo.',
    icon: Users,
    level: 1,
    techPoints: [
      'IA + curadoria humana especializada',
      'Análise de audiência e fit cultural',
      'Score de autenticidade e afinidade'
    ],
    badge: Brain
  }
];

export default function DifferentialSection() {
  return (
    <section id="differential" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background tech pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #9D00FF 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-1/4 w-96 h-96 bg-accent-pink blur-3xl rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent-violet blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-white mb-4 text-center section-title"
        >
          nosso diferencial
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 text-center mb-4 max-w-2xl mx-auto"
        >
          Unimos conhecimento, pluralidade de talentos e entrega com foco em impacto.
        </motion.p>

        {/* Tech badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-pink px-4 py-2 rounded-full">
            <Zap className="w-4 h-4 text-accent-pink" />
            <span className="text-white text-sm">Powered by Technology & Research</span>
            <TestTube className="w-4 h-4 text-accent-violet" />
          </div>
        </motion.div>

        <div className="flex justify-center">
          <div className="relative w-full">
            {/* Horizontal Grid Structure */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {differentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0, y: 30 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    type: 'spring',
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  className="glass-pink p-6 md:p-8 text-center relative group hover:scale-105 transition-transform duration-300 w-full"
                  style={{
                    background: `linear-gradient(135deg, rgba(255, 0, 255, ${0.08 + item.level * 0.04}), rgba(157, 0, 255, ${0.08 + item.level * 0.04}))`
                  }}
                >
                  {/* ... item content ... (keeping internal content similar but optimized for grid) */}
                  {/* Corner tech badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-accent-pink to-accent-violet flex items-center justify-center shadow-lg">
                    <item.badge className="w-5 h-5 text-white" />
                  </div>

                  <div className="mb-4 relative h-16 flex items-center justify-center">
                    <item.icon className="w-12 h-12 text-accent-pink mx-auto" />
                  </div>

                  <h3 className="text-2xl md:text-3xl text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-accent-violet text-xs md:text-sm mb-3 uppercase tracking-wider">
                    {item.subtitle}
                  </p>

                  <p className="text-gray-300 text-sm md:text-base mb-4 min-h-[4.5em]">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-gray-700/50 space-y-2">
                    {item.techPoints.map((point, i) => (
                      <div key={i} className="flex items-center justify-center gap-2">
                        <TestTube className="w-3 h-3 text-accent-pink flex-shrink-0" />
                        <span className="text-gray-400 text-xs md:text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom tech stack indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          <div className="glass-pink px-4 py-2 rounded-full flex items-center gap-2">
            <Brain className="w-4 h-4 text-accent-pink" />
            <span className="text-white text-xs md:text-sm">Inteligência Artificial</span>
          </div>
          <div className="glass-pink px-4 py-2 rounded-full flex items-center gap-2">
            <Database className="w-4 h-4 text-accent-violet" />
            <span className="text-white text-xs md:text-sm">Big Data Analytics</span>
          </div>
          <div className="glass-pink px-4 py-2 rounded-full flex items-center gap-2">
            <TestTube className="w-4 h-4 text-accent-pink" />
            <span className="text-white text-xs md:text-sm">A/B Testing</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
