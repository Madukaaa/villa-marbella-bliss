import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

interface AttractionInfoProps {
  title: string;
  subtitle: string;
  longDescription: string[];
  image?: string;
  distance: string;
  driveTime: string;
  directionsUrl: string;
}

export function AttractionInfo({ title, subtitle, longDescription, image, distance, driveTime, directionsUrl }: AttractionInfoProps) {
  return (
    <Section className="bg-ivory pb-10 md:pb-32">
      <Container>
        {/* Title and Description with Vertical Line */}
        <div className="relative px-6 md:pl-40 md:pr-10 mb-12">
          {/* Vertical Line */}
          <div className="absolute left-10 top-0 bottom-0 top-0 h-1/2 bg-charcoal/50 hidden md:block" />
          <div className="absolute left-10 top-0 bottom-0 top-1/2 h-1/2 bg-charcoal/20 hidden md:block" />
          
          {/* Title Section */}
          <h1 className="font-serif text-4xl md:text-5xl font-normal mb-12 text-charcoal uppercase tracking-wide">
            {title}, {subtitle}
          </h1>

          {/* Description Paragraphs */}
          <div className="space-y-6">
            {longDescription.map((paragraph, index) => (
              <p key={index} className="text-charcoal/70 leading-relaxed text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Image and Info Section */}
        {image && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-40">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Info */}
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-3xl md:text-4xl font-normal mb-6 text-charcoal uppercase tracking-wide">
                {title}
              </h2>
              <p className="text-charcoal/70 text-lg mb-6 uppercase tracking-wider">
                {distance} • {driveTime} drive
              </p>
              <a 
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal font-semibold text-sm uppercase tracking-wider border-b-2 border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors w-fit cursor-pointer"
              >
                Get Directions
              </a>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
