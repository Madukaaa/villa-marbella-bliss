"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function IntroSection() {
    return (
        <section className="relative px-8 pt-8 pb-20 lg:px-16 lg:pt-12 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/Background.jpg"
                    alt="Intro Background"
                    fill
                    className="object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-white/50" />
            </div>
            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    
                    {/* Left Column: Text & Image Grid */}
                    <div className="flex flex-col gap-12 lg:pl-40 pt-40">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-8 text-left"
                        >
                            <div className="space-y-4">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-teak">
                                    Experience the Collection
                                </span>
                                <h2 className="font-serif text-4xl font-medium leading-tight text-charcoal lg:text-5xl">
                                    Escape The <br />
                                    <span className="italic text-teak">Ordinary</span>
                                </h2>
                            </div>

                            <div className="space-y-4 text-base font-light leading-relaxed text-charcoal/80 max-w-xl">
                                <p>
                                    Get a glimpse of our distinctive abodes, enchanting locations and
                                    unique highlights that will make your stay with us truly
                                    unforgettable.
                                </p>
                            </div>
                        </motion.div>

                        {/* Small Image Grid */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="grid grid-cols-2 gap-2 max-w-[400px]"
                        >
                             <div className="aspect-square relative overflow-hidden">
                                <Image 
                                    src="/images/home/villa.JPG" 
                                    alt="Villa details" 
                                    fill 
                                    className="object-cover hover:scale-105 transition-transform duration-700" 
                                />
                            </div>
                             <div className="aspect-square relative overflow-hidden">
                                <Image 
                                    src="/images/about/livingSpace1.jpg" 
                                    alt="Villa details" 
                                    fill 
                                    className="object-cover hover:scale-105 transition-transform duration-700" 
                                />
                            </div>
                             <div className="aspect-square relative overflow-hidden">
                                <Image 
                                    src="/images/about/livingSpace1.jpg" 
                                    alt="Villa details" 
                                    fill 
                                    className="object-cover hover:scale-105 transition-transform duration-700" 
                                />
                            </div>
                             <div className="aspect-square relative overflow-hidden">
                                <Image 
                                    src="/images/home/villa.JPG" 
                                    alt="Villa details" 
                                    fill 
                                    className="object-cover hover:scale-105 transition-transform duration-700" 
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Large Feature Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] w-full lg:h-[550px] mx-auto lg:mx-0"
                    >
                         <Image 
                            src="/images/home/villa.JPG" 
                            alt="Luxury Pool" 
                            fill 
                            className="object-cover" 
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
