"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Share2, AlertCircle, CheckCircle2, TrendingUp, Save, BarChart, ShieldAlert, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function EbookEstadoDaInfluencia() {
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
                                Preencha os dados abaixo para ler o material "O Estado da Influência".
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
                                    <option value="Outros">Outros</option>
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

            <div className={isMounted && !hasAccess ? 'filter blur-[8px] pointer-events-none select-none opacity-40 transition-all duration-700 h-screen overflow-hidden' : 'transition-all duration-700'}>
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[#FF00FF]/5 mix-blend-screen pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF00FF]/10 rounded-full blur-[120px] pointer-events-none" />
                
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-block px-4 py-2 border border-[#FF00FF]/30 rounded-full bg-[#FF00FF]/10 text-[#FF00FF] text-sm md:text-base font-medium mb-6 backdrop-blur-sm">
                        O Estado da Influência - Parte 01
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Lições de 2025<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-purple-500">
                            para dominar 2026
                        </span>
                    </h1>
                </div>
            </section>

            {/* Prólogo / A Grande Recalibração */}
            <section className="py-20 bg-zinc-900/50">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-[#FF00FF]">A Grande Recalibração</h2>
                    
                    <div className="space-y-4 mb-8 text-lg text-zinc-300">
                        <div className="flex items-start gap-3">
                            <span className="text-xl">📷</span>
                            <p className="line-through decoration-red-500/50">Posta "bastidores" cuidadosamente encenados</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-xl">⚖️</span>
                            <p className="line-through decoration-red-500/50">"Vulnerabilidades" aprovadas pelo jurídico</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-xl">📢</span>
                            <p className="line-through decoration-red-500/50">Faz "humanização" com roteiro de agência</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-xl">❌</span>
                            <p className="line-through decoration-red-500/50">Apenas "erros" que não afetam a sua reputação</p>
                        </div>
                    </div>
                    
                    <div className="p-6 border border-zinc-800 rounded-2xl bg-black/50 backdrop-blur-sm relative overflow-hidden group">
                         <div className="absolute top-0 right-0 p-4 opacity-10">
                            <AlertCircle className="w-24 h-24" />
                        </div>
                        <p className="text-xl md:text-2xl font-medium leading-relaxed relative z-10">
                            "O público de 2026 detecta essa falsidade em milissegundos. A crise de confiança global significa que qualquer cheiro de teatro corporativo é punido com o cancelamento ou, pior, com a <span className="text-[#FF00FF]">indiferença glacial</span>."
                        </p>
                    </div>
                </div>
            </section>

            {/* Dados da Desconfiança */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Por que isso importa</h2>
                        <p className="text-xl text-zinc-400">Os dados da desconfiança (Edelman Trust Barometer 2025)</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 border border-zinc-800 hover:border-[#FF00FF]/50 transition-colors rounded-2xl bg-zinc-900/40">
                            <div className="text-6xl font-bold text-[#FF00FF] mb-4">61%</div>
                            <p className="text-lg text-zinc-300">das pessoas globalmente sentem "grievance" (queixa profunda) contra o sistema.</p>
                        </div>
                        <div className="p-8 border border-zinc-800 hover:border-red-500/50 transition-colors rounded-2xl bg-zinc-900/40">
                            <div className="text-6xl font-bold text-red-500 mb-4">40%</div>
                            <p className="text-lg text-zinc-300">aprovam ativismo hostil contra marcas que consideram falsas.</p>
                        </div>
                        <div className="p-8 border border-zinc-800 hover:border-yellow-500/50 transition-colors rounded-2xl bg-zinc-900/40">
                            <div className="text-6xl font-bold text-yellow-500 mb-4">53%</div>
                            <p className="text-lg text-zinc-300">da Geração Z está disposta a usar táticas agressivas contra marcas que traem valores.</p>
                        </div>
                    </div>
                    
                    <div className="mt-12 text-center p-6 border border-red-500/30 bg-red-500/10 rounded-xl">
                        <ShieldAlert className="w-8 h-8 text-red-500 mx-auto mb-4" />
                        <p className="text-xl font-medium text-red-200">
                            Este não é um ambiente onde você pode "fingir até conseguir".<br/>
                            É um ambiente onde a falsidade tem consequências devastadoras.
                        </p>
                    </div>
                </div>
            </section>

            {/* Autenticidade Ética vs Estética */}
            <section className="py-24 bg-zinc-900/30">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">O que é Autenticidade Ética?</h2>
                        <p className="text-xl text-zinc-400">Significa que sua comunicação externa é um reflexo direto de suas práticas internas.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Fake */}
                        <div className="p-8 border border-red-500/20 rounded-2xl bg-black/40">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
                                    <AlertCircle size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-red-400">Autenticidade Falsa</h3>
                                <span className="text-sm text-zinc-500">(Estética)</span>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-zinc-400">
                                    <span className="text-red-500 mt-1">❌</span>
                                    <span>Postar sobre sustentabilidade enquanto sua cadeia produtiva é opaca.</span>
                                </li>
                                <li className="flex gap-3 text-zinc-400">
                                    <span className="text-red-500 mt-1">❌</span>
                                    <span>Celebrar diversidade no feed enquanto a liderança é homogênea.</span>
                                </li>
                                <li className="flex gap-3 text-zinc-400">
                                    <span className="text-red-500 mt-1">❌</span>
                                    <span>Falar de transparência sem publicar métricas reais.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Real */}
                        <div className="p-8 border border-green-500/20 rounded-2xl bg-black/40">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                                    <CheckCircle2 size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-green-400">Autenticidade Real</h3>
                                <span className="text-sm text-zinc-500">(Ética)</span>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-zinc-300">
                                    <span className="text-green-500 mt-1">✅</span>
                                    <span>Mostrar o produto que falhou antes de lançar o que funcionou.</span>
                                </li>
                                <li className="flex gap-3 text-zinc-300">
                                    <span className="text-green-500 mt-1">✅</span>
                                    <span>Documentar o processo de correção de um erro em tempo real.</span>
                                </li>
                                <li className="flex gap-3 text-zinc-300">
                                    <span className="text-green-500 mt-1">✅</span>
                                    <span>Admitir limitações antes que o cliente descubra.</span>
                                </li>
                                <li className="flex gap-3 text-zinc-300">
                                    <span className="text-green-500 mt-1">✅</span>
                                    <span>Publicar dados difíceis (como pegada de carbono, gaps salariais).</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Patagonia */}
            <section className="py-20">
                 <div className="max-w-4xl mx-auto px-6">
                    <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden border border-[#FF00FF]/20 bg-gradient-to-br from-zinc-900 to-black">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF00FF] to-transparent" />
                        
                        <div className="mb-6 inline-block px-3 py-1 bg-white text-black text-sm font-bold tracking-widest uppercase rounded">Case</div>
                        <h3 className="text-3xl font-bold mb-6">Patagonia: Autenticidade como Vantagem Competitiva</h3>
                        <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                            A Patagonia não posta sobre sustentabilidade. <strong className="text-white">Ela é sustentável.</strong> A marca processa empresas que mentem sobre impacto ambiental, incentiva clientes a não comprar produtos novos e conserta produtos gratuitamente.
                        </p>
                        <p className="text-xl font-medium text-[#FF00FF]">
                            O Resultado? Uma das marcas de maior confiança global e crescimento de receita consistente ano após ano.
                        </p>
                        <div className="mt-8 pt-8 border-t border-zinc-800">
                            <p className="text-lg font-bold">
                                💡 A Lição: quando você é autêntico, você não precisa convencer ninguém. Seus clientes se tornam seus advogados.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ações Práticas */}
            <section className="py-24 bg-zinc-900/50">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-[#FF00FF]">Ações Práticas para 2026</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold">1</div>
                                <h3 className="text-xl font-bold">Audite sua autenticidade</h3>
                            </div>
                            <ul className="space-y-2 text-zinc-400 ml-14">
                                <li>• Liste todas as promessas de marca dos últimos 12 meses.</li>
                                <li>• Para cada promessa, documente a ação concreta que a comprova.</li>
                                <li>• Se não houver ação, remova a promessa ou crie a ação.</li>
                            </ul>
                        </div>

                        <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold">2</div>
                                <h3 className="text-xl font-bold">Adote a estética Lo-Fi</h3>
                            </div>
                            <ul className="space-y-2 text-zinc-400 ml-14">
                                <li>• Use vídeos sem edição pesada. Um iPhone e luz natural comunicam verdade.</li>
                                <li>• Grave respondendo perguntas sem roteiro.</li>
                                <li>• Mostre o escritório bagunçado, a reunião difícil. Imperfeição = honestidade emocional.</li>
                            </ul>
                        </div>

                        <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold">3</div>
                                <h3 className="text-xl font-bold">CEO visível ou marca sem rosto</h3>
                            </div>
                            <ul className="space-y-2 text-zinc-400 ml-14">
                                <li>• Consumidores querem ver quem está por trás das decisões.</li>
                                <li>• Um rosto humano gera 3x mais confiança que um logo.</li>
                                <li>• Se o CEO não quer aparecer, crie porta-vozes reais da equipe.</li>
                            </ul>
                        </div>

                        <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold">4</div>
                                <h3 className="text-xl font-bold">Crie um "banco de boa vontade"</h3>
                            </div>
                            <ul className="space-y-2 text-zinc-400 ml-14">
                                <li>• Antes da crise, construa crédito de confiança.</li>
                                <li>• Admita pequenos erros publicamente para normalizar vulnerabilidade.</li>
                                <li>• Quando a crise grande vier, você terá reserva de confiança para sacar.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-yellow-200">
                        <strong>⚠️ Alerta: </strong>
                        A autenticidade não é uma campanha. É uma postura permanente. Se você "liga" a autenticidade apenas quando conveniente, seu público perceberá a manipulação e a punição será severa.
                    </div>
                </div>
            </section>

             {/* Dark Social */}
            <section className="py-24 relative overflow-hidden">
                 <div className="absolute inset-0 bg-zinc-950 pointer-events-none" />
                 <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF00FF]/10 to-transparent pointer-events-none" />

                 <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">O poder do "Dark Social"</h2>
                            <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                                A mudança mais radical de 2025 foi a migração da influência do feed público para as conversas privadas. O <strong className="text-[#FF00FF]">WhatsApp, Telegram, DMs do Instagram</strong> é onde a verdadeira persuasão acontece agora.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="p-4 border border-zinc-800 rounded-lg bg-black/50">
                                    <div className="flex items-center gap-3 text-zinc-400 mb-2">
                                        <TrendingUp className="text-[#FF00FF]" size={20} />
                                        <span>Tempo nas Redes</span>
                                    </div>
                                    <p className="text-lg">Caiu para 2h21min diários (retornando a níveis pré-2019).</p>
                                </div>
                                <div className="p-4 border border-zinc-800 rounded-lg bg-black/50">
                                    <div className="flex items-center gap-3 text-zinc-400 mb-2">
                                        <BarChart className="text-[#FF00FF]" size={20} />
                                        <span>Motivação: Manter contato</span>
                                    </div>
                                    <p className="text-lg">Caiu para apenas 50,8% (era +70% em 2020).</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 border border-zinc-800 rounded-2xl bg-zinc-900/60 backdrop-blur">
                            <h3 className="text-2xl font-bold mb-6 text-white border-b border-zinc-800 pb-4">Por que Curtidas Mentiram para Você</h3>
                            <p className="text-zinc-300 mb-6">O algoritmo do Instagram confirmou em 2025: compartilhamentos (sends) são o sinal definitivo de relevância. Mais importante que curtidas, comentários e até watch time.</p>
                            
                            <div className="space-y-4">
                                <p className="font-medium text-[#FF00FF]">Quando alguém envia seu post, ela está dizendo:</p>
                                <ul className="space-y-3">
                                    <li className="flex gap-3 text-lg">
                                        <Share2 className="text-zinc-500 shrink-0 mt-1" size={20} /> 
                                        <span>"Isso me representa"</span>
                                    </li>
                                    <li className="flex gap-3 text-lg">
                                        <Share2 className="text-zinc-500 shrink-0 mt-1" size={20} /> 
                                        <span>"Isso é útil para você"</span>
                                    </li>
                                    <li className="flex gap-3 text-lg">
                                        <Share2 className="text-zinc-500 shrink-0 mt-1" size={20} /> 
                                        <span>"Isso merece sua atenção"</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-8 pt-4 border-t border-zinc-800 text-sm text-zinc-400 uppercase tracking-wider font-bold">
                                É um endosso pessoal. É social currency.
                            </div>
                        </div>
                    </div>
                 </div>
            </section>

             {/* Hierarquia de Valor */}
            <section className="py-24 bg-zinc-900/30">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">A Hierarquia do Valor de Conteúdo</h2>
                        <p className="text-xl text-zinc-400">Nem todo conteúdo é criado igual. Existe uma hierarquia clara de valor.</p>
                    </div>

                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#FF00FF] before:via-[#FF00FF]/50 before:to-transparent">
                        
                        {/* Nível 5 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-black bg-[#FF00FF] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-xl font-bold">N5</div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-[#FF00FF]/50 bg-black/50 backdrop-blur-sm">
                                <div className="flex items-center gap-2 mb-2 text-[#FF00FF]">
                                    <Save size={18} /> <Share2 size={18} />
                                </div>
                                <h3 className="font-bold text-xl mb-2 text-white">Salvável e Compartilhável</h3>
                                <p className="text-zinc-400 text-sm mb-4">Pessoas salvam para consultar E enviam para outras. O objetivo para 2026.</p>
                                <div className="text-sm bg-zinc-900 rounded p-3 text-zinc-300">
                                    Guias passo-a-passo • Listas de ferramentas • Frameworks visuais
                                </div>
                            </div>
                        </div>

                         {/* Nível 4 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-black bg-purple-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">N4</div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50">
                                <div className="flex items-center gap-2 mb-2 text-purple-400">
                                    <Save size={18} />
                                </div>
                                <h3 className="font-bold text-xl mb-2">Salvável</h3>
                                <p className="text-zinc-400 text-sm mb-4">Tem valor de referência. Pessoas voltam a ele.</p>
                                <div className="text-sm text-zinc-500">
                                    Tutoriais técnicos • Templates editáveis • Checklist de processos
                                </div>
                            </div>
                        </div>

                        {/* Nível 3 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-black bg-zinc-700 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">N3</div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50">
                                <div className="flex items-center gap-2 mb-2 text-zinc-400">
                                    <Share2 size={18} />
                                </div>
                                <h3 className="font-bold text-xl mb-2">Compartilhável</h3>
                                <p className="text-zinc-400 text-sm mb-4">Gera identificação/humor. Enviado em DM, mas não revisitado.</p>
                                <div className="text-sm text-zinc-500">
                                    Memes • Hot takes controversas • Stories emocionantes
                                </div>
                            </div>
                        </div>

                         {/* Nível 2 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-black bg-zinc-800 text-zinc-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm font-bold">N2</div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-zinc-800/50 bg-black">
                                <h3 className="font-bold text-xl mb-2 text-zinc-500">Engajável</h3>
                                <p className="text-zinc-500 text-sm mb-4">Gera curtida ou comentário, mas não é guardado.</p>
                                <div className="text-sm text-zinc-600 line-through">
                                    Posts motivacionais genéricos • Fotos bonitas sem contexto
                                </div>
                            </div>
                        </div>

                         {/* Nível 1 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-black bg-zinc-900 text-zinc-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-xs font-bold">N1</div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-zinc-900 bg-black">
                                <h3 className="font-bold text-lg mb-2 text-zinc-600">Consumível</h3>
                                <p className="text-zinc-600 text-sm mb-4">Apenas rolado. Não deixa marca. Ruído.</p>
                                <div className="text-xs text-zinc-700">
                                    Flyers de promoção • Anúncios disfarçados
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

             {/* Formatos & Teste */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 relative p-8 rounded-3xl overflow-hidden bg-black border border-zinc-800">
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#FF00FF] to-transparent opacity-50" />
                                <h3 className="text-2xl font-bold mb-6">O teste do "Enviaria para a minha mãe?"</h3>
                                <p className="text-zinc-400 mb-6">Antes de publicar qualquer coisa, faça este teste mental: "Eu enviaria este conteúdo para minha mãe, meu melhor amigo ou meu sócio?"</p>
                                <div className="space-y-3 pt-6 border-t border-zinc-900">
                                    <p className="font-bold text-white mb-2">Se a reposta for não, pergunte-se:</p>
                                    <ul className="text-zinc-500 space-y-2 text-sm">
                                        <li>• Não é útil o suficiente?</li>
                                        <li>• Não é relevante o suficiente?</li>
                                        <li>• Não me representa?</li>
                                        <li>• É envergonhante ou genérico?</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <h3 className="text-3xl font-bold mb-8">Formatos de alto compartilhamento em 2026</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="p-6 border border-zinc-800 bg-zinc-900/30 rounded-xl hover:border-[#FF00FF]/30 transition-colors">
                                    <div className="text-2xl mb-4">📣</div>
                                    <h4 className="font-bold text-lg mb-2">1. Carrosséis Educativos</h4>
                                    <p className="text-zinc-400 text-sm">8-10 slides de puro valor. Design limpo. Cada slide pode ser um screenshot isolado.</p>
                                </div>
                                <div className="p-6 border border-zinc-800 bg-zinc-900/30 rounded-xl hover:border-[#FF00FF]/30 transition-colors">
                                    <div className="text-2xl mb-4">📣</div>
                                    <h4 className="font-bold text-lg mb-2">2. Vídeos "Salvadores de Tempo"</h4>
                                    <p className="text-zinc-400 text-sm">Tutoriais de 30-60s "Como fazer X em Y seg". Direto ao ponto e replicável.</p>
                                </div>
                                <div className="p-6 border border-zinc-800 bg-zinc-900/30 rounded-xl hover:border-[#FF00FF]/30 transition-colors">
                                    <div className="text-2xl mb-4">📣</div>
                                    <h4 className="font-bold text-lg mb-2">3. Listas de Recursos</h4>
                                    <p className="text-zinc-400 text-sm">"10 ferramentas..." ou "5 livros...". Valor concentrado que funciona como bookmark.</p>
                                </div>
                                <div className="p-6 border border-zinc-800 bg-zinc-900/30 rounded-xl hover:border-[#FF00FF]/30 transition-colors">
                                    <div className="text-2xl mb-4">📣</div>
                                    <h4 className="font-bold text-lg mb-2">4. Frameworks Visuais</h4>
                                    <p className="text-zinc-400 text-sm">Transformam conceitos complexos em imagens compartilháveis (mapas, processos).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Ações Práticas Finais & Insight */}
             <section className="py-24 bg-zinc-900/30 border-t border-zinc-800">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">Checklist Final para 2026</h2>
                    
                    <div className="space-y-4 mb-20">
                        <div className="flex items-start gap-4 p-4 border border-zinc-800 rounded-lg bg-black">
                            <CheckCircle2 className="text-[#FF00FF] shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-lg">1. Audite seus últimos 30 posts</h4>
                                <p className="text-zinc-400 text-sm">Identifique quantos foram salvos e compartilhados. Replique o padrão dos melhores.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 border border-zinc-800 rounded-lg bg-black">
                            <CheckCircle2 className="text-[#FF00FF] shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-lg">2. Crie uma "Biblioteca de Valor"</h4>
                                <p className="text-zinc-400 text-sm">Produza pelo menos 4 peças Nível 5 por mês. Atualize esse conteúdo periodicamente.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 border border-zinc-800 rounded-lg bg-black">
                            <CheckCircle2 className="text-[#FF00FF] shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-lg">3. Facilite o compartilhamento</h4>
                                <p className="text-zinc-400 text-sm">Adicione CTAs claros como "Salve este post" ou crie versões específicas para facilitar o save.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 border border-zinc-800 rounded-lg bg-black">
                            <CheckCircle2 className="text-[#FF00FF] shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-lg">4. Incentive o Dark Social</h4>
                                <p className="text-zinc-400 text-sm">Crie automações por DM ("Comente X para receber Y"). Monitore DMs como métrica de influência real.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="inline-block p-1 rounded-2xl bg-gradient-to-br from-[#FF00FF] to-purple-800">
                            <div className="bg-black p-8 md:p-12 rounded-[14px]">
                                <h3 className="text-2xl font-bold text-[#FF00FF] mb-6">Insight Primordial</h3>
                                <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light mb-8">
                                    "Em 2026, as marcas mais inteligentes estão medindo <strong className="text-white font-bold">Share Rate</strong> (compartilhamentos por alcance) como a métrica primária de sucesso de conteúdo."
                                </p>
                                <div className="text-sm font-bold uppercase tracking-widest text-zinc-500">
                                    Se seu Share Rate é menor que 2%, seu conteúdo não está gerando valor suficiente.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
            </div>
        </main>
    );
}
