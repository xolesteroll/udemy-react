import React from 'react';

import './Backdrop.css';

const Backdrop = (props) => {
    const classes = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClose']

    return  <div className={classes.join(' ')}>

    </div>
};

export default Backdrop;
