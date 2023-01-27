import React, { useContext, useState, useEffect } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from '../../store/cartContext';
import Checkout from './Checkout';

const Cart = props => {
  const [cartHasItems, setCartHasItems] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

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

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async userData => {
    setIsSubmitting(true);
    const res = await fetch(
      'https://react-http-41004-default-rtdb.firebaseio.com/otherOrders.json',
      {
        method: 'POST',
        body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
        headers: { 'Content-type': 'application/json' },
      }
    );

    if (!res.ok) throw new Error('Something went wrong. Try again.');

    setIsSubmitting(false);
    setDidSubmit(true);

    cartCtx.clearCart();
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

  const modalActions = (
    <div className={classes.actions}>
      <button
        className={classes['button--alt']}
        type="button"
        onClick={props.onShowCart}
      >
        Cancel
      </button>
      {cartHasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={props.onShowCart} onConfirm={submitOrderHandler} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order! Thank you.</p>
      <div className={classes.actions}>
        <button
          className={classes.button}
          type="button"
          onClick={props.onShowCart}
        >
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClick={props.onShowCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && !didSubmit && isSubmittingModalContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
