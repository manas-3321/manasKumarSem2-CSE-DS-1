import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onAddToCart }) {
  return (
    <section className="products-section" id="products">
      <div className="section-header">
        <h2 className="section-title">
          FEATURED <span>GEAR</span>
        </h2>
        <span className="section-info">
          Showing {products.length} item{products.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
    </section>
  );
}
