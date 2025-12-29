export interface Attraction {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  heroImage: string;
  description: string;
  longDescription: string[];
}

export const attractionsData: Attraction[] = [
  {
    slug: "hummanaya-blow-hole",
    title: "Hummanaya Blow Hole",
    subtitle: "Dickwella",
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1770&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1770&auto=format&fit=crop",
    description: "Uncover a natural phenomenon at Dikwella's Hummanaya Blow Hole",
    longDescription: [
      "Known to be the second largest in the world and the largest in Sri Lanka alone, discover the Hummanaya Blow Hole while you explore the southern coast! Located in Kudawella, a little after the bustling town of Matara; the Hummanaya Blow Hole can be accessed by a short 5-10 minute walk through a small, quiet lane dotted with local vendors selling handicrafts, street food and refreshing beverages. Enjoy scenic views of the beautiful blue coast as you trek along the pathway leading to the attraction. After the main entrance and ticket counter, trek through rugged terrain before reaching this natural attraction. The blow hole attracts tourists from around the world to witness its magnificence.",
      "The Hummanaya Blow Hole is a natural wonder that sprays a jet of sea water into the air between two giant rocks; sometimes reaching heights of over 80 – 100 feet, and should be added to your list of things to see while you stay with us in Mirissa. The best time to see this is during high tide, as you can experience the salty spray on your skin as seawater jets towards the sky and falls back on its wide-eyed audience."
    ]
  },
  {
    slug: "parrot-rock",
    title: "Parrot Rock",
    subtitle: "Mirissa Beach",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1770&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1770&auto=format&fit=crop",
    description: "Parrot Rock located just off Mirissa Beach is one of the spots you don't want to miss while in Mirissa.",
    longDescription: [
      "Parrot Rock is an iconic landmark located at the western end of Mirissa Beach. This small rocky outcrop, shaped somewhat like a parrot's beak, rises dramatically from the turquoise waters of the Indian Ocean. It's easily accessible during low tide by walking across the sandy beach, making it a popular spot for visitors.",
      "The rock formation offers stunning panoramic views of the coastline and is particularly famous for sunset watching. Many visitors climb to the top to capture breathtaking photographs of the sun dipping into the ocean. The surrounding area features golden sand beaches and crystal-clear waters, perfect for swimming and relaxation. Local restaurants and beach cafes line the shore, offering fresh seafood and refreshing beverages while you enjoy the coastal views."
    ]
  },
  {
    slug: "galle-dutch-fort",
    title: "Galle Dutch Fort",
    subtitle: "Galle",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1770&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1770&auto=format&fit=crop",
    description: "Explore the South's most recognizable landmark, the Galle Dutch Fort",
    longDescription: [
      "The Galle Fort, also known as the Dutch Fort, is a UNESCO World Heritage Site and the largest remaining fortress in Asia built by European occupiers. Originally built by the Portuguese in 1588, it was extensively fortified by the Dutch during the 17th century. The fort showcases a blend of European architecture and South Asian traditions, creating a unique cultural landscape.",
      "Walking through the cobblestone streets within the fort walls feels like stepping back in time. The area is home to museums, churches, mosques, temples, boutique hotels, cafes, and art galleries. The iconic lighthouse stands as a beacon at the fort's edge, while the ramparts offer spectacular views of the Indian Ocean. Don't miss the chance to walk along the fort walls during sunset for an unforgettable experience."
    ]
  },
  {
    slug: "mirissa-beach",
    title: "Mirissa Beach",
    subtitle: "Mirissa",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1770&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1770&auto=format&fit=crop",
    description: "Experience the golden sands and crystal clear waters of Mirissa Beach, perfect for swimming and relaxation.",
    longDescription: [
      "Mirissa Beach is one of Sri Lanka's most beautiful coastal stretches, featuring a stunning crescent-shaped bay with soft golden sand and gentle turquoise waves. The beach is lined with swaying palm trees that provide natural shade, creating the perfect tropical paradise setting.",
      "The calm waters make it ideal for swimming, while the consistent waves attract surfers from around the world. Beach bars and restaurants serve fresh seafood and tropical cocktails, and the laid-back atmosphere makes it perfect for both relaxation and socializing. The beach truly comes alive during sunset when the sky transforms into brilliant shades of orange and pink."
    ]
  },
  {
    slug: "whale-watching",
    title: "Whale Watching",
    subtitle: "Mirissa Harbor",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1770&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1770&auto=format&fit=crop",
    description: "Embark on an unforgettable whale watching adventure from Mirissa harbor.",
    longDescription: [
      "Mirissa is renowned as one of the best whale watching destinations in the world. The deep waters off the southern coast of Sri Lanka serve as a migration route for blue whales, sperm whales, and various dolphin species. Tours typically depart early morning from Mirissa Harbor, taking you on an exciting journey into the Indian Ocean.",
      "During the peak season from November to April, sightings of majestic blue whales—the largest animals on Earth—are common. You'll also have the chance to spot spinner dolphins, pilot whales, and even the occasional turtle or manta ray. The experience of seeing these magnificent creatures in their natural habitat is truly breathtaking and creates memories that last a lifetime."
    ]
  },
  {
    slug: "secret-beach",
    title: "Secret Beach",
    subtitle: "Mirissa",
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1770&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1770&auto=format&fit=crop",
    description: "Discover the hidden gem of Secret Beach, a secluded paradise away from the crowds.",
    longDescription: [
      "Tucked away behind Parrot Rock at the western end of Mirissa Beach, Secret Beach lives up to its name as a hidden paradise. This small, secluded cove is accessible only by climbing over rocks or taking a short path through coconut groves, which keeps it relatively quiet even during peak tourist season.",
      "The intimate beach offers pristine sand, clear turquoise waters, and excellent snorkeling opportunities among the rocks. The dramatic rocky outcrops provide natural shade and create stunning photo opportunities. It's the perfect escape for those seeking tranquility and a more private beach experience away from the main Mirissa Beach crowds."
    ]
  },
  {
    slug: "coconut-tree-hill",
    title: "Coconut Tree Hill",
    subtitle: "Mirissa",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1770&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1770&auto=format&fit=crop",
    description: "Capture stunning sunset views from the iconic Coconut Tree Hill overlooking the ocean.",
    longDescription: [
      "Coconut Tree Hill has become one of Mirissa's most Instagram-worthy locations. This small hill covered with tall, swaying coconut palms offers panoramic views of the coastline and the vast Indian Ocean. The iconic rows of palm trees create a stunning natural backdrop that has made this spot famous on social media.",
      "The best time to visit is during golden hour—either at sunrise or sunset—when the light creates a magical atmosphere. The walk to the top is relatively easy, taking just a few minutes from Secret Beach. From the summit, you can see the entire sweep of Mirissa Beach, Parrot Rock, and the endless blue horizon. It's a must-visit spot for photography enthusiasts and nature lovers alike."
    ]
  },
  {
    slug: "surfing-weligama",
    title: "Surfing at Weligama",
    subtitle: "Weligama Bay",
    image: "https://images.unsplash.com/photo-1502933691298-84fc14542831?q=80&w=1770&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1502933691298-84fc14542831?q=80&w=1770&auto=format&fit=crop",
    description: "Ride the waves at Weligama Bay, one of Sri Lanka's best beginner-friendly surfing spots.",
    longDescription: [
      "Weligama Bay, meaning 'sandy village' in Sinhala, is one of Sri Lanka's premier surfing destinations. The bay's gentle, rolling waves make it perfect for beginners, while more experienced surfers can find challenging breaks during the right conditions. The sandy bottom and consistent waves throughout the year have made Weligama a hub for surf schools and enthusiasts.",
      "Numerous surf schools line the beach, offering lessons and board rentals at affordable prices. The warm tropical waters mean you can surf without a wetsuit year-round. Beyond surfing, Weligama offers a charming beach town atmosphere with plenty of cafes, restaurants, and accommodation options. The bay is also home to the famous stilt fishermen, a traditional Sri Lankan fishing method that makes for great photographs."
    ]
  },
  {
    slug: "snorkeling-diving",
    title: "Snorkeling & Diving",
    subtitle: "Southern Coast",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1770&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1770&auto=format&fit=crop",
    description: "Explore vibrant coral reefs and marine life through snorkeling and diving adventures.",
    longDescription: [
      "The southern coast of Sri Lanka offers exceptional underwater experiences for both snorkelers and scuba divers. The warm, clear waters are home to vibrant coral reefs teeming with tropical fish, sea turtles, reef sharks, and rays. Popular dive sites include shipwrecks, coral gardens, and rocky reefs that host an incredible diversity of marine life.",
      "Mirissa and nearby areas offer numerous dive centers that cater to all experience levels, from complete beginners to advanced divers. Snorkeling trips are also available for those who prefer to stay closer to the surface. The underwater visibility is excellent during the dry season, and the warm water temperatures make diving comfortable year-round. Whether you're exploring colorful coral formations or swimming alongside graceful sea turtles, the underwater world of Sri Lanka's south coast is truly mesmerizing."
    ]
  },
  {
    slug: "rekawa-turtle-conservation",
    title: "Rekawa Turtle Conservation Project",
    subtitle: "Rekawa",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1770&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1770&auto=format&fit=crop",
    description: "Make a lasting impact with a Rekawa Turtle Conservation Project Tour",
    longDescription: [
      "The Rekawa Turtle Conservation Project is a community-based initiative dedicated to protecting sea turtles and their nesting sites along the southern coast of Sri Lanka. Rekawa Beach is one of the most important nesting sites for five species of sea turtles, including the endangered Green, Leatherback, Olive Ridley, Loggerhead, and Hawksbill turtles.",
      "Visitors can join nighttime turtle watching tours led by trained local guides who help protect nesting mothers and their eggs. The experience of witnessing a mother turtle laying her eggs under the stars is truly magical and educational. The project also focuses on community education and sustainable tourism practices. All proceeds from tours go directly toward conservation efforts and supporting local communities, making your visit a meaningful contribution to protecting these ancient marine creatures."
    ]
  }
];

export function getAttractionBySlug(slug: string): Attraction | undefined {
  return attractionsData.find(attraction => attraction.slug === slug);
}

export function getRelatedAttractions(currentSlug: string, count: number = 3): Attraction[] {
  return attractionsData
    .filter(attraction => attraction.slug !== currentSlug)
    .slice(0, count);
}
