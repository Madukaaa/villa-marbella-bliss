import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const images = [
    "https://images.unsplash.com/photo-1540541338287-481bf1341dda?q=80&w=1952&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576013551627-5cc20b368678?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
];

export function Gallery() {
    return (
        <Section className="bg-white" id="gallery">
            <Container>
                <div className="mb-16 text-center">
                    <span className="mb-3 block text-sm font-medium uppercase tracking-widest text-teak/80">
                        Gallery
                    </span>
                    <h2 className="font-serif text-4xl text-charcoal md:text-5xl">
                        Moments of <span className="italic text-teak">Bliss.</span>
                    </h2>
                </div>

                <div className="columns-1 gap-6 md:columns-2 lg:columns-3 space-y-6">
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
