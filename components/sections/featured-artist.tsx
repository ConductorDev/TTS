"use client";

import { BacklightCard } from "@/components/ui/backlight-card";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy } from "lucide-react";
import Image from "next/image";

export function FeaturedArtistSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Band in Residency</h2>
          <BacklightCard className="grid md:grid-cols-2 gap-8 p-8">
            <div className="aspect-square relative">
              <Image
                src="/media/artists/codyleemeece.jpeg"
                alt="Cody Lee Meece"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Cody Lee Meece & The Poor Excuses</h3>
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="h-5 w-5" />
                  <p>Every 1st & 3rd Saturday</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1 text-primary">
                    <Trophy className="h-4 w-4" />
                    <span className="text-sm">Lexington Music Awards "Best Album"</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary">
                    <Trophy className="h-4 w-4" />
                    <span className="text-sm">Appy Award "Best Guitarist"</span>
                  </div>
                </div>
              </div>
              <p className="text-lg">
                A one-of-a-kind singer-songwriter from Eubank, Kentucky, Cody Lee Meece brings his incredible 
                self-taught mastery of the guitar and unique "Raunchy Tonk" style to The Train Station. 
                With influences ranging from Stevie Ray Vaughn to Waylon Jennings, his performances blend 
                endearing banter, raw vulnerability, and unapologetic honky tonk rock.
              </p>
              <div className="text-sm text-muted-foreground">
                Performing with The Poor Excuses:
                <ul className="list-disc list-inside mt-1">
                  <li>Daniel Stroud (Bass)</li>
                  <li>Logan Henry (Pedal Steel Guitar)</li>
                  <li>Severn Edmondson (Percussion)</li>
                </ul>
              </div>
              <div className="flex gap-4">
                <Button asChild size="lg">
                  <a href="https://buytickets.at/thetrainstation" target="_blank" rel="noopener noreferrer">
                    Get Tickets
                  </a>
                </Button>
              </div>
            </div>
          </BacklightCard>
        </div>
      </div>
    </section>
  );
}