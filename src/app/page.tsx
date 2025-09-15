"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/hero";
import PackagesSection from "@/components/sections/packages";
import ContactSection from "@/components/sections/contact";
import BookingModal from "@/components/booking-modal";
import VehicleSelectionModal from "@/components/vehicle-selection-modal";
import type { Package } from "@/lib/data";
import PackageDetailsModal from "@/components/package-details-modal";

export type BookingItem = {
  id: string;
  name: string;
  type: 'Package' | 'Accommodation' | 'Vehicle';
};

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [vehicleModalOpen, setVehicleModalOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<BookingItem | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);


  const handleBookNow = (item: BookingItem) => {
    setSelectedItem(item);
    setVehicleModalOpen(false);
    setBookingModalOpen(true);
  };

  const handlePackageSelect = () => {
    setVehicleModalOpen(true);
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
      <BookingModal
        isOpen={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
        item={selectedItem}
      />
      <VehicleSelectionModal
          isOpen={vehicleModalOpen}
          onOpenChange={setVehicleModalOpen}
          onBookNow={handleBookNow}
      />
      <PackageDetailsModal
        isOpen={detailsModalOpen}
        onOpenChange={setDetailsModalOpen}
        package={selectedPackage}
        onBookNow={() => {
            if(selectedPackage) {
                setDetailsModalOpen(false);
                handlePackageSelect()
            }
        }}
      />
    </>
  );
}
