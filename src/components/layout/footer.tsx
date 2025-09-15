import Link from "next/link";
import { Github, Twitter, Linkedin, Mountain } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted py-8 text-muted-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2 text-foreground">
              <Mountain className="h-6 w-6 text-primary" />
              <span className="font-headline text-xl font-bold">Wanderlust</span>
            </Link>
            <p className="text-sm">Your next adventure awaits.</p>
          </div>
          <div>
            <h3 className="mb-4 font-headline text-lg font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@wanderlust.com" className="hover:text-primary">
                  contact@wanderlust.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-primary">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-headline text-lg font-semibold text-foreground">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
           <div>
            <h3 className="mb-4 font-headline text-lg font-semibold text-foreground">Admin Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/admin/image-qa" className="hover:text-primary">
                  Image Quality Assurance
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Wanderlust Packages. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
