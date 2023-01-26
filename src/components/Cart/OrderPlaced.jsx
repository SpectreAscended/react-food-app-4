import React, { useContext, useEffect } from 'react';
import classes from './OrderPlaced.module.css';
import CartContext from '../../store/cartContext';
import useHttp from '../../hooks/useHttp';

const OrderPlaced = props => {
  const cartCtx = useContext(CartContext);

  const { isLoading, error, sendRequest } = useHttp();

  console.log(cartCtx);

  const order = {
    customer: cartCtx.customerInfo,
    items: cartCtx.items,
    totalAmount: cartCtx.totalAmount,
  };

  console.log(order);

  const requestConfig = {
    url: 'https://react-http-41004-default-rtdb.firebaseio.com/orders.json',
    method: 'POST',
    body: order,
    headers: {
      'Content-type': 'application/json',
    },
  };

  useEffect(() => {
    sendRequest(requestConfig, null);
    cartCtx.clearCart();
    const timer = setTimeout(() => {
      props.onShowCart();
    }, 15000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className={classes['order-placed']}>
        {isLoading && <span>Placing order...</span>}
        {!isLoading && <span>Order Placed! Thank you.</span>}
        {!isLoading && (
          <div className={classes.actions}>
            <button type="button" onClick={props.onShowCart}>
              OK
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderPlaced;
