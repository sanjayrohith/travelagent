import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-banner');

  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className={cn("mb-4 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl", "font-headline")}>
          Discover Your Next Adventure
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
          Unforgettable travel packages designed for the modern explorer.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="#packages">Explore Packages</Link>
        </Button>
      </div>
    </section>
  );
}
