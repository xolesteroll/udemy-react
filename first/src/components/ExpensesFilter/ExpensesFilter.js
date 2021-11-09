import React from 'react';

import styles from './ExpensesFilter.module.css';

const ExpensesFilter = (props) => {
    return (
        <div className={styles.expensesFilter}>
            <div className={styles.expensesFilterControl}>
                <label>Filter by year</label>
                <select value={props.year} onChange={props.filterByYear}>
                    <option value=''>All</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;