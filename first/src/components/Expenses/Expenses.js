import React from 'react';
import styles from './Expenses.module.css'
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../UI/Card/Card";
import NewExpense from "../NewExpense/NewExpense";
import ExpenseFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = ({addNewExpense, expenses, filterByYear, year}) => {

    const showExpenses = (year) => {

        if (year) {

            return expenses.filter(e => +year === e.date.getFullYear())
                .map(e => <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />)

        }

        const expensesArr = expenses.map(e => <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />)

        return expensesArr

    }

    return (
        <Card className={styles.expenses}>
            <NewExpense addNewExpense={addNewExpense} />
            <ExpenseFilter filterByYear={filterByYear} year={year}/>
            {showExpenses(year)}
        </Card>
    );
};

export default Expenses;