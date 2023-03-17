import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from '@/styles/NavBar.module.css';

function NavBar() {
    return (
        <div className={style.nav}>
            <div className={style.navItem}>
                <Link href="/">
                    <Image
                        src="/logo.png"
                        width={85}
                        height={85}
                        alt="Picture of Prime Engineer logo"
                    />
                </Link>
            </div>

            <div className={style.navItem}>
                <Link href="/books">
                    <h1 className={style.navItemText}>Books</h1>
                </Link>
            </div>

            <div className={style.navItem}>
                <h1 className={style.navItemText}>Learn &#8681;</h1>
            </div>

            <div className={style.navItem}>
                <Link href="/products">
                    <h1 className={style.navItemText}>Products</h1>
                </Link>
            </div>

            <div className={style.navItem}>
                <Link href="/about">
                    <h1 className={style.navItemText}>About</h1>
                </Link>
            </div>

        </div>
    )
}

export default NavBar