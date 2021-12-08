
import useInput from "../hooks/useInput";

const SimpleInput = () => {
    const {
        value: enteredName,
        valueIsValid: enteredNameIsValid,
        hasError: nameInputInvalid,
        onChangeHandler: nameInputOnChangeHandler,
        onBlurHandler: nameInputOnBlurHandler,
        reset: nameInputReset
    } = useInput(value => value.length !== 0)

    const {
        value: enteredEmail,
        valueIsValid: enteredEmailIsValid,
        hasError: emailInputInvalid,
        onChangeHandler: emailInputOnChangeHandler,
        onBlurHandler: emailInputOnBlurHandler,
        reset: emailInputReset
    } = useInput(value => value.includes('@'))

    let formIsValid

    const nameInputClasses = nameInputInvalid ? 'form-control invalid' : 'form-control'
    const emailInputClasses = emailInputInvalid ? 'form-control invalid' : 'form-control'

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true
    }

    const formSubmitHandler = event => {
        event.preventDefault()

        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return
        }

        nameInputReset()
        emailInputReset()
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    value={enteredName}
                    type='text' id='name'
                    onChange={nameInputOnChangeHandler}
                    onBlur={nameInputOnBlurHandler}
                />
                {nameInputInvalid && <p className="error-text">Name must not be empty</p>}
            </div>

            <div className={emailInputClasses}>
                <label htmlFor='email'>Your Email</label>
                <input
                    value={enteredEmail}
                    type='text' id='email'
                    onChange={emailInputOnChangeHandler}
                    onBlur={emailInputOnBlurHandler}
                />
                {emailInputInvalid && <p className="error-text">Please enter a valid email(contains @)</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
