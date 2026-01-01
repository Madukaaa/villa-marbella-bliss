"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { useState, useEffect } from "react";

interface VillaGalleryProps {
  images: {
    url: string;
    alt: string;
  }[];
}

export function VillaGallery({ images }: VillaGalleryProps) {
  const [mainImage, ...gridImages] = images;
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
      if (e.key === "ArrowRight" && currentImageIndex < images.length - 1) nextImage();
      if (e.key === "ArrowLeft" && currentImageIndex > 0) prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentImageIndex]);

  return (
    <>
      <Section className="bg-ivory !py-12 ">
        <Container className="px-8 md:px-16 lg:px-24">
          <div className="pl-40 pr-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
              {/* Large Main Image */}
              <div 
                className="lg:col-span-2 relative aspect-[4/3] overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(0)}
              >
                <Image
                  src={mainImage.url}
                  alt={mainImage.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-4 border-1 border-white opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none" />
              </div>

              {/* Grid of Smaller Images */}
              <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full">
                {gridImages.slice(0, 4).map((image, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden group cursor-pointer"
                    onClick={() => openLightbox(index + 1)}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-2 border-1 border-white opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
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
            <Image
              src={images[currentImageIndex].url}
              alt={images[currentImageIndex].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
