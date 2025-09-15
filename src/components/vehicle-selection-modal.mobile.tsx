"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { vehicles } from "@/lib/data";
import VehicleCard from "@/components/vehicle-card";
import type { BookingItem } from "@/app/page";

// Mobile detection hook
import { useIsMobile } from "@/hooks/use-mobile";

type VehicleSelectionModalProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onBookNow: (item: BookingItem) => void;
};

export default function VehicleSelectionModalMobile({ isOpen, onOpenChange, onBookNow }: VehicleSelectionModalProps) {
  const isMobile = useIsMobile();
  if (!isMobile) return null;

  const [carouselApi, setCarouselApi] = React.useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [totalSlides, setTotalSlides] = React.useState(vehicles.length);

  React.useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };
    setTotalSlides(carouselApi.scrollSnapList().length);
    onSelect();
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);

    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onSelect);
    };
  }, [carouselApi]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-full w-full h-[100dvh] p-0 rounded-none">
        <div className="sticky top-0 z-10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <DialogHeader className="px-4 py-3 text-center">
            <DialogTitle className="font-headline text-xl">Select a Vehicle</DialogTitle>
            <DialogDescription>Swipe or use arrows to view cars</DialogDescription>
          </DialogHeader>
        </div>
        <div className="relative w-full flex-1 h-[calc(100dvh-96px)]">
          <Carousel
            opts={{
              align: "center",
              containScroll: "keepSnaps",
              skipSnaps: false,
              loop: true,
              dragFree: false,
            }}
            className="w-full h-full"
            setApi={setCarouselApi}
          >
            <CarouselContent className="h-full ml-0">
              {vehicles.map((vehicle) => (
                <CarouselItem
                  key={vehicle.id}
                  className="pl-0 flex justify-center items-start pt-2 basis-[320px]"
                >
                  <div className="w-full mx-auto px-0">
                    <VehicleCard vehicle={vehicle} onBookNow={onBookNow} compact />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-50 bg-white shadow-md border border-gray-200" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-50 bg-white shadow-md border border-gray-200" />
          </Carousel>
          {totalSlides > 1 && (
            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 px-4 pb-[env(safe-area-inset-bottom)]">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => carouselApi?.scrollTo(i)}
                  className={
                    "h-2 w-2 rounded-full transition-colors " +
                    (i === currentIndex ? "bg-primary" : "bg-muted-foreground/30")
                  }
                />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
