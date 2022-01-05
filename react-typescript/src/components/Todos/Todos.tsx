import React from 'react';

import s from './Todos.module.css'

import Todo from '../../models/todo'
import TodoItem from "./TodoItem/TodoItem";

const Todos: React.FC<{items: Todo[], removeTodo: (id: string) => void}> = (props) => {
    return (
        <ul className={s.todos}>
            {props.items.map(item => <TodoItem
                onClick={() => props.removeTodo(item.id)}
                key={item.id}
                content={item.text}
            />)}
        </ul>
    );
};

export default Todos;
