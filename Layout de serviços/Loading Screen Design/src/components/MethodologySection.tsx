import { motion } from 'motion/react';
import { Search, Target, Rocket, BarChart3, Database, TestTube, Cpu } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Imersão',
    subtitle: 'Pesquisa & Inteligência Cultural',
    description: 'Análise profunda da marca, público e objetivos usando tecnologia.',
    research: [
      'Social listening e análise de trends',
      'Pesquisas quali e quantitativas',
      'Benchmark de concorrentes',
      'Testes de hipóteses iniciais'
    ],
    icon: Search,
    color: '#FF00FF'
  },
  {
    number: '2',
    title: 'Estratégia',
    subtitle: 'Testes & Planejamento Data-Driven',
    description: 'Definição de KPIs, canais e influenciadores com base em dados.',
    research: [
      'IA para matching de influenciadores',
      'Testes A/B de conceitos criativos',
      'Validação de personas com dados',
      'Modelagem preditiva de resultados'
    ],
    icon: Target,
    color: '#9D00FF'
  },
  {
    number: '3',
    title: 'Implementação',
    subtitle: 'Automação & Otimização Contínua',
    description: 'Criação, ativação e gestão com tecnologia e testes constantes.',
    research: [
      'Testes A/B de criativos em tempo real',
      'Automação de workflows e aprovações',
      'Monitoramento de performance 24/7',
      'Otimização baseada em algoritmos'
    ],
    icon: Rocket,
    color: '#FF00FF'
  },
  {
    number: '4',
    title: 'Mensuração',
    subtitle: 'Analytics Avançado & Machine Learning',
    description: 'Análise de resultados e otimização contínua com IA.',
    research: [
      'Dashboards em tempo real',
      'Testes multivariados de performance',
      'Análise estatística e correlações',
      'Recomendações automáticas via ML'
    ],
    icon: BarChart3,
    color: '#9D00FF'
  }
];

export default function MethodologySection() {
  return (
    <section id="methodology" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background tech grid effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#FF00FF 1px, transparent 1px), linear-gradient(90deg, #FF00FF 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4 section-title">
            nossa metodologia
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto flex items-center justify-center gap-3">
            <Cpu className="w-5 h-5 text-accent-pink" />
            <span>Tecnologia, pesquisa e testes em cada etapa do processo</span>
            <TestTube className="w-5 h-5 text-accent-violet" />
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-pink-500 to-violet-500 transform translate-x-4" />
              )}
              
              <div className="glass p-6 text-center relative z-10 h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent-pink/20">
                {/* Icon with pulsing effect */}
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full border-2 flex items-center justify-center relative"
                  style={{ borderColor: step.color }}
                  animate={{ 
                    borderColor: [step.color, '#FFFFFF', step.color],
                    boxShadow: [`0 0 20px ${step.color}40`, '0 0 5px transparent', `0 0 20px ${step.color}40`]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <step.icon className="w-8 h-8 text-white" />
                  
                  {/* Tech badge */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: step.color }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.2, type: 'spring' }}
                  >
                    <Database className="w-3 h-3 text-white" />
                  </motion.div>
                </motion.div>
                
                {/* Step number and title */}
                <h3 className="text-xl text-white mb-2">
                  {step.number}. {step.title}
                </h3>
                
                {/* Subtitle with emphasis on research/tech */}
                <p className="text-accent-pink text-xs mb-3 uppercase tracking-wider">
                  {step.subtitle}
                </p>
                
                {/* Main description */}
                <p className="text-gray-300 text-sm mb-4">
                  {step.description}
                </p>
                
                {/* Research & tech bullets */}
                <div className="mt-auto pt-4 border-t border-gray-800 space-y-2">
                  {step.research.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.2 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 text-left"
                    >
                      <TestTube 
                        className="w-3 h-3 mt-0.5 flex-shrink-0" 
                        style={{ color: step.color }}
                      />
                      <span className="text-gray-400 text-xs leading-tight">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                  style={{
                    background: `radial-gradient(circle at center, ${step.color}20, transparent 70%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 glass-pink px-6 py-3 rounded-full">
            <Cpu className="w-5 h-5 text-accent-pink" />
            <span className="text-white text-sm">
              Powered by AI, Data Science & Automation
            </span>
            <Database className="w-5 h-5 text-accent-violet" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
