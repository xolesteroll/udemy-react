import React from 'react';
import styles from './InfoMessage.module.css'

const InfoMessage = ({text}) => {
    return (
        <div>
            <p className={styles.infoMessage}>{text}</p>
        </div>
    );
};

export default InfoMessage;