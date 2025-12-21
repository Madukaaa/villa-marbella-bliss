import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image Placeholder - Replace with actual image later */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')", // Placeholder: Tropical Luxury Villa
                }}
            >
                <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
            </div>

            <Container className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                <span className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/80 md:text-base animate-fade-in-up">
                    Private Sanctuary in Sri Lanka
                </span>
                <h1 className="mb-6 font-serif text-5xl font-bold leading-tight md:text-7xl lg:text-8xl animate-fade-in-up delay-100">
                    Tropical Modern <br /> <span className="italic text-gold">Luxury</span>
                </h1>
                <p className="mb-10 max-w-lg text-lg text-white/90 md:text-xl font-light animate-fade-in-up delay-200">
                    Escape to a world of calm, elegance, and refined comfort.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row animate-fade-in-up delay-300">
                    <Button variant="glass" size="lg">
                        Explore the Villa
                    </Button>
                    <Button variant="luxury" size="lg">
                        Check Availability
                    </Button>
                </div>
            </Container>
        </div>
    );
}
