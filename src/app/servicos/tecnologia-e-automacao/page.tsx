"use client";

import { motion } from 'motion/react';
import { ArrowLeft, Cpu, Zap, Code, Database, Cloud, Layers, GitBranch, Workflow, Bot, Link2, Settings, CheckCircle2, Terminal, Box, Radio, Webhook, Lock, BarChart2, Cog, RefreshCw, Sparkles, Shield, TrendingUp, Clock } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';

export default function TecnologiaAutomacaoPage() {
    const solucoes = [
        {
            icon: Bot,
            titulo: "Automação de campanhas",
            descricao: "Fluxos automatizados que otimizam suas ações de marketing",
            features: [
                "Automação de email marketing e nurturing",
                "Personalização dinâmica de mensagens",
                "Jornadas do cliente multicanal",
                "Segmentação inteligente de audiências",
                "Testes A/B contínuos",
                "Triggers comportamentais"
            ],
            tecnologias: ["HubSpot", "ActiveCampaign", "Customer.io", "Braze", "Make"]
        },
        {
            icon: BarChart2,
            titulo: "Dashboards & relatórios",
            descricao: "Visualização de dados clara para tomada de decisões rápidas",
            features: [
                "Dashboards de performance em tempo real",
                "Relatórios automatizados customizados",
                "Consolidação multi-canal",
                "Visualizações interativas",
                "Alertas de performance",
                "Acessível de qualquer dispositivo"
            ],
            tecnologias: ["Looker", "Google Data Studio", "Power BI", "Metabase"]
        },
        {
            icon: Radio,
            titulo: "Rastreamento de audiência",
            descricao: "Coleta e unificação de dados de comportamento do usuário",
            features: [
                "Implementação de tracking avançado",
                "Unificação de dados de múltiplas fontes",
                "Perfis unificados de clientes",
                "Dados first-party de qualidade",
                "Compliance com LGPD/GDPR",
                "Gerenciamento de consentimento"
            ],
            tecnologias: ["Segment", "Google Tag Manager", "RudderStack", "Snowplow"]
        },
        {
            icon: Link2,
            titulo: "Integrações customizadas",
            descricao: "Conectando todas as ferramentas do seu ecossistema",
            features: [
                "Integração entre plataformas de marketing",
                "Sincronização de dados em tempo real",
                "APIs customizadas para necessidades específicas",
                "Conectores entre CRM, ads e analytics",
                "Webhooks e automações",
                "Orquestração de dados"
            ],
            tecnologias: ["Zapier", "Make", "n8n", "APIs REST", "GraphQL"]
        },
        {
            icon: Database,
            titulo: "Consolidação de dados",
            descricao: "Estrutura central para todos os dados de marketing",
            features: [
                "Data warehouse para marketing",
                "ETL de múltiplas fontes",
                "Dados prontos para análise",
                "Histórico completo de campanhas",
                "Single source of truth",
                "Modelagem de dados otimizada"
            ],
            tecnologias: ["BigQuery", "Snowflake", "Fivetran", "dbt", "Segment"]
        },
        {
            icon: Workflow,
            titulo: "Otimização de processos",
            descricao: "Workflows que eliminam trabalho manual repetitivo",
            features: [
                "Automação de tarefas operacionais",
                "Fluxos de aprovação",
                "Geração automática de relatórios",
                "Sincronização entre ferramentas",
                "Alertas e notificações",
                "Reducão de erros manuais"
            ],
            tecnologias: ["Zapier", "Make", "n8n", "Python", "Google Apps Script"]
        },
        {
            icon: Code,
            titulo: "Ferramentas sob medida",
            descricao: "Desenvolvimento customizado quando ferramentas prontas não atendem",
            features: [
                "Dashboards personalizados",
                "Ferramentas internas de produtividade",
                "Plugins e extensões",
                "Calculadoras e simuladores",
                "Landing pages dinâmicas",
                "Portais de clientes"
            ],
            tecnologias: ["React", "Node.js", "Python", "Vercel", "Supabase"]
        },
        {
            icon: Cog,
            titulo: "Auditoria de stack",
            descricao: "Análise e otimização do seu conjunto de ferramentas",
            features: [
                "Mapeamento completo de ferramentas",
                "Identificação de redundâncias",
                "Otimização de custos",
                "Migrações entre plataformas",
                "Setup e configuração",
                "Treinamento de equipe"
            ],
            tecnologias: ["Consultoria", "Implementation", "Migration", "Training"]
        }
    ];

    const exemplosAplicacao = [
        {
            titulo: "Automação de Lead Scoring",
            problema: "Time de vendas perdendo tempo com leads não qualificados",
            solucao: "Sistema automatizado de lead scoring com ML e regras de negócio",
            stack: ["Python", "Scikit-learn", "Segment", "HubSpot", "BigQuery"]
        },
        {
            titulo: "Dashboard Executivo Unificado",
            problema: "Dados espalhados em 15 ferramentas diferentes, sem visão única",
            solucao: "Data warehouse central + dashboards em tempo real",
            stack: ["BigQuery", "Fivetran", "dbt", "Looker", "Slack API"]
        },
        {
            titulo: "Attribution Model Customizado",
            problema: "Multi-touch attribution impossível com ferramentas nativas",
            solucao: "Pipeline de dados + modelo de atribuição personalizado",
            stack: ["Python", "BigQuery", "Google Analytics", "Meta API", "dbt"]
        },
        {
            titulo: "Real-Time Personalization",
            problema: "Experiência genérica, sem personalização em escala",
            solucao: "CDP + recommendation engine + A/B testing framework",
            stack: ["Segment", "BigQuery", "Python", "Optimizely", "Vercel"]
        },
        {
            titulo: "Automated Influencer Matching",
            problema: "Processo manual de 40h/semana para encontrar influenciadores",
            solucao: "Sistema automatizado com scraping, NLP e scoring",
            stack: ["Python", "Apify", "OpenAI API", "Airtable", "n8n"]
        },
        {
            titulo: "Churn Prediction System",
            problema: "Cliente saindo sem aviso, impossível prevenir",
            solucao: "ML model para prever churn + playbooks automáticos",
            stack: ["Python", "TensorFlow", "BigQuery", "Customer.io", "Slack"]
        }
    ];

    const integracoes = [
        {
            categoria: "Marketing & Sales",
            ferramentas: [
                "HubSpot", "Salesforce", "ActiveCampaign", "Mailchimp",
                "Braze", "Klaviyo", "Google Ads", "Meta Ads", "LinkedIn Ads"
            ]
        },
        {
            categoria: "Analytics & Data",
            ferramentas: [
                "Google Analytics 4", "Mixpanel", "Amplitude", "Segment",
                "BigQuery", "Snowflake", "Looker", "Tableau", "Power BI"
            ]
        },
        {
            categoria: "E-commerce",
            ferramentas: [
                "Shopify", "VTEX", "WooCommerce", "Magento",
                "Stripe", "PayPal", "Mercado Pago", "Pagar.me"
            ]
        },
        {
            categoria: "Customer Success",
            ferramentas: [
                "Zendesk", "Intercom", "Freshdesk", "Help Scout",
                "Gorgias", "Front", "Drift", "Crisp"
            ]
        },
        {
            categoria: "Productivity",
            ferramentas: [
                "Notion", "Airtable", "Monday.com", "Asana",
                "Slack", "Discord", "Microsoft Teams", "Google Workspace"
            ]
        },
        {
            categoria: "Social Media",
            ferramentas: [
                "Meta Graph API", "Instagram API", "TikTok API",
                "YouTube API", "Twitter API", "LinkedIn API", "Hootsuite"
            ]
        }
    ];

    const stackTecnologica = [
        {
            camada: "Frontend",
            descricao: "Interfaces modernas e responsivas",
            tech: [
                { nome: "React", uso: "Web apps e dashboards" },
                { nome: "Next.js", uso: "Server-side rendering" },
                { nome: "TypeScript", uso: "Type safety" },
                { nome: "Tailwind CSS", uso: "Styling system" }
            ]
        },
        {
            camada: "Backend",
            descricao: "APIs robustas e escaláveis",
            tech: [
                { nome: "Node.js", uso: "APIs e microservices" },
                { nome: "Python", uso: "Data processing e ML" },
                { nome: "FastAPI", uso: "High-performance APIs" },
                { nome: "GraphQL", uso: "Flexible data queries" }
            ]
        },
        {
            camada: "Data & Analytics",
            descricao: "Infraestrutura de dados moderna",
            tech: [
                { nome: "BigQuery", uso: "Data warehouse" },
                { nome: "Snowflake", uso: "Cloud data platform" },
                { nome: "dbt", uso: "Analytics engineering" },
                { nome: "Fivetran", uso: "Data integration" }
            ]
        },
        {
            camada: "Cloud & Infrastructure",
            descricao: "Deploy e escalabilidade",
            tech: [
                { nome: "AWS", uso: "Cloud infrastructure" },
                { nome: "Vercel", uso: "Frontend hosting" },
                { nome: "Supabase", uso: "Backend as a service" },
                { nome: "Docker", uso: "Containerization" }
            ]
        },
        {
            camada: "Automation & Integration",
            descricao: "Conectando o ecossistema",
            tech: [
                { nome: "Zapier", uso: "No-code automation" },
                { nome: "Make", uso: "Complex workflows" },
                { nome: "n8n", uso: "Self-hosted automation" },
                { nome: "Airflow", uso: "Data orchestration" }
            ]
        },
        {
            camada: "AI & Machine Learning",
            descricao: "Inteligência artificial aplicada",
            tech: [
                { nome: "OpenAI API", uso: "GPT models" },
                { nome: "TensorFlow", uso: "Custom ML models" },
                { nome: "Scikit-learn", uso: "Traditional ML" },
                { nome: "LangChain", uso: "LLM applications" }
            ]
        }
    ];

    const processo = [
        {
            fase: "01",
            titulo: "Discovery & Audit",
            descricao: "Mapeamento completo do ecossistema tecnológico",
            atividades: [
                "Inventário de ferramentas e integrações",
                "Análise de fluxos de dados",
                "Identificação de gargalos",
                "Assessment de stack tecnológica",
                "Análise de custos",
                "Quick wins e oportunidades"
            ]
        },
        {
            fase: "02",
            titulo: "Arquitetura & Design",
            descricao: "Desenho da solução técnica",
            atividades: [
                "Architecture diagram",
                "Data flow design",
                "Tech stack definition",
                "Integration patterns",
                "Security & compliance review",
                "Scalability planning"
            ]
        },
        {
            fase: "03",
            titulo: "Development & Implementation",
            descricao: "Construção e deploy da solução",
            atividades: [
                "Agile development sprints",
                "Code review e quality assurance",
                "Testing (unit, integration, E2E)",
                "CI/CD setup",
                "Monitoring e logging",
                "Documentation"
            ]
        },
        {
            fase: "04",
            titulo: "Optimization & Support",
            descricao: "Manutenção e melhoria contínua",
            atividades: [
                "Performance monitoring",
                "Bug fixes e patches",
                "Feature enhancements",
                "Cost optimization",
                "Training e knowledge transfer",
                "24/7 support (SLA-based)"
            ]
        }
    ];

    const diferenciais = [
        {
            icon: Sparkles,
            titulo: "Pragmático",
            descricao: "Não over-engineering. Soluções práticas que resolvem problemas reais"
        },
        {
            icon: Clock,
            titulo: "Ágil",
            descricao: "MVPs em semanas, não meses. Iterar rápido baseado em feedback"
        },
        {
            icon: Shield,
            titulo: "Seguro",
            descricao: "Security & privacy by design. LGPD e GDPR compliant"
        },
        {
            icon: TrendingUp,
            titulo: "Escalável",
            descricao: "Arquiteturas que crescem com seu negócio, sem reescrita"
        },
        {
            icon: Cog,
            titulo: "Integrável",
            descricao: "Se encaixa no seu stack existente, sem precisar reinventar"
        },
        {
            icon: Terminal,
            titulo: "Full-Stack",
            descricao: "Da infra ao frontend, do analytics ao ML. Time completo"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#FF00FF]/30">
            <Header activeSection="" onNavigate={() => { }} />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 pb-12">
                <div className="absolute inset-0 bg-gradient-to-b from-[#FF00FF]/10 via-transparent to-[#9D00FF]/10" />
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#FF00FF]/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#9D00FF]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto">
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
                            <Cpu size={40} />
                        </motion.div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-[#FF00FF] via-white to-[#9D00FF] bg-clip-text text-transparent font-bold tracking-tight">
                            Tecnologia & Automação
                        </h1>

                        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 font-light">
                            Stack tecnológica moderna, automações inteligentes e infraestrutura de dados
                            que transformam operações e aceleram crescimento.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-[#FF00FF]" />
                                +100 Automações Implementadas
                            </span>
                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-[#9D00FF]" />
                                +50 Integrações Customizadas
                            </span>
                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-[#FF00FF]" />
                                Stack Full-Stack
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Soluções */}
            <section className="relative py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl mb-4 font-bold">Nossas soluções</h2>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto">
                            Tecnologia sob medida para cada desafio do seu negócio
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {solucoes.map((solucao, index) => (
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
                                <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF00FF] to-[#9D00FF] flex items-center justify-center">
                                            <solucao.icon size={24} />
                                        </div>
                                        <h3 className="text-2xl font-bold">{solucao.titulo}</h3>
                                    </div>

                                    <p className="text-white/70 mb-6">{solucao.descricao}</p>

                                    <div className="mb-6">
                                        <h4 className="text-sm font-bold text-[#FF00FF] mb-3 uppercase tracking-wide">
                                            Features
                                        </h4>
                                        <ul className="space-y-2">
                                            {solucao.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-white/60">
                                                    <CheckCircle2 size={16} className="text-[#9D00FF] mt-1 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-4 border-t border-white/10">
                                        <h4 className="text-xs text-white/50 mb-2">Stack:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {solucao.tecnologias.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-1 bg-white/10 rounded text-xs font-mono border border-white/5"
                                                >
                                                    {tech}
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

            {/* Use Cases */}
            <section className="relative py-24 px-4 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl mb-4 font-bold">Casos de uso</h2>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto">
                            Exemplos de soluções possíveis que podemos desenvolver
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {exemplosAplicacao.map((useCase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF00FF]/20 to-[#9D00FF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full flex flex-col">
                                    <h3 className="text-xl mb-3 font-bold">{useCase.titulo}</h3>

                                    <div className="mb-4 flex-1">
                                        <p className="text-sm text-white/60 mb-2">
                                            <span className="text-[#FF00FF] font-medium">Problema:</span> {useCase.problema}
                                        </p>
                                        <p className="text-sm text-white/60">
                                            <span className="text-[#9D00FF] font-medium">Solução:</span> {useCase.solucao}
                                        </p>
                                    </div>

                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-1.5">
                                            {useCase.stack.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-0.5 bg-white/10 rounded text-xs font-mono border border-white/5"
                                                >
                                                    {tech}
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

            {/* Integrações */}
            <section className="relative py-24 px-4 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl mb-4 font-bold">Integrações</h2>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto">
                            Conectamos seu ecossistema completo de ferramentas
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {integracoes.map((grupo, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF00FF]/20 to-[#9D00FF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                                    <h3 className="text-xl mb-4 pb-3 border-b border-white/10">{grupo.categoria}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {grupo.ferramentas.map((ferramenta, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-sm transition-colors cursor-default border border-white/5"
                                            >
                                                {ferramenta}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stack Tecnológica */}
            <section className="relative py-24 px-4 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl mb-4 font-bold">Nossa stack tecnológica</h2>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto">
                            Tecnologias modernas e battle-tested que utilizamos
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {stackTecnologica.map((camada, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/[0.06] transition-all duration-300">
                                    <div className="flex flex-col lg:flex-row gap-6">
                                        <div className="lg:w-1/4">
                                            <h3 className="text-2xl mb-2 font-bold">{camada.camada}</h3>
                                            <p className="text-sm text-white/60">{camada.descricao}</p>
                                        </div>

                                        <div className="flex-1 grid md:grid-cols-2 gap-4">
                                            {camada.tech.map((tech, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5"
                                                >
                                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF00FF] to-[#9D00FF] flex items-center justify-center flex-shrink-0">
                                                        <Code size={16} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium mb-1">{tech.nome}</h4>
                                                        <p className="text-xs text-white/50">{tech.uso}</p>
                                                    </div>
                                                </div>
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
                        <h2 className="text-4xl md:text-5xl mb-4 font-bold">Nosso processo</h2>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto">
                            Da descoberta ao deploy, metodologia ágil e focada em resultados
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processo.map((fase, index) => (
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
                                <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF00FF] to-[#9D00FF] flex items-center justify-center text-xl font-bold mb-4">
                                        {fase.fase}
                                    </div>

                                    <h3 className="text-xl mb-2 font-bold">{fase.titulo}</h3>
                                    <p className="text-sm text-white/60 mb-4">{fase.descricao}</p>

                                    <ul className="space-y-2">
                                        {fase.atividades.map((atividade, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-xs text-white/50">
                                                <Zap size={12} className="text-[#FF00FF] mt-1 flex-shrink-0" />
                                                <span>{atividade}</span>
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
                        <h2 className="text-4xl md:text-5xl mb-4 font-bold">Por que escolher a Noiz?</h2>
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
                                    <h3 className="text-2xl mb-3 font-bold">{diferencial.titulo}</h3>
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
                            <h2 className="text-4xl md:text-5xl mb-6 font-bold">
                                Pronto para modernizar sua stack?
                            </h2>
                            <p className="text-xl text-white/70 mb-8">
                                Vamos fazer uma auditoria gratuita da sua infraestrutura tecnológica
                            </p>
                            <Link href="/#contato">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gradient-to-r from-[#FF00FF] to-[#9D00FF] rounded-full text-lg font-medium hover:shadow-[0_0_30px_rgba(255,0,255,0.5)] transition-all duration-300"
                                >
                                    Falar com Especialista
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
