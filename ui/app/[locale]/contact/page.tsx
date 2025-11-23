import { getTranslations } from 'next-intl/server';
import Navigation from '../../components/Navigation';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export async function generateMetadata() {
  const t = await getTranslations('contact');
  
  return {
    title: `${t('title')} | Uni-Co 株式会社`,
    description: t('subtitle'),
  };
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Contact />
      <Footer />
    </div>
  );
}
