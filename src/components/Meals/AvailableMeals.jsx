import React, { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItems/MealItem';
import Card from '../UI/Card';
import DUMMY_MEALS from '../../store/dummyMeals';
import useHttp from '../../hooks/useHttp';

const AvailableMeals = () => {
  const [mealsData, setMealsData] = useState([]);
  useEffect(() => {
    const data = useHttp(
      {
        url: 'https://react-http-41004-default-rtdb.firebaseio.com/meals.json',
      },
      handleHttpData
    );
  }, []);

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

  console.log(mealsData);
  // setMealsData(DUMMY_MEALS);

  // useEffect(() => {
  //   const retreiveMeals = async () => {
  //     try {
  //       const res = await fetch(
  //         'https://react-http-41004-default-rtdb.firebaseio.com/meals.json'
  //       );

  //       if (!res.ok) throw new Error('Something went wrong');

  //       const data = await res.json();

  //       const loadedMeals = [];

  //       for (const key in data) {
  //         loadedMeals.push({
  //           id: key,
  //           name: data[key].name,
  //           description: data[key].description,
  //           price: data[key].price,
  //         });
  //       }

  //       setMealsData(loadedMeals);
  //       console.log(data);
  //       console.log(loadedMeals);
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   };

  //   retreiveMeals();
  // }, []);

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
