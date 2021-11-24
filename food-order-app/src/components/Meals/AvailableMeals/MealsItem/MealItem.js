import React, {useContext} from 'react';

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";
import CartContext from "../../../../store/CartContext/cartContext";

const MealItem = ({id, name, price, description}) => {
    const priceWithCurrency = `$${price.toFixed(2)}`
    const cartCtx = useContext(CartContext)

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id,
            name,
            price: +price,
            amount: +amount
        })

    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>
                    {name}
                </h3>
                <p className={classes.description}>
                    {description}
                </p>
                <div className={classes.price}>
                    {priceWithCurrency}
                </div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
};

export default MealItem;