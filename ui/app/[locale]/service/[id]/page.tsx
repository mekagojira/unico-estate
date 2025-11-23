import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Navigation from '../../../components/Navigation';
import ServiceDetail from '../../../components/ServiceDetail';
import Footer from '../../../components/Footer';

const validServiceIds = ['sales', 'rental', 'management', 'foreignSupport'];

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = await getTranslations('services');
  
  if (!validServiceIds.includes(id)) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${t(`${id}.title`)} | Uni-Co 株式会社`,
    description: t(`${id}.description`),
  };
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!validServiceIds.includes(id)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ServiceDetail serviceId={id} />
      <Footer />
    </div>
  );
}

