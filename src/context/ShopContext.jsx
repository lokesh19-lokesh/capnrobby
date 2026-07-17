import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // Initialize from local storage if available
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('capnrobby_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('capnrobby_wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('capnrobby_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('capnrobby_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Cart actions
  const addToCart = (product, quantity, size, color) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        item => item.id === product.id && item.size === size && item.color === color
      );

      if (existingItemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity, size, color }];
      }
    });
  };

  const removeFromCart = (productId, size, color) => {
    setCart((prevCart) => prevCart.filter(
      item => !(item.id === productId && item.size === size && item.color === color)
    ));
  };

  const updateCartQuantity = (productId, size, color, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, size, color);
      return;
    }
    setCart((prevCart) => prevCart.map(item => {
      if (item.id === productId && item.size === size && item.color === color) {
        return { ...item, quantity };
      }
      return item;
    }));
  };

  const clearCart = () => setCart([]);

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const finalPrice = item.price * (1 - item.discount / 100);
      return total + (finalPrice * item.quantity);
    }, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  // Wishlist actions
  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some(item => item.id === product.id);
      if (exists) {
        return prevWishlist.filter(item => item.id !== product.id);
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        wishlist,
        toggleWishlist,
        removeFromWishlist,
        isInWishlist
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
