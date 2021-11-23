import React from 'react';

import bannerImg from '../../../assets/meals.jpg'
import classes from './MainBanner.module.css'

const MainBanner = () => {
    return (
        <div className={classes.bannerImage}>
            <img src={bannerImg} alt="Table full of food"/>
        </div>
    );
};

export default MainBanner;