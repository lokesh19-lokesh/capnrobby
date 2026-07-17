import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiHeart, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { ShopContext } from '../context/ShopContext';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartCount, wishlist } = useContext(ShopContext);

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || !isHome || isMobileMenuOpen ? 'bg-white shadow-md py-4 text-black' : 'bg-transparent py-6 text-white'
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="py-2">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center font-medium">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <Link to="/categories" className="hover:text-primary transition-colors">Categories</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Icons */}
        <div className="hidden md:flex space-x-6 items-center">
          <button className="hover:text-primary transition-colors"><FiSearch size={22} /></button>
          <Link to="/wishlist" className="hover:text-primary transition-colors relative">
            <FiHeart size={22} />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-black text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="hover:text-primary transition-colors relative">
            <FiShoppingCart size={22} />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-black text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>
          <Link to="/login" className="hover:text-primary transition-colors"><FiUser size={22} /></Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none">
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg text-black flex flex-col md:hidden py-4 px-6 space-y-4"
          >
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Home</Link>
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Shop</Link>
            <Link to="/categories" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Categories</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">About</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Contact</Link>
            
            <div className="border-t pt-4 flex justify-between">
               <Link to="/wishlist" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-2 hover:text-primary"><FiHeart /> <span>Wishlist</span></Link>
               <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-2 hover:text-primary"><FiShoppingCart /> <span>Cart</span></Link>
               <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-2 hover:text-primary"><FiUser /> <span>Profile</span></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
