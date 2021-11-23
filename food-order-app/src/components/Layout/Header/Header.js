import React from 'react';

import classes from './Header.module.css'
import HeaderCartBtn from "./HeaderCartBtn/HeaderCartBtn";

const Header = ({showCart}) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Order Food</h1>
                <HeaderCartBtn onClick={showCart}/>
            </header>
        </>
    );
};

export default Header;