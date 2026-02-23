import { flowers } from "../lib/data";
import { Flower, Category } from "../lib/types";

// Simulate a network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getFlowers = async (
  category: Category = "all",
): Promise<Flower[]> => {
  await delay(600);
  if (category === "all") return flowers;
  return flowers.filter((f) => f.category === category);
};

export const getFeaturedFlowers = async (): Promise<Flower[]> => {
  await delay(400);
  return flowers.filter((f) => f.featured);
};

export const getFlowerBySlug = async (slug: string): Promise<Flower | null> => {
  await delay(500);
  return flowers.find((f) => f.slug === slug) || null;
};
