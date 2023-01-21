import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addToCart: () => {},
  removeFromCart: () => {},
});

export default CartContext;
