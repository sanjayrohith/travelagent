"use client";

import { useState, useRef, type RefObject } from "react";
import HeroSection from "@/components/sections/hero";
import PackagesSection from "@/components/sections/packages";
import ContactSection from "@/components/sections/contact";
import BookingModal from "@/components/booking-modal";
import VehiclesSection from "@/components/sections/vehicles";

export type BookingItem = {
  id: string;
  name: string;
  type: 'Package' | 'Accommodation' | 'Vehicle';
};

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<BookingItem | null>(null);
  const [showVehicles, setShowVehicles] = useState(false);
  const vehiclesSectionRef: RefObject<HTMLElement> = useRef(null);


  const handleBookNow = (item: BookingItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handlePackageSelect = () => {
    setShowVehicles(true);
    setTimeout(() => {
      vehiclesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <HeroSection />
      <PackagesSection onSelectPackage={handlePackageSelect} />
      {showVehicles && <VehiclesSection ref={vehiclesSectionRef} onBookNow={handleBookNow} />}
      <ContactSection />
      <BookingModal
        isOpen={modalOpen}
        onOpenChange={setModalOpen}
        item={selectedItem}
      />
    </>
  );
}
