"use client";

import { useState, useRef, type RefObject } from "react";
import HeroSection from "@/components/sections/hero";
import PackagesSection from "@/components/sections/packages";
import ContactSection from "@/components/sections/contact";
import BookingModal from "@/components/booking-modal";
import VehiclesSection from "@/components/sections/vehicles";
import { useIsMobile } from "@/hooks/use-mobile";
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
  const [showVehicles, setShowVehicles] = useState(false);
  const vehiclesSectionRef: RefObject<HTMLElement> = useRef(null);
  const isMobile = useIsMobile();


  const handleBookNow = (item: BookingItem) => {
    setSelectedItem(item);
    if (isMobile) {
      setVehicleModalOpen(false);
    }
    setBookingModalOpen(true);
  };

  const handlePackageSelect = () => {
    if (isMobile) {
      setVehicleModalOpen(true);
    } else {
      setShowVehicles(true);
      setTimeout(() => {
        vehiclesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <HeroSection />
      <PackagesSection onSelectPackage={handlePackageSelect} />
      {showVehicles && !isMobile && <VehiclesSection ref={vehiclesSectionRef} onBookNow={handleBookNow} />}
      <ContactSection />
      <BookingModal
        isOpen={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
        item={selectedItem}
      />
      {isMobile && (
        <VehicleSelectionModal
            isOpen={vehicleModalOpen}
            onOpenChange={setVehicleModalOpen}
            onBookNow={handleBookNow}
        />
      )}
    </>
  );
}
