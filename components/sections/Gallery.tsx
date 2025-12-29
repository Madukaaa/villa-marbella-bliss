import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const images = [
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
];

export function Gallery() {
    return (
        <Section className="bg-white" id="gallery">
            <Container>
                {/* Header */}
                <div className="mb-16 relative pl-40 pr-10">
                {/* Vertical Line */}
                <div className="absolute left-10 top-0 bottom-0 w-[2px] bg-charcoal/70" />
                
                <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-charcoal/60">
                   A Visual Journey Through Marbella Bliss
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-normal mb-6 text-charcoal">
                    Moments of <span className="italic text-teak">Bliss</span>
                </h2>
                <p className="text-lg text-charcoal/70 leading-relaxed text-justify">
                    Explore a curated collection of moments captured at Villa Marbella Bliss. 
                    From serene mornings by the private pool to golden sunsets and thoughtfully 
                    designed interiors, our gallery reflects the calm, luxury, and unforgettable 
                    experiences that await you during your stay.
                </p>
                </div>

                <div className="columns-1 gap-6 md:columns-2 lg:columns-3 space-y-6 pt-10">
                    {images.map((src, idx) => (
                        <div key={idx} className="break-inside-avoid overflow-hidden rounded-sm hover:opacity-90 transition-opacity">
                            <img
                                src={src}
                                alt={`Gallery image ${idx + 1}`}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
