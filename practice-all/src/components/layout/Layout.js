import React from 'react';
import MainNavigation from "./MainNavigation";

import s from './Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
            <MainNavigation />
            <main className={s.main}>
                {children}
            </main>
        </>
    );
};

export default Layout;
