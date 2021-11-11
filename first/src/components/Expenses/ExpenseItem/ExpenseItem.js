import React from 'react';
import styles from './ExpenseItem.module.css';
import ExpenseDate from "./ExpenseDate/ExpenseDate";

const ExpenseItem = ({title, amount, date}) => {

    // const [stateTitle, setStateTitle] = useState(title)

    // const changeTitleOnClickHandler = () => {
    //     setStateTitle('Updated')
    //     console.log(stateTitle)
    // }


    return (
        <li className={styles.expenseItem}>
            <ExpenseDate date={date} />
            <div className={styles.expenseItemDescription}>
                <h2>{title}</h2>
                <div className={styles.expenseItemPrice}>{`$${amount}`}</div>
            </div>
            {/*<button onClick={changeTitleOnClickHandler}>Change Title</button>*/}
        </li>
    );
};

export default ExpenseItem;