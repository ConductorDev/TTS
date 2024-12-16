"use client";

import { BacklightCard } from "@/components/ui/backlight-card";
import { TicketWidget } from "@/components/ticket-widget";

export function UpcomingEventsSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <BacklightCard className="max-w-4xl mx-auto bg-background p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <TicketWidget />
        </BacklightCard>
      </div>
    </section>
  );
}