import React, {useState} from 'react';
import styles from './Expenses.module.css'
import Card from "../UI/Card/Card";
import NewExpense from "../NewExpense/NewExpense";
import ExpenseFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart/ExpensesChart";
const Expenses = ({addNewExpense, expenses}) => {
    const [year, setYear] = useState('')

    let filteredExpensesArr = expenses

    if (year) {
        filteredExpensesArr = expenses.filter(e => +year === e.date.getFullYear())
    }

    // const showExpenses = (year) => {
    //
    //     if (year) {
    //
    //         return expenses.filter(e => +year === e.date.getFullYear())
    //             .map(e => <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />)
    //
    //     }
    //
    //     const expensesArr = expenses.map(e => <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />)
    //
    //     return expensesArr
    //
    // }

    // const filteredExpenses = showExpenses(year)

    const filterByYearHandler = (e) => {
        const year = e.target.value
        setYear(year)
    }

    return (
        <Card className={styles.expenses}>
            <NewExpense
                addNewExpense={addNewExpense}
            />
            <ExpensesChart filteredExpenses={filteredExpensesArr} />
            <ExpenseFilter filterByYear={filterByYearHandler} year={year}/>
            <ExpensesList items={filteredExpensesArr} year={year}/>
        </Card>
    );
};

export default Expenses;