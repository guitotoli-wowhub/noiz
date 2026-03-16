import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'O Estado da Influência (Parte 2) | Noiz Assessoria',
    description: 'A Fogueira Digital, as novas regras algorítmicas do Instagram/TikTok e guias para Escada de Envolvimento N1-N5 na economia do "Member Get Member".',
    openGraph: {
        title: 'O Estado da Influência (Parte 2) | Noiz Assessoria',
        description: 'A Fogueira Digital e a nova influência: Escada de Envolvimento e Comunidades Proprietárias.',
        url: 'https://noizassessoria.com/materiais/estado-da-influencia-parte-2',
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
