import { Hero } from "@/components/home/Hero";
import { About } from "@/components/about/About";
import { Showcase } from "@/components/shared/Showcase";
import { Amenities } from "@/components/shared/Amenities";
import { Gallery } from "@/components/gallery/Gallery";
import { Location } from "@/components/shared/Location";
import { BookingCTA } from "@/components/shared/BookingCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Showcase />
      <Amenities />
      <Gallery />
      <BookingCTA />
    </main>
  );
}
