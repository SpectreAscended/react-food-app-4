import { useState } from 'react';

const useFormControl = validation => {
  const [isTouched, setIsTouched] = useState(false);
  const [enteredValue, setEnteredValue] = useState('');

  const isValid = validation(enteredValue);

  const inputHasError = isTouched && !isValid;

  const enterValueHandler = e => {
    setIsTouched(true);
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setIsTouched(false);
    setEnteredValue('');
  };

  return {
    isValid,
    enteredValue,
    enterValueHandler,
    inputBlurHandler,
    inputHasError,
    reset,
  };
};

export default useFormControl;
