import type { Product } from "../data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
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
          <p className="product-price">
            {product.price.toLocaleString("vi-VN")} ₫
          </p>
          {isOutOfStock && <span className="out-of-stock-tag">Hết hàng</span>}
        </div>

        <button className="btn" disabled={isOutOfStock}>
          {isOutOfStock ? "Tạm hết hàng" : "Thêm vào giỏ"}
        </button>
      </div>
    </article>
  );
}