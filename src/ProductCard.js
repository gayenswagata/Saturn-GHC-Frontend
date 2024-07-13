import React , { useState , useEffect} from 'react';
import './product.css';

function ProductCard ({ product }) {

    const [isWishlisted, setIsWishlisted] = useState(product.wishlist);

    useEffect(() => {
      setIsWishlisted(product.wishlist === "true");
    }, [product.wishlist]);

    console.log("clicked "+ isWishlisted);
    const toggleWishlist = () => {
        
        setIsWishlisted(!isWishlisted);
    };

      const renderStars = (rating) => {
        const starPercentage = (rating / 5) * 100;
        return (
            <div className="star-rating">
        <div className="star-rating-top" style={{ width: `${starPercentage}%` }}>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
        <div className="star-rating-bottom">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </div>
        );
      };
      
    

  return (
    <div className="product-card">
        <div className="discount-badge">-{product.discount}%</div>
        
        <img src={product.image} alt={product.name} className="product-image"  width="152px" height="156px" />
        <div className="large-font text-center top-20">
        <div
          
          className={`ion-icon ${isWishlisted ? 'is-active' : ''}`}
          onClick={toggleWishlist}
        >
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 14.4164L6.9125 13.3801C3.05 9.71375 0.5 7.29569 0.5 4.32808C0.5 1.91002 2.315 0.0101242 4.625 0.0101242C5.93 0.0101242 7.1825 0.646041 8 1.65095C8.8175 0.646041 10.07 0.0101242 11.375 0.0101242C13.685 0.0101242 15.5 1.91002 15.5 4.32808C15.5 7.29569 12.95 9.71375 9.0875 13.3879L8 14.4164Z"
              fill={isWishlisted ? '#E75151' : '#F1F2F2' }
            />
          </svg>
        </div>
      </div>
        
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
        {renderStars(product.rating)} <span className="rating">({product.rating})</span>
        </div>
        <div className="product-price">
          <span className="current-price">Rs. {product.currentPrice}</span>
          <span className="original-price">Rs. {product.originalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;