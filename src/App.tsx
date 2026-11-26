import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products } from "./data/products";
import { filterProducts } from "./utils/product";
import "./App.css";

function App() {
  const affordablePhones = filterProducts(products, {
    maxPrice: 24000000,
    sort: "asc",
  });
  const iphoneList = filterProducts(products, { category: "iPhone" });

  return (
    <>
      <Header />
      <main>
        <Banner />
        <CategoryList />
        <div id="products">
          <ProductList title="Sản phẩm nổi bật" items={products} />
          <ProductList title="Giá từ 24 triệu trở xuống" items={affordablePhones} />
          <ProductList title="Dòng iPhone" items={iphoneList} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;