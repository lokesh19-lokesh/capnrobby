import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../components/Logo';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-light flex items-center justify-center">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row min-h-[600px]">
          
          {/* Image Side */}
          <div className="md:w-1/2 relative hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80" 
              alt="Fashion Model" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-12 text-white">
              <div className="mb-8">
                <Logo className="text-white transform scale-150 origin-left" />
              </div>
              <p className="text-lg text-gray-200 mt-4">
                Join our exclusive club for premium men's fashion. Unlock special offers, early access to new collections, and seamless checkout.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white relative">
            <div className="flex justify-center space-x-8 mb-10 border-b pb-4">
              <button 
                className={`text-xl font-bold transition-colors ${isLogin ? 'text-black border-b-2 border-black pb-1' : 'text-gray-400 hover:text-black'}`}
                onClick={() => setIsLogin(true)}
              >
                Sign In
              </button>
              <button 
                className={`text-xl font-bold transition-colors ${!isLogin ? 'text-black border-b-2 border-black pb-1' : 'text-gray-400 hover:text-black'}`}
                onClick={() => setIsLogin(false)}
              >
                Register
              </button>
            </div>

            <AnimatePresence mode="wait">
              {isLogin ? (
                <motion.form 
                  key="login"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-sm font-medium text-gray-700">Password</label>
                      <button type="button" className="text-sm text-gray-500 hover:text-black">Forgot Password?</button>
                    </div>
                    <input 
                      type="password" 
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="••••••••"
                    />
                  </div>
                  <button className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-primary hover:text-black transition-colors mt-4">
                    Sign In
                  </button>
                </motion.form>
              ) : (
                <motion.form 
                  key="register"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input 
                      type="password" 
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="••••••••"
                    />
                  </div>
                  <button className="w-full bg-primary text-black font-bold py-4 rounded-lg hover:bg-yellow-500 transition-colors mt-4 shadow-md shadow-primary/20">
                    Create Account
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
