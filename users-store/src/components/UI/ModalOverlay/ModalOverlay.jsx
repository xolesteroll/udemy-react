import React from 'react';
import {createPortal} from 'react-dom'

import styles from './ModalOverlay.module.css'
import Modal from "../Modal/Modal";


const ModalOverlay = (props) => {
    return (
        <>
            {createPortal(
                <>
                    <div className={styles.overlay} onClick={props.hideModal}>
                        <Modal message={props.message} closeModal={props.hideModal}/>
                    </div>
                </>
                , document.getElementById('overlay-root'))}
        </>
    );
};

export default ModalOverlay;