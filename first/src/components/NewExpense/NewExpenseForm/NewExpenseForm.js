import React, {useState} from 'react';

import styles from './NewExpenseForm.module.css'

const NewExpenseForm = (props) => {

    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [enteredAmount, setEnteredAmount] = useState(null)
    // const [enteredDate, setEnteredDate] = useState('')

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (e) => {
        // setUserInput({...userInput, enteredTitle: e.target.value})
        // Этот вариант не всегда подходит потому что в некоторыхз случаях мы будем получать неактуальный стейт
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: e.target.value}
            // этот вариант лушче потому что мы всегда получаем актуальный снапшот стейта
        })
    }

    const amountChangeHandler = (e) => setUserInput({...userInput, enteredAmount: e.target.value})

    const dateChangeHandler = (e) => setUserInput({...userInput, enteredDate: e.target.value})

    const submitHandler = (e) => {
        e.preventDefault()
        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
        // add new expense in global state
        props.addNewExpense(expenseData)

        // clear form inputs using nulling the state
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })

    }

    return (
        <form onSubmit={submitHandler}>
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
            <div className={styles.newExpenseActions}>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default NewExpenseForm;