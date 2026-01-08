import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Attraction } from "@/lib/attractions-data";

interface RelatedAttractionsProps {
  attractions: Attraction[];
}

export function RelatedAttractions({ attractions }: RelatedAttractionsProps) {
  return (
    <Section className="bg-white pt-10 md:pt-32 px-6 md:pl-40 md:pr-10">
      <Container>
        {/* Header */}
        <div className="mb-12 flex flex-col items-start md:flex-row md:items-center justify-between gap-6 md:gap-0">
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-charcoal uppercase tracking-wider">
            Reveal the Collection Experiences
          </h2>
          <Link 
            href="/attractions" 
            className="text-sm font-semibold uppercase tracking-widest text-charcoal hover:text-gold transition-colors border-b-2 border-charcoal hover:border-gold pb-1"
          >
            View All Experiences
          </Link>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <div key={index} className="group">
              {/* Image Container */}
                <div className="relative h-[400px] overflow-hidden mb-6">
                  <img
                    src={attraction.heroImage}
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
              <p className="text-charcoal mb-4 leading-relaxed">
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
