import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'O Estado da Influência (Parte 1) | Noiz Assessoria',
    description: 'A Crise da Queixa, a morte do Social e as novas regras do Marketing em 2026. Saiba como marcas podem sobreviver em meio à desconfiança digital.',
    openGraph: {
        title: 'O Estado da Influência (Parte 1) | Noiz Assessoria',
        description: 'A Crise da Queixa e a morte do Social: Descubra as novas regras da influência.',
        url: 'https://noizassessoria.com/materiais/estado-da-influencia',
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
