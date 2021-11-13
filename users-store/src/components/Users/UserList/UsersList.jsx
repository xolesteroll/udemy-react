import React from 'react';

import styles from './UsersList.module.css'

const UsersList = ({items}) => {

    const renderItemsList = items.map(e => <li key={e.id} className={styles.usersListItem}>{`${e.name} (${e.age} years old)`}</li>)


    return (
            <ul className={styles.usersList}>
                {renderItemsList}
            </ul>
    );
};

export default UsersList;