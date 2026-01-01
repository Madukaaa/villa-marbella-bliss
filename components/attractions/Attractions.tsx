import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { attractionsData } from "@/lib/attractions-data";

export function Attractions() {
  return (
    <Section className="bg-white">
      <Container>
        {/* Header */}
        <div className="mb-16 relative pl-40 pr-10">
            {/* Vertical Line */}
            <div className="absolute left-10 top-0 bottom-0 w-[2px] bg-charcoal/70" />
                
            <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-charcoal/60">
               Discover the Beauty Around Marbella Bliss
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal mb-6 text-charcoal">
                Nearby <span className="italic text-teak">Attractions</span>
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed text-justify">
                Step beyond the comfort of Villa Marbella Bliss and explore a variety of nearby 
                attractions waiting to be discovered. From pristine beaches and scenic viewpoints 
                to cultural landmarks, nature trails, and local experiences, the surrounding area 
                offers something for every traveler seeking adventure, relaxation, or authentic 
                coastal charm.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pl-10 pr-10">
          {attractionsData.map((attraction, index) => (
            <div key={index} className="group">
              {/* Image Container */}
              <div className="relative h-[400px] overflow-hidden mb-6">
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Title Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white font-serif text-2xl p-6">
                    {attraction.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-charcoal/80 mb-4 leading-relaxed">
                {attraction.description}
              </p>

              {/* CTA Link */}
              <Link href={`/attractions/${attraction.slug}`}>
                <button className="text-charcoal font-semibold text-sm uppercase tracking-wider border-b-2 border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors cursor-pointer">
                  Find Out More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
