"use client";

import { useState } from "react";
import { BacklightCard } from "@/components/ui/backlight-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Ticket } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for signing up! Your 10% discount code will be sent to your email.");
    setEmail("");
  };

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <BacklightCard className="max-w-2xl mx-auto text-center p-8 space-y-6">
          <Ticket className="h-12 w-12 mx-auto text-primary" />
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Get 10% Off Your Next Ticket</h2>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for exclusive updates and special offers
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </form>
          <p className="text-sm text-muted-foreground">
            By subscribing, you agree to receive marketing emails from The Train Station
          </p>
        </BacklightCard>
      </div>
    </section>
  );
}