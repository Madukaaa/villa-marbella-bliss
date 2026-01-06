"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { attractionsData } from "@/lib/attractions-data";

const ITEMS_PER_PAGE = 12;

export function Attractions() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageFromUrl = searchParams.get('page');
  const [currentPage, setCurrentPage] = useState(pageFromUrl ? parseInt(pageFromUrl) : 1);
  
  const totalPages = Math.ceil(attractionsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentAttractions = attractionsData.slice(startIndex, endIndex);

  useEffect(() => {
    if (pageFromUrl) {
      const page = parseInt(pageFromUrl);
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    }
  }, [pageFromUrl, totalPages]);

  const updatePage = (page: number) => {
    setCurrentPage(page);
    router.push(`/attractions?page=${page}`, { scroll: false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      updatePage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      updatePage(currentPage + 1);
    }
  };

  const goToPage = (page: number) => {
    updatePage(page);
  };

  return (
    <Section className="bg-white">
      <Container>
        {/* Header */}
        <div className="mb-16 relative pl-40 pr-10">
            {/* Vertical Line */}
            <div className="absolute left-10 top-0 bottom-0 w-[2px] bg-charcoal/70" />
                
            <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-charcoal/60">
               Discover the Beauty Around Marbella Bliss
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal mb-6 text-charcoal">
                Nearby <span className="italic text-teak">Attractions</span>
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed text-justify">
                Step beyond the comfort of Villa Marbella Bliss and explore a variety of nearby 
                attractions waiting to be discovered. From pristine beaches and scenic viewpoints 
                to cultural landmarks, nature trails, and local experiences, the surrounding area 
                offers something for every traveler seeking adventure, relaxation, or authentic 
                coastal charm.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pl-10 pr-10">
          {currentAttractions.map((attraction, index) => (
            <div key={index} className="group">
              {/* Image Container */}
              <Link href={`/attractions/${attraction.slug}`}>
                <div className="relative h-[400px] overflow-hidden mb-6 cursor-pointer">
                  <img
                    src={attraction.heroImage}
                    alt={attraction.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Title Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <h3 className="text-white font-serif text-2xl p-6">
                      {attraction.title}
                    </h3>
                  </div>
                </div>
              </Link>

              {/* Description */}
              <p className="text-charcoal/80 mb-4 leading-relaxed">
                {attraction.description}
              </p>

              {/* CTA Link */}
              <Link href={`/attractions/${attraction.slug}`}>
                <button className="text-charcoal font-semibold text-sm uppercase tracking-wider border-b-2 border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors cursor-pointer">
                  Find Out More
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-4 pl-10 pr-10">
            {/* Previous Arrow */}
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`p-3 border-2 transition-colors ${
                currentPage === 1
                  ? 'border-charcoal/20 text-charcoal/20 cursor-not-allowed'
                  : 'border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
              }`}
              aria-label="Previous page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`min-w-[48px] h-12 px-4 font-semibold transition-colors ${
                    currentPage === page
                      ? 'bg-charcoal text-white'
                      : 'bg-white border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`p-3 border-2 transition-colors ${
                currentPage === totalPages
                  ? 'border-charcoal/20 text-charcoal/20 cursor-not-allowed'
                  : 'border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
              }`}
              aria-label="Next page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </Container>
    </Section>
  );
}
