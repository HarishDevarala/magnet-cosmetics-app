import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ShoppingBag, Search, Heart, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="announcement-bar">
        Free shipping on orders over ₹999 | Use code BEAUTY10 for 10% off
      </div>
      <div className="navbar-container container">
        <div className="nav-left">
          <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
            <Menu size={24} />
          </button>
          <Link to="/" className="brand-logo">
            <span className="brand-icon">M</span>
            <div className="brand-text">
              MAGNET
              <small>COSMETICS</small>
            </div>
          </Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/products">Makeup</Link></li>
          <li><Link to="/offers">Offers <span className="badge">Sale</span></Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-icons">
          <button className="icon-btn"><Search size={20} /></button>
          <button className="icon-btn"><User size={20} /></button>
          <button className="icon-btn"><Heart size={20} /></button>
          <button className="icon-btn cart-btn">
            <ShoppingBag size={20} />
            <span className="cart-count">{totalItems}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <Link to="/" className="brand-logo" onClick={toggleMobileMenu}>
              <span className="brand-icon">M</span>
              <div className="brand-text">
                MAGNET
                <small>COSMETICS</small>
              </div>
            </Link>
            <button className="close-menu-btn" onClick={toggleMobileMenu}>
              <X size={24} />
            </button>
          </div>
          <ul className="mobile-nav-links">
            <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
            <li><Link to="/categories" onClick={toggleMobileMenu}>Categories</Link></li>
            <li><Link to="/products" onClick={toggleMobileMenu}>Makeup</Link></li>
            <li><Link to="/offers" onClick={toggleMobileMenu}>Offers <span className="badge">Sale</span></Link></li>
            <li><Link to="/about" onClick={toggleMobileMenu}>About Us</Link></li>
            <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
