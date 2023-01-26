import React, { useContext, useEffect } from 'react';
import classes from './OrderPlaced.module.css';
import CartContext from '../../store/cartContext';

const OrderPlaced = props => {
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    cartCtx.clearCart();
  }, []);

  return (
    <>
      <div className={classes['order-placed']}>
        <span>Order Placed! Thank you.</span>
        <div className={classes.actions}>
          <button type="button" onClick={props.onShowCart}>
            OK
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderPlaced;
