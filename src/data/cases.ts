import { MessageCircle, Eye, Heart, ThumbsUp, Target, Building2, ShoppingBag, Ticket, ChefHat, Cat, Users } from 'lucide-react';

// Images
import mequiHeroImage from '@/assets/5f13af2b4078256a0a60e306502aae0ba9c8230f.png';
import mequiImage2 from '@/assets/b4d00c2abe42d6a94e730d29d1bd6226f640ade1.png';
import mequiImage3 from '@/assets/96653ed383644b8614ddc8442972bc17b5bd68e8.png';

// Avon Moranguinho images
import avonHeroImage from '@/assets/2a4caed6705afbeb371092d7aee126db4e336f32.png';
import avonImage1 from '@/assets/d77cf22a4c73cd365ed2776f9da7dc3e0bb6ed15.png';
import avonImage2 from '@/assets/6a65384ed5c0849893dc8524681e0b10a924b5d9.png';
import avonPrint01 from '@/assets/cases/avon-moranguinho/print_01.png';
import avonPrint02 from '@/assets/cases/avon-moranguinho/print_02.png';
import avonMoranguinhoClose from '@/assets/cases/avon-moranguinho/moranguinho_close.png';
import osangCapa from '@/assets/cases/osang-cosmetic/capa.png';
import osang01 from '@/assets/cases/osang-cosmetic/01.png';
import osang02 from '@/assets/cases/osang-cosmetic/02.png';

// Hellmann's Images
import hellmannsCapa from '@/assets/cases/hellmanns/Capa.png';
import hellmanns01 from '@/assets/cases/hellmanns/01.png';
import hellmanns02 from '@/assets/cases/hellmanns/02.png';

// Atacadão Images
import atacadaoCapa from '@/assets/cases/atacadao/Capa.png';
import atacadao01 from '@/assets/cases/atacadao/01.png';
import atacadao02 from '@/assets/cases/atacadao/02.png';

// Cia da Natureza Images
import ciaCapa from '@/assets/cases/cia-da-natureza/Capa.png';
import cia01 from '@/assets/cases/cia-da-natureza/01.png';
import cia02 from '@/assets/cases/cia-da-natureza/02.png';

