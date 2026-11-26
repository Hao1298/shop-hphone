// Chạy: node playground/test-cart.ts
import { products } from "../src/data/products.ts";
import {
  addToCart,
  updateQuantity,
  removeFromCart,
  countItems,
  calcTotal,
} from "../src/utils/cart.ts";
import type { CartItem } from "../src/utils/cart.ts";
import { formatPrice } from "../src/utils/format.ts";
import { filterProducts, getCategories } from "../src/utils/product.ts";

let cart: CartItem[] = [];
cart = addToCart(cart, products[0]); // iPhone 17 Pro 256GB x1
cart = addToCart(cart, products[0], 2); // iPhone 17 Pro 256GB x3
cart = addToCart(cart, products[3]); // OPPO Find X8 Pro x1
console.log("Số sản phẩm:", countItems(cart));
console.log("Tổng tiền:", formatPrice(calcTotal(cart)));

cart = updateQuantity(cart, products[0].id, 1);
cart = removeFromCart(cart, products[3].id);
console.log(cart.map((i) => `${i.product.name} x${i.quantity}`));

console.log("Danh mục:", getCategories(products));
console.log(
  "iPhone, giá tăng dần:",
  filterProducts(products, { category: "iPhone", sort: "asc" }).map((p) => p.name)
);
console.log(
  "Tìm 'pro', tối đa 25tr:",
  filterProducts(products, { keyword: "pro", maxPrice: 25000000 }).map((p) => p.name)
);