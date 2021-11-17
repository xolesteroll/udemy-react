import React, {useState} from 'react';

import styles from './UserListItem.module.css'
import UsersForm from "../../UsersForm/UsersForm";

const UserListItem = ({id, value, removeItem, updateUser, children}) => {
    const [editMode, setEditMode] = useState(false)

    const updateUserHandler = (id, name, age) => {
        updateUser(id, name, age)
        setEditMode(false)
    }

    return (
        <li className={styles.listItem}>
            {editMode && <UsersForm editForm={true} id={id} value={value} updateUser={updateUserHandler} buttonText="Save"/>}
            {!editMode && children}
            {!editMode &&
                <div className={styles.listItemControls}>
                    <button className={styles.editBtn} onClick={() => setEditMode(true)}>Edit</button>
                    <button className={styles.deleteBtn} onClick={() => removeItem(id)}>Delete</button>
                </div>
            }
        </li>
    );
};

export default UserListItem;