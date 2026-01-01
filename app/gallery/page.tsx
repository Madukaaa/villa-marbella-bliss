import { Gallery } from "@/components/gallery/Gallery";
import { Showcase } from "@/components/shared/Showcase";
import { BookingCTA } from "@/components/shared/BookingCTA";
import { Container } from "@/components/ui/Container";

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-charcoal text-ivory overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1770&auto=format&fit=crop')"
          }}
        />
        <Container className="relative z-10 text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-gold">
            Visual Journey
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-normal mb-6">
            Villa <br />
            <span className="italic text-gold">Gallery</span>
          </h1>
          <p className="text-xl text-ivory/80 max-w-2xl mx-auto font-light">
            Immerse yourself in the beauty and elegance of Villa Marbella Bliss
          </p>
        </Container>
      </section>

      {/* Content Sections */}
      <Gallery />
    </main>
  );
}
