import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import type { Vehicle } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { BookingItem } from "@/app/page";

type VehicleCardProps = {
  vehicle: Vehicle;
  onBookNow: (item: BookingItem) => void;
};

export default function VehicleCard({ vehicle, onBookNow }: VehicleCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === vehicle.imageId);

  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          {image && (
            <Image
              src={image.imageUrl}
              alt={vehicle.name}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="mb-2 font-headline text-xl">{vehicle.name}</CardTitle>
        <CardDescription>{vehicle.description}</CardDescription>
        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{vehicle.capacity}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => onBookNow({ id: vehicle.id, name: vehicle.name, type: "Vehicle" })}
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}
