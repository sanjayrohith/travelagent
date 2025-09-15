import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
      <DialogContent className="max-w-[90vw] w-full p-4 rounded-lg">
        <DialogHeader className="px-2">
          <DialogTitle className="font-headline">Select a Vehicle</DialogTitle>
          <DialogDescription>Swipe to see available cars for your trip.</DialogDescription>
        </DialogHeader>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {vehicles.map((vehicle) => (
              <CarouselItem key={vehicle.id} className="pl-4 basis-3/4 sm:basis-1/2">
                <div className="p-1">
                  <VehicleCard vehicle={vehicle} onBookNow={onBookNow} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex"/>
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
