import { Category, Flower } from "./types";

export const categories: { label: string; value: Category }[] = [
  { label: "Tất cả", value: "all" },
  { label: "Tiệc cưới", value: "wedding" },
  { label: "Sinh nhật", value: "birthday" },
  { label: "Khai trương", value: "grand-opening" },
  { label: "Theo mùa", value: "seasonal" },
  { label: "Hoa tang", value: "hoa-tang" },
];

export const flowers: Flower[] = [
  {
    id: "1",
    name: "Serene Ivory Bouquet",
    slug: "serene-ivory-bouquet",
    price: 850000,
    category: "wedding",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    description:
      "A timeless arrangement of white roses, lilies, and baby's breath, designed for the most elegant wedding ceremonies.",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "123",
    name: "Hoa tang màu tím",
    slug: "hoa-tang-mau-tim",
    price: 36000,
    category: "hoa-tang",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    description:
      "Hoa tang màu tím lá chanh",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800"
    ],
  },
  {
    id: "2",
    name: "Golden Sunrise Celebration",
    slug: "golden-sunrise-celebration",
    price: 1200000,
    category: "grand-opening",
    image:
      "https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=1171&auto=format",
    description:
      "Sunflowers and orange ranunculus symbolize success and prosperity for a grand business opening.",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "3",
    name: "Blushing Berry Delight",
    slug: "blushing-berry-delight",
    price: 450000,
    category: "birthday",
    image:
      "https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=1171&auto=format",
    description:
      "A playful mix of pink carnations and deep berry-colored roses, perfect for making a birthday extra special.",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "4",
    name: "Autumn Harvest Wreath",
    slug: "autumn-harvest-wreath",
    price: 600000,
    category: "seasonal",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=800",
    description:
      "Capturing the essence of fall with dried textures, warm ambers, and seasonal foliage.",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "5",
    name: "Midnight Romance",
    slug: "midnight-romance",
    price: 1500000,
    category: "wedding",
    image:
      "https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&q=80&w=800",
    description:
      "Deep red velvet roses mixed with dark green eucalyptus for a sophisticated, romantic evening.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "6",
    name: "Pastel Spring Waltz",
    slug: "pastel-spring-waltz",
    price: 720000,
    category: "seasonal",
    image:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800",
    description:
      "Soft lavender tulips and pale yellow daffodils bringing the freshness of spring indoors.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "7",
    name: "Business Flourish",
    slug: "business-flourish",
    price: 2500000,
    category: "grand-opening",
    image:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800",
    description:
      "An extra-large standing arrangement with orchids and hydrangeas to mark a significant milestone.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "8",
    name: "Sweet Sixteen Sparkle",
    slug: "sweet-sixteen-sparkle",
    price: 580000,
    category: "birthday",
    image:
      "https://images.unsplash.com/photo-1687830268600-58bb4724f9a7?q=80&w=1074&auto=format&fit=crop",
    description:
      "A bright and energetic bouquet featuring gerbera daisies in every color of the rainbow.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "9",
    name: "Rustic Dream Arch",
    slug: "rustic-dream-arch",
    price: 3500000,
    category: "wedding",
    image:
      "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=800",
    description:
      "Natural pampas grass and wild roses for a boho-chic wedding ceremony atmosphere.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "10",
    name: "Violet Velvet Grace",
    slug: "violet-velvet-grace",
    price: 890000,
    category: "birthday",
    image:
      "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=800",
    description:
      "Exquisite purple lisianthus and deep violet anemones for a touch of royal luxury.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "11",
    name: "Emerald Success Tier",
    slug: "emerald-success-tier",
    price: 4200000,
    category: "grand-opening",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
    description:
      "Multi-layered arrangement featuring white calla lilies and lush tropical greens.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "12",
    name: "Winter Wonderland",
    slug: "winter-wonderland",
    price: 950000,
    category: "seasonal",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
    description:
      "Silver-tipped pine cones, white roses, and frosted berries for a cozy winter vibe.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "13",
    name: "Champagne Toast",
    slug: "champagne-toast",
    price: 1800000,
    category: "wedding",
    image:
      "https://images.unsplash.com/photo-1524143878510-e3b8d6312402?auto=format&fit=crop&q=80&w=800",
    description:
      "Soft peach and cream peonies mixed with delicate silk ribbons for a romantic bridal look.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "14",
    name: "Zesty Orange Sorbet",
    slug: "zesty-orange-sorbet",
    price: 490000,
    category: "birthday",
    image:
      "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800",
    description:
      "Bright orange tulips and yellow lilies that radiate energy and happiness.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "15",
    name: "Modern Minimalist Stand",
    slug: "modern-minimalist-stand",
    price: 2100000,
    category: "grand-opening",
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&q=80&w=800",
    description:
      "Clean lines using white anthuriums and architecturally placed monstera leaves.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "16",
    name: "Lavender Fields Mist",
    slug: "lavender-fields-mist",
    price: 550000,
    category: "seasonal",
    image:
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&q=80&w=800",
    description:
      "Freshly cut lavender and blue sea holly, bringing the scent of summer fields home.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "17",
    name: "Classic Crimson Love",
    slug: "classic-crimson-love",
    price: 1100000,
    category: "wedding",
    image:
      "https://images.unsplash.com/photo-1494336934272-f0efcedfc8d7?auto=format&fit=crop&q=80&w=800",
    description:
      "A large, dense bouquet of 99 premium red roses, the ultimate symbol of passionate love.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "18",
    name: "Starlight Gardenia",
    slug: "starlight-gardenia",
    price: 650000,
    category: "birthday",
    image:
      "https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?auto=format&fit=crop&q=80&w=800",
    description:
      "Fragrant gardenias and white snapdragons for a serene and thoughtful birthday gift.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "19",
    name: "Triumphant Red Stand",
    slug: "triumphant-red-stand",
    price: 3200000,
    category: "grand-opening",
    image:
      "https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?auto=format&fit=crop&q=80&w=800",
    description:
      "Bold red gerberas and gladiolus symbolizing strength and victory for a new venture.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "20",
    name: "Midnight Summer Eve",
    slug: "midnight-summer-eve",
    price: 820000,
    category: "seasonal",
    image:
      "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=800",
    description:
      "Dark purple dahlias and neon-colored accent flowers for a vibrant summer night feel.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    ],
  },
];
