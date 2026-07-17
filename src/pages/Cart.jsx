import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';

const Cart = () => {
  const { cart, updateCartQuantity, removeFromCart, getCartTotal } = useContext(ShopContext);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const subtotal = getCartTotal();
  const shipping = subtotal > 150 ? 0 : 15.00; // Free shipping over ₹150
  const total = subtotal + shipping - discount;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'ROBBY10') {
      setDiscount(subtotal * 0.1); // 10% off
    } else {
      alert('Invalid coupon code');
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-medium mb-4">Your cart is empty</h3>
            <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/shop" className="bg-black text-white font-bold py-3 px-8 hover:bg-primary hover:text-black transition-colors rounded">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <div className="hidden md:grid grid-cols-6 gap-4 p-4 border-b bg-gray-50 text-sm font-semibold uppercase tracking-wider text-gray-600">
                  <div className="col-span-3">Product</div>
                  <div className="text-center">Price</div>
                  <div className="text-center">Quantity</div>
                  <div className="text-right">Total</div>
                </div>
                
                <div className="divide-y">
                  {cart.map((item, index) => {
                    const finalPrice = item.price * (1 - item.discount / 100);
                    return (
                      <div key={index} className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                        <div className="col-span-1 md:col-span-3 flex gap-4">
                          <img src={item.images[0]} alt={item.name} className="w-20 h-24 object-cover bg-gray-100 rounded" />
                          <div className="flex flex-col justify-center">
                            <Link to={`/product/${item.id}`} className="font-bold hover:text-primary transition-colors">{item.name}</Link>
                            <div className="text-sm text-gray-500 mt-1 flex flex-col gap-1">
                              <span>Size: <span className="font-medium text-black">{item.size}</span></span>
                              <span>Color: <span className="font-medium text-black">{item.color}</span></span>
                            </div>
                            <button 
                              onClick={() => removeFromCart(item.id, item.size, item.color)}
                              className="text-red-500 text-sm flex items-center gap-1 mt-2 hover:underline w-fit"
                            >
                              <FiTrash2 /> Remove
                            </button>
                          </div>
                        </div>
                        
                        <div className="text-center md:block flex justify-between items-center mt-4 md:mt-0">
                          <span className="md:hidden font-semibold text-gray-500">Price:</span>
                          <span className="font-medium">₹{finalPrice.toFixed(2)}</span>
                        </div>
                        
                        <div className="flex justify-center md:block flex justify-between items-center mt-2 md:mt-0">
                          <span className="md:hidden font-semibold text-gray-500 mr-auto">Quantity:</span>
                          <div className="flex items-center border border-gray-300 rounded overflow-hidden mx-auto w-24">
                            <button 
                              className="px-2 py-1 bg-gray-50 hover:bg-gray-200 transition-colors"
                              onClick={() => updateCartQuantity(item.id, item.size, item.color, item.quantity - 1)}
                            >
                              <FiMinus size={14} />
                            </button>
                            <span className="w-full text-center text-sm font-medium">{item.quantity}</span>
                            <button 
                              className="px-2 py-1 bg-gray-50 hover:bg-gray-200 transition-colors"
                              onClick={() => updateCartQuantity(item.id, item.size, item.color, item.quantity + 1)}
                            >
                              <FiPlus size={14} />
                            </button>
                          </div>
                        </div>
                        
                        <div className="text-right md:block flex justify-between items-center mt-2 md:mt-0">
                          <span className="md:hidden font-semibold text-gray-500">Total:</span>
                          <span className="font-bold text-lg">₹{(finalPrice * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold mb-6 border-b pb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">{shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t pt-4 flex justify-between items-center">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-2xl font-bold">₹{total.toFixed(2)}</span>
                  </div>
                </div>

                <form onSubmit={handleApplyCoupon} className="mb-6 flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Coupon code (try: ROBBY10)" 
                    className="flex-1 border px-3 py-2 rounded focus:outline-none focus:border-black"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button type="submit" className="bg-black text-white px-4 py-2 rounded font-medium hover:bg-primary hover:text-black transition-colors">
                    Apply
                  </button>
                </form>

                <button className="w-full bg-primary text-black font-bold py-4 rounded hover:bg-yellow-500 transition-colors text-lg shadow-md shadow-primary/20">
                  Proceed to Checkout
                </button>
                
                <div className="mt-4 text-center text-sm text-gray-500">
                  <p>Secure checkout provided by Stripe.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
