import type { Product } from "../data/products";
import { formatPrice } from "../utils/format";

type Props = {
  product: Product;
  onAddToCart?: (product: Product) => void;
};

export default function ProductCard({ product, onAddToCart }: Props) {
  const isOutOfStock = product.stock === 0;

  return (
    <article className={`product-card ${isOutOfStock ? "is-sold-out" : ""}`}>
      <div className="product-thumb">
        <img src={product.image} alt={product.name} />
        {isOutOfStock && <span className="sold-out-ribbon">Hết hàng</span>}
      </div>

      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title" title={product.name}>
          {product.name}
        </h3>

        <div className="product-meta">
          <p className="product-price">{formatPrice(product.price)}</p>
          {isOutOfStock && <span className="out-of-stock-tag">Hết hàng</span>}
        </div>

        <button
          className="btn"
          disabled={isOutOfStock}
          onClick={() => onAddToCart?.(product)}
        >
          {isOutOfStock ? "Tạm hết hàng" : "Thêm vào giỏ"}
        </button>
      </div>
    </article>
  );
}