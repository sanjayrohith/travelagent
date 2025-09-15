import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign } from "lucide-react";
import type { Accommodation } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { BookingItem } from "@/app/page";

type AccommodationCardProps = {
  accommodation: Accommodation;
  onBookNow: (item: BookingItem) => void;
};

export default function AccommodationCard({ accommodation, onBookNow }: AccommodationCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === accommodation.imageId);

  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          {image && (
            <Image
              src={image.imageUrl}
              alt={accommodation.name}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="mb-2 font-headline text-xl">{accommodation.name}</CardTitle>
        <div className="mb-4 flex flex-wrap gap-2">
          {accommodation.amenities.slice(0, 3).map((amenity) => (
            <Badge key={amenity} variant="secondary">
              {amenity}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <DollarSign className="h-4 w-4" />
          <span>{accommodation.priceRange}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => onBookNow({ id: accommodation.id, name: accommodation.name, type: "Accommodation" })}
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}
