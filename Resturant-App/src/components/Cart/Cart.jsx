import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/Cart-Context';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartContext.items.map((item) => (
        <li key={item.id}>
          Name: {item.name} Price: ${item.price} Quantity: Number{item.quantity}
          <div>
            <span>Total Price: ${item.quantity * item.price}</span>
            <span> | Quantity:  Number{item.quantity}</span>
            <button onClick={() => cartContext.addItem(item)}>+</button>
            <button onClick={() => cartContext.removeItem(item.id)}>-</button>
          </div>
        </li>
      ))}
    </ul>
  );

  let totalQuantity = 0;
  let totalAmount = 0;
  for (const item of cartContext.items) {
    totalQuantity += Number(item.quantity);
    totalAmount += item.quantity * item.price;
  }

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
