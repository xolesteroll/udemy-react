import React from 'react';

import './Modal.css';
import {CSSTransition} from "react-transition-group";

const animationTiming = {
    enter: 1000,
    exit: 500
}

const modal = (props) => {

    return (
        <CSSTransition
            in={props.show}
            timeout={animationTiming}
            classNames={{
                enter: '',
                enterActive: 'ModalOpen',
                exit: '',
                exitActive: 'ModalClose'
            }}
            mountOnEnter
            unmountOnExit
        >
            <div className='Modal'>
                <h1>A Modal</h1>
                <button className='Button' onClick={props.modalHandler}>Dismiss</button>
            </div>
        </CSSTransition>
    )


}


export default modal;
