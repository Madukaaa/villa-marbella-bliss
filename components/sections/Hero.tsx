"use client";

import { Button } from "@/components/ui/Button";
import { AlignRight, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/accommodation", label: "Accommodation" },
    { href: "/gallery", label: "Gallery" },
    { href: "/attractions", label: "Attractions" },
];

export function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative min-h-screen w-full lg:grid lg:grid-cols-[19%_52%_29%]">

            {/* Left Column: Branding & USPs */}
            <div className="flex flex-col justify-between bg-white px-8 py-12 lg:px-8 lg:py-16">
                {/* Logo Area */}
                <div className="mb-12">
                    {/* Replicating the 'Reveal' circle logo style roughly with an icon for now */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal text-charcoal">
                            <span className="font-serif text-xl font-bold">V</span>
                        </div>
                        <h1 className="font-serif text-2xl font-bold tracking-widest uppercase text-charcoal">
                            Marbella <br /> Bliss
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
                    <div 
                        className="flex items-center gap-2 cursor-pointer group"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <AlignRight className="text-charcoal transition-transform group-hover:rotate-180" />
                        <span className="text-xs font-bold uppercase tracking-widest text-charcoal">Menu</span>
                    </div>
                    <Link href="/contact" className="text-medium font-bold uppercase tracking-[0.3em] text-charcoal hover:text-gold transition-colors">
                        Contact Us
                    </Link>
                </div>

                {/* Main Content Area */}
                <div className="flex flex-col justify-center flex-1">
                    <span className="mb-6 block text-xs font-bold uppercase tracking-[0.2em] text-teak/60">
                        Experience The Collection
                    </span>
                    <h2 className="mb-8 font-serif text-5xl font-normal leading-tight text-charcoal lg:text-6xl">
                        About <br /> <span className="italic text-teak">Villa Marbella Bliss</span>
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

            {/* Fullscreen Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-white animate-in fade-in duration-300">
                    <div className="relative h-full grid grid-cols-1 lg:grid-cols-[25%_25%_55%]">
                        {/* Left Column - Logo and Branding */}
                        <div className="relative flex flex-col justify-between p-8 lg:p-16">
                            {/* Top Section with Logo */}
                            <div>
                                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-charcoal text-charcoal">
                                            <span className="font-serif text-xl font-bold">V</span>
                                        </div>
                                        <h1 className="font-serif text-2xl font-bold tracking-widest uppercase text-charcoal">
                                            Marbella <br /> Bliss
                                        </h1>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Middle Column - Navigation Links */}
                        <div className="relative flex flex-col justify-center p-8 lg:p-12 lg:border-l lg:border-charcoal/10">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute top-8 right-8 flex items-center gap-2 group hover:opacity-70 transition-opacity"
                                aria-label="Close menu"
                            >
                                <X className="text-charcoal" size={24} />
                                <span className="text-xs font-bold uppercase tracking-widest text-charcoal hidden sm:inline">
                                    Menu
                                </span>
                            </button>

                            {/* Navigation Links */}
                            <nav className="flex flex-col gap-6">
                                <Link
                                    href="/"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-xl lg:text-xl font-sans text-gold transition-colors duration-300 uppercase tracking-wider font-bold"
                                >
                                    Home
                                </Link>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-xl lg:text-xl font-sans text-charcoal hover:text-gold transition-colors duration-300 uppercase tracking-wider font-bold"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Right Column - Image */}
                        <div className="hidden lg:block relative overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: "url('https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=2000&auto=format&fit=crop')",
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10" />
                            
                            {/* Book Now Button Overlay */}
                            <div className="absolute top-8 right-30">
                                <div className="bg-white/90 backdrop-blur-sm px-8 py-4 shadow-lg">
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-xs font-bold uppercase tracking-[0.3em] text-charcoal hover:text-gold transition-colors"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>

                            {/* Decorative Palm Leaf Pattern */}
                            {/* <div className="absolute top-0 right-0 opacity-10">
                                <svg width="400" height="600" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M200 50C200 50 150 150 150 250C150 350 200 450 200 550" stroke="currentColor" strokeWidth="2" className="text-charcoal"/>
                                    <path d="M200 100C200 100 250 150 280 200C310 250 300 300 280 350" stroke="currentColor" strokeWidth="1.5" className="text-charcoal"/>
                                    <path d="M200 150C200 150 150 200 120 250C90 300 100 350 120 400" stroke="currentColor" strokeWidth="1.5" className="text-charcoal"/>
                                </svg>
                            </div> */}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
