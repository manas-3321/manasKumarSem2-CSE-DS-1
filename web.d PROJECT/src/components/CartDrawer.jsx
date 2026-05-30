import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem 
}) {
  // Calculate dynamic totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Close when clicking overlay (outside drawer)
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('cart-overlay')) {
      onClose();
    }
  };

  return (
    <div 
      className={`cart-overlay ${isOpen ? 'open' : ''}`} 
      onClick={handleOverlayClick}
    >
      <div className="cart-drawer">
        {/* Drawer Header */}
        <div className="cart-header">
          <h2 className="cart-title">
            Your Cart <span>{totalItemCount}</span>
          </h2>
          <button 
            onClick={onClose} 
            className="close-cart-btn"
            aria-label="Close Cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Body - Scrollable Items */}
        <div className="cart-items-container">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <ShoppingBag size={64} strokeWidth={1} />
              <h3>Your cart is empty</h3>
              <p>Looks like you haven't added any gear yet!</p>
              <button onClick={onClose} className="empty-shop-btn">
                Browse Store
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <div>
                    <h4 className="cart-item-name">{item.name}</h4>
                    <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  
                  <div className="cart-item-actions">
                    {/* Quantity controls */}
                    <div className="quantity-controls">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} 
                        className="qty-btn"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="qty-val">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} 
                        className="qty-btn"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    {/* Remove button */}
                    <button 
                      onClick={() => onRemoveItem(item.id)} 
                      className="remove-item-btn"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer - Calculations & Actions */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-line">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="cart-summary-line">
              <span>Shipping</span>
              <span style={{ color: 'var(--color-secondary)' }}>FREE</span>
            </div>
            <div className="cart-summary-line total">
              <span>Estimated Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <button 
              onClick={() => alert('Checkout demo simulation! Thank you for reviewing.')} 
              className="checkout-btn"
            >
              Proceed To Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
