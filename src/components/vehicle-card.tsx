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
  compact?: boolean;
};

export default function VehicleCard({ vehicle, onBookNow, compact = false }: Readonly<VehicleCardProps>) {
  const image = PlaceHolderImages.find((img) => img.id === vehicle.imageId);
  const imgClass = (() => {
    if (compact) return "object-contain";
    if (vehicle.imageId === "vehicle-tempo-12" || vehicle.imageId === "vehicle-tempo-17" || vehicle.imageId === "vehicle-sedan") return "object-contain";
    if (vehicle.imageId === "vehicle-ertiga") return "object-contain w-[calc(100%+10px)] h-[calc(100%+10px)]";
    if (vehicle.imageId === "vehicle-innova") return "object-contain w-[calc(100%-20px)] h-[calc(100%-20px)]";
    return "object-cover";
  })();

  return (
  <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <div className={`relative w-full ${compact ? "h-32" : "h-48"}`}>
          {image && (
            <Image
              src={image.imageUrl}
              alt={vehicle.name}
              fill
              className={imgClass}
              data-ai-hint={image.imageHint}
            />
          )}
        </div>
      </CardHeader>
      <CardContent className={`flex-grow ${compact ? "p-3" : "p-4"}`}>
        <CardTitle className={`mb-1 font-headline ${compact ? "text-base" : "text-xl"}`}>{vehicle.name}</CardTitle>
        <CardDescription className={`${compact ? "text-xs" : ""}`}>{vehicle.description}</CardDescription>
        <div className={`mt-2 flex items-center gap-2 ${compact ? "text-xs" : "text-sm"} text-muted-foreground`}>
            <Users className="h-4 w-4" />
            <span>{vehicle.capacity}</span>
        </div>
      </CardContent>
      <CardFooter className={`${compact ? "p-3" : "p-4"} pt-0`}>
        <Button
          onClick={() => onBookNow({ id: vehicle.id, name: vehicle.name, type: "Vehicle" })}
          className={`w-full bg-accent text-accent-foreground hover:bg-accent/90 ${compact ? "h-9 text-sm" : ""}`}
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}
