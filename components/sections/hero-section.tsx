"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BacklightCard } from "@/components/ui/backlight-card";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/media/hero/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <BacklightCard className="relative z-10 text-center space-y-6 px-4 py-8 bg-background/40 backdrop-blur-sm max-w-2xl mx-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Welcome to The Train Station
        </h1>
        <p className="text-xl md:text-2xl text-white/90">
          Where Appalachian music comes alive in the heart of the mountains
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/events">View Upcoming Events</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </BacklightCard>
    </section>
  );
}