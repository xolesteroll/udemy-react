import React, {useState} from 'react';

import styles from './Users.module.css'
import UsersForm from "./UsersForm/UsersForm";
import UsersList from "./UserList/UsersList";
import db from "../../db/db";

const Users = (props) => {

    const [users, setUsers] = useState(db)

    const addUserHandler = ((data) => {
        setUsers([
            {id: Math.random(), ...data},
            ...users]
        )
    })

    const removeUserHandler = (id => {
        const filteredList = users.filter(e => e.id !== id)
        setUsers([
            ...filteredList
        ])
    })

    const updateUserInfoHandler = ((id, name, age) => {
        const editedList = users.map(u => u.id === id ? {id: id, name: name, age: age} : u)
        setUsers([
            ...editedList
        ])
    })

    return (
        <div className={styles.users}>
            <UsersForm editForm={false} onSubmitHandler={addUserHandler} buttonText="Add User"/>
            <UsersList items={users} removeItem={removeUserHandler} updateUser={updateUserInfoHandler}/>
        </div>
    );
};

export default Users;