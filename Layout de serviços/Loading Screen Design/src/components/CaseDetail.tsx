import { motion } from 'motion/react';
import { ArrowLeft, TrendingUp, Users, Eye, MessageCircle, Heart, Sparkles } from 'lucide-react';
// Méqui e BT21 images
import mequiHeroImage from 'figma:asset/5f13af2b4078256a0a60e306502aae0ba9c8230f.png';
import mequiImage2 from 'figma:asset/b4d00c2abe42d6a94e730d29d1bd6226f640ade1.png';
import mequiImage3 from 'figma:asset/96653ed383644b8614ddc8442972bc17b5bd68e8.png';
// Avon Moranguinho images
import avonHeroImage from 'figma:asset/2a4caed6705afbeb371092d7aee126db4e336f32.png';
import avonImage1 from 'figma:asset/d77cf22a4c73cd365ed2776f9da7dc3e0bb6ed15.png';
import avonImage2 from 'figma:asset/6a65384ed5c0849893dc8524681e0b10a924b5d9.png';
import avonImage3 from 'figma:asset/0aac566939b53c1c279e42332c4d6dc6b7dede57.png';

interface CaseDetailProps {
  caseId: string;
  onBack: () => void;
}

const caseData = {
  'mequi-bt21': {
    title: 'Méqui e BT21',
    subtitle: 'alto impacto com um dos universos mais amados da cultura pop',
    description: 'Entregamos em tempo recorde a validação de orçamentos, aprovação de perfis, conteúdos e publicações com significado e alta relevância para um dos maiores fandoms do mundo.',
    heroImage: mequiHeroImage,
    galleryImages: [mequiImage2, mequiImage3],
    challenge: {
      title: 'o desafio',
      content: 'Trabalhar com um dos maiores fandoms do mundo exige precisão, sensibilidade cultural e agilidade. Era necessário validar orçamentos, selecionar influenciadores adequados e criar conteúdo que ressoasse autenticamente com a comunidade, tudo em tempo recorde.'
    },
    metrics: [
      {
        icon: TrendingUp,
        value: '+40 mil',
        label: 'interações',
        description: 'com o conteúdo nas redes sociais'
      },
      {
        icon: Eye,
        value: '+400 mil',
        label: 'views orgânicos',
        description: 'no conteúdo produzido'
      },
      {
        icon: MessageCircle,
        value: 'Geração de',
        label: 'muita conversa',
        description: 'com o público alvo'
      }
    ],
    timeline: {
      title: 'linha do tempo',
      description: 'Com máxima agilidade, atuamos lado a lado com a agência coordenadora para garantir que cada etapa da campanha refletisse com precisão os objetivos da marca.',
      steps: [
        {
          number: 1,
          title: 'Etapa 1',
          description: 'Seleção de influenciadores e aprovação de orçamentos junto com a agência'
        },
        {
          number: 2,
          title: 'Etapa 2',
          description: 'Elaboração de roteiros e aprovação de gravação em lojas'
        },
        {
          number: 3,
          title: 'Etapa 3',
          description: 'Gravações, edições e aprovações de conteúdo'
        },
        {
          number: 4,
          title: 'Etapa 4',
          description: 'Postagem e acompanhamento de performance'
        }
      ]
    }
  },
  'avon-moranguinho': {
    title: 'Avon Moranguinho',
    subtitle: 'beleza com o poder da nostalgia',
    description: 'A participação das influenciadoras Amanda Carmo e Iasmin Oda na campanha resgatou memórias afetivas delas e da audiência e transformou o cuidado diário em um momento doce, divertido e cheio de identidade.',
    heroImage: avonImage3,
    galleryImages: [avonImage1, avonImage2],
    challenge: {
      title: 'o desafio',
      content: 'Conectar um produto nostálgico com uma audiência atual, mantendo a essência da Moranguinho enquanto trazemos uma linguagem fresca, moderna e relevante para as redes sociais. Era necessário criar conteúdo que resgatasse memórias afetivas sem perder a conexão com o momento presente.'
    },
    metrics: [
      {
        icon: Heart,
        value: 'Tradução',
        label: 'de contexto',
        description: 'produto nostálgico para linguagem atual'
      },
      {
        icon: Sparkles,
        value: 'Buzz',
        label: 'positivo',
        description: 'geração de buzz e emoção nas redes'
      },
      {
        icon: Users,
        value: 'Conexão',
        label: 'emocional',
        description: 'com memórias afetivas da audiência'
      }
    ],
    timeline: {
      title: 'estratégia',
      description: 'Trabalhamos com as influenciadoras Amanda Carmo e Iasmin Oda para criar conteúdo autêntico que resgatasse a nostalgia da Moranguinho de forma doce, divertida e cheia de identidade.',
      steps: [
        {
          number: 1,
          title: 'Seleção de Influenciadoras',
          description: 'Escolha criteriosa de criadoras de conteúdo que tivessem conexão genuína com a marca e a nostalgia dos anos 90'
        },
        {
          number: 2,
          title: 'Tradução de Contexto',
          description: 'Adaptação do produto nostálgico para uma linguagem fresca e atual nas redes sociais'
        },
        {
          number: 3,
          title: 'Criação de Conteúdo',
          description: 'Desenvolvimento de narrativas que conectassem memórias afetivas com o cuidado diário de beleza'
        },
        {
          number: 4,
          title: 'Geração de Buzz',
          description: 'Ampliação do alcance através de conteúdo emocionante e engajador que gerou conversa nas redes'
        }
      ]
    }
  }
};

