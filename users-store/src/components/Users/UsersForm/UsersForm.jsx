import React, {useState} from 'react';
import Button from "../../UI/Button/Button";
import UsersFormControls from "./UsersFormControls/UsersFormControls";
import {onFormFieldValueChangeHandler} from "../../../utils/utils"
import ModalOverlay from "../../UI/ModalOverlay/ModalOverlay";
import {ERROR_MESSAGES} from "../../../db/db"
import {validate} from "../../../utils/utils"

import styles from './UsersForm.module.css'

const UsersForm = (props) => {
    const [value, setValue] = useState(props.value || {
        name: "",
        age: ""
    })

    const [showModal, setShowModal] = useState(false)

    const [validationMessage, setValidationMessage] = useState('')

    const showValidationMessage = (message) => {
        setShowModal(true)
        setValidationMessage(message)
        return false
    }

    const hideValidationMessage = () => {
        setShowModal(false)
        setValidationMessage('')
    }

    const setDataOnSubmit = (e, callback, args) => {
        e.preventDefault()

        if ((validate(value)) === true) {
            callback(...args)
            setValue({
                name: "",
                age: ""
            })
        } else {
            showValidationMessage(ERROR_MESSAGES[validate(value)])
        }
    }

    return (
        <form
            className={styles.usersForm}
            onSubmit={
                props.editForm ?
                    (e) =>
                        setDataOnSubmit(e, props.updateUser, [props.id, value.name, value.age]) :
                    (e) =>
                        setDataOnSubmit(e, props.onSubmitHandler, [value.name, value.age])

            }>
            {
                showModal && <ModalOverlay message={validationMessage} hideModal={hideValidationMessage} />
            }

            <UsersFormControls
                type="text"
                value={value.name}
                onChangeHandler={(e) => {
                    onFormFieldValueChangeHandler(e, 'name', setValue)
                }}
                label="Username"/>
            <UsersFormControls
                type="number"
                value={value.age}
                onChangeHandler={(e) => {
                    onFormFieldValueChangeHandler(e, 'age', setValue)
                }}
                label="Age (Years)"/>
            <Button className={styles.usersFormBtn} type="submit">{props.buttonText}</Button>
        </form>
    );
};

export default UsersForm;