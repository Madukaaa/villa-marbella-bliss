import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

export function About() {
    return (
        <Section className="bg-ivory" id="about">
            <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                {/* Text Content */}
                <div className="order-2 lg:order-1">
                    <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-teak/80">
                        The Concept
                    </span>
                    <h2 className="mb-6 font-serif text-4xl font-normal leading-tight text-charcoal md:text-5xl">
                        An Elegant <br />
                        <span className="italic text-leaf">coastal retreat.</span>
                    </h2>
                    <div className="space-y-6 text-lg font-light leading-relaxed text-charcoal/80">
                        <p>
                            Villa Marbella Bliss is a thoughtfully designed private villa in Tangalle,
                            offering garden views, peaceful surroundings, and a relaxed coastal
                            atmosphere just moments from the beach.
                        </p>
                        <p>
                            Each accommodation is fully air-conditioned and features a private
                            bathroom, a comfortable seating area, and modern amenities including
                            free WiFi, a flat-screen TV, and quality bed linen and towels for a
                            seamless stay.
                        </p>
                        <p>
                            With a fully equipped kitchen, dining area, terrace, and easy access to
                            nearby attractions such as Tangalle Beach, Tangalle Lagoon, and
                            Mulkirigala Rock Monastery, the villa is ideal for families and travelers
                            seeking comfort, convenience, and authentic southern charm.
                        </p>
                    </div>
                </div>

                {/* Image Content */}
                <div className="relative order-1 h-[400px] w-full overflow-hidden rounded-sm lg:order-2 lg:h-[560px]">
                    <Image
                        src="/images/home/about/about.jpg"
                        alt="Villa Marbella Bliss"
                        fill
                        className="absolute inset-0 object-cover bg-center"
                    />
                </div>
            </Container>
        </Section>
    );
}
