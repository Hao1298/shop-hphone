// Chạy: node playground/es6.ts (cần Node.js 22.18 trở lên)

// 1. let / const
const shopName = "HPhone";
let visitCount = 0;
visitCount += 1;

// 2. Template string
console.log(`Chào mừng đến ${shopName}! Lượt xem: ${visitCount}`);

// 3. Arrow function, tham số mặc định
const discount = (price: number, percent = 10) => price - (price * percent) / 100;
console.log("Giá sau giảm:", discount(28990000), discount(28990000, 15));

// 4. Destructuring đối tượng và mảng
const product = {
  id: 1,
  name: "iPhone 17 Pro 256GB",
  price: 28990000,
  tags: ["chính hãng", "5G"],
};
const { name: productName, price } = product; // đổi tên khi destructuring
const [firstTag] = product.tags;
console.log(productName, price, firstTag);

// 5. Spread: sao chép và ghi đè, không sửa đối tượng gốc
const updated = { ...product, price: 26990000 };
console.log(product.price, "->", updated.price);
const moreTags = [...product.tags, "trả góp 0%"];
console.log(moreTags);

// 6. Rest parameter
const sum = (...numbers: number[]) => numbers.reduce((a, b) => a + b, 0);
console.log("Tổng:", sum(12, 7, 10, 6));

// 7. map / filter / find / reduce
const prices = [18990000, 22490000, 28990000, 29490000];
const vnd = prices.map((p) => p.toLocaleString("vi-VN") + " ₫");
const midRange = prices.filter((p) => p < 25000000);
const firstFlagship = prices.find((p) => p > 25000000);
const total = prices.reduce((acc, p) => acc + p, 0);
console.log({ vnd, midRange, firstFlagship, total });

// 8. Optional chaining (?.) và nullish coalescing (??)
type User = { name: string; address?: { city?: string } };
const guest: User = { name: "Khách" };
console.log(guest.address?.city ?? "Chưa có địa chỉ");

// 9. Promise và async/await
const fakeFetchProducts = (): Promise<string[]> =>
  new Promise((resolve) =>
    setTimeout(
      () => resolve(["iPhone 17 Pro 256GB", "Samsung Galaxy S26 Ultra", "Xiaomi 15 Ultra"]),
      500
    )
  );

async function main() {
  console.log("Đang tải sản phẩm...");
  const names = await fakeFetchProducts();
  console.log("Đã tải:", names);
}

main();