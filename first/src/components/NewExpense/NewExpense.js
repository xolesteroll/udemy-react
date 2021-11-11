import React from 'react';
import styles from './NewExpense.module.css'
import NewExpenseForm from "./NewExpenseForm/NewExpenseForm";

const NewExpense = ({onClickShowForm, showForm, addNewExpense}) => {
    return (
        <div className={styles.newExpense}>
            {
                showForm ?
                    <NewExpenseForm addNewExpense={addNewExpense} onClickShowForm={onClickShowForm}/> :
                    <button className={styles.soloBtn} onClick={onClickShowForm}>Add Expense</button>
            }
        </div>
    );
};

export default NewExpense;