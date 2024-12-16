"use client";

import { Button } from "@/components/ui/button";
import { BacklightCard } from "@/components/ui/backlight-card";
import Image from "next/image";
import {
  Calendar,
  Clock,
  Mail,
  Music2,
  UtensilsCrossed,
  Wine,
  PartyPopper,
  DollarSign,
  CalendarClock,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

const venueImages = [
  {
    url: "/media/gallery/venue/Private_Lounge2.jpg",
    alt: "Intimate Lounge Setting"
  },
  {
    url: "/media/gallery/venue/Seating.jpg",
    alt: "Main Seating Area"
  },
  {
    url: "/media/gallery/venue/Stage.jpg",
    alt: "Main Performance Stage"
  },
  {
    url: "/media/gallery/venue/StageBW.jpg",
    alt: "Stage in Classic Black & White"
  },
  {
    url: "/media/gallery/venue/venue2.jpg",
    alt: "Venue Interior"
  },
  {
    url: "/media/gallery/venue/ViewFromStage.jpg",
    alt: "Performer's View from Stage"
  }
];

export default function RentalsPage() {
  return (
    <AnimatePresence>
      <div className="min-h-screen">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              layout
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Event Rentals</h1>
              <p className="text-xl text-muted-foreground text-center mb-16">
                Transform your special occasion in our unique, historic venue
              </p>

              {/* Venue Gallery */}
              <motion.div 
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16"
                variants={container}
                initial="hidden"
                animate="show"
                layout
              >
                {venueImages.map((image, index) => (
                  <motion.div key={index} variants={item} layout>
                    <BacklightCard className="group overflow-hidden">
                      <div className="aspect-square relative">
                        <Image
                          src={image.url}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </BacklightCard>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="grid gap-8 md:grid-cols-2 mb-16"
                variants={container}
                initial="hidden"
                animate="show"
                layout
              >
                <motion.div variants={item} layout>
                  <BacklightCard className="h-full hover:scale-[1.02] transition-transform duration-300">
                    <div className="space-y-6 p-6">
                      <div className="flex items-center gap-3">
                        <Clock className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-semibold">Weekday Rates</h2>
                      </div>
                      <ul className="space-y-4 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-primary" />
                          First hour: $150
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          Each additional hour: $50
                        </li>
                        <li className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-primary" />
                          Cleaning fee: $100
                        </li>
                      </ul>
                    </div>
                  </BacklightCard>
                </motion.div>

                <motion.div variants={item} layout>
                  <BacklightCard className="h-full hover:scale-[1.02] transition-transform duration-300">
                    <div className="space-y-6 p-6">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-semibold">Weekend Rates</h2>
                      </div>
                      <ul className="space-y-4 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <PartyPopper className="h-4 w-4 text-primary" />
                          Friday night: $750
                        </li>
                        <li className="flex items-center gap-2">
                          <CalendarClock className="h-4 w-4 text-primary" />
                          Saturday (entire day): $1,250
                        </li>
                        <li className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-primary" />
                          Cleaning fee: $100
                        </li>
                      </ul>
                    </div>
                  </BacklightCard>
                </motion.div>
              </motion.div>

              <motion.div 
                className="space-y-8 mb-16"
                variants={container}
                initial="hidden"
                animate="show"
                layout
              >
                <h2 className="text-2xl font-semibold text-center">Additional Services</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      name: "Catering",
                      icon: UtensilsCrossed,
                      description: "Custom menus for your event"
                    },
                    {
                      name: "DJ Services",
                      icon: Music2,
                      description: "Professional sound & lighting"
                    },
                    {
                      name: "Bar Service",
                      icon: Wine,
                      description: "Licensed bartenders & setup"
                    },
                    {
                      name: "Event Planning",
                      icon: PartyPopper,
                      description: "Full-service coordination"
                    }
                  ].map((service) => (
                    <motion.div key={service.name} variants={item} layout>
                      <BacklightCard className="h-full hover:scale-[1.02] transition-transform duration-300">
                        <div className="p-6 text-center space-y-4">
                          <service.icon className="h-8 w-8 mx-auto text-primary" />
                          <div>
                            <p className="font-medium">{service.name}</p>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                            <p className="text-sm text-primary mt-2">Contact for pricing</p>
                          </div>
                        </div>
                      </BacklightCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="space-y-8 text-center"
                variants={container}
                initial="hidden"
                animate="show"
                layout
              >
                <motion.div variants={item} className="space-y-4" layout>
                  <h2 className="text-2xl font-semibold">Booking Information</h2>
                  <BacklightCard className="max-w-lg mx-auto hover:scale-[1.02] transition-transform duration-300">
                    <div className="p-6 space-y-4">
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-center gap-2 justify-center">
                          <DollarSign className="h-4 w-4 text-primary" />
                          25% deposit required to secure your date
                        </li>
                        <li className="flex items-center gap-2 justify-center">
                          <Calendar className="h-4 w-4 text-primary" />
                          Full payment due 14 days before event
                        </li>
                        <li className="flex items-center gap-2 justify-center">
                          <Sparkles className="h-4 w-4 text-primary" />
                          Flexible payment plans available
                        </li>
                      </ul>
                    </div>
                  </BacklightCard>
                </motion.div>

                <motion.div variants={item} layout>
                  <div className="max-w-3xl mx-auto mt-16">
                    <div className="text-center space-y-4">
                      <h2 className="text-3xl font-bold">Get in Touch</h2>
                      <p className="text-xl text-muted-foreground">
                        Ready to book your event? Contact us today.
                      </p>
                    </div>
                    <div className="mt-8 space-y-4 text-center">
                      <p>
                        <a 
                          href="tel:9107039264" 
                          className="text-blue-500 hover:text-blue-600 transition-colors"
                        >
                          (910) 703-9264
                        </a>
                      </p>
                      <p>
                        <a 
                          href="mailto:info@thetrainstationcorbin.com" 
                          className="text-blue-500 hover:text-blue-600 transition-colors"
                        >
                          info@thetrainstationcorbin.com
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        4672 5th Street Road<br />
                        Corbin, KY 40701
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </AnimatePresence>
  );
}
