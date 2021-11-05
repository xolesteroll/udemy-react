import Expenses from "./components/Expenses/Expenses";

const App = () => {
    const expenses = [
        {id: 1, title: 'Car Insurance', price: 295.45, date: new Date(2021, 2, 28)},
        {id: 2, title: 'Xbox', price: 25.45, date: new Date(2021, 2, 28)},
        {id: 3, title: 'Sony Playstation', price: 235.45, date: new Date(2021, 2, 28)},
        {id: 4, title: 'Never WInter', price: 23.45, date: new Date(2021, 8, 21)},
    ]

  return (
    <div className="App">
        <Expenses expenses={expenses}/>
    </div>
  )
}

export default App
