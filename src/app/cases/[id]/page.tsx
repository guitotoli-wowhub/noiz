import CaseDetail from '@/components/CaseDetail';
import { caseData } from '@/data/cases';
import type { Metadata } from 'next';

type Props = {
    params: Promise<{ id: string }>
};

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { id } = await params;
    const caseId = id as keyof typeof caseData;
    const caseInfo = caseData[caseId];

    if (!caseInfo) {
        return {
            title: 'Case não encontrado',
        };
    }

    return {
        title: `${caseInfo.title} | Noiz Assessoria`,
        description: caseInfo.subtitle,
        openGraph: {
            title: caseInfo.title,
            description: caseInfo.subtitle,
            images: [caseInfo.heroImage.src], // StaticImageData has .src
        },
    };
}

export default async function CasePage({ params }: Props) {
    const { id } = await params;
    return <CaseDetail caseId={id} />;
}

export async function generateStaticParams() {
    return Object.keys(caseData).map((id) => ({
        id,
    }));
}
