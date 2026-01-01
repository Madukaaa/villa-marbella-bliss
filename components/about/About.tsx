import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

export function About() {
    return (
        <Section className="bg-ivory" id="about">
            <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                {/* Text Content */}
                <div className="order-2 lg:order-1">
                    <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-teak/80">
                        The Concept
                    </span>
                    <h2 className="mb-6 font-serif text-4xl font-normal leading-tight text-charcoal md:text-5xl">
                        A Sanctuary of <br />
                        <span className="italic text-leaf">tropical minimalism.</span>
                    </h2>
                    <div className="space-y-6 text-lg font-light leading-relaxed text-charcoal/80">
                        <p>
                            Nestled amongst swaying coconut palms and whispering sea breezes,
                            Villa Marbella Bliss is more than just a place to stay—it is an
                            experience of pure serenity.
                        </p>
                        <p>
                            Designed with a deep respect for local architecture and modern
                            elegance, the villa blurs the lines between indoor and outdoor
                            living. Open spaces, natural stone, and warm timber create a
                            grounded, earthy atmosphere that invites you to slow down.
                        </p>
                        <p>
                            Whether you are lounging by the infinity pool or enjoying a
                            private chef-prepared meal under the stars, every moment is curated
                            for your absolute comfort.
                        </p>
                    </div>
                </div>

                {/* Image Content */}
                <div className="relative order-1 h-[400px] w-full overflow-hidden rounded-sm lg:order-2 lg:h-[600px]">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1770&auto=format&fit=crop')"
                        }}
                    />
                </div>
            </Container>
        </Section>
    );
}
