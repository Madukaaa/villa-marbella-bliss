import { VillaHero } from "@/components/villa/VillaHero";
import { VillaGallery } from "@/components/villa/VillaGallery";

import { Amenities } from "@/components/shared/Amenities";
import { OtherVillas } from "@/components/villa/OtherVillas";

export default function GroundFloorVillaPage() {
  const villaImages = [
    {
      url: "/images/gallery/room1.jpg",
      alt: "Ground Floor Villa - Main View"
    },
    {
      url: "/images/gallery/room5.jpg",
      alt: "Ground Floor Villa - Bedroom"
    },
    {
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1770&auto=format&fit=crop",
      alt: "Ground Floor Villa - Bathroom"
    },
    {
      url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1770&auto=format&fit=crop",
      alt: "Ground Floor Villa - View"
    },
    {
      url: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=1770&auto=format&fit=crop",
      alt: "Ground Floor Villa - Interior"
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
            subtitle="Elegant Marbella Villa Overlooking Lush Gardens"
            title="Ground Floor Villa"
            description="Enjoy fabulous views of a tropical garden from the large windows that let in streams of natural light. Each room consists of two comfortable single beds that are cosy and set to give you a good night's sleep. Our Ground Floor Villas are located on the ground floor and have the best access to the pool and the beach, making them ideal for guests seeking beach villas in Marbella."
            description2="Our Ground Floor Villa has it all, with spacious indoor and outdoor showers of uninterrupted visual flow of space."
            checkIn="3:00 - 7:00 PM"
            checkOut="7:00 - 11:00 AM"
            size="130 SQM"
            occupancy="Max 4 Adults"
        />
      
        <VillaGallery images={villaImages} />
        <Amenities/>      
        <OtherVillas currentVillaId="ground-floor" />        

    </main>
  );
}
