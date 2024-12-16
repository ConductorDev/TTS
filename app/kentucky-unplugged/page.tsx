import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ImageSlider } from "@/components/sections/image-slider";
import { Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

const kuImages = [
  {
    url: "/media/gallery/performances/KU1.jpg",
    alt: "Kentucky Unplugged Performance 1"
  },
  {
    url: "/media/gallery/performances/KU2.jpg",
    alt: "Kentucky Unplugged Performance 2"
  },
  {
    url: "/media/gallery/performances/KU3.jpg",
    alt: "Kentucky Unplugged Performance 3"
  },
  {
    url: "/media/gallery/performances/KU4.jpg",
    alt: "Kentucky Unplugged Performance 4"
  },
  {
    url: "/media/gallery/performances/KU5.jpg",
    alt: "Kentucky Unplugged Performance 5"
  },
  {
    url: "/media/gallery/performances/KU6.jpg",
    alt: "Kentucky Unplugged Performance 6"
  }
];

export default function KentuckyUnpluggedPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/media/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold">Kentucky Unplugged</h1>
          <p className="text-xl md:text-2xl">
            Experience the raw, authentic sound of Appalachian music in our intimate acoustic series.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" variant="default">
              <a href="https://buytickets.at/thetrainstation" target="_blank" rel="noopener noreferrer">
                Get Tickets
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Image Slider */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Kentucky Unplugged</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              An intimate acoustic series featuring Kentucky's finest musicians
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ImageSlider images={kuImages} autoPlayInterval={5000} />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">About the Series</h2>
              <p className="text-xl text-muted-foreground">
                Kentucky Unplugged celebrates the rich musical heritage of Appalachia through intimate acoustic performances.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Authentic Experience</h3>
                <p className="text-muted-foreground">
                  Every first and third Friday, we strip away the amplification and production to showcase the pure,
                  raw talent of Appalachian musicians. Experience the music as it was meant to be heard.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Local Talent</h3>
                <p className="text-muted-foreground">
                  We feature both established and emerging artists from the region, providing a platform
                  for the incredible musical talent that calls Appalachia home.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Intimate Setting</h3>
                <p className="text-muted-foreground">
                  Our venue provides the perfect intimate atmosphere for these special performances,
                  allowing you to connect with the music and artists in a meaningful way.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Community Focus</h3>
                <p className="text-muted-foreground">
                  More than just concerts, these events bring our community together to celebrate
                  and preserve our rich musical heritage.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <a href="https://buytickets.at/thetrainstation" target="_blank" rel="noopener noreferrer">
                  Get Tickets
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Booking Information</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Interested in performing at The Train Station? Get in touch with our booking team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Card className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">Kentucky Unplugged Booking</h3>
                  </div>
                  <p className="font-medium text-primary">Tim Branstetter</p>
                  <p className="text-muted-foreground">
                    For Kentucky Unplugged series inquiries and bookings
                  </p>
                  <a 
                    href="mailto:tim@kentuckyunplugged.com" 
                    className="text-blue-500 hover:text-blue-600 transition-colors block"
                  >
                    tim@kentuckyunplugged.com
                  </a>
                </div>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">General Booking</h3>
                  </div>
                  <p className="font-medium text-primary">Michelle Eidschun</p>
                  <p className="text-muted-foreground">
                    For all other performance and event inquiries
                  </p>
                  <a 
                    href="mailto:booking@thetrainstationcorbin.com" 
                    className="text-blue-500 hover:text-blue-600 transition-colors block"
                  >
                    booking@thetrainstationcorbin.com
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
