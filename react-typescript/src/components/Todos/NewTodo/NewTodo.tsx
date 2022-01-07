import React, {useContext} from 'react';
import {useRef} from "react";

import s from './NewTodo.module.css'
import {TodosContext} from "../../../store/todosContext";

const NewTodo: React.FC = () => { // onAddTodo prop is of type function
    const todoCtx = useContext(TodosContext)

    const inputRef = useRef<HTMLInputElement>(null)

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault()

        const enteredText = inputRef.current!.value
        if (enteredText.trim().length === 0) {
            return
        }

        todoCtx.addTodo(enteredText)
        inputRef.current!.value = ''
    }

    return (
        <form className={s.form} onSubmit={onSubmitHandler}>
            <label htmlFor="todo-text">Todo Text</label>
            <input ref={inputRef} name="todo-text" type="text"/>
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;
