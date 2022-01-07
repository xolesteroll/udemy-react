import React from 'react';

import s from './TodoItem.module.css'

const TodoItem: React.FC<{
    content: string,
    id: string,
    onRemove: (id: string) => void
}> = (props) => {
    return (
        <li onClick={() => props.onRemove(props.id)} className={s.item}>
            {props.content}
        </li>
    );
};

export default TodoItem;
