"use client";

import { BacklightCard } from "@/components/ui/backlight-card";
import Image from "next/image";
import { cn } from "@/lib/utils";

const galleryImages = {
  performances: [
    {
      url: "/media/gallery/performances/2024-03-26 (1).jpg",
      alt: "Live performance at The Train Station"
    },
    {
      url: "/media/gallery/performances/2024-04-04.jpg",
      alt: "Musicians performing at The Train Station"
    },
    {
      url: "/media/gallery/performances/ER3_8324.jpeg",
      alt: "Live concert at The Train Station"
    },
    {
      url: "/media/gallery/performances/458984894_122155231166052273_7822940152316204508_n.jpg",
      alt: "Performance night at The Train Station"
    },
    {
      url: "/media/gallery/performances/1.png",
      alt: "Live music at The Train Station"
    }
  ]
};

export function GallerySection() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.performances.map((image, index) => (
              <BacklightCard key={index} className="group overflow-hidden">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}