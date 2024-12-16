import { Card } from "@/components/ui/card";
import { Building2, Music, Users, CalendarRange } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function VenuePage() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="space-y-6">
            <h1 className="text-4xl font-bold">Our Venue</h1>
            <p className="text-xl text-muted-foreground">
              From the historic Felts Music Barn to today's The Train Station, our venue carries forward
              a rich legacy of Appalachian music and community gathering.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Venue interior"
                className="rounded-lg object-cover w-full h-[400px]"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Historic Legacy</h2>
              <p className="text-muted-foreground">
                Originally known as the Felts Music Barn, our venue has been a cornerstone of the local
                music scene for generations. Today, as The Train Station, we continue to honor that
                legacy while creating new memories and musical traditions.
              </p>
              <p className="text-muted-foreground">
                Our crown jewel is our spectacular 1,200 square foot dance floor, perfect for everything
                from traditional folk dancing to contemporary celebrations.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 space-y-4">
              <Building2 className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">Venue Capacity</h3>
              <p className="text-muted-foreground">Up to 300 guests comfortably accommodated</p>
            </Card>
            <Card className="p-6 space-y-4">
              <Music className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">Professional Sound</h3>
              <p className="text-muted-foreground">State-of-the-art sound system and acoustics</p>
            </Card>
            <Card className="p-6 space-y-4">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">Dance Floor</h3>
              <p className="text-muted-foreground">1,200 sq ft professional dance floor</p>
            </Card>
            <Card className="p-6 space-y-4">
              <CalendarRange className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">Full Service</h3>
              <p className="text-muted-foreground">Bar service and event staff available</p>
            </Card>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl font-semibold">Venue Rental</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Private Events</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Full venue access</li>
                  <li>• Professional sound system</li>
                  <li>• Bar service available</li>
                  <li>• Setup and cleanup included</li>
                  <li>• Event coordination assistance</li>
                  <li>• Flexible hours</li>
                </ul>
                <Button asChild className="w-full mt-4">
                  <Link href="/contact">Inquire About Rental</Link>
                </Button>
              </Card>
              <Card className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Artist Bookings</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Professional stage setup</li>
                  <li>• Sound engineer available</li>
                  <li>• Green room access</li>
                  <li>• Marketing support</li>
                  <li>• Ticket sales management</li>
                  <li>• Flexible arrangements</li>
                </ul>
                <Button asChild className="w-full mt-4">
                  <Link href="/contact">Submit Booking Request</Link>
                </Button>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}