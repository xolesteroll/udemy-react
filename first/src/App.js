import ExpenseItem from "./components/ExpenseItem/ExpenseItem"

const App = () => {
    const expenses = [
        {id: 1, title: 'Car Insurance', price: 295.45, date: new Date(2021, 2, 28)},
        {id: 2, title: 'Xbox', price: 25.45, date: new Date(2021, 2, 28)},
        {id: 3, title: 'Sony Playstation', price: 235.45, date: new Date(2021, 2, 28)}
    ]

  return (
    <div className="App">
        {expenses.map((e, i) => {
           return <ExpenseItem key={e.id} title={e.title} price={e.price} date={e.date} />
        })}
    </div>
  )
}

export default App
