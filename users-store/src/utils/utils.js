export const onFormFieldValueChangeHandler = (e, stateField, hook) => {
    const data = e.target.value
    hook((prevState) => {
        return {
            ...prevState,
            [stateField]: data
        }
    })
}


export const validator = (value, callback) => {
    switch (value) {
        case (!value.name || !value.age):
            console.log(value)
            callback('Fields cannot be empty')
            break
        case (value.name.length > 30):
            callback('User\'s name cannot contain more than 30 letters')
            break
        case (value.age > 150 || value.age < 12):
            callback('User\'s age is invalid, please enter a valid number')
            break
        default:
            return true
    }
}
