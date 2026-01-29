import { MetadataRoute } from 'next';
import { caseData } from '@/data/cases';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://noizassessoria.com';

    // Static routes
    const routes = [
        '',
        '/cases',
        '/servicos/marketing-de-influencia',
        '/servicos/consultoria-de-growth',
        '/servicos/tecnologia-e-automacao',
        '/contato',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic case routes
    const caseRoutes = Object.keys(caseData).map((slug) => ({
        url: `${baseUrl}/cases/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...caseRoutes];
}
