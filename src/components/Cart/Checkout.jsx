import React, { useContext, useState } from 'react';
import classes from './Checkout.module.css';
import CheckoutInput from '../UI/CheckoutInput';
import CartContext from '../../store/cartContext';
import useFormControl from '../../hooks/useFormControl';
import OrderPlaced from './OrderPlaced';

const cannotBeBlank = value => {
  return value.trim() !== '';
};

const Checkout = props => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const cartCtx = useContext(CartContext);

  const {
    enteredValue: enteredFirstName,
    enterValueHandler: enterFirstNameHandler,
    inputBlurHandler: firstNameBlurHandler,
    inputHasError: firstNameHasError,
    reset: resetFirstName,
    isValid: firstNameIsValid,
  } = useFormControl(cannotBeBlank);

  const {
    enteredValue: enteredLastName,
    enterValueHandler: enterLastNameHandler,
    inputBlurHandler: lastNameBlurHandler,
    inputHasError: lastNameHasError,
    reset: resetlastName,
    isValid: lastNameIsValid,
  } = useFormControl(cannotBeBlank);

  const {
    enteredValue: enteredAddress,
    enterValueHandler: enterAddressHandler,
    inputBlurHandler: addressBlurHandler,
    inputHasError: addressHasError,
    reset: resetAddress,
    isValid: addressIsValid,
  } = useFormControl(cannotBeBlank);

  const {
    enteredValue: enteredCity,
    enterValueHandler: enterCityHandler,
    inputBlurHandler: cityBlurHandler,
    inputHasError: cityHasError,
    reset: resetCity,
    isValid: cityIsValid,
  } = useFormControl(cannotBeBlank);

  let formIsValid = false;
  formIsValid =
    firstNameIsValid && lastNameIsValid && addressIsValid && cityIsValid;

  const submitFormHandler = e => {
    e.preventDefault();
    if (!formIsValid) return;

    console.log(enteredFirstName, enteredLastName, enteredAddress, enteredCity);
    setOrderPlaced(true);
    resetFirstName();
    resetlastName();
    resetAddress();
    resetCity();
  };

  const inputClassesHandler = invalidInput => {
    return `${classes['form-control']} ${invalidInput ? classes.invalid : ''}`;
  };
  const firstNameClasses = inputClassesHandler(firstNameHasError);
  const lastNameClasses = inputClassesHandler(lastNameHasError);
  const addressClasses = inputClassesHandler(addressHasError);
  const cityClasses = inputClassesHandler(cityHasError);

  return (
    <>
      {!orderPlaced && (
        <form className={classes.checkout} onSubmit={submitFormHandler}>
          <div>
            <h2>Checkout</h2>
            <div className={firstNameClasses}>
              <CheckoutInput
                label="First Name"
                input={{
                  id: 'first-name',
                  type: 'text',
                }}
                value={enteredFirstName}
                onChange={enterFirstNameHandler}
                onBlur={firstNameBlurHandler}
              />
            </div>
            <div className={lastNameClasses}>
              <CheckoutInput
                label="Last Name"
                input={{
                  id: 'last-name',
                  type: 'text',
                }}
                onChange={enterLastNameHandler}
                value={enteredLastName}
                onBlur={lastNameBlurHandler}
              />
            </div>
            <div className={addressClasses}>
              <CheckoutInput
                label="Address"
                input={{
                  id: 'address',
                  type: 'text',
                }}
                onChange={enterAddressHandler}
                value={enteredAddress}
                onBlur={addressBlurHandler}
              />
            </div>
            <div className={cityClasses}>
              <CheckoutInput
                label="City"
                input={{
                  id: 'city',
                  type: 'text',
                }}
                onChange={enterCityHandler}
                value={enteredCity}
                onBlur={cityBlurHandler}
              />
            </div>
          </div>
          <div className={classes.total}>
            <span>Total</span>
            <span>${cartCtx.totalAmount.toFixed(2)}</span>
          </div>
          <div className={classes.actions}>
            <button
              className={classes['button--alt']}
              type="button"
              onClick={props.onShowCheckout}
            >
              Cancel
            </button>
            <button
              disabled={!formIsValid}
              className={classes.button}
              type="submit"
            >
              Place order
            </button>
          </div>
        </form>
      )}
      {orderPlaced && <OrderPlaced onShowCart={props.onShowCart} />}
    </>
  );
};

export default Checkout;
