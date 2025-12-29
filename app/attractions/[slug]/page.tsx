import { notFound } from "next/navigation";
import { AttractionHero } from "@/components/sections/AttractionHero";
import { AttractionInfo } from "@/components/sections/AttractionInfo";
import { RelatedAttractions } from "@/components/sections/RelatedAttractions";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { getAttractionBySlug, getRelatedAttractions, attractionsData } from "@/lib/attractions-data";

interface AttractionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return attractionsData.map((attraction) => ({
    slug: attraction.slug,
  }));
}

export default async function AttractionPage({ params }: AttractionPageProps) {
  const { slug } = await params;
  const attraction = getAttractionBySlug(slug);

  if (!attraction) {
    notFound();
  }

  const relatedAttractions = getRelatedAttractions(slug, 3);

  return (
    <main className="flex min-h-screen flex-col">
      <AttractionHero 
        image={attraction.heroImage}
        title={attraction.title}
      />
      
      <AttractionInfo
        title={attraction.title}
        subtitle={attraction.subtitle}
        longDescription={attraction.longDescription}
        image={attraction.image}
      />

      <RelatedAttractions attractions={relatedAttractions} />
      
      <BookingCTA />
    </main>
  );
}
