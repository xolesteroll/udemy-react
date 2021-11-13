import React, {useState} from 'react';
import Button from "../../UI/Button/Button";
import UsersFormControls from "./UsersFormControls/UsersFormControls";

const UsersForm = (props) => {
    const [value, setValue] = useState({
        name: "",
        age: ""
    })

    console.log(value)

    const onNameChangeHandler = e => {
        const data = e.target.value
        setValue((prevState) => {
            return {
                ...prevState,
                name: data
            }
        })
    }

    const onAgeChangeHandler = e => {
        const data = e.target.value
        setValue((prevState) => {
            return {
                ...prevState,
                age: data
            }
        })
    }

    const setDataOnSubmit = (e) => {
        e.preventDefault()
        props.onSubmitHandler(value)
        setValue({
            name: "",
            age: ""
        })
    }

    return (
        <form className="usersForm" onSubmit={setDataOnSubmit}>
            <UsersFormControls type="text" value={value.name} onChangeHandler={onNameChangeHandler}  label="Username"/>
            <UsersFormControls type="number" value={value.age} onChangeHandler={onAgeChangeHandler}  label="Age (Years)"/>
            <Button className="usersFormBtn" text="Add User"/>
        </form>
    );
};

export default UsersForm;