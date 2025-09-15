"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/hero";
import PackagesSection from "@/components/sections/packages";
import ContactSection from "@/components/sections/contact";
import BookingModal from "@/components/booking-modal";
import VehicleSelectionModal from "@/components/vehicle-selection-modal";

export type BookingItem = {
  id: string;
  name: string;
  type: 'Package' | 'Accommodation' | 'Vehicle';
};

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [vehicleModalOpen, setVehicleModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<BookingItem | null>(null);

  const handleBookNow = (item: BookingItem) => {
    setSelectedItem(item);
    setVehicleModalOpen(false);
    setBookingModalOpen(true);
  };

  const handlePackageSelect = () => {
    setVehicleModalOpen(true);
  };

  return (
    <>
      <HeroSection />
      <PackagesSection onSelectPackage={handlePackageSelect} />
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
    </>
  );
}
