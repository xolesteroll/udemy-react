import React from 'react';
import {NavLink} from 'react-router-dom'

import s from './MainNavigation.module.css'

const MainNavigation = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>Quotes App</div>
            <nav className={s.nav}>
                <ul>
                    <li>
                        <NavLink to='/quotes' activeClassName={s.active} >
                            All Quotes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/new-quote' activeClassName={s.active} >
                            Add new quote
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
