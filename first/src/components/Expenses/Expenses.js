import React, {useState} from 'react';
import styles from './Expenses.module.css'
import Card from "../UI/Card/Card";
import NewExpense from "../NewExpense/NewExpense";
import ExpenseFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";

const Expenses = ({addNewExpense, expenses}) => {

    const [year, setYear] = useState('')

    const [showForm, setShowForm] = useState(false)


    const filterByYearHandler = (e) => {
        const year = e.target.value
        setYear(year)
    }

    const onClickShowFormHandler = () => {
        setShowForm(!showForm)
    }

    return (
        <Card className={styles.expenses}>
            <NewExpense
                addNewExpense={addNewExpense}
                onClickShowForm={onClickShowFormHandler}
                showForm={showForm}
            />
            <ExpenseFilter filterByYear={filterByYearHandler} year={year}/>
            <ExpensesList items={expenses} year={year}/>
        </Card>
    );
};

export default Expenses;