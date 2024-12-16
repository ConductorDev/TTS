"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface BacklightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowClassName?: string;
}

export function BacklightCard({ 
  children, 
  className,
  glowClassName,
  ...props 
}: BacklightCardProps) {
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
      return () => card.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-none border-2 border-primary/20",
        "before:absolute before:inset-0 before:-z-10 before:art-deco-border before:opacity-10",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div
        className={cn(
          "pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300",
          isHovered && "opacity-100",
          glowClassName || "bg-primary/20"
        )}
        style={{
          background: `radial-gradient(800px circle at ${x}px ${y}px, hsl(var(--primary) / 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}