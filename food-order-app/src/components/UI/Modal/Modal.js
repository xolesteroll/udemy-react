import React from 'react';
import {createPortal} from "react-dom";
import Backdrop from "./Backdrop/Backdrop";
import ModalOverlay from "./ModalOverlay/ModalOverlay";

const Modal = ({hideModal, ...props}) => {
    const portalDestination = document.getElementById('overlays')

    return (
        <>
            {createPortal(<Backdrop onClick={hideModal} />, portalDestination)}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalDestination)}
        </>
    );
};

export default Modal;