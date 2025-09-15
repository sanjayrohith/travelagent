import { Phone, Mail, MapPin, Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            We&apos;d love to hear from you. Plan your next trip with us!
          </p>
        </div>
        <div className="grid gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-headline text-lg font-semibold">Email</h3>
                <a href="mailto:contact@wanderlust.com" className="text-muted-foreground hover:text-primary">
                  contact@wanderlust.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-headline text-lg font-semibold">Phone</h3>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-headline text-lg font-semibold">Office</h3>
                <p className="text-muted-foreground">123 Adventure Ave, Wanderlust City, WL 12345</p>
              </div>
            </div>
            <div className="flex space-x-4 pt-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                    <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                    <Github className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-6 w-6" />
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
