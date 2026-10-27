
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  
  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
    
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].count += 1;
      setCart(updatedCart);
    } else {
      
      setCart([...cart, { ...product, count: 1 }]);
    }
  };

  
  const increaseCount = (id) => {
    setCart(
      cart.map((item) => (item.id === id ? { ...item, count: item.count + 1 } : item))
    );
  };

  
  const decreaseCount = (id) => {
    setCart(
      cart
        .map((item) => (item.id === id ? { ...item, count: item.count - 1 } : item))
        .filter((item) => item.count > 0) // Si la cantidad llega a 0, se remueve del arreglo
    );
  };

  
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseCount, decreaseCount, total }}>
      {children}
    </CartContext.Provider>
  );
};