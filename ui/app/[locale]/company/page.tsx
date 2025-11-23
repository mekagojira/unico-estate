import { getTranslations } from 'next-intl/server';
import Navigation from '../../components/Navigation';
import Company from '../../components/Company';
import Footer from '../../components/Footer';

export async function generateMetadata() {
  const t = await getTranslations('company');
  
  return {
    title: `${t('title')} | Uni-Co 株式会社`,
    description: t('introduction1'),
  };
}

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Company />
      <Footer />
    </div>
  );
}
