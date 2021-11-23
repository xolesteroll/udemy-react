import React from 'react';

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";

const MealItem = ({name, price, description}) => {
    const priceWithCurrency = `$${price.toFixed(2)}`

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
                <MealItemForm />
            </div>
        </li>
    );
};

export default MealItem;