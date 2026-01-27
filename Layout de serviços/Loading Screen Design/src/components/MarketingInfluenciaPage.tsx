import { motion } from 'motion/react';
import { ArrowLeft, Users, TrendingUp, Target, Sparkles, BarChart3, Globe, Instagram, Youtube, Video, Award, CheckCircle2, Zap, Brain, Search, FileText, Camera, MessageSquare, LineChart } from 'lucide-react';
import { Link } from 'react-router';
import Header from './Header';

export default function MarketingInfluenciaPage() {
  const subServicos = [
    {
      icon: Users,
      titulo: "casting estratégico",
      descricao: "Seleção precisa de influenciadores alinhados com DNA da marca",
      detalhes: [
        "Análise de audiência e engajamento real",
        "Verificação de autenticidade de seguidores",
        "Mapeamento de valores e posicionamento",
        "Match cultural marca x criador",
        "Análise de histórico de parcerias"
      ]
    },
    {
      icon: Brain,
      titulo: "estratégia de conteúdo",
      descricao: "Planejamento criativo que gera resultados mensuráveis",
      detalhes: [
        "Definição de narrativas e storytelling",
        "Calendário editorial estratégico",
        "Briefings criativos detalhados",
        "Alinhamento de mensagens-chave",
        "Adaptação por plataforma"
      ]
    },
    {
      icon: Camera,
      titulo: "produção & acompanhamento",
      descricao: "Gestão completa do processo criativo",
      detalhes: [
        "Aprovação de roteiros e conceitos",
        "Acompanhamento de produção",
        "Quality check de entregas",
        "Gestão de prazos e cronogramas",
        "Suporte criativo contínuo"
      ]
    },
    {
      icon: LineChart,
      titulo: "mensuração de performance",
      descricao: "Análise profunda de resultados e otimização",
      detalhes: [
        "Dashboards em tempo real",
        "Análise de métricas de vaidade vs. negócio",
        "ROI e ROAS detalhados",
        "Sentiment analysis",
        "Relatórios executivos customizados"
      ]
    },
    {
      icon: Zap,
      titulo: "campanhas integradas",
      descricao: "Ativações multicanal com máximo impacto",
      detalhes: [
        "Orquestração de múltiplos influencers",
        "Sincronização cross-platform",
        "Integração com paid media",
        "Ativações em eventos",
        "Estratégias de amplificação"
      ]
    },
    {
      icon: MessageSquare,
      titulo: "gestão de comunidade",
      descricao: "Relacionamento e engajamento autêntico",
      detalhes: [
        "Moderação e resposta de comentários",
        "Identificação de micro-tendências",
        "Gestão de crises",
        "Fomento de conversas",
        "Community insights"
      ]
    }
  ];

  const plataformas = [
    {
      icon: Instagram,
      nome: "Instagram",
      especialidades: ["Reels", "Stories", "Carrosséis", "Colaborações"],
      metricas: "Alcance, Impressões, Saves, Shares, Profile Visits"
    },
    {
      icon: Video,
      nome: "TikTok",
      especialidades: ["Trends", "Sounds", "Duetos", "Stitches"],
      metricas: "Views, Completion Rate, Shares, Sound Usage"
    },
    {
      icon: Youtube,
      nome: "YouTube",
      especialidades: ["Long-form", "Shorts", "Lives", "Premieres"],
      metricas: "Watch Time, CTR, Retention, Subscribers Growth"
    },
    {
      icon: Globe,
      nome: "multi-plataforma",
      especialidades: ["Twitter/X", "LinkedIn", "Threads", "Twitch"],
      metricas: "Engagement Rate, Brand Lift, Sentiment"
    }
  ];

  const processo = [
    {
      numero: "01",
      titulo: "discovery & briefing",
      descricao: "Imersão profunda no universo da marca",
      acoes: [
        "Workshops de alinhamento estratégico",
        "Definição de objetivos e KPIs",
        "Mapeamento de público-alvo",
        "Análise de concorrência",
        "Definição de budget e timing"
      ]
    },
    {
      numero: "02",
      titulo: "research & casting",
      descricao: "Pesquisa e seleção criteriosa de talentos",
      acoes: [
        "Varredura em base proprietária de perfis",
        "Análise de métricas autênticas",
        "Verificação de fit cultural",
        "Negociação de valores",
        "Contratos e alinhamentos"
      ]
    },
    {
      numero: "03",
      titulo: "planejamento criativo",
      descricao: "Desenvolvimento de estratégia de conteúdo",
      acoes: [
        "Desenvolvimento de conceito criativo",
        "Criação de briefings por perfil",
        "Calendário de publicações",
        "Definição de guidelines",
        "Aprovação de roteiros"
      ]
    },
    {
      numero: "04",
      titulo: "execução & produção",
      descricao: "Gestão do processo produtivo",
      acoes: [
        "Acompanhamento de produção",
        "Revisão de conteúdos",
        "Gestão de aprovações",
        "Sincronização de go-lives",
        "Suporte aos creators"
      ]
    },
    {
      numero: "05",
      titulo: "monitoramento & otimização",
      descricao: "Análise contínua e ajustes táticos",
      acoes: [
        "Monitoramento em tempo real",
        "Análise de performance por post",
        "Identificação de oportunidades",
        "Ajustes de rota quando necessário",
        "Gestão de comentários e engajamento"
      ]
    },
    {
      numero: "06",
      titulo: "reporting & insights",
      descricao: "Entrega de resultados e aprendizados",
      acoes: [
        "Relatórios customizados",
        "Análise de ROI detalhada",
        "Benchmarks e comparativos",
        "Insights estratégicos",
        "Recomendações para próximas ações"
      ]
    }
  ];

  const diferenciais = [
    {
      icon: Award,
      titulo: "curadoria premium",
      descricao: "Base proprietária com influenciadores mapeados e analisados continuamente"
    },
    {
      icon: Target,
      titulo: "data-driven",
      descricao: "Decisões baseadas em dados reais, não apenas em números de seguidores"
    },
    {
      icon: Sparkles,
      titulo: "autenticidade",
      descricao: "Priorizamos matches genuínos que geram conexão real com audiências"
    },
    {
      icon: BarChart3,
      titulo: "performance",
      descricao: "Foco em métricas que importam: conversão, engajamento qualificado e brand lift"
    },
    {
      icon: TrendingUp,
      titulo: "tendências",
      descricao: "Monitoramento constante de movimentos culturais e oportunidades emergentes"
    },
    {
      icon: CheckCircle2,
      titulo: "full service",
      descricao: "Da estratégia ao relatório final, cuidamos de cada detalhe da campanha"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header activeSection="" onNavigate={() => {}} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 pb-12">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF00FF]/10 via-transparent to-[#9D00FF]/10" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF00FF]/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#9D00FF]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Back Button */}
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
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#FF00FF] to-[#9D00FF] mb-6"
            >
              <Users size={40} />
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-[#FF00FF] via-white to-[#9D00FF] bg-clip-text text-transparent">
              marketing de influência
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
              conectamos marcas a audiências através de criadores autênticos.
              estratégia baseada em dados, resultados mensuráveis, impacto real.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subserviços */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">nossos serviços</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              cobertura completa de todas as etapas do marketing de influência
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subServicos.map((servico, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF00FF]/20 to-[#9D00FF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF00FF] to-[#9D00FF] flex items-center justify-center">
                      <servico.icon size={24} />
                    </div>
                    <h3 className="text-2xl">{servico.titulo}</h3>
                  </div>
                  
                  <p className="text-white/70 mb-6">{servico.descricao}</p>
                  
                  <ul className="space-y-2">
                    {servico.detalhes.map((detalhe, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-white/60">
                        <CheckCircle2 size={16} className="text-[#FF00FF] mt-1 flex-shrink-0" />
                        <span>{detalhe}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plataformas */}
      <section className="relative py-24 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">dominamos todas as plataformas</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              expertise em cada rede social, adaptando estratégias para maximizar resultados
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plataformas.map((plataforma, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF00FF]/20 to-[#9D00FF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#FF00FF] to-[#9D00FF] flex items-center justify-center">
                    <plataforma.icon size={32} />
                  </div>
                  
                  <h3 className="text-2xl mb-3">{plataforma.nome}</h3>
                  
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {plataforma.especialidades.map((esp, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-xs">
                        {esp}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-xs text-white/50">{plataforma.metricas}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosso Casting */}
      <section className="relative py-24 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">nosso casting</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              além de conectar marcas com influenciadores, também recrutamos criadores de conteúdo por projeto. 
              conheça a prata da casa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                nome: "Amanda Silva",
                nicho: "Lifestyle & Bem-estar",
                foto: "https://images.unsplash.com/photo-1678730939174-bf600a5e0af2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGluZmx1ZW5jZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjkzMDM1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
                plataformas: ["Instagram", "TikTok"]
              },
              {
                nome: "Bruno Costa",
                nicho: "Tech & Inovação",
                foto: "https://images.unsplash.com/photo-1610903866883-c280999dcc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBjb250ZW50JTIwY3JlYXRvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTMwMzU1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
                plataformas: ["YouTube", "LinkedIn"]
              },
              {
                nome: "Carolina Mendes",
                nicho: "Moda & Estilo",
                foto: "https://images.unsplash.com/photo-1758273239228-04a19ba5a1b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwY3JlYXRvcnxlbnwxfHx8fDE3NjkzMDM1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
                plataformas: ["Instagram", "Pinterest"]
              },
              {
                nome: "Diego Alves",
                nicho: "Fitness & Saúde",
                foto: "https://images.unsplash.com/photo-1618436880616-5b479f22a811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NjkzMDM1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
                plataformas: ["TikTok", "Instagram"]
              },
              {
                nome: "Eduarda Rocha",
                nicho: "Beleza & Skincare",
                foto: "https://images.unsplash.com/photo-1706099347777-002ab5e8190c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhc2hpb24lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjkyNzI1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
                plataformas: ["Instagram", "YouTube"]
              },
              {
                nome: "Felipe Santos",
                nicho: "Entretenimento & Humor",
                foto: "https://images.unsplash.com/photo-1695485121912-25c7ea05119c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBjYXN1YWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjkyNjIzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
                plataformas: ["TikTok", "Kwai"]
              }
            ].map((influencer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF00FF]/20 to-[#9D00FF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={influencer.foto}
                      alt={influencer.nome}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl mb-2">{influencer.nome}</h3>
                    <p className="text-white/70 mb-4">{influencer.nicho}</p>
                    <div className="flex gap-2">
                      {influencer.plataformas.map((plat, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-[#FF00FF]/20 to-[#9D00FF]/20 rounded-full text-xs border border-white/10"
                        >
                          {plat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">nosso processo</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              metodologia testada e refinada em centenas de campanhas
            </p>
          </motion.div>

          <div className="space-y-6">
            {processo.map((etapa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF00FF] to-[#9D00FF] flex items-center justify-center text-3xl font-bold">
                        {etapa.numero}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-3xl mb-2">{etapa.titulo}</h3>
                      <p className="text-white/70 mb-4">{etapa.descricao}</p>
                      
                      <div className="grid md:grid-cols-2 gap-3">
                        {etapa.acoes.map((acao, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Zap size={16} className="text-[#FF00FF] mt-1 flex-shrink-0" />
                            <span className="text-sm text-white/60">{acao}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
            <h2 className="text-4xl md:text-5xl mb-4">por que escolher a noiz?</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              diferenciais que nos tornam referência em marketing de influência
            </p>
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF00FF]/20 to-[#9D00FF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#FF00FF] to-[#9D00FF] flex items-center justify-center">
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF00FF]/20 to-[#9D00FF]/20 rounded-3xl blur-3xl" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl mb-6">
                pronto para criar uma campanha de sucesso?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                vamos conversar sobre como podemos conectar sua marca às audiências certas
              </p>
              <Link to="/#contato">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#FF00FF] to-[#9D00FF] rounded-full text-lg font-medium hover:shadow-[0_0_30px_rgba(255,0,255,0.5)] transition-all duration-300"
                >
                  falar com especialista
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}