export const onFormFieldValueChangeHandler = (e, stateField, hook) => {
    const data = e.target.value
    hook((prevState) => {
        return {
            ...prevState,
            [stateField]: data
        }
    })
}
