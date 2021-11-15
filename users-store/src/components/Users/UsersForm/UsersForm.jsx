import React, {useState} from 'react';
import Button from "../../UI/Button/Button";
import UsersFormControls from "./UsersFormControls/UsersFormControls";
import {onFormFieldValueChangeHandler} from "../../../utils/utils"
import ModalOverlay from "../../UI/ModalOverlay/ModalOverlay";
import Modal from "../../UI/Modal/Modal";

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
    }

    const setDataOnSubmit = (e) => {
        e.preventDefault()
        if (!value.name || !value.age) {
            return showValidationMessage('Fields cannot be empty')
        }
        if (value.name.length > 30) {
            return showValidationMessage('User\'s name cannot contain more than 30 letters')
        }
        if (value.age > 150 || value.age < 12) {
            return showValidationMessage('User\'s age is invalid, please enter a valid number')
        }

        props.onSubmitHandler(value)
        setValue({
            name: "",
            age: ""
        })
    }

    const modalCloseHandler = () => {
        setShowModal(false)
        setValidationMessage('')
    }

    return (
        <form className="usersForm" onSubmit={
            props.editForm ?
                () => props.updateUser(props.id, value.name, value.age) :
                setDataOnSubmit
        }>
            {
                showModal &&
                <ModalOverlay hideOverlay={modalCloseHandler}>
                    <Modal message={validationMessage} closeModal={modalCloseHandler}/>
                </ModalOverlay>
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
            <Button className="usersFormBtn" type="submit">{props.buttonText}</Button>
        </form>
    );
};

export default UsersForm;