import classes from './ProfileForm.module.css';
import {useContext, useState} from "react";
import {useHistory} from 'react-router-dom'
import AuthContext from "../../store/authContext";

const ProfileForm = () => {
    const history = useHistory()
    const [passValue, setPassValue] = useState('')
    const authCtx = useContext(AuthContext)

    const passChangeHandler = (e) => {
        const value = e.target.value
        setPassValue(value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const API_KEY = process.env.REACT_APP_API_KEY

        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`, {
            method: 'POST',
            body: JSON.stringify({
                idToken: authCtx.token,
                password: passValue,
                returnSecureToken: false
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                alert('Your password was successfully changed')
                history.replace('/')
            })

    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='new-password'>New Password</label>
                <input
                    type='password'
                    id='new-password'
                    value={passValue}
                    onChange={passChangeHandler}
                    minLength="7"
                />
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    );
}

export default ProfileForm;
