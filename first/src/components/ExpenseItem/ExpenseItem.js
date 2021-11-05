import React from 'react';
import styles from './ExpenseItem.module.css'

const ExpenseItem = ({title, price, date}) => {
    const month = date.toLocaleString('en-US', {month: 'long'})
    const year = date.getFullYear()
    const day = date.getDate()
    return (
        <div className={styles.expenseItem}>
            <div className={styles.expenseDateBox}>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className={styles.expenseItemDescription}>
                <h2>{title}</h2>
                <div className={styles.expenseItemPrice}>{`$${price}`}</div>
            </div>
        </div>
    );
};

export default ExpenseItem;