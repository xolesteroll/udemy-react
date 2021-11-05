import React from 'react';
import styles from './ExpenseItem.module.css';
import ExpenseDate from "./ExpenseDate/ExpenseDate";

const ExpenseItem = ({title, price, date}) => {

    let expenseTitle = title

    const changeTitleOnClickHandler = () => {
        expenseTitle = 'Updated'
        console.log(expenseTitle)
    }


    return (
        <div className={styles.expenseItem}>
            <ExpenseDate date={date} />
            <div className={styles.expenseItemDescription}>
                <h2>{expenseTitle}</h2>
                <div className={styles.expenseItemPrice}>{`$${price}`}</div>
            </div>
            <button onClick={changeTitleOnClickHandler}>Change Title</button>
        </div>
    );
};

export default ExpenseItem;