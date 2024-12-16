"use client";

import { Calendar, Music, Users } from "lucide-react";
import { BacklightCard } from "@/components/ui/backlight-card";

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Calendar,
              title: "Regular Events",
              description: "Weekly performances featuring the best in Appalachian music"
            },
            {
              icon: Music,
              title: "Local Artists",
              description: "Supporting and showcasing talented musicians from the region"
            },
            {
              icon: Users,
              title: "Community Focus",
              description: "Building connections through the power of music"
            }
          ].map((feature, index) => (
            <BacklightCard 
              key={index} 
              className="p-6 bg-card"
            >
              <div className="text-center space-y-4">
                <feature.icon className="mx-auto h-12 w-12" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </BacklightCard>
          ))}
        </div>
      </div>
    </section>
  );
}