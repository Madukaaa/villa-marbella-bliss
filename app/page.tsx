import { Hero } from "@/components/home/Hero";
import { About } from "@/components/about/About";
import { Showcase } from "@/components/shared/Showcase";
import { Amenities } from "@/components/shared/Amenities";
import { HomeGallerySection } from "@/components/home/HomeGallerySection";
import { Location } from "@/components/shared/Location";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Showcase />
      <Amenities />
      <HomeGallerySection />
      <Location />
    </main>
  );
}
