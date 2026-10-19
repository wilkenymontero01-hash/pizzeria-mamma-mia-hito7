import { createContext, useState } from "react";

// 1. Crear el contexto
export const CartContext = createContext();

// 2. Crear el Provider
export const CartProvider = ({ children }) => {
  // Estado para almacenar los productos en el carrito
  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Si ya existe en el carrito, aumentamos su cantidad (count)
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      }
      // Si no existe, lo agregamos con count = 1
      return [...prevCart, { ...product, count: 1 }];
    });
  };

  // Función para incrementar la cantidad (+1)
  const incrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Función para decrementar la cantidad (-1) o eliminar si llega a 0
  const decrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  // Función para calcular el total acumulado del carrito
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};