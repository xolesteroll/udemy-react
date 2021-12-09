import {useState} from "react";


const useMyInput = (validations, classes = {
    invalid: 'form-control invalid',
    valid: 'form-control'
}) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [touched, setTouched] = useState(false)

    const isValid = validations.validate(enteredValue)
    const hasError = !isValid && touched
    const errorMessage = hasError ? validations.errorMessage : null
    const classSet = hasError ? classes.invalid : classes.valid

    const onChangeHandler = (event) => {
        setTouched(true)
        setEnteredValue(event.target.value)
    }

    const onBlurHandler = () => {
        setTouched(true)
    }

    const reset = () => {
        setEnteredValue('')
        setTouched(false)
    }

    return {
        value: enteredValue,
        isValid,
        onBlurHandler,
        onChangeHandler,
        reset,
        classSet,
        errorMessage
    }
}


export default useMyInput
