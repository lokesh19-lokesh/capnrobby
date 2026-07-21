import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products, getProductsByCategory } from '../utils/mockData';
import { ShopContext } from '../context/ShopContext';
import { FaStar, FaHeart } from 'react-icons/fa';
import { FiHeart, FiMinus, FiPlus, FiCheck } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useContext(ShopContext);
  
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [zoom, setZoom] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.images[0]);
      setSelectedSize(foundProduct.sizes[0]);
      setSelectedColor(foundProduct.colors[0]);
      
      const related = getProductsByCategory(foundProduct.category).filter(p => p.id !== foundProduct.id).slice(0, 4);
      setRelatedProducts(related);
    }
  }, [id]);

  if (!product) return <div className="pt-32 text-center pb-20 min-h-screen">Loading...</div>;

  const finalPrice = product.price * (1 - product.discount / 100);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-black">Shop</Link>
          <span className="mx-2">/</span>
          <Link to={`/categories/${product.category}`} className="hover:text-black">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-black font-medium">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 mb-20">
          
          {/* Image Gallery */}
          <div className="md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 shrink-0">
              {product.images.map((img, idx) => (
                <button 
                  key={idx} 
                  className={`border-2 flex-shrink-0 rounded overflow-hidden ${selectedImage === img ? 'border-primary' : 'border-transparent'}`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} alt={`${product.name} ${idx}`} className="w-20 h-24 object-cover" />
                </button>
              ))}
            </div>
            
            <div 
              className="flex-1 bg-light rounded-xl overflow-hidden relative group cursor-zoom-in h-[400px] md:h-[600px]"
              onMouseEnter={() => setZoom(true)}
              onMouseLeave={() => setZoom(false)}
              onMouseMove={handleMouseMove}
            >
              <img 
                src={selectedImage} 
                alt={product.name} 
                className={`w-full h-full object-cover transition-transform duration-300 ${zoom ? 'scale-150' : 'scale-100'}`}
                style={zoom ? { transformOrigin: `${mousePos.x}% ${mousePos.y}%` } : {}}
              />
              {product.discount > 0 && (
                <span className="absolute top-4 left-4 bg-red-500 text-white font-bold px-3 py-1 rounded">-{product.discount}%</span>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2">
            <div className="mb-6 border-b pb-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center text-primary">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(product.rating) ? "text-primary" : "text-gray-300"} />
                  ))}
                </div>
                <span className="text-sm font-medium">{product.rating} Rating</span>
                <span className="text-sm text-gray-500 underline cursor-pointer">{product.reviews} Reviews</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-900">₹{finalPrice.toFixed(2)}</span>
                {product.discount > 0 && (
                  <span className="text-lg text-gray-400 line-through">₹{product.price.toFixed(2)}</span>
                )}
              </div>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium uppercase mb-3 flex items-center justify-between">
                <span>Color: <span className="font-bold">{selectedColor}</span></span>
              </h3>
              <div className="flex gap-3">
                {product.colors.map(color => {
                  let bgColorClass = 'bg-gray-200';
                  if (color === 'White') bgColorClass = 'bg-white border border-gray-300';
                  if (color === 'Black') bgColorClass = 'bg-black';
                  if (color === 'Navy') bgColorClass = 'bg-blue-900';
                  if (color === 'Light Blue') bgColorClass = 'bg-blue-200';
                  if (color === 'Grey' || color === 'Light Gray') bgColorClass = 'bg-gray-400';
                  if (color === 'Mustard Yellow') bgColorClass = 'bg-primary';
                  if (color === 'Dark Denim') bgColorClass = 'bg-blue-800';
                  if (color === 'Charcoal') bgColorClass = 'bg-gray-700';
                  if (color === 'Tan') bgColorClass = 'bg-yellow-700';

                  return (
                    <button
                      key={color}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${bgColorClass} ${selectedColor === color ? 'ring-2 ring-offset-2 ring-black' : 'hover:scale-110 shadow-sm'}`}
                      onClick={() => setSelectedColor(color)}
                      title={color}
                    >
                      {selectedColor === color && (
                        <FiCheck className={color === 'White' || color === 'Light Blue' || color === 'Mustard Yellow' ? 'text-black' : 'text-white'} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-medium uppercase mb-3 flex items-center justify-between">
                <span>Size: <span className="font-bold">{selectedSize}</span></span>
                <button className="text-xs underline text-gray-500 hover:text-black">Size Guide</button>
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`w-12 h-12 flex items-center justify-center border font-medium transition-colors ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-black'}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center border border-gray-300 h-14">
                <button 
                  className="px-4 text-gray-500 hover:text-black transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <FiMinus />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button 
                  className="px-4 text-gray-500 hover:text-black transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <FiPlus />
                </button>
              </div>
              
              <button 
                className="flex-1 bg-black text-white font-bold h-14 hover:bg-primary hover:text-black transition-colors flex items-center justify-center gap-2"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
              
              <button 
                className={`w-14 h-14 border flex items-center justify-center transition-colors ${inWishlist ? 'border-red-500 text-red-500 bg-red-50' : 'border-gray-300 hover:border-black text-gray-600'}`}
                onClick={() => toggleWishlist(product)}
              >
                {inWishlist ? <FaHeart /> : <FiHeart size={20} />}
              </button>
            </div>
            
            <button 
              className="w-full bg-primary text-black font-bold h-14 mb-8 hover:bg-yellow-500 transition-colors"
              onClick={handleBuyNow}
            >
              Buy It Now
            </button>

            {/* Details Accordion (Mocked as simple text for now) */}
            <div className="border-t pt-6 space-y-4 text-sm text-gray-600">
              <div><span className="font-bold text-black mr-2">Brand:</span> {product.brand}</div>
              <div><span className="font-bold text-black mr-2">Category:</span> {product.category}</div>
              <div><span className="font-bold text-black mr-2">SKU:</span> CR-{product.id}-001</div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t pt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
