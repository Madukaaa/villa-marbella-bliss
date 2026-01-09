import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
    Wifi,
    Wind,
    Coffee,
    ShieldCheck,
    Sun,
    Flower2,
    CarFront,
    Bath,
    Building2,
    CigaretteOff
} from "lucide-react";

const amenities = [
    { icon: CarFront, title: "Free Parking", desc: "On-site parking" },
    { icon: Bath, title: "Private Bathrooms", desc: "En-suite facilities" },
    { icon: Building2, title: "Balcony", desc: "Private outdoor space" },
    { icon: CigaretteOff, title: "Non-Smoking Rooms", desc: "Smoke-free environment" },
    { icon: Wifi, title: "Free Wi-Fi", desc: "Stay connected" },
    { icon: Wind, title: "Air Conditioning", desc: "In all bedrooms" },
    { icon: Coffee, title: "Daily Breakfast", desc: "Fresh & tropical" },
    { icon: Flower2, title: "Tropical Gardens", desc: "Lush private grounds" },
    { icon: ShieldCheck, title: "24/7 Security", desc: "Peace of mind" },
    { icon: Sun, title: "Sun Deck", desc: "Loungers & umbrellas" },
];

export function HomeAmenities() {
    return (
        <Section id="home-amenities" className="pb-0 md:pb-0">
            <Container>
                <div className="mb-16 flex flex-col items-center text-center">
                    <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-teak/80">
                        Our Features
                    </span>
                    <h2 className="font-serif text-4xl text-charcoal md:text-5xl">
                        Villa <span className="italic text-leaf">Highlights</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 md:gap-x-8 md:gap-y-16">
                    {amenities.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-stone/20 text-teak transition-colors group-hover:bg-teak group-hover:text-white">
                                <item.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="mb-2 font-serif text-xl text-charcoal">{item.title}</h3>
                            <p className="text-sm text-charcoal/60">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
