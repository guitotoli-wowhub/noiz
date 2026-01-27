import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'marketing de influência',
    emoji: '⚡️',
    items: [
      'Consultoria Estratégica: Definição de KPIs, canais e influenciadores.',
      'Gestão de Campanhas: Criação de conteúdo, ativação e gestão.',
      'Curadoria de Influenciadores: Conexão com perfis alinhados ao mercado.',
      'Mensuração de Resultados: Análise e otimização contínua.'
    ],
    slug: 'marketing-de-influencia'
  },
  {
    title: 'consultoria de growth',
    emoji: '📈',
    items: [
      'Marketing de Performance: Gestão de tráfego pago para amplificar o alcance das campanhas.',
      'SEO (Search Engine Optimization): Estratégias para aumentar a visibilidade orgânica da marca.',
      'CRO (Conversion Rate Optimization): Análise e melhoria da jornada do usuário para aumentar conversões.'
    ],
    slug: 'consultoria-de-growth'
  },
  {
    title: 'tecnologia e automação',
    emoji: '🤖',
    items: [
      'Desenvolvimento de Chatbots: Automação de atendimento e qualificação de leads.',
      'Automação de Marketing: Implementação de fluxos de nutrição de leads para campanhas integradas.',
      'Data Analytics: Análise aprofundada de dados para otimização de campanhas.'
    ],
    slug: 'tecnologia-e-automacao'
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
              className="h-full"
            >
              <Link href={`/servicos/${service.slug}`} className="block h-full glass p-8 group hover:border-accent-pink/50 transition-colors duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{service.emoji}</span>
                    <h3 className="text-xl text-white group-hover:text-accent-pink transition-colors">{service.title}</h3>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 text-sm leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center text-accent-pink text-sm font-medium mt-auto group-hover:translate-x-2 transition-transform">
                  Saiba mais <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}