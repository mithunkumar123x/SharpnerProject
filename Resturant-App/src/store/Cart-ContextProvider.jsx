import CartContext from "./Cart-Context";
import React, {useState} from 'react'

const CartProvider = (props) => {
    const [ items , updateItems] = useState([])
    
    const addItemToCartHandler = (newItem) => {
        const existingItemIndex = items.findIndex((item) => item.id === newItem.id);
    
        if (existingItemIndex !== -1) {
          const updatedItems = [...items];
          const existingItem = updatedItems[existingItemIndex];
          existingItem.quantity += 1;
          updatedItems[existingItemIndex] = existingItem;
          updateItems(updatedItems);
        } else {
          updateItems((prevItems) => [...prevItems, newItem]);
        }
      };

    const removeItemFromCartHandler = (id) => {
        updateItems((prevItems) => {
          const updatedItems = prevItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: Number(item.quantity - 1) };
            }
            return item;
          });
          return updatedItems.filter((item) => item.quantity > 0);
        });
      };

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