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
                        Where Golden <br />
                        <span className="italic text-leaf">shores meet serenity.</span>
                    </h2>
                    <div className="space-y-6 text-lg font-light leading-relaxed text-charcoal/80 mb-8">
                        <p>
                            Nestled along the tranquil southern coastline of Sri Lanka, Villa Marbella
                            Bliss offers a peaceful escape by the sea. Surrounded by quiet beaches,
                            gentle ocean breezes, and local coastal charm, our villa is the perfect
                            balance of relaxation and exploration.
                        </p>
                        <div className="flex items-center gap-3 text-base text-teak font-medium">
                            <MapPin size={20} />
                            <span>Tangalle, Southern Province, Sri Lanka</span>
                        </div>
                    </div>
                    <a 
                        href="https://www.google.com/maps/dir//Marbella+Bliss,+Tangalle,+Sri+Lanka/@6.029609793955904,80.79397737474889,15z" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <Button variant="outline" size="lg">
                            Get Directions
                        </Button>
                    </a>
                </div>

                {/* Interactive Map */}
                <div className="h-[400px] w-full rounded-sm overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.7456218880143!2d80.79397737474889!3d6.029609793955904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae14b0025fc60bf%3A0xbce78552b3ac510e!2sMarbella%20Bliss!5e0!3m2!1sen!2slk!4v1767254142048!5m2!1sen!2slk"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Villa Marbella Bliss Location - Tangalle, Sri Lanka"
                    />
                </div>
            </Container>
        </Section>
    );
}