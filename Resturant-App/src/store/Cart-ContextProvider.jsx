import CartContext from "./Cart-Context";
import React, {useState} from 'react'

const CartProvider = (props) => {
    const [ items , updateItems] = useState([])
    
    const addItemToCartHandler = (item) => {
        updateItems([...items,item])
        console.log('Inside addItemToCartHandler',cartContext);
    };

    const removeItemFromCartHandler = (id) => {};

    const cartContext = {
        items: items,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        message: 'Click here'
    };

    return (
        <CartContext.Provider value={cartContext }>
            (console.log('Inside CartContext.Provider', cartContext);)
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;