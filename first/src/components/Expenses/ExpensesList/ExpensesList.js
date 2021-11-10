import React from 'react';

import ExpenseItem from "../ExpenseItem/ExpenseItem";
import InfoMessage from "../../InfoMessage/InfoMessage";
import styles from "./ExpensesList.module.css"

const ExpensesList = ({items, year}) => {

    const showExpenses = (year) => {

        if (year) {

            return items.filter(e => +year === e.date.getFullYear())
                .map(e => <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />)

        }

        const expensesArr = items.map(e => <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />)

        return expensesArr

    }

    if(showExpenses(year).length === 0) {
        return <InfoMessage text="No Expenses found for this year..." />
    }

    return (
        <ul className={styles.expensesList}>
            {showExpenses(year)}
        </ul>
    );
};

export default ExpensesList;