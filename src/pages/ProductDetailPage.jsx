import { useParams, Link } from 'react-router-dom';
import { products } from '../data/dummyData';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  const { addToCart } = useCart();

  return (
    <div className="section-padding">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          {/* Image Gallery */}
          <div className="product-gallery">
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }} 
            />
          </div>

          {/* Product Details */}
          <div className="product-details">
            <h1 style={{ fontSize: '36px', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>{product.name}</h1>
            <p style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
              {product.brand}
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <span style={{ fontSize: '28px', fontWeight: '600', color: 'var(--text-dark)' }}>₹{product.price}</span>
              {product.oldPrice && <span style={{ fontSize: '20px', color: 'var(--text-muted)', textDecoration: 'line-through' }}>₹{product.oldPrice}</span>}
              {product.discount && <span className="badge" style={{ padding: '6px 12px', fontSize: '12px' }}>Sale</span>}
            </div>

            <div style={{ color: 'var(--gold)', fontSize: '18px', marginBottom: '32px' }}>
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
              <span style={{ color: 'var(--text-muted)', fontSize: '14px', marginLeft: '8px' }}>({product.reviews} reviews)</span>
            </div>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '40px' }}>
              {product.description}
            </p>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '40px' }}>
              <button className="btn-primary" style={{ flex: 1, padding: '16px' }} onClick={() => addToCart(product)}>
                <ShoppingCart size={20} /> Add to Cart
              </button>
              <a href="https://wa.me/917009697009" target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ flex: 1, justifyContent: 'center' }}>
                Buy on WhatsApp
              </a>
            </div>
            
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '24px' }}>
              <h4 style={{ marginBottom: '12px' }}>Product Details</h4>
              <ul style={{ listStyle: 'none', color: 'var(--text-muted)', lineHeight: '2' }}>
                <li><strong>Category:</strong> {product.category}</li>
                <li><strong>Availability:</strong> In Stock at Nellore Store</li>
                <li><strong>Shipping:</strong> Free over ₹999</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
