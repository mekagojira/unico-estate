"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import Navigation from "../../components/Navigation";
import ServicesList from "../../components/ServicesList";
import Footer from "../../components/Footer";
import { api, type Service, type CompanyInfo } from "@/lib/api";

// Disable SSR for this page to prevent hydration mismatches
const ServicesPageContent = () => {
  const params = useParams();
  const locale = (params?.locale as string) || "jp";

  const [services, setServices] = useState<Service[]>([]);
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesData, companyData] = await Promise.all([
          api.getServices(true, locale).catch(() => []),
          api.getCompanyInfo().catch(() => null),
        ]);

        setServices(servicesData);
        setCompanyInfo(companyData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [locale]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-gray-500">Loading...</div>
        </div>
      ) : (
        <>
          <ServicesList services={services} />
          <Footer companyInfo={companyInfo} />
        </>
      )}
    </div>
  );
};

// Export with dynamic import to disable SSR
export default dynamic(() => Promise.resolve(ServicesPageContent), {
  ssr: false,
});
