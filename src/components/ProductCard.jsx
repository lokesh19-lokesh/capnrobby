import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiEye, FiShoppingCart } from 'react-icons/fi';
import { FaHeart, FaStar } from 'react-icons/fa';
import { ShopContext } from '../context/ShopContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleWishlist, isInWishlist, addToCart } = useContext(ShopContext);
  const inWishlist = isInWishlist(product.id);

  const finalPrice = product.price * (1 - product.discount / 100);

  return (
    <div 
      className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.isNew && <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded">NEW</span>}
        {product.discount > 0 && <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">-{product.discount}%</span>}
      </div>

      {/* Wishlist Button */}
      <button 
        onClick={() => toggleWishlist(product)}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow hover:bg-primary transition-colors focus:outline-none"
      >
        {inWishlist ? <FaHeart className="text-red-500" /> : <FiHeart />}
      </button>

      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block relative h-80 overflow-hidden bg-light">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-opacity duration-500 ${isHovered && product.images.length > 1 ? 'opacity-0' : 'opacity-100'}`}
        />
        {product.images.length > 1 && (
          <img 
            src={product.images[1]} 
            alt={product.name} 
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        )}
        
        {/* Quick Actions (Hover) */}
        <div className={`absolute bottom-0 left-0 w-full p-4 flex gap-2 transition-transform duration-300 transform ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <button 
            className="flex-1 bg-black text-white py-2 font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-black transition-colors rounded focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 1, product.sizes[0], product.colors[0]);
            }}
          >
            <FiShoppingCart /> Add to Cart
          </button>
          <button 
            className="bg-white text-black p-2 rounded shadow hover:bg-primary transition-colors flex items-center justify-center focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              // Add quick view logic here if needed
            }}
          >
            <FiEye size={20} />
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1 font-medium">{product.category}</div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg text-gray-900 mb-1 truncate hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-1 mb-2">
          <FaStar className="text-primary text-xs" />
          <span className="text-xs font-medium">{product.rating}</span>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">₹{finalPrice.toFixed(2)}</span>
          {product.discount > 0 && (
            <span className="text-sm text-gray-400 line-through">₹{product.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
