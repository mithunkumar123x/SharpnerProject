import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext(); 

export const CartContextProvider = (props) => {  
    const [cartData, setCartData] = useState([]);

    const onAddToCart = (data) => {
        setCartData((prev) => {
            let flag = false;
            const updatedState = prev.map((item) => {
                if (item.id === data.id) {
                    flag = true;
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            });
            return flag ? updatedState : [...prev, { ...data, quantity: 1 }];
        });
    };

    return (
        <CartContext.Provider value={{ onAddToCart, cartData }}>
            {props.children}
        </CartContext.Provider>
        
    );
};

export const useCart = () => {
    return useContext(CartContext);
};

export default CartContextProvider ;  