export default function CaseDetail({ caseId, onBack }: CaseDetailProps) {
  const caseInfo = caseData[caseId as keyof typeof caseData];

  if (!caseInfo) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Case não encontrado</p>
          <button onClick={onBack} className="text-accent-pink hover:underline">
            Voltar para a home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={onBack}
        className="fixed top-8 left-8 z-50 glass px-6 py-3 rounded-full flex items-center gap-2 hover:glass-pink transition-all duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:text-accent-pink transition-colors" />
        <span className="group-hover:text-accent-pink transition-colors">voltar</span>
      </motion.button>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl mb-6"
                style={{
                  background: 'linear-gradient(90deg, #FF00FF, #9D00FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {caseInfo.title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl md:text-3xl italic mb-8 text-gray-300"
              >
                {caseInfo.subtitle}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl leading-relaxed text-gray-400"
              >
                {caseInfo.description}
              </motion.p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="glass-pink p-8 rounded-3xl">
                <img 
                  src={caseInfo.heroImage} 
                  alt={caseInfo.title}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Product Image (if available) */}
          {caseInfo.productImage && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-20"
            >
              <div className="glass-pink p-8 rounded-3xl max-w-4xl mx-auto">
                <img 
                  src={caseInfo.productImage} 
                  alt={`${caseInfo.title} - Produtos`}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-purple-950/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-12 rounded-3xl"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-accent-pink italic">
              {caseInfo.challenge.title}
            </h2>
            <p className="text-xl leading-relaxed text-gray-300">
              {caseInfo.challenge.content}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl mb-16 text-center"
          >
            resultados<span className="text-accent-pink">_</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {caseInfo.metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-pink p-8 rounded-2xl text-center"
                >
                  <Icon className="w-12 h-12 mx-auto mb-6 text-accent-pink" />
                  <div className="text-4xl md:text-5xl mb-2" style={{
                    background: 'linear-gradient(90deg, #FF00FF, #9D00FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {metric.value}
                  </div>
                  <div className="text-2xl mb-3">{metric.label}</div>
                  <p className="text-gray-400">{metric.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-purple-950/10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl mb-6 text-accent-pink italic"
          >
            {caseInfo.timeline.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl mb-16 text-gray-300 max-w-3xl"
          >
            {caseInfo.timeline.description}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Timeline Steps */}
            <div className="space-y-8">
              {caseInfo.timeline.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full glass-pink flex items-center justify-center text-xl" style={{
                      background: 'linear-gradient(135deg, #FF00FF, #9D00FF)',
                    }}>
                      {step.number}
                    </div>
                    {index < caseInfo.timeline.steps.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-accent-pink to-accent-violet mx-auto mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl mb-2">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Timeline Images Collage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] flex items-center justify-center"
            >
              {/* First Image - Left, slightly behind */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute left-0 z-10 w-[55%]"
              >
                <div className="glass-pink p-4 rounded-3xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src={caseInfo.galleryImages[0]} 
                    alt="Case visual 1"
                    className="w-full h-auto rounded-2xl object-cover shadow-2xl"
                    style={{ aspectRatio: '9/16' }}
                  />
                </div>
              </motion.div>

              {/* Second Image - Right, in front */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute right-0 z-20 w-[55%]"
              >
                <div className="glass-pink p-4 rounded-3xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src={caseInfo.galleryImages[1]} 
                    alt="Case visual 2"
                    className="w-full h-auto rounded-2xl object-cover shadow-2xl"
                    style={{ aspectRatio: '9/16' }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-pink p-12 rounded-3xl"
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              quer resultados assim?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Entre em contato e descubra como podemos transformar sua marca com inteligência cultural
            </p>
            <button
              onClick={onBack}
              className="px-8 py-4 rounded-full text-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(90deg, #FF00FF, #9D00FF)',
              }}
            >
              voltar para a home
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
