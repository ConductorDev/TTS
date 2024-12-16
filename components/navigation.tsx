"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { TicketButton } from "@/components/ticket-button";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SubItem {
  href: string;
  label: string;
  description?: string;
  external?: boolean;
}

interface Route {
  href: string;
  label: string;
  subItems?: SubItem[];
}

const routes: {
  left: Route[];
  right: Route[];
} = {
  left: [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    {
      href: "/about",
      label: "About",
      subItems: [
        { 
          href: "/about", 
          label: "About Us",
          description: "Learn about our mission and history"
        },
        { 
          href: "/about/team", 
          label: "Our Team",
          description: "Meet the people behind The Train Station"
        },
        { 
          href: "/about/rentals", 
          label: "Event Rentals",
          description: "Host your next event in our historic venue"
        },
      ],
    },
    {
      href: "/kentucky-unplugged",
      label: "Kentucky Unplugged",
      subItems: [
        { 
          href: "/kentucky-unplugged", 
          label: "About the Series",
          description: "Our intimate acoustic series every 1st & 3rd Friday"
        },
        { 
          href: "https://buytickets.at/thetrainstation", 
          label: "Get Tickets",
          external: true,
          description: "Secure your spot at our next performance"
        },
      ],
    },
  ],
  right: [
    { href: "/contact", label: "Contact" },
  ]
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/media/logos/monochrome/5.png"
            alt="The Train Station"
            width={40}
            height={40}
            className="h-10 w-auto dark:invert"
            priority
          />
          <span className="font-bold text-lg">The Train Station</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Left Routes */}
          <div className="flex items-center gap-4">
            {routes.left.map((route) => (
              <div key={route.href} className="relative group">
                <Link
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === route.href && "text-primary"
                  )}
                >
                  {route.label}
                </Link>
                
                {route.subItems && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="bg-popover rounded-md shadow-md p-4 w-[280px]">
                      {route.subItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "block px-4 py-2 text-sm rounded-md transition-colors hover:bg-muted",
                            pathname === item.href && "bg-muted"
                          )}
                        >
                          <div className="font-medium">{item.label}</div>
                          {item.description && (
                            <div className="text-xs text-muted-foreground mt-1">
                              {item.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Routes */}
          <div className="flex items-center gap-4">
            {routes.right.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.href && "text-primary"
                )}
              >
                {route.label}
              </Link>
            ))}
            <TicketButton />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center gap-2">
          <TicketButton />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-4">
                {[...routes.left, ...routes.right].map((route) => (
                  <div key={route.href} className="space-y-3">
                    <Link
                      href={route.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary block",
                        pathname === route.href && "text-primary"
                      )}
                      onClick={() => !route.subItems && setIsOpen(false)}
                    >
                      {route.label}
                    </Link>
                    
                    {route.subItems && (
                      <div className="pl-4 space-y-2">
                        {route.subItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "block text-sm text-muted-foreground hover:text-primary",
                              pathname === item.href && "text-primary"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}