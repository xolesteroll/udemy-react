import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";


const App = () => {

    const [expenses, setExpenses] = useState([
        {id: 1, title: 'Car Insurance', amount: 295.45, date: new Date(2021, 2, 28)},
        {id: 2, title: 'Xbox', amount: 25.45, date: new Date(2021, 2, 28)},
        {id: 3, title: 'Sony Playstation', amount: 235.45, date: new Date(2021, 2, 28)},
        {id: 4, title: 'Never WInter', amount: 23.45, date: new Date(2021, 8, 21)},
    ])

    const addNewExpense = (dataObj) => {
        setExpenses((prevState) => {
            return [
                ...prevState,
                {id: expenses.length + 1, ...dataObj }
            ]
        })
    }

  return (
    <div className="App">
        <NewExpense addNewExpense={addNewExpense} />
        <Expenses expenses={expenses}/>
    </div>
  )
}

export default App
