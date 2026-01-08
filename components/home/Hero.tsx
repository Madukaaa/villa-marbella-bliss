"use client";

import { AlignRight, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/stay", label: "Stay" },
    { href: "/gallery", label: "Gallery" },
    { href: "/attractions", label: "Attractions" },
];

export function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative min-h-screen w-full lg:grid lg:grid-cols-[19%_52%_29%]">

            {/* Left Column: Branding & USPs */}
            <div className="hidden lg:flex flex-col justify-between bg-white px-8 py-12 lg:px-8 lg:py-16">
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
                <div className="hidden lg:block mb-20">
                    <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-charcoal">
                        Why Villa Marbella
                    </h3>
                    <ul className="space-y-6 text-sm text-charcoal/70 font-medium">
                        <li className="flex flex-col gap-1">
                            <span className="text-charcoal font-semibold">Beachfront Location</span>
                            <span className="text-xs text-charcoal/50">Walking distance to Tangalle Beach</span>
                        </li>
                        <li className="flex flex-col gap-1">
                            <span className="text-charcoal font-semibold">Fully Equipped Kitchen</span>
                            <span className="text-xs text-charcoal/50">Modern appliances for self-catering</span>
                        </li>
                        <li className="flex flex-col gap-1">
                            <span className="text-charcoal font-semibold">Private Bathrooms</span>
                            <span className="text-xs text-charcoal/50">Modern amenities & comfort</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Center Column: Immersive Image */}
            <div className="relative min-h-[50vh] w-full bg-charcoal lg:min-h-screen mt-15 lg:mt-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-1000 hover:scale-105"
                    style={{
                        backgroundImage:"url('/images/home/villa.JPG')",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />

            </div>

            {/* Right Column: Interaction & Intro */}
            <div className="flex flex-col justify-between bg-white px-8 py-12 lg:px-16 lg:py-16">

                {/* Top Nav (Replaces global header functionality for this view) */}
                <div className="mb-12 hidden lg:flex items-center justify-between border-b border-charcoal/10 pb-6">
                    <div 
                        className="flex items-center gap-2 cursor-pointer group"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <AlignRight className="text-charcoal transition-transform group-hover:rotate-180" />
                        <span className="text-xs font-bold uppercase tracking-widest text-charcoal">Menu</span>
                    </div>
                    <Link href="/contact" className="text-xs font-bold uppercase tracking-[0.3em] text-charcoal hover:text-gold transition-colors">
                        Contact Us
                    </Link>
                </div>

                {/* Main Content Area */}
                <div className="flex flex-col justify-center flex-1">
                    <span className="mb-6 block text-xs font-bold uppercase tracking-[0.2em] text-teak/60">
                        Experience The Collection
                    </span>
                    <h2 className="mb-8 text-5xl font-serif leading-tight text-charcoal lg:text-6xl">
                        <span className="text-teak">Marbella Bliss</span>
                    </h2>

                    <div className="space-y-6 text-base font-light leading-relaxed text-charcoal text-justify">
                        <p>
                            Villa Marbella Bliss offers a comfortable and welcoming stay on Sri Lanka’s
                            southern coast, with a focus on privacy, convenience, and relaxed
                            hospitality.
                        </p>
                        <p>
                            Featuring modern amenities, private bathrooms, and a fully equipped
                            kitchen, the villa is within walking distance of Tangalle Beach and close
                            to key local attractions, making it ideal for families and leisure
                            travelers.
                        </p>
                    </div>

                    {/* Why Us List - Mobile Only */}
                    <div className="block lg:hidden mt-12 mb-8">
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-charcoal">
                            Why Villa Marbella
                        </h3>
                        <ul className="space-y-6 text-sm text-charcoal/70 font-medium">
                            <li className="flex flex-col gap-1">
                                <span className="text-charcoal font-semibold">Beachfront Location</span>
                                <span className="text-xs text-charcoal/50">Walking distance to Tangalle Beach</span>
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-charcoal font-semibold">Fully Equipped Kitchen</span>
                                <span className="text-xs text-charcoal/50">Modern appliances for self-catering</span>
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-charcoal font-semibold">Private Bathrooms</span>
                                <span className="text-xs text-charcoal/50">Modern amenities & comfort</span>
                            </li>
                        </ul>
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
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
