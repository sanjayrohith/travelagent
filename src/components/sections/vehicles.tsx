import { forwardRef } from 'react';
import { vehicles } from "@/lib/data";
import VehicleCard from "@/components/vehicle-card";
import type { BookingItem } from "@/app/page";

type VehiclesSectionProps = {
  onBookNow: (item: BookingItem) => void;
};

const VehiclesSection = forwardRef<HTMLElement, VehiclesSectionProps>(({ onBookNow }, ref) => {
  return (
    <section id="vehicles" ref={ref} className="bg-muted py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Our Fleet
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Travel in comfort with our range of available vehicles.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} onBookNow={onBookNow} />
          ))}
        </div>
      </div>
    </section>
  );
});

VehiclesSection.displayName = "VehiclesSection";

export default VehiclesSection;
