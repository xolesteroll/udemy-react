import Expenses from "./components/Expenses/Expenses";
import {useState} from "react";


const App = () => {

    const [expenses, setExpenses] = useState([
        {id: 1, title: 'Car Insurance', amount: 295.45, date: new Date(2021, 2, 28)},
        {id: 2, title: 'Xbox', amount: 25.45, date: new Date(2021, 2, 28)},
        {id: 3, title: 'Sony Playstation', amount: 235.45, date: new Date(2021, 2, 28)},
        {id: 4, title: 'Sony Playstation', amount: 235.45, date: new Date(2020, 2, 28)},
        {id: 5, title: 'Sony Playstation', amount: 235.45, date: new Date(2019, 2, 28)},
        {id: 6, title: 'Sony Playstation', amount: 235.45, date: new Date(2022, 2, 28)},
        {id: 7, title: 'Sony Playstation', amount: 235.45, date: new Date(2022, 2, 28)},
        {id: 8, title: 'Sony Playstation', amount: 235.45, date: new Date(2019, 2, 28)},
        {id: 9, title: 'Sony Playstation', amount: 235.45, date: new Date(2020, 2, 28)},
        {id: 10, title: 'Sony Playstation', amount: 235.45, date: new Date(2019, 2, 28)},
        {id: 11, title: 'Sony Playstation', amount: 235.45, date: new Date(2021, 2, 28)},
        {id: 12, title: 'Sony Playstation', amount: 235.45, date: new Date(2021, 2, 28)},
        {id: 13, title: 'Never WInter', amount: 23.45, date: new Date(2021, 8, 21)},
    ])

    const [year, setYear] = useState('')

    const addNewExpenseHandler = (dataObj) => {
        setExpenses((prevState) => {
            return [
                ...prevState,
                {id: expenses.length + 1, ...dataObj }
            ]
        })
    }

    const filterByYearHandler = (e) => {
        const year = e.target.value
        setYear(year)
    }

  return (
    <div className="App">
        <Expenses
            expenses={expenses}
            year={year}
            addNewExpense={addNewExpenseHandler}
            filterByYear={filterByYearHandler}
        />
    </div>
  )
}

export default App
