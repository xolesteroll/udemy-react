import React, {useState} from 'react';

import styles from './NewExpenseForm.module.css'
import NewExpensesControls from "./NewExpensesControls/NewExpensesControls";

const NewExpenseForm = ({addNewExpense, onClickShowForm}) => {

    // const [enteredTitle, setEnteredTitle] = useState('')   тоже вариант
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
        addNewExpense(expenseData)

        // clear form inputs using nulling the state
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })

    }

    return (
        <form onSubmit={submitHandler}>
            <NewExpensesControls
                userInput={userInput}
                titleChangeHandler={titleChangeHandler}
                amountChangeHandler={amountChangeHandler}
                dateChangeHandler={dateChangeHandler}/>
            <div className={styles.newExpenseActions}>
                <button onClick={onClickShowForm} type="button">Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default NewExpenseForm;