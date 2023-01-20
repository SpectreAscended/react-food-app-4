import React from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = props => {
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
          <span className={classes.price}>{props.price}</span>
        </div>
      </div>
      <MealItemForm />
    </li>
  );
};

export default MealItem;
