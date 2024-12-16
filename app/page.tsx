import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { UpcomingEventsSection } from "@/components/sections/upcoming-events-section";
import { FeaturedArtistSection } from "@/components/sections/featured-artist";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { GoogleReviews } from '@/components/sections/google-reviews';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <UpcomingEventsSection />
      <FeaturedArtistSection />
      <TestimonialsSection />
      <GallerySection />
    </>
  );
}