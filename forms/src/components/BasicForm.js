import useMyInput from "../hooks/useMyInput";

const validations = {
    emptyField: {
        validate: value => value.length !== 0,
        errorMessage: 'The name should not be empty'
    },
    emailValidation:  {
        validate: value => value.includes('@'),
        errorMessage: 'Please enter a valid email(@ included)'
    }
}

const BasicForm = (props) => {

    const {
        value: enteredName,
        isValid: nameInputValid,
        onBlurHandler: onBlurNameInputHandler,
        onChangeHandler: onChangeNameInputHandler,
        reset: resetNameInput,
        classSet: nameInputClasses,
        errorMessage: nameInputErrorMessage
    } = useMyInput(validations.emptyField)

    const {
        value: enteredSecondName,
        isValid: secondNameInputValid,
        onBlurHandler: onBlurSecondNameInputHandler,
        onChangeHandler: onChangeSecondNameInputHandler,
        reset: resetSecondNameInput,
        classSet: secondNameInputClasses,
        errorMessage: secondNameInputErrorMessage

    } = useMyInput(validations.emptyField)

    const {
        value: enteredEmail,
        isValid: emailInputValid,
        onBlurHandler: onBlurEmailInputHandler,
        onChangeHandler: onChangeEmailInputHandler,
        reset: resetEmailInput,
        classSet: emailInputClasses,
        errorMessage: emailInputErrorMessage
    } = useMyInput(validations.emailValidation)

    let formIsValid

    if (nameInputValid && secondNameInputValid && emailInputValid) {
        formIsValid = true
    }

    const onSubmitForm = (event) => {
        event.preventDefault()

        if (!formIsValid) {
            return
        }

        console.log(enteredEmail, enteredName, enteredSecondName)

        resetNameInput()
        resetSecondNameInput()
        resetEmailInput()
    }

  return (
    <form method='POST' onSubmit={onSubmitForm}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
              value={enteredName}
              onBlur={onBlurNameInputHandler}
              onChange={onChangeNameInputHandler}
              type='text'
              id='name'
          />
            {nameInputErrorMessage && <p className='error-text'>{nameInputErrorMessage}</p>}
        </div>
        <div className={secondNameInputClasses}>
          <label htmlFor='second-name'>Last Name</label>
          <input
              value={enteredSecondName}
              onBlur={onBlurSecondNameInputHandler}
              onChange={onChangeSecondNameInputHandler}
              type='text'
              id='second-name'
          />
            {secondNameInputErrorMessage && <p className='error-text'>{secondNameInputErrorMessage}</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
            value={enteredEmail}
            onBlur={onBlurEmailInputHandler}
            onChange={onChangeEmailInputHandler}
            type='text'
            id='email'
        />
          {emailInputErrorMessage && <p className='error-text'>{emailInputErrorMessage}</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
