import React, { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItems/MealItem';
import Card from '../UI/Card';
import DUMMY_MEALS from '../../store/dummyMeals';
import useHttp from '../../hooks/useHttp';

const AvailableMeals = () => {
  const [mealsData, setMealsData] = useState([]);

  const handleHttpData = data => {
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
  };

  const fetchData = useHttp();

  const { sendRequest, isLoading, error } = fetchData;

  console.log(fetchData);

  useEffect(() => {
    sendRequest(
      {
        url: 'https://react-http-41004-default-rtdb.firebaseio.com/meals.json',
      },
      handleHttpData
    );
  }, []);

  console.log(mealsData);

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
        {isLoading && <p className={classes.loading}>Loading...</p>}
        {error && <p className={classes.error}>{error}</p>}
      </Card>
    </div>
  );
};

export default AvailableMeals;
