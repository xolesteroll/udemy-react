import React, {useState} from 'react';

import Todos from "./components/Todos/Todos";
import Todo from './models/todo'
import NewTodo from "./components/Todos/NewTodo/NewTodo";


function App() {
    // const todos = [
    //     new Todo('Learn React'),
    //     new Todo('Learn typescript'),
    // ]

    const [todos, setTodos] = useState<Todo[]>([])
    console.log(todos)
    const addTodoHandler = (text: string) => {
        const newTodo = new Todo(text)

        setTodos(prevState => {
            return prevState.concat(newTodo)
        })
    }

    const removeTodoHandler = (id: string) => {
        setTodos(prevState => {
            return [...prevState.filter(e => e.id !== id)]
        })
    }

    return (
        <div className="App">
            <NewTodo onAddTodo={addTodoHandler}/>
            <Todos removeTodo={removeTodoHandler} items={todos}/>
        </div>
    );
}

export default App;
