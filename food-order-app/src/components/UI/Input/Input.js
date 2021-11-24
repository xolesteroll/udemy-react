import React from 'react';

import classes from './Input.module.css'

const Input = React.forwardRef(({
                                    label,
                                    input,
                                    ...props
                                },
                                ref) => {

    const concatClasses = props.className ? `${props.className} ${classes.input}` : classes.input

    return (
        <div className={concatClasses}>
            <label htmlFor={input.name}>
                {label}
            </label>
            <input ref={ref} {...input}/>
        </div>
    );
});

export default Input;