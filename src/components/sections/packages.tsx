import { packages } from "@/lib/data";
import PackageCard from "@/components/package-card";
import type { BookingItem } from "@/app/page";

type PackagesSectionProps = {
  onBookNow: (item: BookingItem) => void;
};

export default function PackagesSection({ onBookNow }: PackagesSectionProps) {
  return (
    <section id="packages" className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Our Travel Packages
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Curated experiences for every type of traveler.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} onBookNow={onBookNow} />
          ))}
        </div>
      </div>
    </section>
  );
}
