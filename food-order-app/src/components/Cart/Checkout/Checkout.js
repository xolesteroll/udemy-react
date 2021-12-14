import React, {useRef, useState} from 'react';

import classes from './Checkout.module.css'

const isEmpty = value => value.trim() === ''
const isFiveChars = value => value.trim().length === 5

const Checkout = ({closeHandler, onConfirm}) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postal: true
    })

    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalInputRef = useRef()
    const cityInputRef = useRef()

    const confirmHandler = (event) => {
        event.preventDefault()

        const enteredName = nameInputRef.current.value
        const enteredStreet = streetInputRef.current.value
        const enteredPostal = postalInputRef.current.value
        const enteredCity = cityInputRef.current.value

        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredStreetIsValid = !isEmpty(enteredStreet)
        const enteredCityIsValid = !isEmpty(enteredCity)
        const enteredPostalIsValid = isFiveChars(enteredPostal)

        setFormInputValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postal: enteredPostalIsValid
        })

        const formIsValid =
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredCityIsValid &&
            enteredPostalIsValid

        if (!formIsValid) {
            return
        }

        onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postal: enteredPostal
        })
    }

    return (
        <form onSubmit={confirmHandler}>
            <div className={`${classes.control} ${formInputValidity.name ? '' : classes.invalid }`}>
                <label htmlFor="name">Your Name</label>
                <input
                    ref={nameInputRef}
                    type="text"
                    id="name"
                />
                {!formInputValidity.name && <p>Please enter a valid name</p>}
            </div>
            <div className={`${classes.control} ${formInputValidity.street ? '' : classes.invalid }`}>
                <label htmlFor="street">Street</label>
                <input
                    ref={streetInputRef}
                    type="text"
                    id="street"
                />
                {!formInputValidity.street && <p>Please enter a valid street</p>}

            </div>
            <div className={`${classes.control} ${formInputValidity.postal ? '' : classes.invalid }`}>
                <label htmlFor="postal">Postal code</label>
                <input
                    ref={postalInputRef}
                    type="text"
                    id="postal"
                />
                {!formInputValidity.postal && <p>Please enter a valid postal code</p>}

            </div>
            <div className={`${classes.control} ${formInputValidity.city ? '' : classes.invalid }`}>
                <label htmlFor="city">City</label>
                <input
                    ref={cityInputRef}
                    type="text"
                    id="city"
                />
                {!formInputValidity.city && <p>Please enter a valid city</p>}

            </div>
            <div className={classes.actions}>
                <button onClick={closeHandler} type="button">Cancel</button>
                <button className={classes.submit}>Order</button>
            </div>

        </form>
    );
};

export default Checkout;
