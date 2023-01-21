import React, { useReducer } from 'react';
import CartContext from '../store/cartContext';

const defaultState = {
  items: [
    {
      id: 1,
      name: 'Hot dogs',
      price: 3.5,
      amount: 1,
    },
    {
      id: 2,
      name: 'Pizza',
      price: 3.5,
      amount: 3,
    },
  ],
  totalAmount: 3.5,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
  }

  return defaultState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, defaultState);

  const addToCartHandler = item => {
    dispatchCartState({ type: 'ADD_ITEM', item: item });
  };

  const removeFromCartHandler = id => {
    dispatchCartState({ type: 'REMOVE_ITEM', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
