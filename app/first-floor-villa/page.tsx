import { VillaHero } from "@/components/villa/VillaHero";
import { VillaGallery } from "@/components/villa/VillaGallery";

import { Amenities } from "@/components/shared/Amenities";
import { OtherVillas } from "@/components/villa/OtherVillas";

export default function FirstFloorVillaPage() {
  const villaImages = [
    {
      url: "/images/gallery/room3.jpg",
      alt: "First Floor Villa - Main View"
    },
    {
      url: "/images/gallery/room2.jpg",
      alt: "First Floor Villa - Bedroom"
    },
    {
      url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1770&auto=format&fit=crop",
      alt: "First Floor Villa - Bathroom"
    },
    {
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1770&auto=format&fit=crop",
      alt: "First Floor Villa - View"
    },
    {
      url: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=1770&auto=format&fit=crop",
      alt: "First Floor Villa - Interior"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-charcoal text-ivory overflow-hidden">
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1770&auto=format&fit=crop')"
                }}
            />
        </section>

        <VillaHero
            subtitle="Beach Villa in Marbella with Elevated Views"
            title="First Floor Villa"
            description="Our Private villa will feed your wanderlust with elevated ocean views and spacious comfort. Experience luxury living on the first floor with breathtaking panoramic views. Each room features two comfortable single beds designed for a perfect night's sleep, with modern amenities throughout."
            description2="Our First Floor Villa offers enhanced privacy and stunning views, with elegant indoor and outdoor spaces creating a seamless flow of luxury and comfort."
            checkIn="2:00 PM"
            checkOut="12:00 PM"
            size="45 SQM"
            occupancy="Max 4 Adults"
        />
        
        <VillaGallery images={villaImages} />
        <Amenities/>
        <OtherVillas currentVillaId="first-floor" />

    </main>
  );
}
