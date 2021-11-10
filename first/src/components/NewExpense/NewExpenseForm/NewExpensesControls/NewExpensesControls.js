import React from 'react';
import styles from "./NewExpensesControls.module.css";

const NewExpensesControls = ({userInput, titleChangeHandler, amountChangeHandler, dateChangeHandler}) => {
    return (
        <div className={styles.newExpenseControls}>
            <div className={styles.newExpenseControl}>
                <label>Title</label>
                <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler}/>
            </div>

            <div className={styles.newExpenseControl}>
                <label>Amount</label>
                <input type="number" value={userInput.enteredAmount} onChange={amountChangeHandler} min="0.01"
                       step="0.01"/>
            </div>

            <div className={styles.newExpenseControl}>
                <label>Date</label>
                <input type="date" value={userInput.enteredDate} onChange={dateChangeHandler} min="2019-01-01"
                       max="2022-12-31"/>
            </div>
        </div>
    );
};

export default NewExpensesControls;