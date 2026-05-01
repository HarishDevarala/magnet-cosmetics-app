import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('magnet_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('magnet_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to cart!`);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter(item => item.id !== productId));
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems, totalPrice }}>
      {children}
      {toastMessage && (
        <div className="toast animate-fade-up">
          {toastMessage}
        </div>
      )}
    </CartContext.Provider>
  );
};
