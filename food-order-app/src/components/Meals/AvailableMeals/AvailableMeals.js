import React, {useEffect, useState} from 'react';

import classes from './AvailableMeals.module.css'
import Card from "../../UI/Card/Card";
import MealItem from "./MealsItem/MealItem";

const AvailableMeals = () => {

    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://food-order-app-82221-default-rtdb.firebaseio.com/meals.json')
            console.log(response)
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            const data = await response.json()

            const loadedMeals = []
            for (const key in data) {
                loadedMeals.push({
                    id: data[key].id,
                    name: data[key].name,
                    price: data[key].price,
                    description: data[key].description
                })
            }
            setMeals(loadedMeals)
            setIsLoading(false)
        }

        fetchMeals().catch(e => {
            setIsLoading(false)
            setError(e.message)
        })
    }, [])

    if (isLoading) {
        return <section className={classes.mealsLoading}>
            <p>Loading...</p>
        </section>
    }

    if (error) {
        return <section className={classes.mealsLoading}>
            <p>{error}</p>
        </section>
    }


    const mealsList = meals.map(m => <MealItem
        id={m.id}
        key={m.id}
        name={m.name}
        price={m.price}
        description={m.description}
    />)

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {isLoading ?
                        <li style={{textAlign: 'center'}}>Loading...</li> :
                        mealsList
                    }
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
