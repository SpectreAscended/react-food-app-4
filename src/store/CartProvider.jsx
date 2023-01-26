import React, { useReducer } from 'react';
import CartContext from '../store/cartContext';

const defaultState = {
  items: [],
  totalAmount: 0,
  customerInfo: {},
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    let updatedItems;

    const existingItemIndex = state.items.findIndex(
      item => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = [...state.items, action.item];
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;

    return {
      ...state,
      items: updatedItems,
      totalAmount: Math.abs(updatedTotalAmount.toFixed(2)),
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    let updatedItems;
    const existingItemIndex = state.items.findIndex(
      item => item.id === action.id
    );

    const existingItem = state.items[existingItemIndex];

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    const updatedTotalAmount = state.totalAmount - existingItem.price;

    return {
      ...state,
      items: updatedItems,
      totalAmount: Math.abs(updatedTotalAmount.toFixed(2)),
    };
  }

  if (action.type === 'CLEAR_CART') {
    return defaultState;
  }

  if (action.type === 'ADD_CUSTOMER') {
    return { ...state, customerInfo: action.value };
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

  const addCustomerHandler = info => {
    dispatchCartState({ type: 'ADD_CUSTOMER', value: info });
  };

  const clearCartHandler = () => {
    dispatchCartState({ type: 'CLEAR_CART' });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    customerInfo: cartState.customerInfo,
    addCustomer: addCustomerHandler,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
