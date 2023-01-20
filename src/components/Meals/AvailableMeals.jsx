import React from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import DUMMY_MEALS from '../../store/dummyMeals';

console.log(DUMMY_MEALS);

const AvailableMeals = () => {
  const meals = DUMMY_MEALS.map(item => <li key={item.id}>{item.name}</li>);

  return (
    <div className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
