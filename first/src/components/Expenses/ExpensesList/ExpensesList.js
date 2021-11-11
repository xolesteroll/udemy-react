import React from 'react';

import ExpenseItem from "../ExpenseItem/ExpenseItem";
import InfoMessage from "../../UI/InfoMessage/InfoMessage";
import styles from "./ExpensesList.module.css"

const ExpensesList = ({items}) => {
    console.log(items)
    const showList = items.map(e => <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />)

    if(items.length === 0) {
        return <InfoMessage text="No Expenses found for this year..." />
    }

    return (
        <ul className={styles.expensesList}>
            {showList}
        </ul>
    );
};

export default ExpensesList;