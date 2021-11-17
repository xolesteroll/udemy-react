export const onFormFieldValueChangeHandler = (e, stateField, hook) => {
    const data = e.target.value
    hook((prevState) => {
        return {
            ...prevState,
            [stateField]: data
        }
    })
}


export const validate = (value) => {
    if (!value.name || !value.age) {
        return 0
    }
    if (value.name.length > 30) {
        return 1
    }
    if (+value.age > 150 || +value.age < 12) {
        return 2
    }
    return true
}
