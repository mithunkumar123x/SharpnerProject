import React, { createContext, useState } from 'react';

export const cartContext = createContext();

export const CartContextProvider = (props) => {
  const [cartData, setCartData] = useState([]);

  const clearCart = () => {
    setCartData([]);
  };

  const onAddToCart = (data) => {
    const updatedCartData = data.reduce((acc, product) => {
      if (acc[product.id]) {
        acc[product.id].quantity = acc[product.id].quantity + 1;
      } else {
        acc[product.id] = { ...product, quantity: 1 };
      }
      return acc;
    }, {});

    const cartArray = Object.values(updatedCartData);
    setCartData(cartArray);
  };

  return (
    <cartContext.Provider value={{ onAddToCart, cartData, clearCart }}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
