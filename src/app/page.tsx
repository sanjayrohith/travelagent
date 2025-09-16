"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import HeroSection from "@/components/sections/hero";
import PackagesSection from "@/components/sections/packages";
import ContactSection from "@/components/sections/contact";
import type { Package } from "@/lib/data";
import PackageDetailsModal from "@/components/package-details-modal";

export type BookingItem = {
  id: string;
  name: string;
  type: 'Package' | 'Accommodation' | 'Vehicle';
};

export default function Home() {
  const router = useRouter();
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);


  const handlePackageSelect = () => {
  router.push("/vehicles");
  };
  
  const handleSeeDetails = (pkg: Package) => {
    setSelectedPackage(pkg);
    setDetailsModalOpen(true);
  };

  return (
    <>
      <HeroSection />
      <PackagesSection onSelectPackage={handlePackageSelect} onSeeDetails={handleSeeDetails} />
      <ContactSection />
      <PackageDetailsModal
        isOpen={detailsModalOpen}
        onOpenChange={setDetailsModalOpen}
        package={selectedPackage}
        onBookNow={() => {
      if(selectedPackage) {
        setDetailsModalOpen(false);
        router.push("/vehicles");
      }
        }}
      />
    </>
  );
}
