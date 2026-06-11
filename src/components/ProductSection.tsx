import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
  id?: string;
}

export default function ProductSection({ title, subtitle, products, id }: ProductSectionProps) {
  return (
    <div className="section" id={id}>
      <h2 className="sectionTitle">{title}</h2>
      <p className="sectionSub">{subtitle}</p>
      <div className="productGrid">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
