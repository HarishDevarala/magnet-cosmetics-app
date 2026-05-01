import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        {product.isNew && <span className="product-badge new">New</span>}
        {product.discount && <span className="product-badge sale">Sale</span>}
        
        <div className="product-actions">
          <button className="action-btn" title="Add to Wishlist"><Heart size={18} /></button>
          <button className="action-btn" title="Quick View"><Eye size={18} /></button>
          <button className="action-btn cart-add-btn" title="Add to Cart" onClick={() => addToCart(product)}>
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <p className="product-brand">{product.brand}</p>
        <Link to={`/products/${product.id}`} className="product-name">
          {product.name}
        </Link>
        <div className="product-rating">
          {'★'.repeat(Math.floor(product.rating))}
          {'☆'.repeat(5 - Math.floor(product.rating))}
          <span className="rating-count">({product.reviews})</span>
        </div>
        <div className="product-price">
          {product.oldPrice && <span className="old-price">₹{product.oldPrice}</span>}
          <span className="current-price">₹{product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
