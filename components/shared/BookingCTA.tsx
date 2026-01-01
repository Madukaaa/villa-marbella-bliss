import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function BookingCTA() {
    return (
        <Section className="bg-teak text-ivory text-center py-32">
            <Container>
                <h2 className="mb-6 font-serif text-4xl md:text-6xl text-ivory">
                    Your Private Escape Awaits
                </h2>
                <p className="mb-10 text-lg md:text-xl text-ivory/80 font-light max-w-2xl mx-auto">
                    Book directly with us for exclusive offers and our personalized concierge service.
                </p>
                <Button variant="luxury" size="lg" className="px-12 py-8 text-lg">
                    Book Your Stay Now
                </Button>
            </Container>
        </Section>
    );
}
