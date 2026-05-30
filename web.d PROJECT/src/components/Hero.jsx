import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero">
      {/* Decorative grid */}
      <div className="hero-grid-decoration"></div>

      <div className="hero-content">
        <div className="hero-tagline">
          NEO-TOKYO EST. 2026 // LIMITLESS GEAR
        </div>
        
        <h1 className="hero-title">
          NEXT-GEN TECH & <span>ANIME MERCH</span>
        </h1>
        
        <p className="hero-subtitle">
          Upgrade your setup with premium cyberpunk-themed peripherals, limited apparel drops, and official manga collections. Designed for gamers, coders, and otaku.
        </p>
        
        <button className="hero-cta-btn" onClick={scrollToProducts}>
          Shop Now <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
