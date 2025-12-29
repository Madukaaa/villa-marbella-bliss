import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Showcase } from "@/components/sections/Showcase";
import { Amenities } from "@/components/sections/Amenities";
import { Gallery } from "@/components/sections/Gallery";
import { Location } from "@/components/sections/Location";
import { BookingCTA } from "@/components/sections/BookingCTA";

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
