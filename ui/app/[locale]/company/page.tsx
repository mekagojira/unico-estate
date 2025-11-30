"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Navigation from "../../components/Navigation";
import Company from "../../components/Company";
import Footer from "../../components/Footer";
import { api, type CompanyInfo } from "@/lib/api";

// Disable SSR for this page to prevent hydration mismatches
const CompanyPageContent = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getCompanyInfo();
        setCompanyInfo(data);
      } catch (error) {
        console.error("Failed to fetch company info:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-gray-500">Loading...</div>
        </div>
      ) : (
        <>
          <Company companyInfo={companyInfo} />
          <Footer companyInfo={companyInfo} />
        </>
      )}
    </div>
  );
};

// Export with dynamic import to disable SSR
export default dynamic(() => Promise.resolve(CompanyPageContent), {
  ssr: false,
});
