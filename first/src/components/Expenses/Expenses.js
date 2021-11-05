import React from 'react';
import styles from './Expenses.module.css'
import ExpenseItem from "./ExpenseItem/ExpenseItem";

const Expenses = ({expenses}) => {
    const showExpenses = () => {
        const expensesArr = expenses.map((e, i) => {
            return <ExpenseItem key={e.id} title={e.title} price={e.price} date={e.date} />
        })

        return expensesArr
    }

    return (
        <div className={styles.expenses}>
            {showExpenses()}
        </div>
    );
};

export default Expenses;