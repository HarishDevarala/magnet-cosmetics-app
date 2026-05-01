import { products } from '../data/dummyData';
import ProductCard from '../components/ProductCard';

const ProductListingPage = () => {
  return (
    <div className="page-container section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Our <span>Collection</span></h2>
          <p>Discover our range of premium cosmetics and beauty products.</p>
        </div>
        
        <div className="listing-layout" style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '40px' }}>
          {/* Sidebar Filters */}
          <aside className="filters-sidebar">
            <h3 style={{ marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>Filters</h3>
            <div className="filter-group" style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '14px', marginBottom: '12px' }}>Categories</h4>
              <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                <li><label><input type="checkbox" /> Makeup</label></li>
                <li><label><input type="checkbox" /> Skincare</label></li>
                <li><label><input type="checkbox" /> Haircare</label></li>
                <li><label><input type="checkbox" /> Perfumes</label></li>
              </ul>
            </div>
            <div className="filter-group">
              <h4 style={{ fontSize: '14px', marginBottom: '12px' }}>Price Range</h4>
              <input type="range" style={{ width: '100%' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '8px' }}>
                <span>₹0</span>
                <span>₹10,000+</span>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="grid-3">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
