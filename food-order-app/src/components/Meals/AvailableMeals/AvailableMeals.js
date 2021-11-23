import React from 'react';
import meals from '../../../db/meals'

import classes from './AvailableMeals.module.css'
import Card from "../../UI/Card/Card";
import MealItem from "./MealsItem/MealItem";

const AvailableMeals = () => {
    const mealsList = meals.map(m => <MealItem
        key={m.id}
        name={m.name}
        price={m.price}
        description={m.description}
    />)

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;