import React from 'react';

import classes from "./ModalOverlay.module.css";

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
};

export default ModalOverlay;