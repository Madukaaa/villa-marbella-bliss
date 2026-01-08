import { About } from "@/components/about/About";
import { Stats } from "@/components/about/Stats";
import { Showcase } from "@/components/shared/Showcase";
import { Location } from "@/components/shared/Location";

import { Container } from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-charcoal text-ivory overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1770&auto=format&fit=crop')"
          }}
        />
        <Container className="relative z-10 text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-gold">
            Discover Our Story
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-normal mb-6">
            About Villa <br />
            <span className="italic text-gold">Marbella Bliss</span>
          </h1>
          <p className="text-xl text-ivory max-w-2xl mx-auto font-light">
            A sanctuary where tropical luxury meets Sri Lankan charm
          </p>
        </Container>
      </section>

      {/* Content Sections */}
      <About />
      <Stats />
      <Showcase />

    </main>
  );
}
