import React from 'react';

import styles from './Modal.module.css'
import Button from "../Button/Button";

const Modal = (props) => {
    return (
        <div className={styles.modal}>
            <p className={styles.modalMessage}>
                {props.message}
            </p>
            <Button className={styles.modalBtn} onClick={props.closeModal} >Okay</Button>
        </div>
    );
};

export default Modal;