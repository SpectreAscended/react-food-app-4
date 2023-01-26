import React from 'react';
import classes from './Checkout.module.css';

const Checkout = props => {
  return (
    <form className={classes.checkout}>
      <h2>Checkout</h2>
      <div className={classes['form-control']}>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />
        <label htmlFor="address">Address</label>
        <input type="text" id="address" />
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <div className={classes.actions}>
        <button
          className={classes['button--alt']}
          onClick={props.onShowCheckout}
        >
          Cancel
        </button>
        <button className={classes.button}>Place order</button>
      </div>
    </form>
  );
};

export default Checkout;
