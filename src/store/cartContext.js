import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  customerInfo: {},
  addCustomer: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export default CartContext;
