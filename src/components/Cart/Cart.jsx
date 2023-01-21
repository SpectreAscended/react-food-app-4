import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from '../../store/cartContext';

const Cart = props => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const DUMMY_CART_ITEMS = [
    {
      id: '1',
      name: 'hotdogs',
      price: 3.5,
      amount: 1,
    },
  ];

  const cartItems = items.map(item => (
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
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
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
