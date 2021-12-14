import React, {useContext, useState} from 'react';
import classes from "./Cart.module.css"
import Modal from "../UI/Modal/Modal"
import CartContext from "../../store/CartContext/cartContext";
import CartItem from "./CartItem/CartItem";
import Checkout from "./Checkout/Checkout";



const Cart = ({hideCart}) => {
    const [orderClicked, setOrderClicked] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false)
    const cartCtx = useContext(CartContext)
    const items = cartCtx.items
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0
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

    const orderHandler = (e) => {
        e.preventDefault()
        if (!orderClicked) {
            setOrderClicked(true)
        }
    }

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true)
        try {
            await fetch('https://food-order-app-82221-default-rtdb.firebaseio.com/orders.json', {
                method: 'POST',
                body: JSON.stringify({
                    user: userData,
                    chosenItems: items
                })
            })

        } catch (e) {
            setIsSubmitting(false)
            console.log(e.message)
        }
        setIsSubmitting(false)
        setDidSubmit(true)
        cartCtx.clearCart()
        setTimeout(() => {
            setDidSubmit(false)
            hideCart()
        }, 2000)
    }

    const modalActions = <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={hideCart}>Close</button>
        {hasItems && <button onClick={orderHandler} className={classes.button}>Order</button>}
    </div>

    const cartModalContent =
        <>
            {cartItems}
            <div className={classes.total}>
                <span>
                    Total Amount:
                </span>
                <span>
                    {totalAmount}
                </span>

            </div>
            {orderClicked && <Checkout onConfirm={submitOrderHandler} closeHandler={hideCart}/>}
            {!orderClicked && modalActions}
        </>

    const isSubmittingModalContent = <p>Sending Order data</p>

    const didSubmitModalContent = <p>Your Order Has been sent!</p>

    return (
        <Modal hideModal={hideCart}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && !didSubmit && isSubmittingModalContent}
            {didSubmit && didSubmitModalContent}
        </Modal>
    );
};

export default Cart;
