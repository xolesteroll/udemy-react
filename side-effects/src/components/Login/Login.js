import React, {useState, useEffect, useReducer} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
    switch (action.type) {
        case 'NEW_EMAIL_VALUE': {
            return {
                value: action.value,
                isValid: action.value.includes('@')
            }
        }
        case 'INPUT_BLUR': {
            return {
                value: state.value,
                isValid: state.value.includes('@')
            }
        }
        default: {
            return state
        }
    }
}

const passReducer = (state, action) => {
    switch (action.type) {
        case 'NEW_PASS_VALUE': {
            return {
                value: action.value,
                isValid: action.value.trim().length > 6
            }
        }
        case 'INPUT_BLUR': {
            return {
                value: state.value,
                isValid: state.value.trim().length > 6
            }
        }
        default: {
            return state
        }
    }
}

const Login = (props) => {
    const [formIsValid, setFormIsValid] = useState(false);
    const [passState, passDispatch] = useReducer(passReducer, {value: '', isValid: null})
    const [emailState, emailDispatch] = useReducer(emailReducer, {value: '', isValid: null})

    useEffect(() => {
        const timerId = setTimeout(() => {
            console.log('tong')
            setFormIsValid(
                emailState.isValid && passState.isValid
            )
        }, 500)


        return () => {
            console.log('CLEAn UP')
            clearTimeout(timerId)
        }

    }, [emailState.isValid, passState.isValid])

    const emailChangeHandler = (event) => {
        emailDispatch({
            type: 'NEW_EMAIL_VALUE',
            value: event.target.value
        })

        // setFormIsValid(
        //     emailState.isValid && passState.isValid
        // );
    };

    const passwordChangeHandler = (event) => {
        // setEnteredPassword(event.target.value);

        passDispatch({
            type: 'NEW_PASS_VALUE',
            value: event.target.value
        })
        // setFormIsValid(
        //     passState.isValid && emailState.isValid
        // );
    };

    const validateEmailHandler = () => {
        // setEmailIsValid(emailState.isValid);
        emailDispatch({type: 'INPUT_BLUR'})
    };


    const validatePasswordHandler = () => {
        passDispatch({type: 'INPUT_BLUR'})
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailState.value, passState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        emailState.isValid === false ? classes.invalid : ''
                    }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passState.isValid === false ? classes.invalid : ''
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
