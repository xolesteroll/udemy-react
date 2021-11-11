import React, {useState} from 'react';
import styles from './NewExpense.module.css'
import NewExpenseForm from "./NewExpenseForm/NewExpenseForm";

const NewExpense = ({addNewExpense}) => {

    const [editMode, setEditMode] = useState(false)

    const toggleEditModeHandler = () => {
        setEditMode((prevState) => !prevState)
    }


    return (
        <div className={styles.newExpense}>
            {
                editMode ?
                    <NewExpenseForm addNewExpense={addNewExpense} onClickShowForm={toggleEditModeHandler}/> :
                    <button className={styles.soloBtn} onClick={toggleEditModeHandler}>Add Expense</button>
            }
        </div>
    );
};

export default NewExpense;