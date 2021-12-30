import {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom'

import classes from './AuthForm.module.css';
import AuthContext from "../../store/authContext";

const AuthForm = () => {
    const history = useHistory()
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false)

    const [emailInputValue, setEmailInputValue] = useState('')
    const [passInputValue, setPassInputValue] = useState('')

    const authCtx = useContext(AuthContext)

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const inputOnChangeHandler = (e, setter) => {
        const value = e.target.value
        setter(value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        let url
        const API_KEY = process.env.REACT_APP_API_KEY
        if (isLogin) {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
        } else {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: emailInputValue,
                password: passInputValue,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setIsLoading(false)
            if (res.ok) {
                return res.json()
            } else {
                return res.json().then(data => {
                    let errorMessage = 'Authentication failed'
                    if (data && data.error && data.error.message) {
                        errorMessage = data.error.message
                    }
                    throw new Error(errorMessage)
                })
            }
        }).then(data => {
            const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000))
            authCtx.login(data.idToken, expirationTime.toISOString())
            history.replace('/')
        }).catch(err => {
            alert(err)
        })
    }

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input
                        type='email'
                        id='email'
                        value={emailInputValue}
                        onChange={(e) => {
                            inputOnChangeHandler(e, setEmailInputValue)
                        }}
                        required
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input
                        type='password'
                        id='password'
                        value={passInputValue}
                        onChange={(e) => {
                            inputOnChangeHandler(e, setPassInputValue)
                        }}
                        required
                    />
                </div>
                <div className={classes.actions}>
                    {!isLoading ?
                        <button>{isLogin ? 'Login' : 'Create Account'}</button> :
                        <p>Sending request...</p>
                    }
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AuthForm;
