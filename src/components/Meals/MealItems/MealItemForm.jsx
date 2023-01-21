import React, { useRef } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = props => {
  const inputRef = useRef();

  const submitHandler = e => {
    e.preventDefault();
    props.onAddItem(inputRef.current.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button className={classes.button}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
