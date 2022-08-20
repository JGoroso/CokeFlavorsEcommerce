import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    } else {
      const cartUpdated = cart.map((prod) => {
        if (prod.id === productToAdd.id) {
          const productUpdated = {
            ...prod,
            quantity: productToAdd.quantity,
          };
          return productUpdated;
        } else {
          return prod;
        }
      });

      setCart(cartUpdated);
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const removeItemFromCart = (id) => {
    const newCart = cart.filter((prod) => prod.id !== id);
    console.log(id);
    setCart(newCart);
  };

  const totalQuantity = () => {
    let count = 0;

    cart.forEach((prod) => {
      count += prod.quantity;
    });

    return count;
  };

  const totaPrice = () => {
    let price = 0;

    cart.forEach((prod) => {
      price += prod.quantity * prod.price;
    });

    return price;
  };

  const clearCart = () => {
    setCart([]);
  };

  const productQty = (id) => {
    const product = cart.find((prod) => prod.id === id);
    return product?.quantity;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        totalQuantity,
        isInCart,
        removeItemFromCart,
        clearCart,
        productQty,
        totaPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
