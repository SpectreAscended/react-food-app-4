import React, { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../../assets/CartIcon';
import CartContext from '../../store/cartContext';

const HeaderCartButton = props => {
  const cartCtx = useContext(CartContext);

  const numCartItems = cartCtx.items.reduce((curNum, cartItem) => {
    return curNum + cartItem.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <div className={classes.icon}>
        <CartIcon />
      </div>
      Your Cart
      <div className={classes.badge}>{numCartItems}</div>
    </button>
  );
};

export default HeaderCartButton;
