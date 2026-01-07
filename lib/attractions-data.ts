export interface Attraction {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  heroImage: string;
  description: string;
  longDescription: string[];
  distance: string;
  driveTime: string;
  directionsUrl: string;
}

export const attractionsData: Attraction[] = [
  {
    slug: "tangalle-lagoon-kayak",
    title: "Tangalle Lagoon Kayak Adventure",
    subtitle: "Tangalle",
    heroImage: "/images/attractions/lagoonKayak1.JPG",
    image: "/images/attractions/lagoonKayak.JPG",
    description: "Paddle through calm mangrove waters on a peaceful kayaking adventure at Tangalle Lagoon.",
    longDescription: [
      "Just a short drive from Tangalle town lies the calm and scenic Tangalle Lagoon, a hidden natural escape perfect for kayaking and peaceful exploration. Surrounded by lush mangroves and tranquil waters, the lagoon offers visitors a chance to experience a quieter side of Sri Lanka's southern coast. Easily reachable within about 20 minutes, it is suitable for both beginners and experienced kayakers seeking relaxation and gentle adventure.",
      "Paddling through the lagoon reveals a rich ecosystem filled with mangrove forests, colorful birdlife, and occasional sightings of monitor lizards and monkeys along the banks. A sunset kayak is especially memorable, as golden hues reflect across the still water, creating a magical atmosphere. Combining nature, wildlife, and serenity, the Tangalle Lagoon Kayak Adventure is an unforgettable experience for travelers looking to connect with Sri Lanka's natural beauty."
    ],
    distance: "1.5 km",
    driveTime: "05 min",
    directionsUrl: "https://maps.app.goo.gl/KjDRFZAPLx1VetR98"
  },
  {
    slug: "madaketiya-beach",
    title: "Madaketiya Beach",
    subtitle: "Tangalle",
    heroImage: "/images/attractions/MedakatiyaBeach.jpeg",
    image: "/images/attractions/MedakatiyaBeach1.jpeg",
    description: "A quiet and unspoiled stretch of coastline perfect for peaceful relaxation and natural beauty.",
    longDescription: [
      "Madaketiya Beach is a quiet and unspoiled stretch of coastline located just 5 km north of Tangalle, reachable within 15–20 minutes by tuk-tuk or car. Away from the busy town and crowded beaches, this hidden gem offers a peaceful escape where nature takes center stage, making it ideal for travelers seeking calm and simplicity.",
      "With soft golden sands, clear Indian Ocean waters, and a relaxed atmosphere, Madaketiya Beach is perfect for swimming, leisurely walks, and quiet relaxation. Rocky formations and small coves add character to the shoreline, especially during low tide when tide pools and marine life can be explored. Free from heavy development, Madaketiya Beach is a serene coastal retreat that captures the untouched beauty of Sri Lanka's southern coast."
    ],
    distance: "1.1 km",
    driveTime: "04 min",
    directionsUrl: "https://maps.google.com/?q=Madaketiya+Beach+Tangalle"
  },
  {
    slug: "hummanaya-blow-hole",
    title: "Hummanaya Blow Hole",
    subtitle: "Kudawella (Near Tangalle)",
    heroImage: "/images/attractions/hummanaya.jpeg",
    image: "/images/attractions/hummanaya.jpeg",
    description: "Witness the second-largest blow hole in the world with water erupting up to 30 meters high.",
    longDescription: [
      "Located about 21 km from Tangalle, Hummanaya Blow Hole is one of Sri Lanka's most dramatic natural wonders and the second-largest blow hole in the world. Easily reachable within 30–40 minutes by road, the journey itself offers scenic views of coastal villages, paddy fields, and the southern shoreline. As powerful waves of the Indian Ocean surge through an underground rock tunnel, water erupts high into the air, sometimes reaching up to 30 meters, creating a breathtaking spectacle best seen during the monsoon season.",
      "Visitors can safely enjoy this phenomenon from designated viewing platforms while soaking in the raw beauty of the coastline. Nearby, Rekawa Beach offers an equally memorable experience with turtle watching, where conservation-led night tours allow visitors to witness endangered sea turtles nesting or hatchlings making their first journey to the ocean. Together, Hummanaya Blow Hole and Rekawa Turtle Watch create a perfect blend of natural wonder and wildlife conservation for travelers exploring southern Sri Lanka."
    ],
    distance: "12.2 km",
    driveTime: "23 min",
    directionsUrl: "https://maps.app.goo.gl/MQGSsRPcnj8JQs7QA"
  },
  {
    slug: "rekawa-turtle-watching",
    title: "Turtle Watching at Rekawa Beach",
    subtitle: "Tangalle",
    heroImage: "/images/attractions/turtleWatching.jpg",
    image: "/images/attractions/turtleWatching2.jpeg",
    description: "Witness endangered sea turtles nesting under the stars at Rekawa Beach conservation site.",
    longDescription: [
      "Located along the quiet shores near Tangalle, Rekawa Beach is one of Sri Lanka's most important natural nesting sites for endangered sea turtles. As night falls, this peaceful coastline transforms into a stage for one of nature's most extraordinary events, where green turtles and loggerheads come ashore to lay their eggs. Guided night tours led by local conservationists allow visitors to witness this rare and moving experience in a responsible and educational manner.",
      "Under the moonlit sky, visitors may observe mother turtles carefully nesting or, during hatching seasons, tiny hatchlings emerging from the sand and instinctively heading toward the ocean. These tours highlight the importance of conservation and the efforts taken to protect these ancient creatures from extinction. Calm, respectful, and deeply memorable, turtle watching at Rekawa offers travelers a meaningful connection to nature and a powerful reminder of Sri Lanka's rich coastal wildlife heritage."
    ],
    distance: "10.3 km",
    driveTime: "18 min",
    directionsUrl: "https://maps.app.goo.gl/59wWYqPJiGqDrmiw7"
  },
  {
    slug: "hambantota-bird-park",
    title: "Hambantota Bird Park",
    subtitle: "Hambantota",
    heroImage: "/images/attractions/birdsPark1.jpg",
    image: "/images/attractions/birdsPark1.jpg",
    description: "Explore a peaceful sanctuary showcasing Sri Lanka's rich birdlife and natural beauty.",
    longDescription: [
      "Nestled in Sri Lanka's southern province, the Hambantota Bird Park is a peaceful sanctuary that showcases the island's rich birdlife and natural beauty. Located just a short drive from Hambantota town, this tranquil park spans lush wetlands and green landscapes, offering visitors an escape into nature. Easily accessible by car or tuk-tuk, the park welcomes guests with soothing bird calls and a calm atmosphere, making it an ideal destination for nature lovers and photographers alike.",
      "Home to a diverse range of resident and migratory bird species, the Hambantota Bird Park provides an immersive experience where visitors can observe birds in their natural habitat. Guided walks led by experienced naturalists reveal fascinating insights into avian behavior, while tranquil ponds and forested areas offer opportunities to spot colorful water birds and elusive forest species. During the migratory season, the park comes alive with flocks of visiting birds, creating a spectacular sight. Beyond birdwatching, the park also promotes conservation awareness through educational displays, making it a rewarding and enriching stop on your southern Sri Lanka journey."
    ],
    distance: "47.2 km",
    driveTime: "1 hr 03 min",
    directionsUrl: "https://maps.app.goo.gl/WuMxdoyUpr8Pcqam6"
  },
  {
    slug: "ridiyagama-lion-safari",
    title: "Ridiyagama Lion Safari",
    subtitle: "Hambantota",
    heroImage: "https://images.unsplash.com/photo-1534188753412-5de5c2e15d49?q=80&w=1770&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1534188753412-5de5c2e15d49?q=80&w=1770&auto=format&fit=crop",
    description: "Experience an exciting safari with lions, elephants, and wildlife in a natural eco-friendly sanctuary.",
    longDescription: [
      "Located near Hambantota in Sri Lanka's southern province, Ridiyagama Lion Safari is a unique wildlife park that offers an exciting and immersive safari experience. Spanning over 500 acres of lush landscapes, this eco-friendly sanctuary is dedicated to wildlife conservation and provides a natural environment where animals roam freely. Easily accessible by road, the journey to Ridiyagama itself is scenic, passing through peaceful countryside and rural charm.",
      "The highlight of the park is the chance to observe majestic lions up close from specially designed safari vehicles, along with sightings of elephants, deer, leopards, and a wide variety of birdlife. Guided tours led by experienced rangers offer valuable insights into animal behavior and conservation efforts. Beyond the safari drive, visitors can enjoy walking trails, picnic areas, and educational exhibits, making Ridiyagama Lion Safari a perfect destination for nature lovers, families, and adventure seekers exploring southern Sri Lanka."
    ],
    distance: "48.1 km",
    driveTime: "56 min",
    directionsUrl: "https://maps.google.com/?q=Ridiyagama+Safari+Park+Hambantota"
  },
  {
    slug: "mulkirigala-temple",
    title: "Mulkirigala Temple",
    subtitle: "Tangalle",
    heroImage: "/images/attractions/mulkirigalaTemple.jpeg",
    image: "/images/attractions/mulkirigala.jpeg",
    description: "Discover a 2,000-year-old rock temple with stunning murals and panoramic countryside views.",
    longDescription: [
      "Rising gracefully from the lush landscapes of Sri Lanka's southern province, Mulkirigala Temple (Mulkirigala Raja Maha Vihara) is an ancient rock temple steeped in history and spiritual significance. Dating back over 2,000 years to the 3rd century BCE, this sacred site is one of the country's oldest Buddhist temples. Built into a massive rock formation near Tangalle, the temple complex features seven terraced levels adorned with centuries-old murals, statues, and stupas, offering visitors a rare blend of cultural heritage and natural beauty.",
      "As visitors ascend the rock, they are rewarded with serene surroundings and breathtaking panoramic views of the countryside below. The calm atmosphere, echoing with Buddhist chants, makes Mulkirigala an ideal place for reflection and exploration. Located about 20 km from Tangalle and easily reachable within 30–40 minutes, the temple is a perfect day excursion for travelers seeking history, spirituality, photography, and scenic beauty in one unforgettable experience."
    ],
    distance: "17 km",
    driveTime: "24 min",
    directionsUrl: "https://maps.google.com/?q=Mulkirigala+Temple+Sri+Lanka"
  },
  {
    slug: "hiriketiya-surfing-beach",
    title: "Hiriketiya Surfing Beach",
    subtitle: "Near Tangalle",
    heroImage: "/images/attractions/hiriketiyaBeach.jpeg",
    image: "/images/attractions/hiriketiyaBeach1.jpeg",
    description: "Surf smooth, consistent waves in a scenic crescent-shaped bay perfect for all skill levels.",
    longDescription: [
      "Hiriketiya Surfing Beach, locally known as 'Hiri,' is one of Sri Lanka's top surf spots, located about 13 km east of Tangalle and reachable within a 20-minute drive. This scenic crescent-shaped bay is naturally protected from strong winds, creating smooth, consistent waves that are perfect for both beginners and experienced surfers.",
      "Surrounded by palm-fringed cliffs and golden sands, Hiriketiya offers a relaxed and vibrant beach atmosphere. Surf schools and board rentals make it easy for newcomers to get started, while experienced surfers enjoy clean breaks and reliable swells. With beachfront cafés, fresh seafood, and a laid-back coastal vibe, Hiriketiya Surfing Beach is an ideal blend of adventure, relaxation, and tropical charm on Sri Lanka's southern coast."
    ],
    distance: "15.6 km",
    driveTime: "27 min",
    directionsUrl: "https://maps.app.goo.gl/p8HENftSLT5s2YBp6"
  },
  {
    slug: "goyambokka-beach",
    title: "Goyambokka Beach",
    subtitle: "Tangalle",
    heroImage: "/images/attractions/GoyambokkaBeach.jpeg",
    image: "/images/attractions/GoyambokkaBeach1.jpg",
    description: "Enjoy soft golden sands and clear blue waters at this peaceful hidden gem near Tangalle.",
    longDescription: [
      "Goyambokka Beach is a peaceful and scenic beach located just a short 15–20 minute drive from Tangalle town, making it an ideal escape for travelers seeking relaxation by the sea. Known for its soft golden sands, clear blue waters, and calm surroundings, this hidden gem offers a quieter alternative to more crowded beaches along Sri Lanka's southern coast.",
      "The beach's secluded atmosphere is perfect for swimming, leisurely walks, sunbathing, or simply unwinding under swaying palm trees. Gentle waves and clean waters create a soothing coastal experience, while nearby local eateries serve fresh seafood and traditional Sri Lankan flavors. With its natural beauty, easy access, and tranquil charm, Goyambokka Beach is a must-visit spot for those looking to relax and reconnect with nature while staying in Tangalle."
    ],
    distance: "3.8 km",
    driveTime: "10 min",
    directionsUrl: "https://maps.google.com/?q=Goyambokka+Beach+Tangalle"
  },
  {
    slug: "silent-beach",
    title: "Silent Beach",
    subtitle: "Tangalle",
    heroImage: "/images/attractions/SilentBeach2.jpg",
    image: "/images/attractions/silentBeach.jpg",
    description: "Escape to a secluded beach known for its calm atmosphere and stunning sunsets.",
    longDescription: [
      "Silent Beach is a secluded and unspoiled stretch of coastline located just 15–20 minutes from Tangalle, offering a peaceful escape from busy tourist areas. True to its name, this hidden beach is known for its calm atmosphere, soft golden sands, and clear turquoise waters, making it an ideal retreat for travelers seeking privacy and tranquility by the sea.",
      "With minimal development and fewer visitors, Silent Beach allows guests to fully connect with nature—whether relaxing under the sun, enjoying a quiet walk along the shore, or watching stunning sunsets over the Indian Ocean. Easily accessible yet wonderfully serene, Silent Beach is a perfect destination for those looking to unwind, reflect, and experience the untouched beauty of Sri Lanka's southern coast."
    ],
    distance: "4.7 km",
    driveTime: "11 min",
    directionsUrl: "https://maps.google.com/?q=Silent+Beach+Tangalle"
  },
  {
    slug: "bata-atha-agro-farm",
    title: "Bata Atha Agro Farm",
    subtitle: "Sri Lanka",
    heroImage: "/images/attractions/bataAthaFarm.png",
    image: "/images/attractions/bataAtha2.jpg",
    description: "Experience sustainable farming traditions and authentic village life at this serene rural retreat.",
    longDescription: [
      "Tucked away in Sri Lanka's peaceful countryside, Bata Atha Agro Farm is a serene rural retreat that highlights the island's rich agricultural heritage and sustainable farming traditions. Surrounded by lush greenery, rolling hills, and fertile farmland, the farm offers visitors an authentic glimpse into village life and eco-friendly living. Reached via a scenic drive through rural landscapes, it provides a refreshing escape from busy urban environments.",
      "The farm showcases organic cultivation through rice fields, fruit orchards, vegetable gardens, and spice plantations, all grown in harmony with nature. Guided tours introduce visitors to traditional farming techniques, composting methods, and sustainable practices, while hands-on activities such as rice harvesting and farm-to-table dining create memorable experiences. Ideal for nature lovers and those seeking tranquility, Bata Atha Agro Farm offers a meaningful connection to Sri Lanka's rural charm and sustainable way of life."
    ],
    distance: "15.6 km",
    driveTime: "23 min",
    directionsUrl: "https://maps.app.goo.gl/femGyLZsHaZ2mvsw7"
  },
  {
    slug: "parei-wella-beach",
    title: "Parei Wella Beach",
    subtitle: "Tangalle",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1770&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1770&auto=format&fit=crop",
    description: "A quiet beach with golden sands, clear waters, and breathtaking sunset views near Tangalle town.",
    longDescription: [
      "Parei Wella Beach is a quiet and scenic beach tucked away in the coastal town of Tangalle, offering a peaceful escape along Sri Lanka's southern shoreline. With its soft golden sands, clear blue waters, and uncrowded atmosphere, this hidden gem is ideal for travelers seeking relaxation away from busy tourist beaches. Located just about 1 km from Tangalle town, the beach is easily accessible within minutes by foot, bicycle, or tuk-tuk.",
      "The calm waters make Parei Wella Beach suitable for swimming and light snorkeling, while its natural surroundings and swaying palms create a soothing coastal ambiance. Visitors can enjoy breathtaking sunset views as the sky transforms into vibrant shades of orange and pink. Close to attractions such as Tangalle Lagoon, Mulkirigala Rock Temple, and local markets, Parei Wella Beach is a perfect blend of tranquility, natural beauty, and convenience for a relaxing seaside getaway."
    ],
    distance: "1.2 km",
    driveTime: "4 min",
    directionsUrl: "https://maps.google.com/?q=Parei+Wella+Beach+Tangalle"
  },
  {
    slug: "navy-sea-view-garden",
    title: "Navy Sea View Garden / Point",
    subtitle: "Tangalle",
    heroImage: "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?q=80&w=1770&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?q=80&w=1770&auto=format&fit=crop",
    description: "Watch breathtaking sunrise views over the Indian Ocean at this peaceful coastal viewpoint.",
    longDescription: [
      "Located along the scenic coastline of Tangalle, opposite the Tangalle Ruhuna Navy Camp, the Navy Sea View Garden is a peaceful viewpoint best known for its breathtaking sunrise views. Overlooking the vast Indian Ocean, this quiet spot offers an unobstructed horizon where early morning light paints the sky in soft shades of gold, pink, and orange, creating a calm and unforgettable coastal experience.",
      "Arriving around 6:00 AM allows visitors to witness the sun rising gently above the ocean, accompanied by the soothing sound of waves below. Less crowded and mostly known to locals, the Navy Sea View Garden is ideal for photographers, nature lovers, and travelers seeking a serene moment by the sea. Clean surroundings, fresh ocean air, and natural beauty make it a perfect place to start the day in Tangalle."
    ],
    distance: "1.4 km",
    driveTime: "5 min",
    directionsUrl: "https://maps.google.com/?q=Navy+Sea+View+Garden+Tangalle"
  },
  {
    slug: "wewurukannala-vihara-temple",
    title: "Wewurukannala Vihara Temple",
    subtitle: "Dikwella",
    heroImage: "/images/attractions/wewurukannala2.jpeg",
    image: "/images/attractions/wewurukannala1.jpeg",
    description: "Visit Sri Lanka's largest seated Buddha statue and explore historic murals and shrine rooms.",
    longDescription: [
      "Located in the town of Dikwella, about 15 km east of Tangalle, Wewurukannala Vihara Temple is one of Sri Lanka's most remarkable Buddhist landmarks. The temple is best known for its colossal seated Buddha statue, standing at approximately 50 meters tall, making it the largest seated Buddha statue in the country. Visitors can climb inside the statue to upper levels, where they are rewarded with close-up views of the Buddha's serene face and panoramic views of the surrounding countryside.",
      "Dating back to the 18th century, the temple reflects Sri Lanka's rich Buddhist heritage through its murals, sculptures, and shrine rooms that depict stories from the Buddha's life and Jataka tales. A unique and thought-provoking feature is the 'Chamber of Horrors,' which illustrates moral lessons through dramatic depictions based on Buddhist teachings. Actively used as a place of worship, especially during Poya days, Wewurukannala Vihara offers visitors a powerful blend of spirituality, history, and cultural artistry, making it a meaningful stop when exploring southern Sri Lanka."
    ],
    distance: "16.3 km",
    driveTime: "28 min",
    directionsUrl: "https://maps.app.goo.gl/ivVPHDsxCtgfhz7w7"
  },
  {
    slug: "unakuruwa-surf-point",
    title: "Unakuruwa Surf Point",
    subtitle: "Tangalle",
    heroImage: "https://images.unsplash.com/photo-1502933691298-84fc14542831?q=80&w=1770&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1502933691298-84fc14542831?q=80&w=1770&auto=format&fit=crop",
    description: "Enjoy consistent waves and a relaxed beach atmosphere at this popular surf destination.",
    longDescription: [
      "Unakuruwa Surf Point is a popular yet laid-back surf destination along Sri Lanka's southern coast, located just a 15-minute drive from Tangalle town. Known for its consistent waves and golden sandy beach, this surf spot attracts both beginner and experienced surfers looking for an exciting yet relaxed ocean experience. The scenic drive to Unakuruwa offers beautiful views of palm-lined shores and turquoise waters, making it an easy and rewarding coastal escape.",
      "The waves at Unakuruwa are suitable for all skill levels, with local surf schools and instructors available for beginners, while more advanced surfers can enjoy point and reef breaks. Beyond surfing, visitors can relax on the beach, enjoy fresh seafood at nearby beachside cafes, and witness stunning sunsets over the Indian Ocean. Combining adventure, natural beauty, and a chilled beach atmosphere, Unakuruwa Surf Point is a must-visit spot for surf lovers and coastal explorers in Tangalle."
    ],
    distance: "5.3 km",
    driveTime: "10 min",
    directionsUrl: "https://maps.app.goo.gl/2JMKwJ7BUgNKwfeb9"
  },
  {
    slug: "tangalle-beach",
    title: "Tangalle Beach",
    subtitle: "Tangalle",
    heroImage: "/images/attractions/tangalleBeach.webp",
    image: "/images/attractions/tangalleBeach.webp",
    description: "Experience authentic coastal life at Tangalle's main beach with fishing boats and stunning views.",
    longDescription: [
      "Tangalle Beach is the main coastal highlight of the southern town of Tangalle, offering a perfect blend of scenic ocean views, wide sandy shores, and authentic coastal life. Stretching along the Indian Ocean, the beach is known for its calm and relaxing atmosphere, making it an ideal place for visitors to unwind while enjoying the soothing rhythm of the waves and refreshing sea breeze.",
      "One of the beach's most charming features is the presence of local fishermen and their colorful boats lining the shore, providing a glimpse into traditional coastal life and adding character to the landscape. Visitors can enjoy peaceful walks along the sand, relax by the sea, or watch stunning sunrises and sunsets that paint the sky in warm hues. With easy access from the town center and nearby beachside cafés serving local flavors, Tangalle Beach offers a serene yet lively coastal experience that captures the true essence of southern Sri Lanka."
    ],
    distance: "1.2 km",
    driveTime: "4 min",
    directionsUrl: "https://maps.app.goo.gl/a9HedHD1UyQBVvjp8"
  },
  {
    slug: "kalametiya-bird-sanctuary",
    title: "Kalametiya Bird Sanctuary",
    subtitle: "Near Tangalle",
    heroImage: "/images/attractions/kalametiya.jpg",
    image: "/images/attractions/kalametiya.jpg",
    description: "Explore a peaceful wetland sanctuary home to diverse resident and migratory bird species.",
    longDescription: [
      "Kalametiya Bird Sanctuary is a peaceful nature reserve located about 15 km from Tangalle along Sri Lanka's southern coast. Spanning around 150 hectares, this sanctuary is a rich wetland ecosystem made up of lagoons, mangroves, and waterways, providing an ideal habitat for both resident and migratory bird species. Its calm surroundings and untouched landscapes make it a perfect escape for nature lovers and birdwatching enthusiasts.",
      "The sanctuary is home to a wide variety of birds, including storks, herons, kingfishers, bee-eaters, eagles, and many waterfowl species. Early mornings and late afternoons are the best times to explore, when bird activity is at its peak and the soft light enhances the experience. Easily reachable within 30–45 minutes from Tangalle via a scenic drive through coastal villages, Kalametiya Bird Sanctuary offers a refreshing connection to nature, tranquility, and Sri Lanka's remarkable biodiversity."
    ],
    distance: "20.4 km",
    driveTime: "31 min",
    directionsUrl: "https://maps.app.goo.gl/1wRLYwUrZ9r5wGjK7"
  },
  {
    slug: "yala-national-park",
    title: "Yala National Park",
    subtitle: "Near Tangalle",
    heroImage: "/images/attractions/Yala1.jpeg",
    image: "/images/attractions/Yala2.jpeg",
    description: "Embark on an unforgettable safari with elephants, leopards, and diverse wildlife at Yala.",
    longDescription: [
      "Yala National Park is one of Sri Lanka's most famous wildlife destinations, offering an unforgettable safari experience within reach of Tangalle. Located approximately 70 km northeast of Tangalle, the park can be reached in about 2 to 2.5 hours by road, making it a popular and rewarding day trip for travelers staying along the southern coast.",
      "Renowned for its rich biodiversity, Yala is home to elephants, leopards, sloth bears, crocodiles, deer, and a remarkable variety of birdlife. Guided jeep safaris provide the best way to explore the park's diverse landscapes, which include forests, grasslands, lagoons, and wetlands. Combining thrilling wildlife encounters with scenic beauty, Yala National Park offers a powerful contrast to Tangalle's beaches and is a must-visit destination for nature and adventure lovers exploring southern Sri Lanka."
    ],
    distance: "89.2 km",
    driveTime: "1 hr 31 min",
    directionsUrl: "https://maps.google.com/?q=Yala+National+Park+Sri+Lanka"
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
