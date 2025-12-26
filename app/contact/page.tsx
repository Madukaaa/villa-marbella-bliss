import { BookingCTA } from "@/components/sections/BookingCTA";
import { Location } from "@/components/sections/Location";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-charcoal text-ivory overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1770&auto=format&fit=crop')"
          }}
        />
        <Container className="relative z-10 text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-gold">
            Get In Touch
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-normal mb-6">
            Contact <br />
            <span className="italic text-gold">Us</span>
          </h1>
          <p className="text-xl text-ivory/80 max-w-2xl mx-auto font-light">
            We're here to make your dream stay a reality
          </p>
        </Container>
      </section>

      {/* Contact Information Section */}
      <Section className="bg-ivory" id="contact">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Contact Form */}
          <div>
            <h2 className="mb-8 font-serif text-4xl font-normal leading-tight text-charcoal">
              Send us a <span className="italic text-leaf">message</span>
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white border border-stone/30 rounded-sm focus:outline-none focus:border-teak transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white border border-stone/30 rounded-sm focus:outline-none focus:border-teak transition-colors"
                  placeholder="@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2 uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-white border border-stone/30 rounded-sm focus:outline-none focus:border-teak transition-colors"
                  placeholder="+xx xx xxx xxxx"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2 uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-stone/30 rounded-sm focus:outline-none focus:border-teak transition-colors resize-none"
                  placeholder="Tell us about your stay requirements..."
                />
              </div>
              <Button type="submit" variant="default" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 font-serif text-2xl font-normal text-charcoal">
                Contact Information
              </h3>
              <p className="text-lg text-charcoal/70 font-light leading-relaxed mb-8">
                Have questions about your stay? Our team is ready to assist you in planning your perfect tropical getaway.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teak/10 text-teak">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal mb-1">Email</h4>
                  <a href="mailto:info@villamarbelabliss.com" className="text-lg text-teak hover:text-leaf transition-colors">
                    marbellabliss12@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teak/10 text-teak">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal mb-1">Phone</h4>
                  <a href="tel:+94123456789" className="text-lg text-teak hover:text-leaf transition-colors">
                    +94 70 300 2912
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teak/10 text-teak">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal mb-1">Location</h4>
                  <p className="text-lg text-charcoal/70">
                     No: 12, Medaketiya Road,<br />
                  Tangalle,<br />
                  Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Location Section */}
      <Location />
      
      {/* Booking CTA */}
      <BookingCTA />
    </main>
  );
}
