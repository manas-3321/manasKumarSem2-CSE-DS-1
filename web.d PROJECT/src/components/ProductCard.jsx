import React from 'react';
import { Plus } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
  const { name, price, category, image, description } = product;

  return (
    <div className="product-card">
      <div className="product-image-container">
        {/* Category Badge */}
        <span className={`product-badge ${category.toLowerCase()}`}>
          {category}
        </span>
        
        {/* Product image */}
        <img 
          src={image} 
          alt={name} 
          className="product-image" 
          loading="lazy"
        />
      </div>

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-desc">{description}</p>
        
        <div className="product-footer">
          <span className="product-price">${price.toFixed(2)}</span>
          
          <button 
            onClick={() => onAddToCart(product)} 
            className="add-to-cart-btn"
            aria-label={`Add ${name} to cart`}
          >
            <Plus size={16} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
