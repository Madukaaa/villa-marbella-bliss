"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
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

    // On non-home pages, always show the header
    const shouldShowHeader = !isHomePage || isScrolled;

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                shouldShowHeader
                    ? "bg-ivory/95 backdrop-blur-md shadow-sm py-4 translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0 py-6 pointer-events-none"
            )}
        >
            <Container className="flex items-center justify-between">
                <Link href="/" className="relative z-50">
                    <h1 className={cn("font-serif text-2xl font-bold tracking-widest uppercase transition-colors",
                        shouldShowHeader ? "text-teak" : "text-white"
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
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={cn(shouldShowHeader ? "text-teak" : "text-white")} />
                    ) : (
                        <Menu className={cn(shouldShowHeader ? "text-teak" : "text-white")} />
                    )}
                </button>

                {/* Mobile Nav Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-ivory z-40 flex flex-col items-center justify-center gap-8 md:hidden">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "text-2xl font-serif transition-colors",
                                        isActive ? "text-gold font-semibold" : "text-teak"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button variant="default" className="mt-4">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                )}
            </Container>
        </header>
    );
}
