import { useReducer } from "react";

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  };
  if (action.type === 'BLUR') {
    return {
      value: state.value,
      isTouched: true,
    };
  };
  if (action.type === 'RESET') {
    return initialInputState;
  };

  return initialInputState;
};

const useInput = (validationFunction) => {
  const [inputState, inputStateDispatch] = useReducer(inputStateReducer, initialInputState);

  const isValid = validationFunction(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const inputValueChangeHandler = (event) => {
    inputStateDispatch({
      type: 'INPUT',
      value: event.target.value,
    });
  };
  const inputBlurHandler = (event) => {
    inputStateDispatch({
      type: 'BLUR',
    });
  };
  const resetInput = () => {
    inputStateDispatch({
      type: 'RESET',
    });
  };

  return {
    value: inputState.value,
    isValid,
    hasError,
    inputValueChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useInput;