import React, {useState} from "react";
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[]
    addTodo: (text: string) => void
    removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: (text: string) => {},
    removeTodo: (id: string) => {}
})

const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([])
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

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider
