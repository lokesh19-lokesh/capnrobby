import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&q=80" 
            alt="About Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter"
          >
            OUR STORY
          </motion.h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2" data-aos="fade-right">
              <img 
                src="https://images.unsplash.com/photo-1550614000-4b95d415f115?w=800&q=80" 
                alt="Craftsmanship" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Legacy of <span className="text-primary">Elegance</span></h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Founded with a vision to redefine men's fashion, CAP'N ROBBY has been synonymous with premium quality, impeccable tailoring, and timeless style. We believe that what you wear is an extension of who you are.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our journey began in a small tailoring shop with a simple goal: to create clothes that make men feel confident. Today, we source the finest fabrics from around the world and work with master craftsmen to bring you collections that effortlessly blend classic silhouettes with modern sensibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm" data-aos="fade-up" data-aos-delay="0">
              <h3 className="text-xl font-bold mb-4">Quality First</h3>
              <p className="text-gray-600">We never compromise on the materials we use. Every stitch is a testament to our dedication to excellence.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-primary" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-bold mb-4">Timeless Design</h3>
              <p className="text-gray-600">Trends fade, but true style is eternal. We design pieces that you'll reach for season after season.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-600">We are committed to ethical production practices and minimizing our environmental footprint.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
