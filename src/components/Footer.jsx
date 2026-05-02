import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart, Globe, Share2 } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-col">
            <div className="brand-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <span className="brand-icon">M</span>
              <div className="brand-text">
                MAGNET
                <small>COSMETICS</small>
              </div>
            </div>
            <p className="footer-desc">
              Your premier beauty destination in Nellore. 100% genuine products from top brands worldwide.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Instagram"><Heart size={18} /></a>
              <a href="#" aria-label="Facebook"><Globe size={18} /></a>
              <a href="#" aria-label="Share"><Share2 size={18} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/store">Visit Store</Link></li>
              <li><Link to="/offers">Special Offers</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Categories</h3>
            <ul>
              <li><Link to="/products">Makeup</Link></li>
              <li><Link to="/categories">Skincare</Link></li>
              <li><Link to="/categories">Haircare</Link></li>
              <li><Link to="/categories">Perfumes</Link></li>
              <li><Link to="/categories">Bridal Collection</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Info</h3>
            <ul className="contact-info">
              <li>
                <MapPin size={16} className="icon" />
                <span>Ground Floor, Klassic Heights, Magunta Layout, Nellore - 524003</span>
              </li>
              <li>
                <Phone size={16} className="icon" />
                <span>+91 70096 97009</span>
              </li>
              <li>
                <Mail size={16} className="icon" />
                <span>hello@magnetcosmetics.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Magnet Cosmetics, Nellore. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
