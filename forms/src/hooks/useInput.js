import {useState} from 'react'

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validateValue(enteredValue)
    const hasError = !valueIsValid && isTouched

    const onChangeHandler = (event) => {
        const value = event.target.value
        setIsTouched(true)
        setEnteredValue(value)
    }

    const onBlurHandler = () => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value: enteredValue,
        valueIsValid,
        hasError,
        onBlurHandler,
        onChangeHandler,
        reset
    }
}

export default useInput
