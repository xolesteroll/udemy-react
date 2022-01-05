import React from 'react';

import s from './TodoItem.module.css'

const TodoItem: React.FC<{content: string, onClick: () => void}> = (props) => {
    return (
        <li onClick={onClick} className={s.item}>
            {props.content}
        </li>
    );
};

export default TodoItem;
