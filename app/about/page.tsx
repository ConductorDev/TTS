import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12 space-y-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="space-y-6">
            <h1 className="text-4xl font-bold">About The Train Station</h1>
            <p className="text-xl text-muted-foreground">
              Located in the heart of Appalachia, The Train Station is more than just a music venue
              — it's a celebration of our region's rich musical heritage and vibrant culture.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/media/gallery/venue/3.png"
                alt="The Train Station venue interior"
                width={800}
                height={600}
                className="rounded-lg object-cover w-full h-[400px]"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Our Story</h2>
              <p className="text-muted-foreground">
                While our name might suggest locomotives, The Train Station is actually a testament
                to the transformative power of Appalachian music. Our venue has become a cornerstone
                of the local music scene, providing a platform for both established and emerging
                artists to share their craft.
              </p>
              <p className="text-muted-foreground">
                From traditional bluegrass to contemporary folk, our stage has hosted countless
                memorable performances that celebrate the diverse sounds of the mountains.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">
              We're dedicated to preserving and promoting Appalachian music while fostering a
              community that appreciates its evolution and influence on contemporary artists.
              Through live performances, workshops, and community events, we aim to keep this
              rich musical tradition alive for generations to come.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/events">View Events</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </section>

          <section className="py-16 bg-muted/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Visit Us</h3>
                  <p className="text-muted-foreground">
                    4672 5th Street Road
                    <br />
                    Corbin, KY 40701
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Call Us</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:9107039264" className="hover:text-primary">
                      (910) 703-9264
                    </a>
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Email Us</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@thetrainstationcorbin.com" className="hover:text-primary">
                      info@thetrainstationcorbin.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center space-y-6">
                <h3 className="text-xl font-semibold">Follow Us</h3>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://www.facebook.com/thetrainstationcorbin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Facebook className="h-8 w-8" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/the_train_station_corbin_ky/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Instagram className="h-8 w-8" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@thetrainstationcorbin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <svg
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.971-1.166-1.956-1.301-2.833h.004c-.06-.37-.087-.757-.087-1.147v-.003h-3.923v11.767c0 .513-.191 1.053-.533 1.521a2.71 2.71 0 0 1-2.18 1.096 2.717 2.717 0 0 1-2.717-2.715 2.717 2.717 0 0 1 2.717-2.715c.314 0 .614.054.894.153v-3.93a6.61 6.61 0 0 0-.894-.062 6.65 6.65 0 0 0-6.651 6.647 6.65 6.65 0 0 0 6.651 6.647c3.672 0 6.651-2.977 6.651-6.647v-5.725c1.356.987 2.952 1.514 4.653 1.514v-3.929c-.466 0-.918-.059-1.349-.17Z"/>
                    </svg>
                    <span className="sr-only">TikTok</span>
                  </a>
                  <a
                    href="https://linkedin.com/company/the-train-station-corbin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Linkedin className="h-8 w-8" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}