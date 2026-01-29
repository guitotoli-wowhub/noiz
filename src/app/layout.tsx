
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        template: '%s | Noiz Assessoria',
        default: 'Noiz Assessoria',
    },
    description: "Assessoria que gera resultados através de inteligência cultural e marketing de influência.",
    metadataBase: new URL('https://noizassessoria.com'),
    openGraph: {
        title: 'Noiz Assessoria',
        description: 'Assessoria que gera resultados através de inteligência cultural e marketing de influência.',
        url: 'https://noizassessoria.com',
        siteName: 'Noiz Assessoria',
        locale: 'pt_BR',
        type: 'website',
    },
    icons: {
        icon: '/favicon.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}
