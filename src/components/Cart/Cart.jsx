import React, { useContext, useState, useEffect } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from '../../store/cartContext';

const Cart = props => {
  const [cartHasItems, setCartHasItems] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const addItemHandler = item => {
    cartCtx.addToCart({
      ...item,
      amount: 1,
    });
  };

  const removeItemHandler = id => {
    cartCtx.removeFromCart(id);
  };

  useEffect(() => {
    if (items.length > 0) {
      setCartHasItems(true);
    } else {
      setCartHasItems(false);
    }
  }, [items]);

  const cartItems = items.map(item => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAdd={addItemHandler.bind(null, item)}
      onRemove={removeItemHandler.bind(null, item.id)}
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
        {cartHasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
