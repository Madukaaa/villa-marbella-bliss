import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { HomeGallerySection } from "@/components/home/HomeGallerySection";
import { Location } from "@/components/shared/Location";
import { HomeAmenities } from "@/components/home/HomeAmenities";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <IntroSection />
      <HomeGallerySection />
      <HomeAmenities />
      <Location />
    </main>
  );
}
