import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount, onCartClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (targetId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      {/* Brand logo */}
      <div className="nav-brand" style={{ cursor: 'pointer' }} onClick={() => handleNavLinkClick('root')}>
        <span>GEN-SEOUL</span>
        <span>MERCH</span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="nav-links-desktop">
        <button onClick={() => handleNavLinkClick('hero')} className="nav-link">Home</button>
        <button onClick={() => handleNavLinkClick('products')} className="nav-link">Shop Gear</button>
        <button onClick={() => handleNavLinkClick('about')} className="nav-link">About</button>
        <button onClick={() => handleNavLinkClick('footer')} className="nav-link">Contact</button>
      </div>

      {/* Cart Icon & Mobile Hamburger */}
      <div className="nav-actions">
        <button 
          onClick={onCartClick} 
          className="cart-icon-btn" 
          aria-label="Open Cart"
        >
          <ShoppingCart size={20} />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>

        <button 
          onClick={toggleMobileMenu} 
          className={`hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Dropdown Links */}
      <div className={`nav-links-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
        <button onClick={() => handleNavLinkClick('hero')} className="nav-link">Home</button>
        <button onClick={() => handleNavLinkClick('products')} className="nav-link">Shop Gear</button>
        <button onClick={() => handleNavLinkClick('about')} className="nav-link">About</button>
        <button onClick={() => handleNavLinkClick('footer')} className="nav-link">Contact</button>
      </div>
    </nav>
  );
}
