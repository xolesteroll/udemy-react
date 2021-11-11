import React from 'react';

import styles from './ChartBar.module.css'

const ChartBar = ({label, value, maxValue}) => {
    let barFillHEight = '0%'

    if (maxValue > 0) {
        barFillHEight = Math.round((value / maxValue) * 100) + '%'
    }

    return (
        <div className={styles.chartBar}>
            <div className={styles.chartBarInner}>
                <div className={styles.chartBarFill} style={{height: barFillHEight}}>

                </div>
            </div>
                <div className={styles.chartBarLabel}>
                    {label}
                </div>
        </div>
    );
};

export default ChartBar;