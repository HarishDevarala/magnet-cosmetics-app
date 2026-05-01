import { Link } from 'react-router-dom';
import { Gift, Sparkles, Percent, Crown, ArrowRight, Star, MapPin, CheckCircle2, MessageCircle, ShoppingBag } from 'lucide-react';
import bridalImg from '../assets/images/cat_bridal_1777650395932.png';
import { products, categories } from '../data/dummyData';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import './HomePage.css';

const HomePage = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content animate-fade-up">
            <div className="hero-rating-pill">
              <Star size={14} fill="currentColor" />
              <span>4.9 Rating | 2300+ Reviews</span>
            </div>
            
            <h1 className="hero-title">
              Your Beauty <br />
              <span className="gold-italic">Destination</span> in <br />
              Nellore
            </h1>
            
            <p className="hero-subtitle">
              Discover premium makeup, skincare, and fragrances at <strong>Magnet Cosmetics</strong>, Magunta Layout. Trusted by thousands of happy customers across Andhra Pradesh.
            </p>
            
            <div className="hero-ctas">
              <a href="#" className="btn-whatsapp">
                <MessageCircle size={18} />
                WhatsApp Order
              </a>
              <Link to="/products" className="btn-shop-now">
                <ShoppingBag size={18} />
                Shop Now
              </Link>
            </div>
            
            <div className="hero-features-inline">
              <div className="feature-item">
                <CheckCircle2 size={16} className="text-green" />
                <span>100% Genuine</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={16} className="text-green" />
                <span>Best Prices</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={16} className="text-green" />
                <span>Expert Advice</span>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper animate-fade-in">
             <img src={bridalImg} alt="Premium Cosmetics Collection" className="hero-main-image" />
             
             <div className="hero-location-card">
               <div className="location-icon">
                 <MapPin size={20} color="#25D366" />
               </div>
               <div className="location-text">
                 <span className="location-label">Visit Our Store</span>
                 <span className="location-value">Magunta Layout</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-track">
          <span>100% GENUINE PRODUCTS</span> ✦
          <span>EXPERT BEAUTY ADVICE</span> ✦
          <span>PREMIUM BRANDS</span> ✦
          <span>BRIDAL SPECIALISTS</span> ✦
          <span>100% GENUINE PRODUCTS</span> ✦
          <span>EXPERT BEAUTY ADVICE</span> ✦
          <span>PREMIUM BRANDS</span> ✦
          <span>BRIDAL SPECIALISTS</span>
        </div>
      </div>

      {/* Featured Products */}
      <section className="section-padding featured-products">
        <div className="container">
          <div className="section-title animate-fade-up">
            <h2>Best Seller <span>Cosmetics</span></h2>
            <p>Our most loved products by the Nellore community.</p>
          </div>
          <div className="grid-4">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/products" className="btn-secondary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Trending Categories */}
      <section className="section-padding trending-categories">
        <div className="container">
          <div className="section-title animate-fade-up">
            <h2>Shop by <span>Category</span></h2>
            <p>Find exactly what you're looking for.</p>
          </div>
          <div className="grid-3">
            {categories.slice(0, 3).map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Offers Section */}
      <section className="section-padding exclusive-offers-section">
        <div className="container">
          <div className="offers-header animate-fade-up">
            <span className="offers-subtitle">DON'T MISS OUT</span>
            <h2>Exclusive <span className="gold-text">Offers</span></h2>
          </div>
          
          <div className="grid-4 offers-grid">
            <div className="offer-card card-pink animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="offer-icon-wrapper">
                <Gift size={24} />
              </div>
              <h3>Buy 2 Get 1 Free</h3>
              <p>On selected skincare and makeup products. Limited time offer!</p>
              <Link to="/offers" className="offer-link">Claim Offer <ArrowRight size={16} /></Link>
            </div>

            <div className="offer-card card-yellow animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="offer-icon-wrapper">
                <Sparkles size={24} />
              </div>
              <h3>Bridal Combos</h3>
              <p>Special discounted packages for brides. Everything you need for the big day.</p>
              <Link to="/offers" className="offer-link">View Combos <ArrowRight size={16} /></Link>
            </div>

            <div className="offer-card card-purple animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="offer-icon-wrapper">
                <Percent size={24} />
              </div>
              <h3>Festival Discounts</h3>
              <p>Celebrate in style! Up to 30% off on festive makeup collections.</p>
              <Link to="/offers" className="offer-link">Shop Festival <ArrowRight size={16} /></Link>
            </div>

            <div className="offer-card card-green animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="offer-icon-wrapper">
                <Crown size={24} />
              </div>
              <h3>Loyalty Rewards</h3>
              <p>Join our membership program and earn points on every purchase.</p>
              <Link to="/offers" className="offer-link">Join Now <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="promo-banner">
        <div className="container promo-container">
          <div className="promo-content">
            <h2>Bridal Beauty <span>Combos</span></h2>
            <p>Get up to 20% off on all bridal makeup kits and essentials. Pre-book your consultation at our Nellore store today!</p>
            <Link to="/offers" className="btn-primary">View Offers</Link>
          </div>
        </div>
      </section>

      {/* Store Visit CTA */}
      <section className="section-padding store-visit">
        <div className="container grid-2 align-center">
          <div className="store-image animate-fade-up">
            <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Magnet Cosmetics Store" className="rounded-image" />
          </div>
          <div className="store-content animate-fade-up">
            <h2>Experience Premium Beauty <br /><span>at Magnet Cosmetics</span></h2>
            <p>Visit our flagship store in Magunta Layout, Nellore. Explore our wide range of products in person, get shade-matched by our experts, and try before you buy.</p>
            <div className="store-features">
              <ul>
                <li>✓ Friendly, Expert Staff</li>
                <li>✓ Genuine Branded Products</li>
                <li>✓ Trial Available</li>
                <li>✓ Easy Parking</li>
              </ul>
            </div>
            <Link to="/store" className="btn-primary">Get Directions</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
