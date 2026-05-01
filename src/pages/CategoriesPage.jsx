import { categories } from '../data/dummyData';
import CategoryCard from '../components/CategoryCard';

const CategoriesPage = () => {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-title">
          <h2>All <span>Categories</span></h2>
          <p>Explore our premium collections tailored for your beauty needs.</p>
        </div>
        <div className="grid-3">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
