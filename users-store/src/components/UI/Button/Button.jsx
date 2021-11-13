import React from 'react';

const Button = (props) => {
    const classes = `${props.className} button`

    return (
        <button className={classes}>
            {props.text}
        </button>
    );
};

export default Button;