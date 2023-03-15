import React from 'react';
import style from '@/styles/NavBar.module.css'

function NavBar() {
    return (
        <div className={style.nav}>
            <div>
                <h1>Logo</h1>
            </div>
            <div className={style.navItem}>
                <h1 className={style.navItemText}>Books</h1>
            </div>
            <div className={style.navItem}>
                <h1 className={style.navItemText}>Learn &#8681;</h1>
            </div>
            <div className={style.navItem}>
                <h1 className={style.navItemText}>Products</h1>
            </div>
            <div className={style.navItem}>
                <h1 className={style.navItemText}>About</h1>
            </div>
        </div>
    )
}

export default NavBar