"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import type { BookingItem } from "@/app/page";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
      <DialogContent className="sm:max-w-md w-[90vw] rounded-lg">
        <DialogHeader className="text-center">
          <DialogTitle className="font-headline text-2xl">Book Your Travel Package</DialogTitle>
          <DialogDescription>
            Complete the form below to inquire about <br />
            <span className="font-semibold text-primary">{item?.name}</span>
          </DialogDescription>
        </DialogHeader>
        <form
          action="https://formsubmit.co/your-email@wanderlust.com"
          method="POST"
          onSubmit={handleSubmit}
          className="grid gap-4 pt-4"
        >
          {/* FormSubmit settings */}
          <input type="hidden" name="_subject" value={`New Booking Inquiry: ${item?.name}`} />
          <input type="hidden" name="_next" value={redirectUrl} />
          <input type="hidden" name="_captcha" value="false" />

          {/* Form fields */}
          <input type="hidden" name="Inquiry Item" value={`${item?.type}: ${item?.name} (ID: ${item?.id})`} />
          
          <div className="grid gap-1.5">
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" name="name" placeholder="Enter your full name" required />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" name="email" type="email" placeholder="Enter your email address" required />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" required/>
          </div>
           <div className="grid gap-1.5">
            <Label htmlFor="selected-package">Selected Package</Label>
            <Input id="selected-package" name="selected-package" value={item?.name || ''} readOnly className="bg-muted"/>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="message">Additional Message</Label>
            <Textarea id="message" name="message" placeholder="Any special requests or questions..." />
          </div>
          
          <DialogFooter className="gap-2 sm:justify-end mt-4">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-accent hover:bg-accent/90">
              Send Inquiry
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
