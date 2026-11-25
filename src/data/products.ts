export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 17 Pro 256GB",
    price: 28990000,
    image: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.landing-big_2x.jpg",
    category: "iPhone",
    stock: 12,
  },
  {
    id: 2,
    name: "Samsung Galaxy S26 Ultra",
    price: 29490000,
    image: "https://api.samsungmobilepress.com/api/v1/file/F0079F4C3B320974850EA001FDD3463F37B966748BDE494FE62748327134D1DCE64158DC226213A89FED047E03845F28FF11247D0F5F079675A5BA7EC119A8674E479D8C6611F18CA1274AB23544EAD1D59F28A1AE5591ADDC088A2826AA2F0B97EDE750BCA1D4633D188D39711E6B63A0AF87D47190E94DC73815539D17511B3AB052BB115C35872B3F0EAC1BAD3CFD",
    category: "Samsung",
    stock: 7,
  },
  {
    id: 3,
    name: "Xiaomi 15 Ultra",
    price: 21990000,
    image: "https://i02.appmifile.com/240_operatorx_operatorx_opx/26/09/2023/ee07297cdf24071db7f6846d9c4727bb!500x500.png",
    category: "Xiaomi",
    stock: 0,
  },
  {
    id: 4,
    name: "OPPO Find X8 Pro",
    price: 23990000,
    image: "https://opsg-img-cdn-gl.heytapimg.com/epb/202605/24/5QlCi376E1kjye6N.png",
    category: "OPPO",
    stock: 10,
  },
  {
    id: 5,
    name: "vivo X200 Pro",
    price: 22490000,
    image: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1785313885884/4e558a327a09d9ea66f5e1374fd4405b.png",
    category: "vivo",
    stock: 6,
  },
  {
    id: 6,
    name: "iPhone 16 128GB",
    price: 18990000,
    image: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.landing-big_2x.jpg",
    category: "iPhone",
    stock: 18,
  },
];