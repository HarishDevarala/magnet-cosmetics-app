import { Link, useLocation } from 'react-router-dom';
import { Home, Grid, ShoppingBag, MessageCircle } from 'lucide-react';
import './MobileNav.css';

const MobileNav = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="mobile-bottom-nav">
      <Link to="/" className={`nav-item ${isActive('/')}`}>
        <Home size={24} />
        <span>Home</span>
      </Link>
      <Link to="/categories" className={`nav-item ${isActive('/categories')}`}>
        <Grid size={24} />
        <span>Categories</span>
      </Link>
      <Link to="/products" className={`nav-item ${isActive('/products')}`}>
        <ShoppingBag size={24} />
        <span>Shop</span>
      </Link>
      <a href="https://wa.me/917009697009" target="_blank" rel="noopener noreferrer" className="nav-item whatsapp-item">
        <MessageCircle size={24} />
        <span>Chat</span>
      </a>
    </div>
  );
};

export default MobileNav;
