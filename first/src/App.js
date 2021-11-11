import Expenses from "./components/Expenses/Expenses";
import {useState} from "react";
import db from "./dummy-db/db"


const App = () => {

    const [expenses, setExpenses] = useState(db)

    const addNewExpenseHandler = (dataObj) => {
        setExpenses((prevState) => {
            return [
                {id: prevState.length + 1, ...dataObj},
                ...prevState
            ]
        })
    }

    return (
        <div className="App">
            <Expenses
                expenses={expenses}
                addNewExpense={addNewExpenseHandler}
            />
        </div>
    )
}

export default App
