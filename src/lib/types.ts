export type Category =
  | "all"
  | "wedding"
  | "birthday"
  | "grand-opening"
  | "seasonal"
  | "hoa-tang"

export interface Flower {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: Exclude<Category, "all">;
  image: string;
  gallery: string[];
  description: string;
  featured: boolean;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
}
