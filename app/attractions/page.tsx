import { Location } from "@/components/sections/Location";
import { About } from "@/components/sections/About";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Container } from "@/components/ui/Container";

export default function AttractionsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-charcoal text-ivory overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=1770&auto=format&fit=crop')"
          }}
        />
        <Container className="relative z-10 text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-gold">
            Explore Paradise
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-normal mb-6">
            Local <br />
            <span className="italic text-gold">Attractions</span>
          </h1>
          <p className="text-xl text-ivory/80 max-w-2xl mx-auto font-light">
            Discover the wonders of Sri Lanka's southern coast
          </p>
        </Container>
      </section>

      {/* Content Sections */}
      <Location />
      <About />
      <BookingCTA />
    </main>
  );
}
