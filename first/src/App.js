import Expenses from "./components/Expenses/Expenses";
import {useState} from "react";
import {DUMMY_DATA} from "./dummy-db/db"


const App = () => {

    const [expenses, setExpenses] = useState(DUMMY_DATA)

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
