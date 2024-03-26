import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/Cart-Context'; 

const Cart = (props) => {
    const cartContext = useContext(CartContext); 

    
    let totalQuantity = 0;
    let totalAmount = 0;

    for (const item of cartContext.items) {
        totalQuantity += item.quantity;
        totalAmount += item.quantity * item.price;
    }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartContext.items.map((item) => (
                <li key={item.id}>
                    Name: {item.name} Price: {item.price} Quantity: {item.quantity}
                </li>
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Quantity: {totalQuantity}</span>
                <span>Total Amount: ${totalAmount.toFixed(2)}</span>
            </div>
            <div>
                <button className={classes['button--alt']} onClick={props.onClose}>
                    Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
