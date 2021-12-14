import React, {useReducer} from 'react';
import CartContext from './cartContext'
import cartReducer, {initialState} from "../reducers/cartReducer";

const CartProvider = (props) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, initialState)

    const addItemHandler = item => {
        cartDispatch({
            type: 'ADD_ITEM',
            item: item
        })
    }
    const removeItemHandler = id => {
        cartDispatch({
            type: 'REMOVE_ITEM',
            id: id
        })
    }

    const clearCartHandler = () => {
        cartDispatch({
            type: 'CLEAR'
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        clearCart: clearCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
