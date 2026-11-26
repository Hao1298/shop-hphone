import { formatPrice } from "../utils/format";
import { calcTotal, type CartItem } from "../utils/cart";

type Props = {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onCheckout: () => void;
};

export default function CartDrawer({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="cart-backdrop" onClick={onClose}>
      <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Giỏ hàng của bạn</h3>
          <button type="button" className="cart-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="cart-body">
          {items.length === 0 ? (
            <p className="cart-empty">Chưa có sản phẩm nào trong giỏ hàng.</p>
          ) : (
            items.map(({ product, quantity }) => (
              <div key={product.id} className="cart-item">
                <img src={product.image} alt={product.name} />
                <div className="cart-item-info">
                  <h4>{product.name}</h4>
                  <p>{formatPrice(product.price)}</p>
                  <div className="cart-qty">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      type="button"
                      disabled={quantity >= product.stock}
                      onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="cart-remove"
                      onClick={() => onRemoveItem(product.id)}
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Tổng tiền:</span>
            <strong>{formatPrice(calcTotal(items))}</strong>
          </div>
          <button
            type="button"
            className="btn cart-checkout-btn"
            disabled={items.length === 0}
            onClick={onCheckout}
          >
            Đặt mua ngay
          </button>
        </div>
      </aside>
    </div>
  );
}