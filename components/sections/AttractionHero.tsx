import { Container } from "@/components/ui/Container";

interface AttractionHeroProps {
  image: string;
  title: string;
}

export function AttractionHero({ image, title }: AttractionHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-charcoal text-ivory overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${image}')`
        }}
      />
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
}
