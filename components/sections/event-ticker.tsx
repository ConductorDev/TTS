"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { getUpcomingEvents } from "@/lib/ticket-tailor";

const upcomingEvents = [
  "Tonight: Mountain String Band - Traditional Bluegrass",
  "Tomorrow: Sarah Johnson's Folk Revival",
  "This Weekend: Appalachian Guitar Workshop",
  "Next Week: Coal Country Blues Festival",
];

export function EventTicker() {
  const [events, setEvents] = useState<string[]>([
    "Loading upcoming events...",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchEvents = async () => {
      const upcomingEvents = await getUpcomingEvents();
      setEvents(upcomingEvents);
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [events.length]);

  return (
    <div className="fixed top-[64px] left-0 right-0 z-40 bg-primary text-primary-foreground py-1.5 overflow-hidden border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2">
          <ChevronRight className="h-4 w-4 animate-pulse" />
          <p className="text-sm font-medium animate-fade-in">
            {events[currentIndex]}
          </p>
        </div>
      </div>
    </div>
  );
}