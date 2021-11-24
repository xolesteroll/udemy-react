import React, {useContext, useEffect, useState} from 'react';
import CartIcon from "../../../Cart/CartIcon/CartIcon";
import classes from "./HeaderCartBtn.module.css"
import CartContext from "../../../../store/CartContext/cartContext";

const HeaderCartBtn = (props) => {
    const [btnBump, setBtnBump] = useState(false)
    const cartCtx = useContext(CartContext)
    const numberOfCartItems = cartCtx.items.reduce((currNum, item) => {
        return currNum + item.amount
    }, 0)

    const btnClasses = `${classes.button} ${btnBump ? classes.bump : ''}`

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return
        }
        setBtnBump(true)

        const timer = setTimeout(() => {
            setBtnBump(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [cartCtx.items])

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCartBtn;