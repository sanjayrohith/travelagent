import { accommodations } from "@/lib/data";
import AccommodationCard from "@/components/accommodation-card";
import type { BookingItem } from "@/app/page";

type AccommodationsSectionProps = {
  onBookNow: (item: BookingItem) => void;
};

export default function AccommodationsSection({ onBookNow }: AccommodationsSectionProps) {
  return (
    <section id="accommodations" className="bg-muted py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Featured Accommodations
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Handpicked hotels and resorts for a comfortable stay.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {accommodations.map((acc) => (
            <AccommodationCard key={acc.id} accommodation={acc} onBookNow={onBookNow} />
          ))}
        </div>
      </div>
    </section>
  );
}
