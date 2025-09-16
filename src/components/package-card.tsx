import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Tag, Eye } from "lucide-react";
import type { Package } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type PackageCardProps = {
  package: Package;
  onSelectPackage: () => void;
  onSeeDetails: (pkg: Package) => void;
};

export default function PackageCard({ package: pkg, onSelectPackage, onSeeDetails }: PackageCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === pkg.imageId);

  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          {image && (
            <Image
              src={image.imageUrl}
              alt={pkg.title}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="mb-2 font-headline text-xl">{pkg.title}</CardTitle>
        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{pkg.duration}</span>
          </div>
          <div className="flex items-center gap-2 font-semibold text-foreground">
            <Tag className="h-4 w-4 text-primary" />
            <span>${pkg.price}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-2 p-4 pt-0">
        <Button
          onClick={() => onSeeDetails(pkg)}
          variant="outline"
        >
          <Eye className="mr-2 h-4 w-4" />
          See Details
        </Button>
           <Button
             onClick={onSelectPackage}
          className="bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Explore
        </Button>
      </CardFooter>
    </Card>
  );
}
