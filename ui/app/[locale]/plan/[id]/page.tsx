import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Navigation from '../../../components/Navigation';
import PlanDetail from '../../../components/PlanDetail';
import Footer from '../../../components/Footer';

const validPlanIds = ['simple', 'natural', 'designers'];

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = await getTranslations('services');
  
  if (!validPlanIds.includes(id)) {
    return {
      title: 'Plan Not Found',
    };
  }

  return {
    title: `${t(`${id}.title`)} | Uni-Co 株式会社`,
    description: t(`${id}.description`),
  };
}

export default async function PlanPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!validPlanIds.includes(id)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PlanDetail planId={id} />
      <Footer />
    </div>
  );
}

