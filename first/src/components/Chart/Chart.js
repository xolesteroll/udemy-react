import React from 'react';
import styles from './Chart.module.css'

import ChartBar from "./ChartBar/ChartBar";

const Chart = ({items}) => {
    const values = items.map(item => item.value)

    const totalMaximum = Math.max(...values)

    const showChartBars = items.map(e => <ChartBar key={e.label} value={e.value} maxValue={totalMaximum} label={e.label}/>)

    return (
        <div className={styles.chart}>
            {showChartBars}
        </div>
    );
};

export default Chart;