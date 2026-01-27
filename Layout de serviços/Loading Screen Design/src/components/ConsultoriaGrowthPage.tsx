import { motion } from 'motion/react';
import { ArrowLeft, TrendingUp, Rocket, Target, Zap, Users, DollarSign, BarChart3, Brain, LineChart, PieChart, Activity, CheckCircle2, ArrowUpRight, Lightbulb, Database, Settings, Layers, GitBranch, RefreshCw, Gauge } from 'lucide-react';
import { Link } from 'react-router';
import Header from './Header';

export default function ConsultoriaGrowthPage() {
  const pilares = [
    {
      icon: Target,
      titulo: "aquisição",
      descricao: "Estratégias para atrair usuários qualificados",
      estrategias: [
        "Performance Marketing otimizado",
        "Growth Hacking testado e validado",
        "SEO e ASO estratégico",
        "Funis de conversão multicanal",
        "Campanhas de mídia paga integradas",
        "Estratégias de CRM para prospecção"
      ],
      metricas: ["CAC", "CPA", "CPL", "ROAS", "LTV:CAC Ratio"]
    },
    {
      icon: Users,
      titulo: "Ativação",
      descricao: "Transformar novos usuários em ativos engajados",
      estrategias: [
        "Onboarding experience design",
        "First-time user experience (FTUE)",
        "Quick wins e aha moments",
        "Email e push notification flows",
        "In-app messaging estratégico",
        "Automações de CRM para ativação"
      ],
      metricas: ["Activation Rate", "Time to Value", "Feature Adoption", "First Session"]
    },
    {
      icon: RefreshCw,
      titulo: "Retenção",
      descricao: "Manter usuários engajados e ativos",
      estrategias: [
        "Análise de cohort e churn",
        "Re-engagement campaigns",
        "Programas de fidelidade",
        "Personalização e segmentação via CRM",
        "Product-led growth initiatives",
        "Retargeting e remarketing estratégico"
      ],
      metricas: ["Retention Rate", "Churn Rate", "DAU/MAU", "Stickiness", "Cohort Analysis"]
    },
    {
      icon: DollarSign,
      titulo: "Monetização",
      descricao: "Maximizar receita por usuário",
      estrategias: [
        "Pricing strategy e testes",
        "Upsell e cross-sell flows via CRM",
        "Subscription optimization",
        "Payment conversion optimization",
        "Value-based pricing models",
        "Campanhas de conversão em mídia paga"
      ],
      metricas: ["ARPU", "LTV", "MRR", "ARR", "Revenue per User"]
    },
    {
      icon: TrendingUp,
      titulo: "Referral",
      descricao: "Crescimento orgânico através de indicações",
      estrategias: [
        "Viral mechanics e incentivos",
        "Referral program design",
        "Social sharing optimization",
        "Network effects activation",
        "Community building",
        "Amplificação via mídia paga"
      ],
      metricas: ["K-Factor", "Viral Coefficient", "Referral Rate", "NPS", "Share Rate"]
    }
  ];

  const metodologia = [
    {
      fase: "01",
      titulo: "Diagnóstico & Auditoria",
      descricao: "Raio-X completo do negócio e oportunidades",
      entregas: [
        "Auditoria de funnel completo",
        "Análise de métricas norte-estrela",
        "Benchmarking competitivo",
        "Identificação de gargalos",
        "Mapeamento de quick wins",
        "Roadmap inicial de testes"
      ],
      duracao: "2-3 semanas"
    },
    {
      fase: "02",
      titulo: "Estratégia & Planejamento",
      descricao: "Definição de estratégia data-driven",
      entregas: [
        "Growth strategy framework",
        "Definição de OKRs e KPIs",
        "Priorização de iniciativas (ICE Score)",
        "Estrutura de experimentação",
        "Budget allocation strategy",
        "Timeline e milestones"
      ],
      duracao: "1-2 semanas"
    },
    {
      fase: "03",
      titulo: "Implementação & Testes",
      descricao: "Execução de experimentos e otimizações",
      entregas: [
        "Setup de tracking e analytics",
        "Implementação de experimentos",
        "A/B e multivariate tests",
        "Landing pages otimizadas",
        "Automation flows",
        "Dashboards em tempo real"
      ],
      duracao: "Contínuo"
    },
    {
      fase: "04",
      titulo: "Análise & Otimização",
      descricao: "Mensuração de resultados e iteração",
      entregas: [
        "Análise de resultados de testes",
        "Statistical significance validation",
        "Performance reports",
        "Insights e aprendizados",
        "Recomendações de próximos passos",
        "Scale de winners"
      ],
      duracao: "Contínuo"
    }
  ];

  const ferramentas = [
    {
      categoria: "Analytics & BI",
      tools: [
        "Google Analytics 4",
        "Mixpanel",
        "Amplitude",
        "Segment",
        "Looker",
        "Tableau",
        "Power BI",
        "Hotjar",
        "FullStory"
      ]
    },
    {
      categoria: "Experimentação",
      tools: [
        "Optimizely",
        "VWO",
        "Google Optimize",
        "AB Tasty",
        "Kameleoon",
        "Split.io"
      ]
    },
    {
      categoria: "Marketing Automation",
      tools: [
        "HubSpot",
        "Braze",
        "Iterable",
        "Customer.io",
        "Klaviyo",
        "ActiveCampaign",
        "Mailchimp"
      ]
    },
    {
      categoria: "Aquisição",
      tools: [
        "Google Ads",
        "Meta Ads",
        "LinkedIn Ads",
        "TikTok Ads",
        "Semrush",
        "Ahrefs",
        "Supermetrics"
      ]
    },
    {
      categoria: "Product Analytics",
      tools: [
        "Pendo",
        "Heap",
        "PostHog",
        "LogRocket",
        "Appsflyer",
        "Adjust"
      ]
    },
    {
      categoria: "CRO & UX",
      tools: [
        "Maze",
        "UserTesting",
        "Crazy Egg",
        "Lucky Orange",
        "Mouseflow"
      ]
    }
  ];

  const frameworks = [
    {
      nome: "AARRR (Pirate Metrics)",
      descricao: "Framework clássico de Growth para análise de funil",
      aplicacao: "Estruturação de métricas e identificação de gargalos"
    },
    {
      nome: "ICE Score",
      descricao: "Impact, Confidence, Ease - priorização de experimentos",
      aplicacao: "Decidir quais testes rodar primeiro para máximo ROI"
    },
    {
      nome: "North Star Metric",
      descricao: "Métrica única que melhor representa entrega de valor",
      aplicacao: "Alinhamento de time e foco em crescimento sustentável"
    },
    {
      nome: "Growth Loops",
      descricao: "Sistemas de crescimento auto-sustentáveis",
      aplicacao: "Criar mecanismos de crescimento composto"
    },
    {
      nome: "Jobs to Be Done",
      descricao: "Framework para entender motivações do usuário",
      aplicacao: "Desenvolver mensagens e features que ressoam"
    },
    {
      nome: "Hook Model",
      descricao: "Trigger → Action → Reward → Investment",
      aplicacao: "Criar produtos que formam hábitos"
    }
  ];

  const casosUso = [
    {
      tipo: "Startup Early-Stage",
      desafio: "Encontrar Product-Market Fit e primeiros clientes",
      solucao: [
        "Validação de hipóteses de growth",
        "Testes de canais de aquisição",
        "Otimização de onboarding",
        "Setup de analytics foundation"
      ]
    },
    {
      tipo: "Scale-up",
      desafio: "Escalar crescimento mantendo unit economics",
      solucao: [
        "Otimização de funil completo",
        "Implementação de growth loops",
        "Referral program",
        "Marketing automation avançado"
      ]
    },
    {
      tipo: "E-commerce",
      desafio: "Aumentar conversão e ticket médio",
      solucao: [
        "CRO em checkout flow",
        "Personalização de recomendações via CRM",
        "Cart abandonment recovery",
        "Loyalty program"
      ]
    },
    {
      tipo: "SaaS B2B",
      desafio: "Reduzir churn e aumentar expansão",
      solucao: [
        "Customer health scoring",
        "Onboarding personalizado por segmento",
        "Upsell triggers automáticos via CRM",
        "CS playbooks data-driven"
      ]
    }
  ];

  const diferenciais = [
    {
      icon: Brain,
      titulo: "Data-Driven",
      descricao: "Todas as decisões baseadas em dados, não em achismos ou best practices genéricas"
    },
    {
      icon: Zap,
      titulo: "Experimentação Rápida",
      descricao: "Cultura de testes contínuos, falhar rápido e iterar baseado em aprendizados"
    },
    {
      icon: Layers,
      titulo: "Full-Funnel",
      descricao: "Visão holística do funil, otimizando cada etapa da jornada do usuário"
    },
    {
      icon: Gauge,
      titulo: "Performance-First",
      descricao: "Foco obsessivo em métricas que realmente movem o negócio, não vanity metrics"
    },
    {
      icon: GitBranch,
      titulo: "Estratégia Escalável",
      descricao: "Construção de sistemas de crescimento sustentável, não apenas táticas one-off"
    },
    {
      icon: Activity,
      titulo: "Hands-On",
      descricao: "Não só recomendamos, nós executamos. Setup, implementação e otimização"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header activeSection="" onNavigate={() => {}} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-[#9D00FF]/10 via-transparent to-[#FF00FF]/10" />
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#9D00FF]/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FF00FF]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <Link to="/">
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#9D00FF] to-[#FF00FF] mb-6"
            >
              <Rocket size={40} />
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-[#9D00FF] via-white to-[#FF00FF] bg-clip-text text-transparent">
              Consultoria de Growth
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
              Crescimento acelerado e sustentável através de experimentação,
              dados e estratégias comprovadas de growth hacking.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#9D00FF]" />
                Metodologia Data-Driven
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#FF00FF]" />
                Experimentação Contínua
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#9D00FF]" />
                Crescimento Escalável
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5 Pilares do Growth */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">5 pilares do growth</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Framework completo para crescimento sustentável em todas as etapas do funil
            </p>
          </motion.div>

          <div className="space-y-6">
            {pilares.map((pilar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-shrink-0 lg:w-1/3">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#9D00FF] to-[#FF00FF] flex items-center justify-center">
                          <pilar.icon size={32} />
                        </div>
                        <div>
                          <h3 className="text-3xl mb-1">{pilar.titulo}</h3>
                          <p className="text-white/60">{pilar.descricao}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-bold text-[#9D00FF] mb-3 uppercase tracking-wide">
                          Estratégias
                        </h4>
                        <ul className="space-y-2">
                          {pilar.estrategias.map((estrategia, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-white/70">
                              <ArrowUpRight size={16} className="text-[#FF00FF] mt-1 flex-shrink-0" />
                              <span>{estrategia}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-[#FF00FF] mb-3 uppercase tracking-wide">
                          Métricas-Chave
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {pilar.metricas.map((metrica, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-white/10 rounded-full text-sm font-mono"
                            >
                              {metrica}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="relative py-24 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Nossa metodologia</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Processo estruturado de diagnóstico, estratégia, execução e otimização
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {metodologia.map((fase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#9D00FF]/20 to-[#FF00FF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#9D00FF] to-[#FF00FF] flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      {fase.fase}
                    </div>
                    <div>
                      <h3 className="text-2xl mb-1">{fase.titulo}</h3>
                      <p className="text-sm text-white/60">{fase.descricao}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {fase.entregas.map((entrega, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-white/70">
                        <CheckCircle2 size={16} className="text-[#9D00FF] mt-1 flex-shrink-0" />
                        <span>{entrega}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-white/10">
                    <span className="text-xs text-white/50">
                      Duração: <span className="text-[#FF00FF]">{fase.duracao}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ferramentas & Stack */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Ferramentas & stack</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Dominamos as principais ferramentas de growth, analytics e otimização do mercado
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ferramentas.map((grupo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#9D00FF]/20 to-[#FF00FF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl mb-4 pb-3 border-b border-white/10">{grupo.categoria}</h3>
                  <div className="flex flex-wrap gap-2">
                    {grupo.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-sm transition-colors cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="relative py-24 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Frameworks de growth</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Metodologias consolidadas que utilizamos para estruturar estratégias
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#9D00FF]/20 to-[#FF00FF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9D00FF] to-[#FF00FF] flex items-center justify-center mb-4">
                    <Lightbulb size={24} />
                  </div>
                  <h3 className="text-xl mb-2">{framework.nome}</h3>
                  <p className="text-sm text-white/60 mb-3">{framework.descricao}</p>
                  <p className="text-xs text-white/50">
                    <span className="text-[#9D00FF]">Aplicação:</span> {framework.aplicacao}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Casos de uso</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Como aplicamos growth em diferentes contextos e estágios de negócio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {casosUso.map((caso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#9D00FF]/20 to-[#FF00FF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl mb-2">{caso.tipo}</h3>
                  <p className="text-sm text-white/60 mb-4">
                    <span className="text-[#FF00FF]">Desafio:</span> {caso.desafio}
                  </p>

                  <h4 className="text-sm font-bold text-[#9D00FF] mb-2 uppercase tracking-wide">
                    Nossa Solução
                  </h4>
                  <ul className="space-y-2">
                    {caso.solucao.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-white/70">
                        <Zap size={14} className="text-[#9D00FF] mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="relative py-24 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Por que escolher a Noiz?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((diferencial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#9D00FF]/20 to-[#FF00FF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#9D00FF] to-[#FF00FF] flex items-center justify-center">
                    <diferencial.icon size={32} />
                  </div>
                  <h3 className="text-2xl mb-3">{diferencial.titulo}</h3>
                  <p className="text-white/70">{diferencial.descricao}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#9D00FF]/20 to-[#FF00FF]/20 rounded-3xl blur-3xl" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl mb-6">
                Pronto para acelerar seu crescimento?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Vamos fazer uma auditoria gratuita do seu funil e identificar oportunidades de growth
              </p>
              <Link to="/#contato">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#9D00FF] to-[#FF00FF] rounded-full text-lg font-medium hover:shadow-[0_0_30px_rgba(157,0,255,0.5)] transition-all duration-300"
                >
                  Agendar Diagnóstico Gratuito
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}