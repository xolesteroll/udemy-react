import React from 'react';
import classes from "./Cart.module.css"
import Modal from "../UI/Modal/Modal"

const Cart = ({hideCart}) => {


    const cartItems = <ul
        className={classes.cartItems}
    >{
        [{id: 'c1', name: 'sushi', amount: 2, price: 12.99}].map(item => <li>{item.name}</li>)
    }
    </ul>

    return (
        <Modal hideModal={hideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>
                    Total Amount:
                </span>
                <span>
                    35.62
                </span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={hideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;