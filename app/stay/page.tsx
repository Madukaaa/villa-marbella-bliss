import { Showcase } from "@/components/sections/Showcase";
import { Amenities } from "@/components/sections/Amenities";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Villas } from "@/components/sections/Villas";
import { Container } from "@/components/ui/Container";

export default function StayPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-charcoal text-ivory overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1770&auto=format&fit=crop')"
          }}
        />
        <Container className="relative z-10 text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-gold">
            Your Private Retreat
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-normal mb-6">
            Luxury <br />
            <span className="italic text-gold">Stay</span>
          </h1>
          <p className="text-xl text-ivory/80 max-w-2xl mx-auto font-light">
            Elegantly designed spaces that blend comfort with tropical beauty
          </p>
        </Container>
      </section>

      {/* Content Sections */}
      <Villas />
      <BookingCTA />
    </main>
  );
}
