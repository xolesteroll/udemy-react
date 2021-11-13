import React from 'react';

import styles from './Users.module.css'
import UsersForm from "./UsersForm/UsersForm";
import UsersList from "./UserList/UsersList";

const Users = (props) => {
    return (
        <div className={styles.users}>
            <UsersForm  onSubmitHandler={props.addUser}/>
            <UsersList items={props.users}/>
        </div>
    );
};

export default Users;