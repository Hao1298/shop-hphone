type Props = {
  cartCount?: number;
  onOpenCart?: () => void;
};

export default function Header({ cartCount = 0, onOpenCart }: Props) {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo">
          H<span>Phone</span>
        </a>
        <nav className="nav">
          <a href="#top">Trang chủ</a>
          <a href="#products">Sản phẩm</a>
          <a href="#footer">Giới thiệu</a>
        </nav>
        <button
          type="button"
          className="cart-link"
          onClick={onOpenCart}
        >
          🛒 Giỏ hàng ({cartCount})
        </button>
      </div>
    </header>
  );
}