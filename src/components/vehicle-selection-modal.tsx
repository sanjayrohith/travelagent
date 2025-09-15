"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext } from "@/components/ui/carousel";
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
      <DialogContent className="max-w-4xl w-[95vw] p-0 rounded-lg">
        <DialogHeader className="p-4 pb-2 text-center">
          <DialogTitle className="font-headline text-3xl">Select a Vehicle</DialogTitle>
          <DialogDescription>Swipe or scroll to see available cars for your trip.</DialogDescription>
        </DialogHeader>
        <div className="p-4">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full relative"
          >
            <CarouselContent>
              {vehicles.map((vehicle) => (
                <CarouselItem
                  key={vehicle.id}
                  className="flex justify-center items-center w-full"
                >
                  <div className="w-full max-w-full px-0 mx-auto">
                    <VehicleCard vehicle={vehicle} onBookNow={onBookNow} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-50 bg-white shadow-lg border border-gray-200" />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
}
