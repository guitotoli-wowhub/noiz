import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'marketing de influência',
    emoji: '⚡️',
    path: '/servicos/marketing-influencia',
    items: [
      'Consultoria Estratégica: Definição de KPIs, canais e influenciadores.',
      'Gestão de Campanhas: Criação de conteúdo, ativação e gestão.',
      'Curadoria de Influenciadores: Conexão com perfis alinhados ao mercado.',
      'Mensuração de Resultados: Análise e otimização contínua.'
    ]
  },
  {
    title: 'consultoria de growth',
    emoji: '📈',
    path: '/servicos/consultoria-growth',
    items: [
      'Marketing de Performance: Gestão de tráfego pago para amplificar o alcance das campanhas.',
      'SEO (Search Engine Optimization): Estratégias para aumentar a visibilidade orgânica da marca.',
      'CRO (Conversion Rate Optimization): Análise e melhoria da jornada do usuário para aumentar conversões.'
    ]
  },
  {
    title: 'tecnologia e automação',
    emoji: '🤖',
    path: '/servicos/tecnologia-automacao',
    items: [
      'Desenvolvimento de Chatbots: Automação de atendimento e qualificação de leads.',
      'Automação de Marketing: Implementação de fluxos de nutrição de leads para campanhas integradas.',
      'Data Analytics: Análise aprofundada de dados para otimização de campanhas.'
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-white mb-16 text-center section-title"
        >
          nossos serviços
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass p-8 h-full flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{service.emoji}</span>
                <h3 className="text-xl text-white">{service.title}</h3>
              </div>
              
              <ul className="space-y-4 mb-6 flex-1">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>

              <Link to={service.path}>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-accent-pink hover:text-accent-purple transition-colors text-sm font-medium"
                >
                  Saiba mais
                  <ArrowRight size={16} />
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}