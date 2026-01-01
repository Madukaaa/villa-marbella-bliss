import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";

interface Villa {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface OtherVillasProps {
  currentVillaId: string;
}

export function OtherVillas({ currentVillaId }: OtherVillasProps) {
  const allVillas: Villa[] = [
    {
      id: "ground-floor",
      title: "Ground Floor Villa",
      description: "Our Private villa will feed your wanderlust with the garden views.",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1770&auto=format&fit=crop",
      link: "/ground-floor-villa"
    },
    {
      id: "first-floor",
      title: "First Floor Villa",
      description: "Escape to our corner of paradise in Marbella.",
      image: "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?q=80&w=1770&auto=format&fit=crop",
      link: "/first-floor-villa"
    }
  ];

  // Filter out the current villa
  const otherVillas = allVillas.filter(villa => villa.id !== currentVillaId);

  if (otherVillas.length === 0) return null;

  return (
    <Section className="bg-ivory">
      <Container className="px-8 md:px-16 lg:px-24">
        <div className="pl-40 pr-10">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-serif text-3xl md:text-3xl text-charcoal">
              Other Villa Types
            </h2>
            <Link 
              href="/stay"
              className="text-sm font-semibold uppercase tracking-widest border-b-2 border-charcoal pb-1 hover:border-gold hover:text-gold transition-colors"
            >
              View All Villas
            </Link>
          </div>

          {/* Villa Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {otherVillas.map((villa) => (
              <div key={villa.id} className="group">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <Image
                    src={villa.image}
                    alt={villa.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl md:text-3xl font-normal text-charcoal">
                    {villa.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    {villa.description}
                  </p>

                  {/* CTA */}
                  <div className="pt-2">
                    <Link 
                      href={villa.link}
                      className="text-sm font-semibold uppercase tracking-widest border-b-2 border-charcoal pb-1 hover:border-gold hover:text-gold transition-colors inline-block"
                    >
                      Find Out More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
