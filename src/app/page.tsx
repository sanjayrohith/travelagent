"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/hero";
import PackagesSection from "@/components/sections/packages";
import AccommodationsSection from "@/components/sections/accommodations";
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

  const handleBookNow = (item: BookingItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <>
      <HeroSection />
      <PackagesSection onBookNow={handleBookNow} />
      <AccommodationsSection onBookNow={handleBookNow} />
      <VehiclesSection onBookNow={handleBookNow} />
      <ContactSection />
      <BookingModal
        isOpen={modalOpen}
        onOpenChange={setModalOpen}
        item={selectedItem}
      />
    </>
  );
}
