export type Category =
  | "all"
  | "Hoa-Chia-Buồn"
  | "Hoa-Sinh-nhật"
  | "Hoa-Khai-trương"
  | "Hoa-Sáp"
  | "Kệ-Hoa"

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
