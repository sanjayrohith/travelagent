"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { Package, PackageDay } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

type PackageDetailsModalProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  package: Package | null;
  onBookNow: () => void;
};

const ItineraryDay = ({ day }: { day: PackageDay }) => {
  const image = PlaceHolderImages.find((img) => img.id === day.imageId);

  return (
    <Card className="overflow-hidden">
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image.imageUrl}
            alt={day.title}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}
      <CardContent className="p-4">
        <h3 className="font-headline text-lg font-semibold">Day {day.day}: {day.title}</h3>
        <p className="text-muted-foreground mt-2 text-sm">{day.activities}</p>
      </CardContent>
    </Card>
  )
}

export default function PackageDetailsModal({ isOpen, onOpenChange, package: pkg, onBookNow }: PackageDetailsModalProps) {
  if (!pkg) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-[90vw] p-0 rounded-lg">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="font-headline text-2xl">{pkg.title}</DialogTitle>
          <DialogDescription>Swipe to see the day-by-day itinerary.</DialogDescription>
        </DialogHeader>
        <div className="px-6 py-4">
          <Carousel>
            <CarouselContent>
              {pkg.itinerary.map((day) => (
                <CarouselItem key={day.day}>
                  <div className="p-1">
                    <ItineraryDay day={day} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
        <DialogFooter className="p-6 pt-2">
          <Button onClick={onBookNow} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            Book Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
