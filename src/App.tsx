import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";
import { products, type Product } from "./data/products";
import { filterProducts } from "./utils/product";
import {
  addToCart,
  calcTotal,
  countItems,
  removeFromCart,
  updateQuantity,
  type CartItem,
} from "./utils/cart";
import { formatPrice } from "./utils/format";
import "./App.css";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    if (product.stock === 0) return;
    setCart((prev) => addToCart(prev, product, 1));
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    setCart((prev) => updateQuantity(prev, productId, quantity));
  };

  const handleRemoveItem = (productId: number) => {
    setCart((prev) => removeFromCart(prev, productId));
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    alert(`Đặt hàng thành công! Tổng thanh toán: ${formatPrice(calcTotal(cart))}`);
    setCart([]);
    setIsCartOpen(false);
  };

  const affordablePhones = filterProducts(products, {
    maxPrice: 24000000,
    sort: "asc",
  });
  const iphoneList = filterProducts(products, { category: "iPhone" });
  const lowStockProducts = products.filter(
    (p) => p.stock >= 1 && p.stock <= 5
  );

  return (
    <>
      <div id="top" />
      <Header
        cartCount={countItems(cart)}
        onOpenCart={() => setIsCartOpen(true)}
      />
      <main>
        <Banner />
        <CategoryList />
        <div id="products">
          <ProductList
            title="Sản phẩm nổi bật"
            items={products}
            onAddToCart={handleAddToCart}
          />
          <ProductList
            title="Giá từ 24 triệu trở xuống"
            items={affordablePhones}
            onAddToCart={handleAddToCart}
          />
          <ProductList
            title="Dòng iPhone"
            items={iphoneList}
            onAddToCart={handleAddToCart}
          />
          <ProductList
            title="Sản phẩm sắp hết hàng"
            items={lowStockProducts}
            onAddToCart={handleAddToCart}
          />
        </div>
      </main>
      <div id="footer">
        <Footer />
      </div>
      <CartDrawer
        isOpen={isCartOpen}
        items={cart}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
    </>
  );
}

export default App;