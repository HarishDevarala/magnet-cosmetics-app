import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Link as LinkIcon } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid-4 footer-grid">
        <div className="footer-col">
          <div className="brand-logo mb-4">
            <span className="brand-icon">M</span>
            <div className="brand-text">
              MAGNET
              <small>COSMETICS</small>
            </div>
          </div>
          <p className="footer-desc">
            Your premier beauty destination in Nellore. We offer 100% genuine products from top brands worldwide.
          </p>
          <div className="social-links mt-4">
            <a href="#"><LinkIcon size={20} /></a>
            <a href="#"><LinkIcon size={20} /></a>
            <a href="#"><LinkIcon size={20} /></a>
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
              <MapPin size={18} className="icon" />
              <span>Ground Floor, Klassic Heights, Magunta Layout, Nellore - 524003</span>
            </li>
            <li>
              <Phone size={18} className="icon" />
              <span>+91 70096 97009</span>
            </li>
            <li>
              <Mail size={18} className="icon" />
              <span>hello@magnetcosmetics.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p>&copy; {new Date().getFullYear()} Magnet Cosmetics. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
