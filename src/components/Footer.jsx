import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="mb-8 inline-block">
              <Logo className="h-16 md:h-20" />
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Elevate your everyday style with premium men's wear crafted for confidence, comfort, and timeless fashion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-black transition-colors"><FiInstagram /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-black transition-colors"><FiFacebook /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-black transition-colors"><FiTwitter /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-black transition-colors"><FiYoutube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h4 className="text-xl font-semibold mb-6">Categories</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/categories/Shirts" className="hover:text-primary transition-colors">Shirts</Link></li>
              <li><Link to="/categories/T-Shirts" className="hover:text-primary transition-colors">T-Shirts</Link></li>
              <li><Link to="/categories/Jeans" className="hover:text-primary transition-colors">Jeans</Link></li>
              <li><Link to="/categories/Jackets" className="hover:text-primary transition-colors">Jackets</Link></li>
              <li><Link to="/categories/Accessories" className="hover:text-primary transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xl font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-transparent border border-gray-600 px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button type="submit" className="bg-primary text-black font-semibold py-3 hover:bg-yellow-500 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} CAP'N ROBBY. All Rights Reserved. | Designed by <a href="https://thepatternscompany.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">The Patterns Company</a>
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <span>Premium Fabric</span>
            <span>•</span>
            <span>Perfect Fit</span>
            <span>•</span>
            <span>Fast Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
