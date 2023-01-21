import React, { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cartContext';

const MealItem = props => {
  const cartCtx = useContext(CartContext);

  const price = props.price.toFixed(2);

  const addItemToCartHandler = amount => {
    cartCtx.addToCart({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: +amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <div>
          <h3>{props.name}</h3>
        </div>
        <div>
          <span className={classes.description}>{props.description}</span>
        </div>
        <div>
          <span className={classes.price}>${price}</span>
        </div>
      </div>
      <MealItemForm onAddItem={addItemToCartHandler} />
    </li>
  );
};

export default MealItem;
