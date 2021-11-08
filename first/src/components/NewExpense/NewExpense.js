import React from 'react';
import styles from './NewExpense.module.css'
import NewExpenseForm from "./NewExpenseForm/NewExpenseForm";

const NewExpense = (props) => {
    return (
        <div className={styles.newExpense}>
            <NewExpenseForm addNewExpense={props.addNewExpense} />
        </div>
    );
};

export default NewExpense;