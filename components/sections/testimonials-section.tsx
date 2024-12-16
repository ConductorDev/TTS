"use client";

import { BacklightCard } from "@/components/ui/backlight-card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The Train Station is more than just a venue - it's the heart of our musical community.",
    author: "Sarah Johnson",
    role: "Local Musician"
  },
  {
    quote: "There's something magical about the atmosphere here. It's where tradition meets the present.",
    author: "Mike Thompson",
    role: "Regular Patron"
  },
  {
    quote: "The best place to experience authentic Appalachian music. Every visit feels like coming home.",
    author: "Emily Davis",
    role: "Music Journalist"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <BacklightCard key={index} className="p-6 bg-card">
                <div className="space-y-4">
                  <Quote className="h-8 w-8 text-primary" />
                  <p className="text-lg italic">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </BacklightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}