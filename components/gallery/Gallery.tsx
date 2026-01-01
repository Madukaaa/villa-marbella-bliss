"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const images = [
    {
        src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
        category: "Rooms"
    },
    {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
        category: "Living Spaces"
    },
    {
        src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
        category: "Rooms"
    },
    {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
        category: "Dining"
    },
    {
        src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
        category: "Living Spaces"
    },
    {
        src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
        category: "Dining"
    },
];

const categories = ["All", "Rooms", "Living Spaces", "Dining"];

export function Gallery() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredImages = activeCategory === "All" 
        ? images 
        : images.filter(img => img.category === activeCategory);

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        if (currentImageIndex < filteredImages.length - 1) {
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
    }, [lightboxOpen, currentImageIndex, filteredImages]); // Added filteredImages dependency

    return (
        <>
        <Section className="bg-white" id="gallery">
            <Container>
                {/* Header */}
                <div className="mb-10 relative pl-40 pr-10">
                    {/* Vertical Line */}
                    <div className="absolute left-10 top-0 bottom-0 w-[2px] bg-charcoal/70" />
                    
                    <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-charcoal/60">
                    A Visual Journey Through Marbella Bliss
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-normal mb-6 text-charcoal">
                        Moments of <span className="italic text-teak">Bliss</span>
                    </h2>
                    <p className="text-lg text-charcoal/70 leading-relaxed text-justify mb-8">
                        Explore a curated collection of moments captured at Villa Marbella Bliss. 
                        From serene mornings by the private pool to golden sunsets and thoughtfully 
                        designed interiors, our gallery reflects the calm, luxury, and unforgettable 
                        experiences that await you during your stay.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-4 justify-start mb-12 mt-16 pl-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300 font-semibold",
                                activeCategory === category
                                    ? "bg-charcoal text-white"
                                    : "bg-gray-100 text-charcoal/70 hover:bg-gray-200 hover:text-charcoal"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="columns-1 gap-4 md:columns-2 lg:columns-3 space-y-4 pt-4 pl-10">
                    {filteredImages.map((image, idx) => (
                        <div 
                            key={idx} 
                            className="break-inside-avoid overflow-hidden hover:opacity-90 transition-opacity cursor-pointer mb-4"
                            onClick={() => openLightbox(idx)}
                        >
                            <img
                                src={image.src}
                                alt={`Gallery image ${idx + 1} - ${image.category}`}
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
                    disabled={currentImageIndex === filteredImages.length - 1}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors z-10 text-6xl w-16 h-16 flex items-center justify-center disabled:opacity-30 disabled:hover:text-white"
                    aria-label="Next"
                >
                    ›
                </button>

                {/* Image */}
                <div className="relative w-[90vw] h-[90vh]">
                    <img
                        src={filteredImages[currentImageIndex].src}
                        alt={`Gallery image ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain"
                    />
                     <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm tracking-widest uppercase bg-black/50 px-4 py-2 ">
                        {filteredImages[currentImageIndex].category}
                    </div>
                </div>
            </div>
        )}
        </>
    );
}
