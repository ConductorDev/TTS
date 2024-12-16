"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface TicketButtonProps {
  className?: string;
}

export function TicketButton({ className }: TicketButtonProps) {
  return (
    <a 
      href="https://buytickets.at/thetrainstation" 
      title="Buy tickets for The Train Station"
      target="_blank"
      rel="noopener noreferrer"
      className={cn("inline-block hover:opacity-90 transition-opacity", className)}
    >
      <Image
        src="https://app.tickettailor.com/images/btns/bt_bk.gif"
        alt="Buy tickets for The Train Station"
        width={118}
        height={27}
        priority
      />
    </a>
  );
}