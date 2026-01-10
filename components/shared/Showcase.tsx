import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const spaces = [
    {
        title: "Two-Bedroom Villa with Garden & Balcony Views",
        description: "Spacious villa with garden and balcony or terrace views.",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        title: "Bright Living & Dining Area",
        description: "Comfortable space for relaxing and dining.",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
        colSpan: "col-span-1",
    },
    {
        title: "Fully Equipped Kitchen",
        description: "Ideal for simple home‑cooked meals.",
        image: "https://images.unsplash.com/photo-1572331165267-854da2b00cc3?q=80&w=1770&auto=format&fit=crop",
        colSpan: "col-span-1",
    },
    {
        title: "Garden Terrace & Balcony",
        description: "Peaceful outdoor space with garden views.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1770&auto=format&fit=crop",
        colSpan: "col-span-1 md:col-span-2",
    },
];

export function Showcase() {
    return (
        <Section className="bg-stone/20" id="living">
            <Container>
                <div className="mb-16 text-center">
                    <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-teak/80">
                        Living Spaces
                    </span>
                    <h2 className="font-serif text-4xl text-charcoal md:text-5xl">
                        Designed for <span className="italic text-teak">Rest.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                    {spaces.map((space, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "group relative h-[300px] w-full overflow-hidden rounded-sm md:h-[400px]",
                                space.colSpan
                            )}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${space.image})` }}
                            />
                            <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/40" />

                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <h3 className="mb-2 font-serif text-2xl">{space.title}</h3>
                                <p className="font-sans text-sm tracking-wide opacity-90">{space.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
