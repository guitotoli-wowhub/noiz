"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Share2, AlertCircle, TrendingUp, FilterX, Users, Network, ShieldAlert, Loader2, PlayCircle, EyeOff, Lock, Heart, ArrowUpCircle, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export default function EbookEstadoDaInfluenciaParte2() {
    const [isMounted, setIsMounted] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: ''
    });

    useEffect(() => {
        setIsMounted(true);
        // Using the same key from Part 1 so returning users get auto-access!
        const access = localStorage.getItem('noiz_ebook_access');
        if (access === 'true') {
            setHasAccess(true);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                localStorage.setItem('noiz_ebook_access', 'true');
                setHasAccess(true);
                toast.success('Acesso liberado! Boa leitura.');
            } else {
                toast.error('Ocorreu um erro. Tente novamente.');
            }
        } catch (error) {
            toast.error('Ocorreu um erro. Tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#FF00FF] selection:text-white relative">
            
            {/* Modal Overlay */}
            {isMounted && !hasAccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl w-full max-w-md shadow-2xl animate-in fade-in zoom-in duration-300">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold mb-2">Liberar Acesso Exclusivo</h2>
                            <p className="text-zinc-400 text-sm">
                                Preencha os dados abaixo para ler o material "O Estado da Influência Parte 2".
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-1">Nome completo *</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#FF00FF] transition-colors"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-1">E-mail corporativo *</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#FF00FF] transition-colors"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-1">WhatsApp (Opcional)</label>
                                <input
                                    type="tel"
                                    className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#FF00FF] transition-colors"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-1">Qual o seu perfil? *</label>
                                <select
                                    required
                                    className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF00FF] transition-colors appearance-none"
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                >
                                    <option value="" disabled>Selecione uma opção</option>
                                    <option value="Influenciador">Sou Influenciador/Criador</option>
                                    <option value="Agência">Trabalho em Agência</option>
                                    <option value="Marketing/Growth">Trabalho com Marketing/Growth</option>
                                    <option value="Estudante/Outros">Estudante / Outros</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full mt-6 bg-[#FF00FF] hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        <span>Liberando...</span>
                                    </>
                                ) : (
                                    <span>Acessar Material</span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <div className={isMounted && !hasAccess ? 'filter blur-[12px] pointer-events-none select-none opacity-40 transition-all duration-700 h-screen overflow-hidden' : 'transition-all duration-700'}>
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-zinc-900">
                <div className="absolute inset-0 bg-[#FF00FF]/5 mix-blend-screen pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
                
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-block px-4 py-2 border border-[#FF00FF]/30 rounded-full bg-[#FF00FF]/10 text-[#FF00FF] text-sm md:text-base font-medium mb-6 backdrop-blur-sm">
                        O Estado da Influência - Parte 02
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        A Economia da Queixa e a<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-purple-500">
                            Fogueira Digital
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
                        Deep Research, análise de tendências e o plano tático da Noiz Assessoria para não depender das plataformas em 2026.
                    </p>
                </div>
            </section>

            {/* A Saturação e Motivações */}
            <section className="py-24 bg-zinc-950">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-5 gap-16">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Morte do "Social" nas Redes</h2>
                            <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                                A mudança mais sísmica de 2025 foi a redefinição do porquê entramos nas redes. Historicamente, "manter contato" era a motivação dominante. <strong>Hoje, isso caiu para apenas 50,8%</strong>.
                            </p>
                            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                                As redes deixaram de ser praças públicas para se tornarem palcos de performance, enquanto a vida real acontece no WhatsApp e nas DMs.
                            </p>
                        </div>

                        <div className="lg:col-span-3">
                            <div className="bg-black border border-zinc-800 rounded-2xl overflow-hidden">
                                <div className="grid grid-cols-12 gap-4 p-4 border-b border-zinc-800 bg-zinc-900/50 text-sm font-bold text-zinc-400 uppercase">
                                    <div className="col-span-4">Motivação</div>
                                    <div className="col-span-2 text-center">% Global</div>
                                    <div className="col-span-6">Ação Noiz 2026</div>
                                </div>
                                <div className="divide-y divide-zinc-800">
                                    <div className="grid grid-cols-12 gap-4 p-4 items-center">
                                        <div className="col-span-4 font-bold text-white flex items-center gap-2"><FilterX size={16} className="text-[#FF00FF]" /> Encontrar Informação</div>
                                        <div className="col-span-2 text-center text-xl font-bold text-[#FF00FF]">62,8%</div>
                                        <div className="col-span-6 text-sm text-zinc-400">SEO morreu. Nasce o GEO. Conteúdo que responde perguntas complexas para IAs.</div>
                                    </div>
                                    <div className="grid grid-cols-12 gap-4 p-4 items-center">
                                        <div className="col-span-4 font-bold text-white flex items-center gap-2"><Users size={16} className="text-zinc-500" /> Contato Social</div>
                                        <div className="col-span-2 text-center text-xl font-bold text-zinc-300">50,8%</div>
                                        <div className="col-span-6 text-sm text-zinc-400">Marcas não devem "ser amigas" no feed, mas sim facilitar conversas em DMs.</div>
                                    </div>
                                    <div className="grid grid-cols-12 gap-4 p-4 items-center">
                                        <div className="col-span-4 font-bold text-white flex items-center gap-2"><PlayCircle size={16} className="text-purple-500" /> Preencher Tempo</div>
                                        <div className="col-span-2 text-center text-xl font-bold text-purple-400">2º Lugar</div>
                                        <div className="col-span-6 text-sm text-zinc-400">Seu concorrente é o tédio. Ofereça micro-entretenimento imediato.</div>
                                    </div>
                                    <div className="grid grid-cols-12 gap-4 p-4 items-center">
                                        <div className="col-span-4 font-bold text-white flex items-center gap-2"><Search size={16} className="text-blue-500" /> Pesquisa de Marcas</div>
                                        <div className="col-span-2 text-center text-xl font-bold text-blue-400">50,0%</div>
                                        <div className="col-span-6 text-sm text-zinc-400">TikTok/IG são o Google da Gen Z. Seu perfil é uma Landing Page otimizada.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* A Economia da Queixa */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-red-900/5 mix-blend-multiply pointer-events-none" />
                <div className="max-w-4xl mx-auto px-6 text-center">
                     <ShieldAlert className="w-16 h-16 text-red-500 mx-auto mb-6" />
                     <h2 className="text-4xl font-bold mb-6 text-white">Navegando a "Economia da Queixa"</h2>
                     <p className="text-xl text-zinc-300 mb-12 leading-relaxed">
                        Em 2025, <strong className="text-red-500">61% da população global relatou "Grievance"</strong> (crença de que o sistema joga contra eles). O ativismo hostil contra marcas (doxxing, cancelamentos agressivos) recebe apoio de 53% da Geração Z.
                    </p>
                    
                    <div className="p-8 border-l-4 border-red-500 bg-red-500/10 text-left rounded-r-2xl">
                        <h3 className="text-2xl font-bold text-red-200 mb-4">A Resposta da Marca</h3>
                        <p className="text-lg text-red-100/80 mb-4">A neutralidade é vista como cumplicidade. Não dá mais para "esperar a poeira baixar".</p>
                        <p className="text-lg text-red-100/80">
                            A blindagem de imagem deve ser proativa, construída num <strong>"Banco de Boa Vontade" (Goodwill Bank)</strong> constante com a sua comunidade antes da crise.
                        </p>
                    </div>
                </div>
            </section>

            {/* O Fim do Seguidor */}
            <section className="py-24 bg-zinc-900/30 border-y border-zinc-800">
                <div className="max-w-6xl mx-auto px-6">
                     <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">O Fim do Seguidor e a Trindade do Algoritmo</h2>
                        <p className="text-xl text-zinc-400">O Gráfico Social (ver quem sigo) morreu. Vivemos o Gráfico de Interesse.</p>
                     </div>

                     <div className="grid md:grid-cols-3 gap-8">
                         <div className="p-8 bg-black border border-zinc-800 rounded-2xl hover:-translate-y-2 transition-transform">
                             <EyeOff className="w-12 h-12 text-[#FF00FF] mb-6" />
                             <h3 className="text-2xl font-bold mb-3">Tempo de Exibição</h3>
                             <p className="text-zinc-400">A retenção Suprema. Se rolar e parar para assistir, é valioso. Independentemente de likes.</p>
                         </div>
                         <div className="p-8 bg-black border border-zinc-800 rounded-2xl hover:-translate-y-2 transition-transform">
                             <Heart className="w-12 h-12 text-purple-500 mb-6" />
                             <h3 className="text-2xl font-bold mb-3">Curtidas por Alcance</h3>
                             <p className="text-zinc-400">A Eficiência. Valida a qualidade comparando likes versus amostra que visualizou o conteúdo.</p>
                         </div>
                         <div className="p-8 bg-black border border-zinc-800 rounded-2xl hover:-translate-y-2 transition-transform">
                             <Share2 className="w-12 h-12 text-blue-500 mb-6" />
                             <h3 className="text-2xl font-bold mb-3">Sends (Shares)</h3>
                             <p className="text-zinc-400">O Sinal Definitivo. Relevância cultural brutal. O conteúdo tem valor intrínseco de utilidade/identidade.</p>
                         </div>
                     </div>

                     {/* Dinâmicas Extrass */}
                     <div className="mt-20 pt-16 border-t border-zinc-800 grid md:grid-cols-3 gap-12">
                         <div>
                             <h4 className="flex items-center gap-2 text-xl font-bold mb-4 text-[#FF00FF]"><span>📷</span> Instagram 2026</h4>
                             <ul className="space-y-4 text-zinc-400 text-sm">
                                 <li><strong className="text-white">Trial Reels:</strong> Teste conteúdo para não-seguidores (topo de funil).</li>
                                 <li><strong className="text-white">Renascimento do Carrossel:</strong> Motores de engajamento profundo (storytelling) para segurar "Watch Time".</li>
                             </ul>
                         </div>
                         <div>
                             <h4 className="flex items-center gap-2 text-xl font-bold mb-4 text-white"><span>🎵</span> TikTok Utilidade</h4>
                             <ul className="space-y-4 text-zinc-400 text-sm">
                                 <li><strong className="text-white">Identity Osmosis:</strong> Marcas flexíveis que absorvem a linguagem da comunidade.</li>
                                 <li><strong className="text-white">Social Search:</strong> O TikTok é o Google da Gen Z. Otimização (SEO) direto no vídeo e legenda.</li>
                             </ul>
                         </div>
                         <div>
                             <h4 className="flex items-center gap-2 text-xl font-bold mb-4 text-[#0A66C2]"><span>💼</span> LinkedIn-fluencer</h4>
                             <ul className="space-y-4 text-zinc-400 text-sm">
                                 <li>A "tiktokização" do B2B. Conteúdo de vídeo curto, educativo e humano rasgando a baridez corporativa tradicional.</li>
                             </ul>
                         </div>
                     </div>
                </div>
            </section>

             {/* Casos 2025 */}
             <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-16 text-center">Anatomia da Viralidade Psicológica</h2>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Duolingo */}
                        <div className="p-8 rounded-[32px] border border-green-500/30 bg-green-500/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-20">
                                <span className="text-8xl">🦉</span>
                            </div>
                            <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold uppercase rounded-full mb-4">Ação: Narrativa Transmídia</span>
                            <h3 className="text-2xl font-bold mb-4">A "Morte" do Duolingo</h3>
                            <p className="text-zinc-300 mb-4 text-sm">A marca alterou sua logo para uma coruja triste, postou obituários e gerou picos absurdos de engajamento.</p>
                            <p className="font-bold text-green-400">A Lição: Lore.</p>
                            <p className="text-xs text-zinc-400">O público abraçou a brincadeira porque o app já cultivava uma persona unhinged (caótica). O marketing episódico vence o pontual.</p>
                        </div>

                         {/* Dubai Chocolate */}
                         <div className="p-8 rounded-[32px] border border-amber-500/30 bg-amber-500/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-20">
                                <span className="text-8xl">🍫</span>
                            </div>
                            <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold uppercase rounded-full mb-4">Ação: Camera-Ready</span>
                            <h3 className="text-2xl font-bold mb-4">O Chocolate de Dubai</h3>
                            <p className="text-zinc-300 mb-4 text-sm">O estouro nas vendas foi triunfal devido ao ASMR visual: o estalo, a textura, a cor viva do pistache.</p>
                            <p className="font-bold text-amber-400">A Lição: Sensorial UX.</p>
                            <p className="text-xs text-zinc-400">Em 2026, seu produto *tem* que "performar bem" em vídeo. O luxo de $20 é a nova moeda de Social Currency em economias de crise.</p>
                        </div>

                        {/* Labubu */}
                        <div className="p-8 rounded-[32px] border border-blue-500/30 bg-blue-500/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-20">
                                <span className="text-8xl">👾</span>
                            </div>
                            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold uppercase rounded-full mb-4">Ação: Escassez Artificial</span>
                            <h3 className="text-2xl font-bold mb-4">A Obsessão Labubu</h3>
                            <p className="text-zinc-300 mb-4 text-sm">O design "feio-fofo" associado ao modelo Blind Box (mistério na compra) virou uma caça ao tesouro global.</p>
                            <p className="font-bold text-blue-400">A Lição: Mistério Gamificado.</p>
                            <p className="text-xs text-zinc-400">Marcas digitais devem emular exclusividade via Mystery Bundles ou acessos limitados para gerar picos de consumo dopaminérgico.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* A Nova Economia & IA */}
            <section className="py-24 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
                    {/* Creators */}
                    <div className="p-8 rounded-[32px] bg-gradient-to-br from-black to-zinc-900 border border-purple-500/20 shadow-[0_0_50px_rgba(168,85,247,0.05)]">
                        <div className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase rounded-full mb-6">A Nova Economia</div>
                        <h3 className="text-3xl font-bold mb-8">Do Famoso ao <span className="text-purple-400">Ecossistema</span></h3>
                        <div className="space-y-8 text-zinc-300">
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">A Mídia Fragmentada (Nano & Micro)</h4>
                                <p className="text-zinc-400 leading-relaxed">A estratégia de 2026 não é contratar 1 macro-influenciador para 1 milhão de pessoas, mas <strong className="text-white">100 nano-influenciadores para 10.000 pessoas</strong> cada, numa lógica poderosa de recomendação de pares ("peer-to-peer"), livre da "farsa publicitária".</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Live Shopping no Ocidente</h4>
                                <p className="text-zinc-400 leading-relaxed">A conversão salta de 2-3% (e-commerce tradicional) para incríveis <strong className="text-white">30% em formato Live</strong>. Para marcas SMB, transmitir conhecimento + vendas deixou de ser opcional; é o canal mais eficiente disponível.</p>
                            </div>
                        </div>
                    </div>

                    {/* IA */}
                    <div className="p-8 rounded-[32px] bg-zinc-900/40 border border-zinc-800">
                        <div className="inline-block px-3 py-1 bg-zinc-800 text-zinc-300 text-xs font-bold uppercase rounded-full mb-6">O Paradoxo Tecnológico</div>
                        <h3 className="text-3xl font-bold mb-8">A Rejeição à <span className="text-zinc-500">Inteligência Artificial</span></h3>
                        <div className="space-y-8 text-zinc-300">
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">O prêmio do "Feito por Humano"</h4>
                                <p className="text-zinc-400 leading-relaxed">O excesso de conteúdo sintético (AI Slop) saturou o feed corporativo. Em 2026, 60% dos consumidores dizem preferir o erro humano à impessoalidade das máquinas. Textos e vídeos com 'alma' e 'imperfeição' valem ouro.</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">A Força Invisível e Otimizada</h4>
                                <p className="text-zinc-400 leading-relaxed">A IA é usada nos bastidores para gerar <strong className="text-white">hiper-personalização de base e GEO (Generative Engine Optimization)</strong>, moldando conteúdos que o ChatGPT citará como fonte sem substituir a imagem da marca.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* A Fogueira Digital */}
             <section className="py-24 bg-zinc-950 border-t border-zinc-800 relative z-10">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF00FF]/10 text-[#FF00FF] rounded-full text-sm font-bold uppercase mb-6 border border-[#FF00FF]/20">
                            <Network size={16} /> A Solução
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">A Fogueira Digital</h2>
                        <p className="text-xl text-zinc-300 mb-6 leading-relaxed">
                            O mito: Você não possui seus seguidores. O Instagram possui. A única coisa valiosa e blindada é seu relacionamento <strong>fora das plataformas</strong>.
                        </p>
                        <p className="text-lg text-zinc-400 mb-8">
                            Um show de estádio grita para milhares. Uma fogueira aproxima dezenas. A estratégia Noiz 2026 abandona a busca frenética por alcance vazio para criar espaços de Owned Media, controlados, fechados e íntimos.
                        </p>

                        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
                             <h4 className="font-bold text-white mb-4">A Nova Equação:</h4>
                             <div className="flex flex-col gap-2 font-mono text-sm md:text-base">
                                 <div className="flex justify-between items-center text-zinc-500 line-through">
                                     <span>Influência =</span>
                                     <span>Seguidores × Alcance</span>
                                 </div>
                                 <div className="flex justify-between items-center text-[#FF00FF] font-bold mt-2">
                                     <span>Influência =</span>
                                     <span className="text-right">Confiança × Utilidade × (Conexão Direta)</span>
                                 </div>
                             </div>
                        </div>
                    </div>

                    {/* Escada de Envolvimento */}
                    <div className="relative">
                        <h3 className="text-2xl font-bold text-center mb-10">A Escada de Envolvimento</h3>
                        <div className="space-y-4">
                             {/* Nível 5 */}
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#FF00FF] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-[0_0_30px_rgba(255,0,255,0.4)]">5</div>
                                <div className="bg-black border border-[#FF00FF]/50 rounded-xl p-5 flex-1 origin-bottom">
                                    <h4 className="font-bold text-[#FF00FF] uppercase tracking-wide text-sm mb-1">Embaixador</h4>
                                    <p className="text-sm text-zinc-300">Co-cria. Representa a marca. Programa de indicação ativo.</p>
                                </div>
                            </div>
                            {/* Nível 4 */}
                            <div className="flex gap-4 ml-6">
                                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl shrink-0">4</div>
                                <div className="bg-black border border-purple-500/50 rounded-xl p-5 flex-1 origin-bottom">
                                    <h4 className="font-bold text-purple-400 uppercase tracking-wide text-sm mb-1">Superfã (VIP)</h4>
                                    <p className="text-sm text-zinc-300">Cliente recorrente. Comunidade Premium. Defensor ativo.</p>
                                </div>
                            </div>
                            {/* Nível 3 */}
                            <div className="flex gap-4 ml-12">
                                <div className="w-12 h-12 rounded-full bg-zinc-700 text-white flex items-center justify-center font-bold text-xl shrink-0">3</div>
                                <div className="bg-black border border-zinc-700/50 rounded-xl p-5 flex-1 origin-bottom">
                                    <h4 className="font-bold text-white uppercase tracking-wide text-sm mb-1">Engajado</h4>
                                    <p className="text-sm text-zinc-400">Responde DMs, participa de enquetes e lives.</p>
                                </div>
                            </div>
                            {/* Nível 2 */}
                            <div className="flex gap-4 ml-16">
                                <div className="w-12 h-12 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center font-bold text-xl shrink-0">2</div>
                                <div className="bg-black border border-zinc-800/50 rounded-xl p-5 flex-1 origin-bottom">
                                    <h4 className="font-bold text-zinc-400 uppercase tracking-wide text-sm mb-1">Inscrito</h4>
                                    <p className="text-sm text-zinc-500">Deu o Email ou WhatsApp. Recebe envios diretos (Zero IA).</p>
                                </div>
                            </div>
                            {/* Nível 1 */}
                            <div className="flex gap-4 ml-20">
                                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-600 flex items-center justify-center font-bold text-xl shrink-0">1</div>
                                <div className="bg-black border border-zinc-900 rounded-xl p-5 flex-1 origin-bottom">
                                    <h4 className="font-bold text-zinc-600 uppercase tracking-wide text-sm mb-1">Seguidor Casual</h4>
                                    <p className="text-sm text-zinc-600">Apenas consumo passivo pelo feed com risco de desinteresse algorítmico.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 mt-24 pt-16 border-t border-zinc-800">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-xs font-bold uppercase mb-4 border border-yellow-500/20">
                                🤝 Member Get Member
                            </div>
                            <h3 className="text-3xl font-bold mb-6">A Era da Tribo Fechada</h3>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                Comunidades com programas ativos de indicação crescem <strong>5x mais rápido</strong>. Em 2026, é mais barato e eficaz recompensar um fã atual para trazer um amigo (comercialização boca-a-boca orgânica) do que pagar meta ads por cliques frios.
                            </p>
                            <ul className="text-zinc-300 space-y-4">
                                <li className="flex items-start gap-3"><CheckCircle2 className="text-yellow-500 w-6 h-6 shrink-0" /> <span className="text-sm md:text-base">Recompense indicações com códigos de convite e acessos VIP para o "influenciador nano" da sua base.</span></li>
                                <li className="flex items-start gap-3"><CheckCircle2 className="text-yellow-500 w-6 h-6 shrink-0" /> <span className="text-sm md:text-base">Mantenha rituais fechados (Office hours, lives esporádicas só para quem já forneceu dados primários).</span></li>
                            </ul>
                        </div>
                        <div className="bg-black border border-zinc-800 rounded-[28px] p-8 hover:border-zinc-700 transition-colors">
                            <h3 className="text-xl font-bold mb-8">Plataformas de Propriedade 2026</h3>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b border-zinc-900 pb-4">
                                    <span className="font-bold text-white">E-mail (Newsletter)</span>
                                    <span className="text-sm text-zinc-400 text-right">O clássico imortal.<br/>15-25% de taxa de abertura.</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-zinc-900 pb-4">
                                    <span className="font-bold text-[#FF00FF]">WhatsApp/Telegram</span>
                                    <span className="text-sm text-zinc-400 text-right">Notificação garantida.<br/>O Dark Social organizado.</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-zinc-900 pb-4">
                                    <span className="font-bold text-white">Softwares (Circle/Discord)</span>
                                    <span className="text-sm text-zinc-400 text-right">Receita Recorrente.<br/>Filtra superfãs comprometidos.</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-white">Broadcast (IG)</span>
                                    <span className="text-sm text-zinc-400 text-right">Sinalização de avisos e<br/>ofertas relâmpago.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Checklist de Ação - 30 Dias */}
             <section className="py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center text-[#FF00FF]">Checklist: Seus Primeiros 30 Dias</h2>

                    <div className="space-y-6">
                        <div className="bg-black border border-zinc-800 p-6 rounded-2xl">
                            <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><ArrowUpCircle className="text-zinc-500" /> Semana 1: Auditoria</h3>
                            <ul className="space-y-2 text-zinc-400 ml-8 list-disc">
                                <li>Audite sua autenticidade corporativa e discursos passados.</li>
                                <li>Analise as últimas 30 publicações via ótica de Sends/Saves.</li>
                                <li>Identifique seus atuais "canais de propriedade".</li>
                            </ul>
                        </div>
                        <div className="bg-black border border-zinc-800 p-6 rounded-2xl">
                            <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><ArrowUpCircle className="text-[#FF00FF]/50" /> Semana 2: Correção</h3>
                            <ul className="space-y-2 text-zinc-400 ml-8 list-disc">
                                <li>Crie/revitalize Newsletter ou grupo VIP.</li>
                                <li>Publique peça de Conteúdo Nível 5 (100% focado no Salvar+Enviar).</li>
                                <li>Crie material "lo-fi" de bastidores, abandonando estética extrema.</li>
                            </ul>
                        </div>
                        <div className="bg-black border border-zinc-800 p-6 rounded-2xl">
                            <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><ArrowUpCircle className="text-[#FF00FF]" /> Semana 3 & 4: Migração e Ativação</h3>
                            <ul className="space-y-2 text-zinc-400 ml-8 list-disc">
                                <li>Campanha de captação maciça orientada com recompensa de alto valor.</li>
                                <li>Envie material exclusivo para as novas bases de Owned Media.</li>
                                <li>Destaque membros, inicie conversas bidirecionais e agende o 1º evento exclusivo.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 p-8 border border-white/10 rounded-2xl bg-zinc-900/50 text-center">
                        <Lock className="w-8 h-8 text-white mx-auto mb-4" />
                        <p className="text-zinc-300 font-medium">O criador médio perde 80% da sua base caso mude de rede ou a rede afunde.<br/>O criador com Comunidade Proprietária leva <strong>100% dessa base consigo.</strong></p>
                    </div>
                </div>
            </section>

            <Footer />
            </div>
        </main>
    );
}

// Simple icon for the Motivation table missing from initial import
function Search(props: any) {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
}
