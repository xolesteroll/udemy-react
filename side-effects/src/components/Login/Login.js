import React, {useState, useEffect, useReducer, useContext, useRef} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from "../../store/auth-context";
import Input from "./Input/Input";

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

    const ctx = useContext(AuthContext)

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
        if (formIsValid) {
            ctx.onLogin(emailState.value, passState.value);
        } else if (!emailState.isValid){
            emailInputRef.current.activate()
        } else {
            passInputRef.current.activate()
        }
    };

    const emailInputRef = useRef()
    const passInputRef = useRef()

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    ref={emailInputRef}
                    id="email"
                    isValid={emailState.isValid}
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                    label="E-mail"
                />
                <Input
                    ref={passInputRef}
                    type="password"
                    id="password"
                    isValid={passState.isValid}
                    value={passState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                    label="Password"
                />
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
