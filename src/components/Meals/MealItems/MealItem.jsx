import React from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = props => {
  const price = props.price.toFixed(2);

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
      <MealItemForm />
    </li>
  );
};

export default MealItem;
