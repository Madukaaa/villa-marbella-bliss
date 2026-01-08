"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryImages = [
    {
        src: "/images/gallery/room1.jpg",
        alt: "Luxury Villa Bedroom",
        title: "Restful Nights",
        category: "Rooms",
        description: "Experience ultimate comfort in our thoughtfully designed bedrooms."
    },
    {
        src: "/images/gallery/livingSpace1.jpg",
        alt: "Modern Living Room",
        title: "Elegant Interiors",
        category: "Living Spaces",
        description: "Relax in style with our spacious and beautifully furnished living areas."
    },
    {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
        alt: "Dining Area",
        title: "Fine Dining",
        category: "Dining",
        description: "Enjoy memorable meals in our exquisite dining spaces."
    },
    {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
        alt: "Poolside View",
        title: "Poolside Serenity",
        category: "Exterior",
        description: "Bask in the sun or take a refreshing dip in our pristine private pool."
    }
];

export function HomeGallerySection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 1.2
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 1
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = useCallback((newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = galleryImages.length - 1;
            if (nextIndex >= galleryImages.length) nextIndex = 0;
            return nextIndex;
        });
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 6000);
        return () => clearInterval(timer);
    }, [paginate]);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-charcoal">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.5 },
                        scale: { duration: 0.5 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    <img
                        src={galleryImages[currentIndex].src}
                        alt={galleryImages[currentIndex].alt}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-16 z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="container mx-auto flex flex-col md:flex-row items-end justify-between gap-6">
                    <div className="text-white max-w-2xl">
                         <span className="block text-sm md:text-base tracking-[0.2em] uppercase mb-4 text-gold/90 font-semibold">
                            {galleryImages[currentIndex].category}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif mb-4 text-white">
                            {galleryImages[currentIndex].title}
                        </h2>
                        <p className="text-white/80 text-lg max-w-lg mb-8 leading-relaxed">
                            {galleryImages[currentIndex].description}
                        </p>
                         <Link 
                            href="/gallery"
                            className="inline-flex items-center gap-3 text-white border-b border-white/30 pb-2 hover:text-gold hover:border-gold transition-all duration-300 group"
                        >
                            <span className="uppercase tracking-widest text-sm font-semibold">Explore Full Gallery</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex gap-3 mb-2">
                        {galleryImages.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setDirection(idx > currentIndex ? 1 : -1);
                                    setCurrentIndex(idx);
                                }}
                                className={cn(
                                    "h-1 transition-all duration-300 rounded-full",
                                    idx === currentIndex ? "w-10 bg-gold" : "w-4 bg-white/30 hover:bg-white/50"
                                )}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 flex items-center justify-center text-white hover:text-gold transition-colors duration-300 group"
                onClick={() => paginate(-1)}
                aria-label="Previous category"
            >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 flex items-center justify-center text-white hover:text-gold transition-colors duration-300 group"
                onClick={() => paginate(1)}
                aria-label="Next category"
            >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-1 transition-transform" />
            </button>
        </section>
    );
}
