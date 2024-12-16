import { TicketWidget } from "@/components/ticket-widget";
import { TicketButton } from "@/components/ticket-button";

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold">Upcoming Events</h1>
            <TicketButton />
          </div>
          <TicketWidget />
        </div>
      </div>
    </div>
  );
}