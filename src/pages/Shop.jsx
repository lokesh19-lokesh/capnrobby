import React, { useState, useEffect } from 'react';
import { products, categories } from '../utils/mockData';
import ProductCard from '../components/ProductCard';
import { FiFilter, FiX } from 'react-icons/fi';

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    let result = [...products];
    
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    if (sortBy === 'price-low') {
      result.sort((a, b) => (a.price * (1 - a.discount/100)) - (b.price * (1 - b.discount/100)));
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => (b.price * (1 - b.discount/100)) - (a.price * (1 - a.discount/100)));
    } else if (sortBy === 'newest') {
      result.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, sortBy]);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-light">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-bold mb-4 md:mb-0" data-aos="fade-right">Shop All</h1>
          
          <div className="flex items-center gap-4 w-full md:w-auto" data-aos="fade-left">
            <button 
              className="md:hidden flex items-center gap-2 bg-white px-4 py-2 rounded shadow-sm flex-1 justify-center border border-gray-200"
              onClick={() => setIsFilterOpen(true)}
            >
              <FiFilter /> Filters
            </button>
            
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded shadow-sm flex-1 md:flex-none border border-gray-200">
              <span className="text-sm text-gray-500 whitespace-nowrap">Sort by:</span>
              <select 
                className="bg-transparent focus:outline-none text-sm font-medium w-full cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Recommended</option>
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`
            fixed inset-0 z-50 bg-white p-6 transform transition-transform duration-300 md:relative md:inset-auto md:bg-transparent md:p-0 md:transform-none md:w-1/4
            ${isFilterOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}>
            <div className="flex justify-between items-center md:hidden mb-6">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)} className="p-2 bg-gray-100 rounded-full"><FiX size={20} /></button>
            </div>
            
            <div className="mb-8 bg-white md:bg-transparent p-0 md:p-0 rounded-xl">
              <h3 className="font-bold mb-4 uppercase tracking-wider text-sm border-b pb-2">Categories</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    className={`text-left w-full transition-colors ${selectedCategory === 'All' ? 'font-bold text-primary' : 'text-gray-600 hover:text-black'}`}
                    onClick={() => { setSelectedCategory('All'); setIsFilterOpen(false); }}
                  >
                    All Categories
                  </button>
                </li>
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <button 
                      className={`text-left w-full transition-colors ${selectedCategory === cat ? 'font-bold text-primary' : 'text-gray-600 hover:text-black'}`}
                      onClick={() => { setSelectedCategory(cat); setIsFilterOpen(false); }}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="md:w-3/4">
            <div className="mb-6 text-sm text-gray-500 flex justify-between items-center">
              <span>Showing {filteredProducts.length} results</span>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters.</p>
                <button 
                  className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-primary hover:text-black transition-colors"
                  onClick={() => { setSelectedCategory('All'); setSortBy('default'); }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
