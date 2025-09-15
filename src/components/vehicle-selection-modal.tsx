"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { vehicles } from "@/lib/data";
import VehicleCard from "@/components/vehicle-card";
import type { BookingItem } from "@/app/page";

type VehicleSelectionModalProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onBookNow: (item: BookingItem) => void;
};

export default function VehicleSelectionModal({ isOpen, onOpenChange, onBookNow }: VehicleSelectionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] lg:max-w-4xl w-full p-4 rounded-lg border-0">
        <DialogHeader className="p-4 pb-2 text-center">
          <DialogTitle className="font-headline text-3xl">Select a Vehicle</DialogTitle>
          <DialogDescription>Swipe or scroll to see available cars for your trip.</DialogDescription>
        </DialogHeader>
        <div className="p-4">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {vehicles.map((vehicle) => (
                <CarouselItem key={vehicle.id} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <VehicleCard vehicle={vehicle} onBookNow={onBookNow} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
}
