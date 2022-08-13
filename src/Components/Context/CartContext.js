import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    }
    //Falta else, quiero ponerlo cuando integre bien el mapeo de cuando SI
    //existe un product, aun no consigo entenderlo pero para la proxima entrega
    //va a estar, el resto de los metodos pedidos en el desafio estan! 
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const removeItemFromCart = (id) => {
    const newCart = cart.filter((prod) => prod.id !== id);
    setCart(newCart);
  };

  const totalQuantity = () => {
    let count = 0;

    cart.forEach((prod) => {
      count += prod.value;
    });

    return count;
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        addItem,
        totalQuantity,
        isInCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
