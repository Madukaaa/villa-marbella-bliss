import { Container } from "@/components/ui/Container";

interface VillaHeroProps {
  subtitle: string;
  title: string;
  description: string;
  description2?: string;
  checkIn: string;
  checkOut: string;
  size: string;
  occupancy: string;
}

export function VillaHero({
  subtitle,
  title,
  description,
  description2,
  checkIn,
  checkOut,
  size,
  occupancy
}: VillaHeroProps) {
  return (
    <section className="relative bg-ivory py-20">
      <Container className="px-8 md:px-16 lg:px-24">
        <div className="relative pl-40 pr-10">
          {/* Vertical Line */}
          <div className="absolute left-10 top-0 bottom-0 w-[2px] top-0 h-1/2 bg-charcoal/50" />
          <div className="absolute left-10 top-0 bottom-0 w-[2px] top-1/2 h-1/2 bg-charcoal/20" />

          {/* Content */}
          <div className="max-w-5xl">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-charcoal/60">
              {subtitle}
            </span>
            <h1 className="font-serif text-5xl md:text-5xl font-normal mb-8 text-charcoal">
              {title}
            </h1>
            
            <div className="space-y-6 mb-12">
              <p className="text-lg text-charcoal font-light leading-relaxed">
                {description}
              </p>
              {description2 && (
                <p className="text-lg text-charcoal font-light leading-relaxed">
                  {description2}
                </p>
              )}
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-charcoal/20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/50 mb-2">
                  Check In
                </p>
                <p className="font-serif text-2xl text-charcoal">
                  {checkIn}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/50 mb-2">
                  Check Out
                </p>
                <p className="font-serif text-2xl text-charcoal">
                  {checkOut}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/50 mb-2">
                  Size
                </p>
                <p className="font-serif text-2xl text-charcoal">
                  {size}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/50 mb-2">
                  Occupancy
                </p>
                <p className="font-serif text-2xl text-charcoal">
                  {occupancy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
