export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
};

export const products: Product[] = [
  { id: 1, name: "iPhone 17 Pro 256GB", price: 28990000, image: "https://placehold.co/400x300?text=iPhone+17+Pro", category: "iPhone", stock: 12 },
  { id: 2, name: "Samsung Galaxy S26 Ultra", price: 29490000, image: "https://placehold.co/400x300?text=Galaxy+S26+Ultra", category: "Samsung", stock: 7 },
  { id: 3, name: "Xiaomi 15 Ultra", price: 21990000, image: "https://placehold.co/400x300?text=Xiaomi+15+Ultra", category: "Xiaomi", stock: 0 },
  { id: 4, name: "OPPO Find X8 Pro", price: 23990000, image: "https://placehold.co/400x300?text=OPPO+Find+X8", category: "OPPO", stock: 10 },
  { id: 5, name: "vivo X200 Pro", price: 22490000, image: "https://placehold.co/400x300?text=vivo+X200+Pro", category: "vivo", stock: 6 },
  { id: 6, name: "iPhone 16 128GB", price: 18990000, image: "https://placehold.co/400x300?text=iPhone+16", category: "iPhone", stock: 18 },
];