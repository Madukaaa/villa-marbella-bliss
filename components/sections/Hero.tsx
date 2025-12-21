import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ShieldCheck, Menu, AlignRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <div className="relative min-h-screen w-full lg:grid lg:grid-cols-[25%_40%_35%]">

            {/* Left Column: Branding & USPs */}
            <div className="flex flex-col justify-between bg-white px-8 py-12 lg:px-12 lg:py-16">
                {/* Logo Area */}
                <div className="mb-12">
                    {/* Replicating the 'Reveal' circle logo style roughly with an icon for now */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal text-charcoal">
                            <span className="font-serif text-xl font-bold">V</span>
                        </div>
                        <h1 className="font-serif text-2xl font-bold tracking-widest uppercase text-charcoal">
                            Villa <br /> Marbella
                        </h1>
                    </div>
                </div>

                {/* Why Us List */}
                <div className="hidden lg:block">
                    <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-charcoal">
                        Why Villa Marbella
                    </h3>
                    <ul className="space-y-6 text-sm text-charcoal/70 font-medium">
                        <li className="flex flex-col gap-1">
                            <span className="text-charcoal font-semibold">Ultimate Privacy</span>
                            <span className="text-xs text-charcoal/50">Secluded beachfront access</span>
                        </li>
                        <li className="flex flex-col gap-1">
                            <span className="text-charcoal font-semibold">Private Chef</span>
                            <span className="text-xs text-charcoal/50">Curated local & international menus</span>
                        </li>
                        <li className="flex flex-col gap-1">
                            <span className="text-charcoal font-semibold">Tailored Experiences</span>
                            <span className="text-xs text-charcoal/50">Excursions, yoga, and spa</span>
                        </li>
                    </ul>
                </div>

                {/* Badge */}
                <div className="mt-12 flex items-center gap-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-charcoal text-ivory shadow-xl">
                        <div className="text-center text-[10px] uppercase leading-tight font-bold tracking-wider">
                            Elite <br /> Haven
                        </div>
                    </div>
                </div>
            </div>

            {/* Center Column: Immersive Image */}
            <div className="relative min-h-[50vh] w-full bg-charcoal lg:min-h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-1000 hover:scale-105"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />

                {/* Floating particles effect placeholder */}
                <div className="absolute top-1/4 left-1/4 h-1 w-1 rounded-full bg-white/40 blur-[1px] animate-pulse" />
                <div className="absolute top-1/2 left-3/4 h-1.5 w-1.5 rounded-full bg-white/30 blur-[1px] animate-pulse delay-700" />
                <div className="absolute bottom-1/3 left-1/2 h-1 w-1 rounded-full bg-white/50 blur-[1px] animate-pulse delay-300" />
            </div>

            {/* Right Column: Interaction & Intro */}
            <div className="flex flex-col justify-between bg-ivory px-8 py-12 lg:px-16 lg:py-16">

                {/* Top Nav (Replaces global header functionality for this view) */}
                <div className="mb-12 flex items-center justify-between border-b border-charcoal/10 pb-6">
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <AlignRight className="text-charcoal transition-transform group-hover:rotate-180" />
                        <span className="text-xs font-bold uppercase tracking-widest text-charcoal">Menu</span>
                    </div>
                    <Link href="#booking" className="text-xs font-bold uppercase tracking-widest text-charcoal hover:text-gold transition-colors">
                        Book Now
                    </Link>
                </div>

                {/* Main Content Area */}
                <div className="flex flex-col justify-center flex-1">
                    <span className="mb-6 block text-xs font-bold uppercase tracking-[0.2em] text-teak/60">
                        Experience The Collection
                    </span>
                    <h2 className="mb-8 font-serif text-5xl font-normal leading-tight text-charcoal lg:text-6xl">
                        About <br /> <span className="italic text-teak">Villa Marbella</span>
                    </h2>

                    <div className="space-y-6 text-base font-light leading-relaxed text-charcoal/70">
                        <p>
                            At Villa Marbella, we seek to provide personalized service to our curious travellers from around the world, thereby creating a memorable holiday at our exceptional sanctuary in Sri Lanka.
                        </p>
                        <p>
                            Our villa offers privacy, space, peace, history, architecture and friendly staff. The villa represents a whole new Sri Lankan experience, fiercely proud of its raw authenticity.
                        </p>
                    </div>

                    <div className="mt-12">
                        <Button variant="luxury" className="rounded-none px-8 py-6 text-xs uppercase tracking-widest">
                            Discover More
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    );
}
