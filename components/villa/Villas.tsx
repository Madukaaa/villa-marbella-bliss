import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";

export function Villas() {
  const villas = [
    {
      id: 1,
      title: "Ground Floor Villa",
      description: "Ground Floor Villa at Villa Marbella Bliss offers tropical living at its best with direct access to the garden and pool.",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1770&auto=format&fit=crop",
      size: "45 SQM",
      occupancy: "Max 4 Adults",
      link: "/ground-floor-villa"
    },
    {
      id: 2,
      title: "First Floor Villa",
      description: "Our Private villa will feed your wanderlust with elevated views and spacious comfort.",
      image: "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?q=80&w=1770&auto=format&fit=crop",
      size: "45 SQM",
      occupancy: "Max 4 Adults",
      link: "/first-floor-villa"
    }
  ];

  return (
    <Section className="bg-ivory">
      <Container className="px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="mb-16 relative pl-40 pr-10">
          {/* Vertical Line */}
          <div className="absolute left-10 top-0 bottom-0 w-[2px] bg-charcoal/70" />
          
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-charcoal/60">
            Stay at a Private Pool Villa in Marbella
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-normal mb-6 text-charcoal">
            Our Villas
          </h2>
          <p className="text-lg text-charcoal font-light leading-relaxed text-justify">
            Villa Marbella Bliss offers two luxurious accommodations to choose from for your stay. 
            Stylishly furnished, the guest dwellings at our luxury private pool villa provide vacationers 
            a charmingly tranquil rest for an unforgettable tropical beach holiday, making it one of the 
            finest holiday villas in Marbella.
          </p>
        </div>

        {/* Villa Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pl-40 pr-10">
          {villas.map((villa) => (
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
                <h3 className="font-serif text-3xl font-normal text-charcoal">
                  {villa.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {villa.description}
                </p>

                {/* Details */}
                <div className="flex gap-12 pt-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/50 mb-1">
                      Size
                    </p>
                    <p className="font-serif text-2xl text-charcoal">
                      {villa.size}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/50 mb-1">
                      Occupancy
                    </p>
                    <p className="font-serif text-2xl text-charcoal">
                      {villa.occupancy}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
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
      </Container>
    </Section>
  );
}
