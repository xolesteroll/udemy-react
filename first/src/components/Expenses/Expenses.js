import React from 'react';
import styles from './Expenses.module.css'
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../UI/Card/Card";

const Expenses = ({expenses}) => {
    const showExpenses = () => {
        const expensesArr = expenses.map((e, i) => {
            return <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />
        })

        return expensesArr
    }

    return (
        <Card className={styles.expenses}>
            {showExpenses()}
        </Card>
    );
};

export default Expenses;