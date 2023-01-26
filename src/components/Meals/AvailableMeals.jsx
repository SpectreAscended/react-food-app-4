import React, { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItems/MealItem';
import Card from '../UI/Card';

const AvailableMeals = () => {
  const [mealsData, setMealsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        'https://react-http-41004-default-rtdb.firebaseio.com/meals.json'
      );
      if (!res.ok) throw new Error(`Something went wrong (${res.status})`);

      const data = await res.json();
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMealsData(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch(err => {
      setIsLoading(false);
      setHttpError(err.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes['meals-loading']}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes['meals-error']}>
        <p>{httpError}</p>
      </section>
    );
  }

  const meals = mealsData.map(meal => (
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
