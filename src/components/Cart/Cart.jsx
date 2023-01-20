import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = props => {
  const DUMMY_CART_ITEMS = [
    {
      id: '1',
      name: 'hotdogs',
      price: 3.5,
      amount: 1,
    },
  ];

  const cartItems = DUMMY_CART_ITEMS.map(item => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
    />
  ));

  return (
    <Modal onClick={props.onShowCart}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total</span>
        <span>$3.50</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes['button--alt']}
          type="button"
          onClick={props.onShowCart}
        >
          Cancel
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
