import { products } from "../data/products";

export default function CategoryList() {
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <section className="container category-section">
      <div className="section-head">
        <h2 className="section-title">Danh mục sản phẩm</h2>
        <span className="section-sub">{categories.length} thương hiệu</span>
      </div>
      <div className="category-list">
        {categories.map((cat) => (
          <span key={cat} className="category-chip">
            {cat}
          </span>
        ))}
      </div>
    </section>
  );
}