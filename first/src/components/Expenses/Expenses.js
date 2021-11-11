import React, {useState} from 'react';
import styles from './Expenses.module.css'
import Card from "../UI/Card/Card";
import NewExpense from "../NewExpense/NewExpense";
import ExpenseFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";

const Expenses = ({addNewExpense, expenses}) => {

    const [year, setYear] = useState('')

    const filterByYearHandler = (e) => {
        const year = e.target.value
        setYear(year)
    }

    return (
        <Card className={styles.expenses}>
            <NewExpense
                addNewExpense={addNewExpense}
            />
            <ExpenseFilter filterByYear={filterByYearHandler} year={year}/>
            <ExpensesList items={expenses} year={year}/>
        </Card>
    );
};

export default Expenses;