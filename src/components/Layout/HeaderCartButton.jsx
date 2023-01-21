import React, { useContext, useState, useEffect } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../../assets/CartIcon';
import CartContext from '../../store/cartContext';

const HeaderCartButton = props => {
  const [buttonAnimation, setButtonAnimation] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numCartItems = items.reduce((curNum, cartItem) => {
    return curNum + cartItem.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) return;
    setButtonAnimation(true);

    const timer = setTimeout(() => {
      setButtonAnimation(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button
      className={`${classes.button} ${buttonAnimation ? classes.bump : ''}`}
      onClick={props.onShowCart}
    >
      <div className={classes.icon}>
        <CartIcon />
      </div>
      Your Cart
      <div className={classes.badge}>{numCartItems}</div>
    </button>
  );
};

export default HeaderCartButton;
