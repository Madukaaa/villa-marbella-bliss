import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button"; // Importing Button component
import { MapPin } from "lucide-react";

export function Location() {
    return (
        <Section className="bg-ivory" id="location">
            <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                <div>
                    <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-teak/80">
                        The Location
                    </span>
                    <h2 className="mb-6 font-serif text-4xl font-normal leading-tight text-charcoal md:text-5xl">
                        Where Jungle <br />
                        <span className="italic text-leaf">meets the sea.</span>
                    </h2>
                    <div className="space-y-6 text-lg font-light leading-relaxed text-charcoal/80 mb-8">
                        <p>
                            Located on the pristine southern coast of Sri Lanka, Villa Marbella
                            Bliss offers seclusion without isolation. We are just minutes away
                            from secret beaches, surf breaks, and historic temples.
                        </p>
                        <div className="flex items-center gap-3 text-base text-teak font-medium">
                            <MapPin size={20} />
                            <span>Dikwella, Southern Province, Sri Lanka</span>
                        </div>
                    </div>
                    <Button variant="outline" size="lg">
                        Get Directions
                    </Button>
                </div>

                {/* Map Placeholder */}
                <div className="h-[400px] w-full rounded-sm bg-stone/30 flex items-center justify-center text-charcoal/40 font-serif tracking-widest uppercase">
                    [ Interactive Map Component ]
                </div>
            </Container>
        </Section>
    );
}
