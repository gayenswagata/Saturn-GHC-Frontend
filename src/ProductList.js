import React from 'react';
import ProductCard from './ProductCard';
import './product.css';

const ProductList = ({ products, category }) => {
  return (
    <div className="product-list">
      <div className="product-header">
        <h2>{category}</h2>
        <button className="view-all">View all</button>
      </div>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;