export const caseData = {
    'avon-moranguinho': {
        title: 'Avon & Moranguinho',
        subtitle: 'Beleza com o poder da nostalgia',
        description: 'Resgatamos memórias afetivas da audiência conectando a linha clássica da Avon com criadoras que traduzem o passado para a linguagem da Gen Z.',
        heroVideo: '/videos/avon-moranguinho/reels.mp4',
        heroImage: avonHeroImage, // Keeping as fallback for link previews if needed, but component will prioritize video
        galleryImages: [avonMoranguinhoClose, avonPrint02],
        challenge: {
            title: 'o desafio',
            content: 'Traduzir um produto icônico do passado para um contexto atual sem parecer datado. O objetivo era gerar buzz e emoção, transformando o cuidado diário em um momento doce e divertido, com identificação imediata.'
        },
        metrics: [
            {
                icon: MessageCircle,
                value: 'Buzz',
                label: 'Positivo',
                description: 'Conversas nostálgicas nas redes'
            },
            {
                icon: Eye,
                value: 'Contexto',
                label: 'Traduzido',
                description: 'Linguagem fresca e atual'
            },
            {
                icon: Heart,
                value: 'Conexão',
                label: 'Emocional',
                description: 'Resgate de memórias afetivas'
            }
        ],
        timeline: {
            title: 'linha do tempo',
            description: 'Uma estratégia desenhada para despertar emoções em cada etapa.',
            steps: [
                {
                    number: 1,
                    title: 'Etapa 1',
                    description: 'Casting estratégico das influenciadoras Amanda Carmo e Iasmin Oda.'
                },
                {
                    number: 2,
                    title: 'Etapa 2',
                    description: 'Definição de narrativa focada em "Memória Afetiva" vs "Rotina Atual".'
                },
                {
                    number: 3,
                    title: 'Etapa 3',
                    description: 'Produção de conteúdo com estética visual proprietária da linha.'
                },
                {
                    number: 4,
                    title: 'Etapa 4',
                    description: 'Monitoramento de sentimento e interações de nostalgia nos comentários.'
                }
            ]
        }
    },
    'osang-cosmetic': {
        title: 'Osang Cosmetic',
        subtitle: 'Lançamento de K-Beauty no Brasil',
        description: 'Uma estratégia de nicho cirúrgica para introduzir uma curadoria sul-coreana de skincare no competitivo mercado brasileiro.',
        heroVideo: '/videos/osang-cosmetic/reels.mp4',
        heroImage: osangCapa,
        galleryImages: [osang01, osang02],
        challenge: {
            title: 'o desafio',
            content: 'Lançar uma marca desconhecida no Brasil sem depender de mídia de massa. O desafio era criar autoridade instantânea e educar o consumidor sobre os diferenciais do skincare coreano (K-Beauty) para um público exigente.'
        },
        metrics: [
            {
                icon: ThumbsUp,
                value: '+300',
                label: 'Likes Qualificados',
                description: 'Alta taxa de aprovação'
            },
            {
                icon: Target,
                value: 'Nicho',
                label: 'Atingido',
                description: 'Público interessado em K-Beauty'
            },
            {
                icon: Building2,
                value: 'Brand',
                label: 'Awareness',
                description: 'Construção de marca premium'
            }
        ],
        timeline: {
            title: 'linha do tempo',
            description: 'Construção de autoridade passo a passo.',
            steps: [
                {
                    number: 1,
                    title: 'Etapa 1',
                    description: 'Casting da especialista em K-Beauty @isagumierolee.'
                },
                {
                    number: 2,
                    title: 'Etapa 2',
                    description: 'Tutorial educativo focando em rotina e benefícios dos ingredientes.'
                },
                {
                    number: 3,
                    title: 'Etapa 3',
                    description: 'Produção focada em textura e sensorialidade dos produtos.'
                },
                {
                    number: 4,
                    title: 'Etapa 4',
                    description: 'Engajamento com comunidade de skincare.'
                }
            ]
        }
    },
    'atacadao': {
        title: 'Atacadão',
        subtitle: 'Aniversário com Kim e Pípi',
        description: 'Trouxemos o humor caótico e genuíno de Kim e Pípi para o maior atacadista do Brasil, criando uma campanha de aniversário leve e viral.',
        heroImage: atacadaoCapa,
        heroVideo: '/videos/atacadao/Reels.mp4',
        galleryImages: [atacadao01, atacadao02],
        challenge: {
            title: 'o desafio',
            content: 'Comunicar ofertas de aniversário fugindo do varejo tradicional "gritado". O objetivo era gerar entretenimento enquanto vendia, conectando com um público jovem e diverso.'
        },
        metrics: [
            {
                icon: ShoppingBag,
                value: 'Vendas',
                label: 'Impulsionadas',
                description: 'Foco em ofertas chave'
            },
            {
                icon: MessageCircle,
                value: 'Viral',
                label: 'Orgânico',
                description: 'Alto compartilhamento'
            },
            {
                icon: Cat,
                value: 'Fit',
                label: 'Cultural',
                description: 'Humor brasileiro autêntico'
            }
        ],
        timeline: {
            title: 'linha do tempo',
            description: 'Do caos à conversão.',
            steps: [
                {
                    number: 1,
                    title: 'Etapa 1',
                    description: 'Seleção do duo Kim e Pípi para abordagem humorística.'
                },
                {
                    number: 2,
                    title: 'Etapa 2',
                    description: 'Roteiro focado em "compras do mês" com twist cômico.'
                },
                {
                    number: 3,
                    title: 'Etapa 3',
                    description: 'Gravação em loja real para autenticidade.'
                },
                {
                    number: 4,
                    title: 'Etapa 4',
                    description: 'Divulgação massiva de ofertas.'
                }
            ]
        }
    },
    'cia-da-natureza': {
        title: 'Cia da Natureza',
        subtitle: 'Relançamento Hello Kitty',
        description: 'Reativamos a paixão pela personagem Hello Kitty em uma linha de produtos capilares, focando em "coquette aesthetic" e unboxing.',
        heroImage: ciaCapa,
        heroVideo: '/videos/cia-da-natureza/Reels.mp4',
        galleryImages: [cia01, cia02],
        challenge: {
            title: 'o desafio',
            content: 'Destacar produtos licenciados em um mercado saturado. A estratégia foi focar na estética visual e no fator "colecionável" da embalagem.'
        },
        metrics: [
            {
                icon: Heart,
                value: 'Love',
                label: 'Brand',
                description: 'Desejo de consumo imediato'
            },
            {
                icon: Eye,
                value: 'Visual',
                label: 'Appeal',
                description: 'Estética viral (Coquette)'
            },
            {
                icon: Ticket,
                value: 'Fans',
                label: 'Engajados',
                description: 'Comunidade Hello Kitty ativada'
            }
        ],
        timeline: {
            title: 'linha do tempo',
            description: 'Transformando produtos em objetos de desejo.',
            steps: [
                {
                    number: 1,
                    title: 'Etapa 1',
                    description: 'Identificação da trend "Coquette" e fit com Hello Kitty.'
                },
                {
                    number: 2,
                    title: 'Etapa 2',
                    description: 'Unboxing ASMR detalhado dos produtos.'
                },
                {
                    number: 3,
                    title: 'Etapa 3',
                    description: 'Foco em penteados e finalização.'
                },
                {
                    number: 4,
                    title: 'Etapa 4',
                    description: 'Feedback da comunidade sobre cheiro e textura.'
                }
            ]
        }
    },
    'hellmanns': {
        title: 'Hellmann\'s',
        subtitle: 'Churrasco com a Galera',
        description: 'Inserimos a Hellmann\'s Alho no contexto de churrasco de amigos, usando o humor do perfil @apontamos para naturalizar o consumo.',
        heroImage: hellmannsCapa,
        heroVideo: '/videos/hellmanns/Reels.mp4',
        galleryImages: [hellmanns01, hellmanns02],
        challenge: {
            title: 'o desafio',
            content: 'Associar a maionese de sabor ao momento de consumo "churrasco" de forma orgânica e não publicitária. O humor observacional foi a chave.'
        },
        metrics: [
            {
                icon: ChefHat,
                value: 'Sabor',
                label: 'Foco',
                description: 'Associação direta com churrasco'
            },
            {
                icon: Users,
                value: 'Social',
                label: 'Proof',
                description: 'Produto no centro da roda de amigos'
            },
            {
                icon: ThumbsUp,
                value: 'Recall',
                label: 'Marca',
                description: 'Fixação do produto Hellmann\'s Alho'
            }
        ],
        timeline: {
            title: 'linha do tempo',
            description: 'O acompanhamento perfeito.',
            steps: [
                {
                    number: 1,
                    title: 'Etapa 1',
                    description: 'Briefing focado em situações reais de churrasco.'
                },
                {
                    number: 2,
                    title: 'Etapa 2',
                    description: 'Criação de esquetes de humor sobre "tipos de pessoas no churrasco".'
                },
                {
                    number: 3,
                    title: 'Etapa 3',
                    description: 'Inserção do produto como solucionador ou protagonista.'
                },
                {
                    number: 4,
                    title: 'Etapa 4',
                    description: 'Call to action para experimentar o sabor Alho.'
                }
            ]
        }
    }
};
