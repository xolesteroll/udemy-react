import React, {useContext} from 'react';
import {TodosContext} from "../../store/todosContext";

import s from './Todos.module.css'

import TodoItem from "./TodoItem/TodoItem";

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext)

    return (
        <ul className={s.todos}>
            {todosCtx.items.map(item => <TodoItem
                onRemove={todosCtx.removeTodo}
                id={item.id}
                key={item.id}
                content={item.text}
            />)}
        </ul>
    );
};

export default Todos;
