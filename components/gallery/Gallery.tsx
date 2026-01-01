"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const images = [
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
];

export function Gallery() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex((prev) => prev + 1);
        }
    };

    const prevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex((prev) => prev - 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;
            
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxOpen, currentImageIndex]);

    return (
        <>
        <Section className="bg-white" id="gallery">
            <Container>
                {/* Header */}
                <div className="mb-16 relative pl-40 pr-10">
                {/* Vertical Line */}
                <div className="absolute left-10 top-0 bottom-0 w-[2px] bg-charcoal/70" />
                
                <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-charcoal/60">
                   A Visual Journey Through Marbella Bliss
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-normal mb-6 text-charcoal">
                    Moments of <span className="italic text-teak">Bliss</span>
                </h2>
                <p className="text-lg text-charcoal/70 leading-relaxed text-justify">
                    Explore a curated collection of moments captured at Villa Marbella Bliss. 
                    From serene mornings by the private pool to golden sunsets and thoughtfully 
                    designed interiors, our gallery reflects the calm, luxury, and unforgettable 
                    experiences that await you during your stay.
                </p>
                </div>

                <div className="columns-1 gap-1 md:columns-2 lg:columns-3 space-y-1 pt-10 pl-10">
                    {images.map((src, idx) => (
                        <div 
                            key={idx} 
                            className="break-inside-avoid overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
                            onClick={() => openLightbox(idx)}
                        >
                            <img
                                src={src}
                                alt={`Gallery image ${idx + 1}`}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </Section>

        {/* Lightbox Modal */}
        {lightboxOpen && (
            <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
                {/* Close Button */}
                <button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 text-white hover:text-gold transition-colors z-10 text-4xl w-12 h-12 flex items-center justify-center"
                    aria-label="Close"
                >
                    ×
                </button>

                {/* Previous Button */}
                <button
                    onClick={prevImage}
                    disabled={currentImageIndex === 0}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors z-10 text-6xl w-16 h-16 flex items-center justify-center disabled:opacity-30 disabled:hover:text-white"
                    aria-label="Previous"
                >
                    ‹
                </button>

                {/* Next Button */}
                <button
                    onClick={nextImage}
                    disabled={currentImageIndex === images.length - 1}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors z-10 text-6xl w-16 h-16 flex items-center justify-center disabled:opacity-30 disabled:hover:text-white"
                    aria-label="Next"
                >
                    ›
                </button>

                {/* Image */}
                <div className="relative w-[90vw] h-[90vh]">
                    <img
                        src={images[currentImageIndex]}
                        alt={`Gallery image ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        )}
        </>
    );
}
