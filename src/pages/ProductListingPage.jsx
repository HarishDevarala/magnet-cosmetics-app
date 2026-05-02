import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { products } from '../data/dummyData';
import ProductCard from '../components/ProductCard';
import './ProductListingPage.css';

const ProductListingPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="page-container section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Our <span>Collection</span></h2>
          <p>Discover our range of premium cosmetics and beauty products.</p>
        </div>
        
        <button 
          className="mobile-filter-toggle" 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          {isFilterOpen ? <X size={20} /> : <Filter size={20} />}
          {isFilterOpen ? 'Close Filters' : 'Show Filters'}
        </button>

        <div className="listing-layout">
          {/* Sidebar Filters */}
          <aside className={`filters-sidebar ${isFilterOpen ? 'open' : ''}`}>
            <h3>Filters</h3>
            <div className="filter-group">
              <h4>Categories</h4>
              <ul>
                <li><label><input type="checkbox" /> Makeup</label></li>
                <li><label><input type="checkbox" /> Skincare</label></li>
                <li><label><input type="checkbox" /> Haircare</label></li>
                <li><label><input type="checkbox" /> Perfumes</label></li>
              </ul>
            </div>
            <div className="filter-group">
              <h4>Price Range</h4>
              <div className="price-slider-container">
                <input type="range" min="0" max="10000" />
                <div className="price-values">
                  <span>₹0</span>
                  <span>₹10,000+</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="grid-3 product-grid">
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
