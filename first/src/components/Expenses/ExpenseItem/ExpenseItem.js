import React, { useState } from 'react';
import styles from './ExpenseItem.module.css';
import ExpenseDate from "./ExpenseDate/ExpenseDate";

const ExpenseItem = ({title, amount, date}) => {

    const [stateTitle, setStateTitle] = useState(title)

    const changeTitleOnClickHandler = () => {
        setStateTitle('Updated')
        console.log(stateTitle)
    }


    return (
        <div className={styles.expenseItem}>
            <ExpenseDate date={date} />
            <div className={styles.expenseItemDescription}>
                <h2>{stateTitle}</h2>
                <div className={styles.expenseItemPrice}>{`$${amount}`}</div>
            </div>
            <button onClick={changeTitleOnClickHandler}>Change Title</button>
        </div>
    );
};

export default ExpenseItem;