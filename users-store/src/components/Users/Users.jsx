import React, {useState} from 'react';

import {USERS_LIST} from "../../db/db";
import UsersForm from "./UsersForm/UsersForm";
import UsersList from "./UserList/UsersList";
import styles from './Users.module.css'

const Users = (props) => {

    const [users, setUsers] = useState(USERS_LIST)

    const addUserHandler = ((name, age) => {
        setUsers([
            {id: Math.random(), name, age},
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
        const editedList = users.map(u => u.id === id ? {...u, name: name, age: age} : u)
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