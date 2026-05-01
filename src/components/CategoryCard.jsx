import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
  return (
    <Link to="/products" className="category-card">
      <div className="category-image-container">
        <img src={category.image} alt={category.name} className="category-image" />
        <div className="category-overlay"></div>
      </div>
      <div className="category-content">
        <h3 className="category-title">{category.name}</h3>
        <span className="category-link">
          Explore <ArrowRight size={16} className="arrow-icon" />
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
