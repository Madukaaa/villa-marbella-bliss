"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AlignRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/stay", label: "Stay" },
    { href: "/gallery", label: "Gallery" },
    { href: "/attractions", label: "Attractions" },
];

export function Header() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    // On non-home pages, always show the header
    const shouldShowHeader = !isHomePage || isScrolled;

    return (
        <>
            <header
                className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                shouldShowHeader
                    ? "bg-ivory/95 backdrop-blur-md shadow-sm py-4 translate-y-0 opacity-100"
                    : "bg-ivory/95 backdrop-blur-md shadow-sm py-4 translate-y-0 opacity-100 lg:-translate-y-full lg:opacity-0 lg:py-6 lg:pointer-events-none"
            )}
        >
            <Container className="flex items-center justify-between">
                <Link href="/" className="relative z-50">
                    <h1 className={cn("font-serif text-2xl font-bold tracking-widest uppercase transition-colors",
                        shouldShowHeader ? "text-teak" : "text-teak lg:text-white"
                    )}>
                        Marbella Bliss
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={cn(
                                    "text-sm uppercase tracking-wider font-semibold transition-colors hover:text-gold",
                                    isActive 
                                        ? "text-gold font-semibold" 
                                        : shouldShowHeader ? "text-charcoal" : "text-white/90"
                                )}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <Link href="/contact">
                        <Button variant={shouldShowHeader ? "default" : "glass"} size="sm">
                            Contact Us
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden relative z-50 text-teak"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <div className="flex items-center gap-2">
                        <AlignRight className={cn(shouldShowHeader ? "text-teak" : "text-teak lg:text-white")} />
                        <span className={cn("text-xs font-bold uppercase tracking-widest", shouldShowHeader ? "text-teak" : "text-teak lg:text-white")}>
                            Menu
                        </span>
                    </div>
                </button>
            </Container>
        </header>

        {/* Fullscreen Menu Overlay */}
        {isMobileMenuOpen && (
            <div className="fixed inset-0 z-[100] bg-white animate-in fade-in duration-300 overflow-y-auto">
                <div className="relative min-h-screen grid grid-cols-1 lg:grid-cols-[25%_25%_55%]">
                    {/* Left Column - Logo and Branding */}
                    <div className="relative flex flex-col justify-between p-8 lg:p-16">
                        {/* Top Section with Logo */}
                        <div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-charcoal text-charcoal">
                                    <span className="font-serif text-xl font-bold">V</span>
                                </div>
                                <h1 className="font-serif text-2xl font-bold tracking-widest uppercase text-charcoal">
                                    Marbella <br /> Bliss
                                </h1>
                            </div>

                            {/* Mobile Close Button (Side-by-side with Logo) */}
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="absolute top-8 right-8 flex lg:hidden items-center gap-2 group hover:opacity-70 transition-opacity"
                                aria-label="Close menu"
                            >
                                <X className="text-charcoal" size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Middle Column - Navigation Links */}
                    <div className="relative flex flex-col justify-start lg:justify-center px-8 pb-90 lg:p-12 lg:border-l lg:border-charcoal/10">
                        {/* Close Button (Desktop Only) */}
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-8 right-8 hidden lg:flex items-center gap-2 group hover:opacity-70 transition-opacity"
                            aria-label="Close menu"
                        >
                            <X className="text-charcoal" size={24} />
                            <span className="text-xs font-bold uppercase tracking-widest text-charcoal hidden sm:inline">
                                Menu
                            </span>
                        </button>

                        {/* Navigation Links */}
                        <nav className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-xl lg:text-xl font-sans text-charcoal hover:text-gold transition-colors duration-300 uppercase tracking-wider font-bold"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-xl lg:text-xl font-sans text-charcoal hover:text-gold transition-colors duration-300 uppercase tracking-wider font-bold"
                            >
                                Contact Us
                            </Link>
                        </nav>
                    </div>

                    {/* Right Column - Image */}
                    <div className="hidden lg:block relative overflow-hidden min-h-[50vh] lg:min-h-auto">
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
                                    onClick={() => setIsMobileMenuOpen(false)}
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
        </>
    );
}
