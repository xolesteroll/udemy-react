import React, {useContext} from 'react';
import classes from "./Cart.module.css"
import Modal from "../UI/Modal/Modal"
import CartContext from "../../store/CartContext/cartContext";
import CartItem from "./CartItem/CartItem";

const Cart = ({hideCart}) => {
    const cartCtx = useContext(CartContext)
    const items = cartCtx.items
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items > 0

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1})
    }

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    }

    const cartItems = <ul
        className={classes.cartItems}
    >{
        items.map(item => <CartItem
            key={item.id}
            price={item.price}
            amount={item.amount}
            name={item.name}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
            />
        )
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
                    {totalAmount}
                </span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={hideCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;