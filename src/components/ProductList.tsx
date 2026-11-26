import type { Product } from "../data/products";
import ProductCard from "./ProductCard";

type Props = {
  title: string;
  items: Product[];
  onAddToCart?: (product: Product) => void;
};

export default function ProductList({ title, items, onAddToCart }: Props) {
  return (
    <section className="container">
      <div className="section-head">
        <h2 className="section-title">{title}</h2>
        <span className="section-sub">{items.length} sản phẩm</span>
      </div>
      <div className="product-grid">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}