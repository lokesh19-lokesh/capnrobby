import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getTrendingProducts, categories } from '../utils/mockData';
import ProductCard from '../components/ProductCard';
import { FiTruck, FiShield, FiTag, FiRefreshCcw } from 'react-icons/fi';

const Home = () => {
  const trendingProducts = getTrendingProducts();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1600&q=80" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter"
          >
            ELEVATE YOUR <br/><span className="text-primary">EVERYDAY STYLE</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light"
          >
            Discover premium men's wear crafted for confidence, comfort, and timeless fashion.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/shop" className="bg-primary text-black font-bold py-4 px-10 hover:bg-white transition-colors duration-300">
              Shop Collection
            </Link>
            <Link to="/categories" className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 hover:bg-white hover:text-black transition-colors duration-300">
              New Arrivals
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2" data-aos="fade-right">Shop by Category</h2>
              <div className="w-20 h-1 bg-primary" data-aos="fade-right" data-aos-delay="100"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.slice(0, 4).map((category, index) => (
              <Link 
                key={index} 
                to={`/categories/${category}`}
                className="group relative h-64 md:h-80 overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10"></div>
                <h3 className="relative z-20 text-white text-2xl font-bold tracking-wide group-hover:scale-110 transition-transform duration-500">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Collection */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" data-aos="fade-up">Trending Now</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4" data-aos="fade-up" data-aos-delay="100"></div>
            <p className="text-gray-600" data-aos="fade-up" data-aos-delay="200">The pieces everyone is talking about.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {trendingProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/shop" className="inline-block border-2 border-black text-black font-bold py-3 px-10 hover:bg-black hover:text-white transition-colors duration-300">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Offer Banner */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none">
          <div className="w-[800px] h-[800px] bg-primary rounded-full blur-3xl absolute -right-40 -top-40 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <span className="text-primary font-bold tracking-widest uppercase mb-2 block">Limited Time Offer</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Premium Suits <br/>Up To 30% Off</h2>
            <p className="text-gray-400 mb-8 max-w-md text-lg">
              Elevate your formal wear collection with our expertly tailored suits, now available at exclusive prices.
            </p>
            <Link to="/categories/Suits" className="bg-white text-black font-bold py-4 px-10 hover:bg-primary transition-colors duration-300 inline-block">
              Shop The Sale
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6" data-aos="fade-up" data-aos-delay="0">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mb-6 text-2xl text-black">
                <FiTruck />
              </div>
              <h4 className="text-xl font-bold mb-2">Fast Delivery</h4>
              <p className="text-gray-600">Free shipping on all orders over $150.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mb-6 text-2xl text-black">
                <FiShield />
              </div>
              <h4 className="text-xl font-bold mb-2">Premium Quality</h4>
              <p className="text-gray-600">Crafted from the finest materials.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mb-6 text-2xl text-black">
                <FiTag />
              </div>
              <h4 className="text-xl font-bold mb-2">Affordable Luxury</h4>
              <p className="text-gray-600">High-end fashion without the markup.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mb-6 text-2xl text-black">
                <FiRefreshCcw />
              </div>
              <h4 className="text-xl font-bold mb-2">Easy Returns</h4>
              <p className="text-gray-600">30-day hassle-free return policy.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
