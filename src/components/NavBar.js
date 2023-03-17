import React from 'react';
import Image from 'next/image'
import style from '@/styles/NavBar.module.css'

function NavBar() {
    return (
        <div className={style.nav}>
            <div className={style.navItem}>
                <Image
                    src="/logo.png"
                    width={85}
                    height={85}
                    alt="Picture of Prime Engineer logo"
                />
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