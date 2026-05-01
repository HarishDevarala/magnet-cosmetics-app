import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Heart, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { totalItems } = useCart();
  return (
    <nav className="navbar">
      <div className="announcement-bar">
        Free shipping on orders over ₹999 | Use code BEAUTY10 for 10% off
      </div>
      <div className="navbar-container container">
        <div className="nav-left">
          <Menu className="mobile-menu-icon" />
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
    </nav>
  );
};

export default Navbar;
