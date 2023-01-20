import React from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../../assets/CartIcon';

const HeaderCartButton = props => {
  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <div className={classes.icon}>
        <CartIcon />
      </div>
      Your Cart
      <div className={classes.badge}>3</div>
    </button>
  );
};

export default HeaderCartButton;
