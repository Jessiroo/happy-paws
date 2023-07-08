import { Fragment, useState } from 'react';

import useInput from '../../hooks/use-input';
import useHttp from '../../hooks/use-http';
import Modal from '../Layout/Modal';
import Button from '../Layout/Button';
import classes from './QuestionModal.module.css';

// VALIDATION FUNCTIONS
const inputValidator = (value) => value.trim() !== '';
const emailValidator = (value) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return true;
  };
  return false;
};

// COMPONENT
const QuestionModal = (props) => {
  const [requestSent, setRequestSent] = useState(false);
  const {
    isLoading,
    error,
    sendRequest,
  } = useHttp();  

  // FORM VALUES & HANDLERS
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    inputValueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: resetName,
  } = useInput(inputValidator);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputValueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmail,
  } = useInput(emailValidator);

  const {
    value: questionValue,
    isValid: questionIsValid,
    hasError: questionHasError,
    inputValueChangeHandler: questionChangeHandler,
    inputBlurHandler: questionBlurHandler,
    resetInput: resetQuestion,
  } = useInput(inputValidator);

  // FORM VALIDITY
  let formIsValid = false;
  if (nameIsValid && emailIsValid && questionIsValid) {
    formIsValid = true;
  };

  // SUBMIT HANDLER
  const submitHandler = (event) => {
    event.preventDefault();

    sendRequest({
      url: 'https://pet-adoptions-jm01-default-rtdb.firebaseio.com/Questions.json',
      method: 'POST',
      body: JSON.stringify({
        name: nameValue,
        email: emailValue,
        question: questionValue,
      }),
    }, () => {setRequestSent(true);});

    resetName();
    resetEmail();
    resetQuestion();
  };

  // RESPONSIVE STYLING CLASSES
  const nameInputClasses = `${classes.input} ${nameHasError ? classes.invalid : ''}`;
  const emailInputClasses = `${classes.input} ${emailHasError ? classes.invalid : ''}`;
  const questionInputClasses = `${classes.input} ${questionHasError ? classes.invalid : ''}`;

  // CONTENT
  let content = (
    <Fragment>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Name:</label>
        <input 
          type="text"
          id="name"
          name="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={nameValue}
        />
        {nameHasError && <p className={classes.errorText}>Please enter a valid name.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Email:</label>
        <input 
          type="email"
          id="email"
          name="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailHasError && <p className={classes.errorText}>Please enter a valid email address.</p>}
      </div>
      <div className={questionInputClasses}>
        <label htmlFor='question'>Question:</label>
        <textarea 
          id="question"
          name="question"
          className={classes.questionArea}
          onChange={questionChangeHandler}
          onBlur={questionBlurHandler}
          value={questionValue}
          maxLength="150"
          rows="5"
        />
        {questionHasError && <p className={classes.errorText}>Please type your question(s) here.</p>}
      </div>
    </Fragment>
  );

  if (isLoading) {
    content = (
      <p className={classes.statusMsg}>Loading...</p>
    );
  };

  if (error) {
    content = (
      <p className={classes.statusMsg}>There was a problem submitting your question.</p>
    );
  };

  // COMPONENT RETURN
  return (
    <Modal onClose={props.onClose}>
      <h1>Ask us a Question:</h1>
      {requestSent && <p className={classes.statusMsg}>Your question has been submitted, we will get back to you as soon as we can!</p>}
      <form>
        {content}
        <div className={classes.buttons}>
          <Button 
            type="button"
            className="white"
            onClick={props.onClose}
          >Close</Button>
          {formIsValid && <Button
            type="submit"
            className="green"
            onClick={submitHandler}
          >Submit</Button>}
        </div>
      </form>
    </Modal>
  );
};

export default QuestionModal;