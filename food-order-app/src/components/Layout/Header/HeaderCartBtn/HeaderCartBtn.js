import React from 'react';
import CartIcon from "../../../Cart/CartIcon/CartIcon";
import classes from "./HeaderCartBtn.module.css"

const HeaderCartBtn = (props) => {
    return (
        <button className={`${classes.button} ${classes.bump}`} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    );
};

export default HeaderCartBtn;