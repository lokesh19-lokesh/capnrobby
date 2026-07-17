import React, { useState } from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-light">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">Get in Touch</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Have a question about an order, our products, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Information */}
          <div className="lg:w-1/3 space-y-8" data-aos="fade-right">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-light rounded-full flex items-center justify-center shrink-0 text-black">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Store</h4>
                    <p className="text-gray-600">Janda Chowrastha, Peddapally<br/>Telangana, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-light rounded-full flex items-center justify-center shrink-0 text-black">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-600">+91 9701153603<br/>Mon-Sat: 9AM to 10PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-light rounded-full flex items-center justify-center shrink-0 text-black">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-600">praveendontha66@gmail.com<br/>support@capnrobby.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3" data-aos="fade-left">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p>Your message has been sent successfully. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-primary hover:text-black transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="bg-black text-white font-bold py-4 px-10 rounded hover:bg-primary hover:text-black transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
