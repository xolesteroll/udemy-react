import React from 'react';

import classes from './Input.module.css'

const Input = ({label, input, ...props}) => {

    const concatClasses = props.className ? `${props.className} ${classes.input}` : classes.input

    return (
        <div className={concatClasses}>
            <label htmlFor={input.name}>
                {label}
            </label>
            <input {...input}/>
        </div>
    );
};

export default Input;