"use client";

import * as React from "react";
import { vehicles } from "@/lib/data";
import VehicleCard from "@/components/vehicle-card";
import BookingModal from "@/components/booking-modal";
import type { BookingItem } from "@/app/page";

export default function VehiclesPage() {
  const [bookingModalOpen, setBookingModalOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<BookingItem | null>(null);

  const handleBookNow = (item: BookingItem) => {
    setSelectedItem(item);
    setBookingModalOpen(true);
  };

  return (
    <main className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 text-center md:mb-12">
          <h1 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">Select Your Vehicle</h1>
          <p className="mt-2 text-muted-foreground">Browse available cars and book the one that fits your trip.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onBookNow={handleBookNow}
            />
          ))}
        </div>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
        item={selectedItem}
      />
    </main>
  );
}
