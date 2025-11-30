'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import Navigation from '../../../components/Navigation';
import ServiceDetail from '../../../components/ServiceDetail';
import Footer from '../../../components/Footer';
import { api, type Service, type CompanyInfo } from '@/lib/api';

const validServiceIds = ['sales', 'rental', 'management', 'foreignSupport'];

// Disable SSR for this page to prevent hydration mismatches
const ServicePageContent = () => {
  const params = useParams();
  const id = params?.id as string;
  const locale = (params?.locale as string) || 'jp';

  const [service, setService] = useState<Service | null>(null);
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFoundError, setNotFoundError] = useState(false);

  useEffect(() => {
    if (!id || !validServiceIds.includes(id)) {
      setNotFoundError(true);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const [serviceData, companyData] = await Promise.all([
          api.getService(id, locale).catch(() => null),
          api.getCompanyInfo().catch(() => null),
        ]);
        
        setService(serviceData);
        setCompanyInfo(companyData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, locale]);

  if (notFoundError) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Service Not Found</h1>
            <p className="text-gray-600">The service you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer companyInfo={companyInfo} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-gray-500">Loading...</div>
        </div>
      ) : (
        <>
          <ServiceDetail serviceId={id} service={service} locale={locale} />
          <Footer companyInfo={companyInfo} />
        </>
      )}
    </div>
  );
};

// Export with dynamic import to disable SSR
export default dynamic(() => Promise.resolve(ServicePageContent), {
  ssr: false,
});

