import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-charcoal text-white py-16">
            <Container className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="font-serif text-2xl font-bold uppercase tracking-widest mb-6">
                        Villa Marbella Bliss
                    </h2>
                    <p className="text-white/60 max-w-sm mb-6 font-light">
                        A luxury private sanctuary in Sri Lanka, designed for those who seek
                        elegance, privacy, and connection with nature.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-gold transition-colors">
                            <Instagram size={18} />
                        </Link>
                        <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-gold transition-colors">
                            <Facebook size={18} />
                        </Link>
                        <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-gold transition-colors">
                            <Twitter size={18} />
                        </Link>
                    </div>
                </div>

                <div>
                    <h3 className="font-serif text-lg mb-6 text-gold">Explore</h3>
                    <ul className="space-y-4 text-white/70 font-light">
                        <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                        <li><Link href="/stay" className="hover:text-white transition-colors">Stay</Link></li>
                        <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                        <li><Link href="/attractions" className="hover:text-white transition-colors">Attractions</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-serif text-lg mb-6 text-gold">Contact</h3>
                    <ul className="space-y-4 text-white/70 font-light">
                        <li>marbellabliss12@gmail.com</li>
                        <li>+94 70 300 2912</li>
                        <li>No: 12, Medaketiya road, Tangalle<br />Sri Lanka</li>
                    </ul>
                </div>
            </Container>
            <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/40 text-sm font-light">
                © {new Date().getFullYear()} Villa Marbella Bliss. All rights reserved.
            </div>
        </footer>
    );
}
