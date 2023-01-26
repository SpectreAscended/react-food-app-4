import React from 'react';

const CheckoutInput = props => {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        {...props.input}
        onChange={props.onChange}
        value={props.value}
        onBlur={props.onBlur}
      />
      <p>Please enter a valid {props.label}</p>
    </div>
  );
};

export default CheckoutInput;
