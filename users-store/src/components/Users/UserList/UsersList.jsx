import React from 'react';

import styles from './UsersList.module.css'
import UserListItem from "./UserListItem/UserListItem";

const UsersList = ({items, removeItem, updateUser}) => {

    const renderItemsList = items.map(e => <UserListItem
        key={e.id}
        id={e.id}
        removeItem={removeItem}
        updateUser={updateUser}
        value={e}
    >
        {`${e.name} (${e.age} years old)`}
    </UserListItem>)


    return (
        <ul className={styles.usersList}>
            {renderItemsList.length > 0 ? renderItemsList : <li><p className={styles.infoText}>No users, click Add User to add some</p></li>}
        </ul>
    );
};

export default UsersList;