import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import { products } from './data/products';
import { Sparkles, Terminal, Mail, Cpu, Heart } from 'lucide-react';
import './App.css';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Toast notification trigger
  const triggerToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    
    // Auto-remove toast after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  // Add Item to Cart
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        triggerToast(`Increased quantity of ${product.name}`);
        return prevItems.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      triggerToast(`Added ${product.name} to cart`);
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Update Item Quantity inside the cart
  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove Item from Cart
  const handleRemoveItem = (productId) => {
    const item = cartItems.find(i => i.id === productId);
    if (item) {
      triggerToast(`Removed ${item.name} from cart`);
    }
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Calculate total number of items for navbar badge
  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-container" id="root">
      {/* Sticky top navigation */}
      <Navbar 
        cartCount={totalCartCount} 
        onCartClick={() => setIsCartOpen(true)} 
      />

      {/* Hero promo banner */}
      <Hero />

      {/* Main Product Catalog */}
      <main style={{ flexGrow: 1 }}>
        <ProductGrid 
          products={products} 
          onAddToCart={handleAddToCart} 
        />

        {/* About / Brand Story Section */}
        <section className="products-section" id="about" style={{ borderTop: '2px solid var(--color-surface)' }}>
          <div className="section-header">
            <h2 className="section-title">
              THE <span>BRAND</span>
            </h2>
            <span className="section-info">Established // 2026</span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            backgroundColor: 'var(--color-surface)',
            padding: '2.5rem',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.03)'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-secondary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)', fontWeight: '600' }}>
                <Terminal size={18} /> STREETWEAR & HARDWARE
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                GEN-SEOUL is a premium storefront delivering high-end workspace additions and limited anime collectibles. Inspired by neo-noir graphics, mechanical keyboard culture, and Japanese cyberpunk animation, we build accessories that level up your workspace aesthetic.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-secondary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)', fontWeight: '600' }}>
                <Sparkles size={18} /> QUALITY STANDARDS
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                All of our products are manufactured in limited numbers. From custom PBT dye-sublimated mechanical keyboard keycaps to thick-threaded streetwear hoodies, we emphasize durability, high-end sensory feel, and gorgeous neon detailing.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Slide-out Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems} 
        onUpdateQuantity={handleUpdateQuantity} 
        onRemoveItem={handleRemoveItem} 
      />

      {/* Visual Toast Notifications */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast">
            <span style={{ 
              display: 'inline-block', 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--color-secondary)' 
            }}></span>
            {toast.message}
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="app-footer" id="footer">
        <div className="footer-grid">
          <div className="footer-info">
            <div className="footer-logo">
              GEN-SEOUL <span>MERCH</span>
            </div>
            <p className="footer-desc">
              Building next-generation workspace extensions and apparel for developers, digital creatives, and otaku communities worldwide.
            </p>
          </div>

          <div className="footer-links-col">
            <h4>Products</h4>
            <ul>
              <li><a href="#products">Peripherals</a></li>
              <li><a href="#products">Clothing</a></li>
              <li><a href="#products">Collectibles</a></li>
              <li><a href="#products">All Gear</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#footer">Contact Us</a></li>
              <li><a href="#footer">Shipping Info</a></li>
              <li><a href="#footer">Returns</a></li>
              <li><a href="#footer">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Connect</h4>
            <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" style={{ color: 'var(--color-text-secondary)' }}><Cpu size={20} /></a>
              <a href="mailto:support@genseoul.xyz" aria-label="Email" style={{ color: 'var(--color-text-secondary)' }}><Mail size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} GEN-SEOUL MERCH. All rights reserved. Demo submission.</p>
          <div className="footer-bottom-links">
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              Made with <Heart size={12} fill="var(--color-primary)" color="var(--color-primary)" /> for workshop
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
