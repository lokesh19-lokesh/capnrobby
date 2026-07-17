import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const { wishlist } = useContext(ShopContext);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">Your Wishlist</h1>
        
        {wishlist.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-medium mb-4">Your wishlist is empty</h3>
            <p className="text-gray-500 mb-8">Save items you love to your wishlist to review them later.</p>
            <Link to="/shop" className="bg-black text-white font-bold py-3 px-8 hover:bg-primary hover:text-black transition-colors rounded">
              Explore Collection
            </Link>
          </div>
        ) : (
          <div>
            <div className="mb-6 text-sm text-gray-500">
              You have {wishlist.length} item{wishlist.length !== 1 ? 's' : ''} in your wishlist.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {wishlist.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
