import React from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItems/MealItem';
import Card from '../UI/Card';
import DUMMY_MEALS from '../../store/dummyMeals';

const AvailableMeals = () => {
  const meals = DUMMY_MEALS.map(meal => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <div className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
