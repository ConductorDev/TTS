import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/media/logos/primary/7.png"
                alt="The Train Station Logo"
                width={80}
                height={70}
                className="w-20 h-14 object-contain"
                priority
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Experience the heart of Appalachian music in our unique venue.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                4672 5th Street Road
                <br />
                Corbin, KY 40701
              </p>
              <p className="text-sm text-muted-foreground">
                <a href="tel:9107039264" className="hover:text-primary">
                  (910) 703-9264
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:info@thetrainstationcorbin.com" className="hover:text-primary">
                  info@thetrainstationcorbin.com
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="/events" className="text-sm text-muted-foreground hover:text-primary">Events</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/kentucky-unplugged" className="text-sm text-muted-foreground hover:text-primary">Kentucky Unplugged</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/thetrainstationcorbin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <FacebookIcon className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/the_train_station_corbin_ky/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <InstagramIcon className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@thetrainstationcorbin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <svg
                  className="h-6 w-6"
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
                <LinkedinIcon className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} The Train Station. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}