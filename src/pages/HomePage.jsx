import { Link } from 'react-router-dom';
import { Gift, Sparkles, Percent, Crown, ArrowRight, Star, MapPin, CheckCircle2, MessageCircle, ShoppingBag, Mail } from 'lucide-react';
import { products, categories } from '../data/dummyData';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import './HomePage.css';

const testimonials = [
  {
    id: 1,
    text: "Magnet Cosmetics has the best collection in Nellore! I always find my shade here. The staff is super helpful and the prices are unbeatable.",
    name: "Priya Reddy",
    location: "Nellore",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    text: "I bought my entire bridal kit from here. The quality is 100% genuine and the bridal combo deals are amazing. Highly recommend to every bride!",
    name: "Sravanthi Devi",
    location: "Ongole",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    text: "Finally a beauty store in AP that stocks international brands at fair prices. The skincare section is excellent and staff gives great advice.",
    name: "Anitha Kumari",
    location: "Kavali",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  }
];

const HomePage = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home-page">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="container hero-container">

          <div className="hero-content animate-fade-up">
            <div className="hero-rating-pill">
              <Star size={13} fill="currentColor" />
              <span>4.9 Rating · 2,300+ Happy Customers</span>
            </div>

            <h1 className="hero-title">
              Your Beauty<br />
              <span className="gold-italic">Destination</span><br />
              in Nellore
            </h1>

            <p className="hero-subtitle">
              Discover premium makeup, skincare &amp; fragrances at{' '}
              <strong>Magnet Cosmetics</strong>, Magunta Layout. Trusted across Andhra Pradesh.
            </p>

            <div className="hero-ctas">
              <a href="https://wa.me/917009697009" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle size={17} />
                WhatsApp Order
              </a>
              <Link to="/products" className="btn-shop-now">
                <ShoppingBag size={17} />
                Shop Now
              </Link>
            </div>

            <div className="hero-features-inline">
              <div className="feature-item">
                <CheckCircle2 size={15} className="text-green" />
                <span>100% Genuine</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={15} className="text-green" />
                <span>Best Prices</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={15} className="text-green" />
                <span>Expert Advice</span>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85"
              alt="Premium Cosmetics Collection"
              className="hero-main-image"
            />
            <div className="hero-location-card">
              <div className="location-icon">
                <MapPin size={18} color="#25D366" />
              </div>
              <div className="location-text">
                <span className="location-label">Visit Our Store</span>
                <span className="location-value">Magunta Layout, Nellore</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee">
        <div className="marquee-track">
          <span>100% GENUINE PRODUCTS</span> ✦
          <span>EXPERT BEAUTY ADVICE</span> ✦
          <span>PREMIUM BRANDS</span> ✦
          <span>BRIDAL SPECIALISTS</span> ✦
          <span>FREE CONSULTATION</span> ✦
          <span>100% GENUINE PRODUCTS</span> ✦
          <span>EXPERT BEAUTY ADVICE</span> ✦
          <span>PREMIUM BRANDS</span> ✦
          <span>BRIDAL SPECIALISTS</span> ✦
          <span>FREE CONSULTATION</span>
        </div>
      </div>

      {/* ── FEATURED PRODUCTS ── */}
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
          <div className="text-center" style={{ marginTop: '36px' }}>
            <Link to="/products" className="btn-secondary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
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

      {/* ── EXCLUSIVE OFFERS ── */}
      <section className="section-padding exclusive-offers-section">
        <div className="container">
          <div className="offers-header animate-fade-up">
            <span className="offers-subtitle">DON'T MISS OUT</span>
            <h2>Exclusive <span className="gold-text">Offers</span></h2>
          </div>

          <div className="offers-grid">
            <div className="offer-card card-pink animate-fade-up">
              <div className="offer-icon-wrapper"><Gift size={22} /></div>
              <h3>Buy 2 Get 1 Free</h3>
              <p>On selected skincare and makeup products. Limited time offer!</p>
              <Link to="/offers" className="offer-link">Claim Offer <ArrowRight size={15} /></Link>
            </div>

            <div className="offer-card card-yellow animate-fade-up">
              <div className="offer-icon-wrapper"><Sparkles size={22} /></div>
              <h3>Bridal Combos</h3>
              <p>Special discounted packages for brides. Everything you need for the big day.</p>
              <Link to="/offers" className="offer-link">View Combos <ArrowRight size={15} /></Link>
            </div>

            <div className="offer-card card-purple animate-fade-up">
              <div className="offer-icon-wrapper"><Percent size={22} /></div>
              <h3>Festival Discounts</h3>
              <p>Celebrate in style! Up to 30% off on festive makeup collections.</p>
              <Link to="/offers" className="offer-link">Shop Festival <ArrowRight size={15} /></Link>
            </div>

            <div className="offer-card card-green animate-fade-up">
              <div className="offer-icon-wrapper"><Crown size={22} /></div>
              <h3>Loyalty Rewards</h3>
              <p>Join our membership program and earn points on every purchase.</p>
              <Link to="/offers" className="offer-link">Join Now <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROMO BANNER ── */}
      <section className="promo-banner">
        <div className="container">
          <div className="promo-content">
            <h2>Bridal Beauty <span>Combos</span></h2>
            <p>Get up to 20% off on all bridal makeup kits and essentials. Pre-book your consultation at our Nellore store today!</p>
            <Link to="/offers" className="btn-primary">View Offers</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding testimonials-section">
        <div className="container">
          <div className="section-title animate-fade-up">
            <h2>What Our <span>Customers Say</span></h2>
            <p>Real reviews from real beauty lovers in Nellore &amp; beyond.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div key={t.id} className="testimonial-card animate-fade-up">
                <span className="testimonial-quote">"</span>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                  <div>
                    <div className="testimonial-name">{t.name} · {t.location}</div>
                    <div className="testimonial-stars">{'★'.repeat(t.stars)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORE VISIT ── */}
      <section className="section-padding store-visit">
        <div className="container store-visit-grid">
          <div className="store-image animate-fade-up">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
              alt="Magnet Cosmetics Store Nellore"
            />
          </div>
          <div className="store-content animate-fade-up">
            <h2>Experience Premium Beauty <span>at Magnet Cosmetics</span></h2>
            <p>Visit our flagship store in Magunta Layout, Nellore. Get shade-matched by our experts and try before you buy.</p>
            <div className="store-features">
              <ul>
                <li>✓ Friendly, Expert Staff</li>
                <li>✓ 100% Genuine Branded Products</li>
                <li>✓ Try Before You Buy</li>
                <li>✓ Easy Parking Available</li>
              </ul>
            </div>
            <Link to="/store" className="btn-primary">Get Directions</Link>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay <span>Beautiful</span></h2>
            <p>Get exclusive deals, new arrivals &amp; beauty tips delivered straight to your inbox.</p>
            <div className="newsletter-form">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email address..."
              />
              <button className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                <Mail size={16} /> Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
