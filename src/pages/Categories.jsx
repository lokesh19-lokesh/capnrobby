import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductsByCategory, categories } from '../utils/mockData';
import ProductCard from '../components/ProductCard';

const Categories = () => {
  const { category } = useParams();

  if (!category) {
    return (
      <div className="pt-24 pb-20 min-h-screen bg-light">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold mb-12 text-center" data-aos="fade-up">All Categories</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <Link 
                key={idx} 
                to={`/categories/${cat}`}
                className="group relative h-64 overflow-hidden rounded-xl bg-gray-200 flex items-center justify-center shadow-sm hover:shadow-lg transition-all"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors z-10"></div>
                <h3 className="relative z-20 text-white text-2xl font-bold tracking-wide group-hover:scale-110 transition-transform duration-500 uppercase">{cat}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const categoryProducts = getProductsByCategory(category);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/categories" className="hover:text-black">Categories</Link>
          <span className="mx-2">/</span>
          <span className="text-black font-medium">{category}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-tight" data-aos="fade-right">{category}</h1>
        
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-medium mb-2">No products found</h3>
            <p className="text-gray-500 mb-6">We currently don't have any products in this category.</p>
            <Link to="/shop" className="bg-black text-white px-6 py-3 rounded hover:bg-primary hover:text-black transition-colors font-medium">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
