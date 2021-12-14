import {useSelector, useDispatch} from "react-redux";

import classes from './Counter.module.css';
import {useState} from "react";


const Counter = () => {
    const [showCounter, setShowCounter] = useState(true)
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)

    const incrementHandler = () => {
        dispatch({
            type: 'increment'
        })
    }

    const decrementHandler = () => {
        dispatch({
            type: 'decrement'
        })
    }

    const toggleCounterHandler = () => {
        setShowCounter((prev) => !prev)
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {
                showCounter && <div className={classes.value}>
                    {counter}
                    <div className={classes.counterControls}>
                        <button onClick={incrementHandler}>Increment</button>
                        <button onClick={decrementHandler}>Decrement</button>
                    </div>
                </div>
            }

            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
