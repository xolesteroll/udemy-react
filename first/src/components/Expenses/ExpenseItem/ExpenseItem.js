import React from 'react';
import styles from './ExpenseItem.module.css';
import ExpenseDate from "./ExpenseDate/ExpenseDate";

const ExpenseItem = ({title, price, date}) => {

    return (
        <div className={styles.expenseItem}>
            <ExpenseDate date={date} />
            <div className={styles.expenseItemDescription}>
                <h2>{title}</h2>
                <div className={styles.expenseItemPrice}>{`$${price}`}</div>
            </div>
        </div>
    );
};

export default ExpenseItem;