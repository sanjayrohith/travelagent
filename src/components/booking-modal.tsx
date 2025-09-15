"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import type { BookingItem } from "@/app/page";
import { useEffect, useState } from "react";

type BookingModalProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  item: BookingItem | null;
};

export default function BookingModal({ isOpen, onOpenChange, item }: BookingModalProps) {
  const { toast } = useToast();
  const [redirectUrl, setRedirectUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRedirectUrl(window.location.href);
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Basic client-side validation
    const form = event.currentTarget;
    const name = form.elements.namedItem('name') as HTMLInputElement;
    const email = form.elements.namedItem('email') as HTMLInputElement;

    if (!name.value || !email.value) {
      toast({
        title: "Incomplete Form",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      event.preventDefault();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline">Book Your Trip</DialogTitle>
          <DialogDescription>
            Fill out the form below to inquire about "{item?.name}".
          </DialogDescription>
        </DialogHeader>
        <form
          action="https://formsubmit.co/your-email@wanderlust.com" // IMPORTANT: Replace with your email address
          method="POST"
          onSubmit={handleSubmit}
          className="grid gap-4 py-4"
        >
          {/* FormSubmit settings */}
          <input type="hidden" name="_subject" value={`New Booking Inquiry: ${item?.name}`} />
          <input type="hidden" name="_next" value={redirectUrl} />
          <input type="hidden" name="_captcha" value="false" />

          {/* Form fields */}
          <input type="hidden" name="Inquiry Item" value={`${item?.type}: ${item?.name} (ID: ${item?.id})`} />
          
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">Name</label>
            <Input id="name" name="name" className="col-span-3" required />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="email" className="text-right">Email</label>
            <Input id="email" name="email" type="email" className="col-span-3" required />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="phone" className="text-right">Phone</label>
            <Input id="phone" name="phone" type="tel" className="col-span-3" />
          </div>
          <Button type="submit" className="w-full mt-4 bg-accent hover:bg-accent/90">
            Submit Inquiry
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
