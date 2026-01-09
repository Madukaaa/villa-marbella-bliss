import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[560px]">

        {/* LEFT + MIDDLE CONTENT */}
        <div className="lg:col-span-2 py-20 relative">
          <Container className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-20 relative">

            {/* LEFT COLUMN */}
            <div>
              <h2 className="text-white font-serif text-xl uppercase tracking-widest mb-6">
                Villa Marbella Bliss
              </h2>

              <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-8">
                A luxury private sanctuary in Sri Lanka, designed for those who seek
                elegance, privacy, and connection with nature.
              </p>

              {/* SOCIAL ICONS */}
              <div className="flex gap-4 mb-10">
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

              {/* CONTACT */}
              <h3 className="text-white text-sm font-semibold uppercase tracking-widest text-white/60 mb-4">
                Contact
              </h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="text-white font-semibold">
                    No: 12, Medaketiya Road,<br />
                  Tangalle,<br />
                  Sri Lanka
                </li>
                <li className="text-white font-semibold">
                  Email: {" "}{" "}
                  <a href="mailto:marbellabliss12@gmail.com" className="text-white hover:text-gold transition-colors cursor-pointer">
                    marbellabliss12@gmail.com
                  </a>
                </li>
                <li className="text-white font-semibold">
                  Phone: {" "}
                  <a href="tel:+94703002912" className="text-white hover:text-gold transition-colors cursor-pointer">
                    +94 70 300 2912
                  </a>
                </li>
              </ul>
            </div>

            {/* VERTICAL DIVIDER LINE */}
            <span className="hidden md:block absolute left-[52%] top-0 h-1/2 w-px bg-white/50" />
            <span className="hidden md:block absolute left-[52%] top-1/2 h-1/2 w-px bg-white/15" />

            {/* MIDDLE COLUMN – NAVIGATION */}
            <div className="pl-0 md:pl-20">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-8">
                Explore
              </h3>

              <ul className="text-white space-y-4 text-sm font-semibold uppercase tracking-widest">
                <li><Link href="/" className="hover:text-gold transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-gold transition">About</Link></li>
                <li><Link href="/stay" className="hover:text-gold transition">Stay</Link></li>
                <li><Link href="/gallery" className="hover:text-gold transition">Gallery</Link></li>
                <li><Link href="/attractions" className="hover:text-gold transition">Attractions</Link></li>
                <li><Link href="/contact" className="hover:text-gold transition">Contact</Link></li>
              </ul>

              {/* BOTTOM BAR */}
              <div className="border-t border-white/10 pt-6 pb-0 md:pb-6 text-center text-xs text-white/40 tracking-wide mt-20 whitespace-nowrap">
                © {new Date().getFullYear()} Villa Marbella Bliss. All rights reserved.
              </div>
            </div>

          </Container>
        </div>

        {/* RIGHT IMAGE PANEL */}
        <div
          className="hidden lg:block bg-center bg-cover"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1646894232861-a0ad84f1ad5d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
      </div>
    </footer>
  );
}
