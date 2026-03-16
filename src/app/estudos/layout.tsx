import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Estudos e Pesquisas | Noiz Assessoria',
    description: 'Acesse o Hub de Materiais da Noiz Assessoria: Deep Research, tendências, infográficos e conteúdos para dominar o maketing digital e influência.',
    openGraph: {
        title: 'Estudos e Pesquisas | Noiz Assessoria',
        description: 'Acesse o Hub de Materiais da Noiz Assessoria: Deep Research, tendências, infográficos e análises.',
        url: 'https://noizassessoria.com/estudos',
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
