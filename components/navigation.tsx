"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { TicketButton } from "@/components/ticket-button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

interface ListItemProps {
  href: string;
  title: string;
  children?: React.ReactNode;
}

function ListItem({ href, title, children }: ListItemProps) {
  const pathname = usePathname();
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            pathname === href && "bg-accent"
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="mt-1 text-sm leading-tight text-muted-foreground">{children}</p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export function Navigation() {
  const pathname = usePathname();
  
  const leftRoutes = [
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
  ];

  const rightRoutes = [
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-8">
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

          <NavigationMenu>
            <NavigationMenuList>
              {leftRoutes.map((route) =>
                route.subItems ? (
                  <NavigationMenuItem key={route.href}>
                    <NavigationMenuTrigger
                      className={cn(
                        pathname?.startsWith(route.href) && "bg-accent"
                      )}
                    >
                      {route.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        {route.subItems.map((item) => (
                          <ListItem
                            key={item.href}
                            href={item.href}
                            title={item.label}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={route.href}>
                    <Link href={route.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          pathname === route.href && "bg-accent"
                        )}
                      >
                        {route.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {rightRoutes.map((route) => (
                <NavigationMenuItem key={route.href}>
                  <Link href={route.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        pathname === route.href && "bg-accent"
                      )}
                    >
                      {route.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <TicketButton />
        </div>
      </div>
    </div>
  );
}