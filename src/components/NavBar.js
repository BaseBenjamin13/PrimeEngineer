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
                <div className={style.navDropdown}>
                    <h1 className={`${style.navItemText} ${style.navDropBtn}`}>Learn &#8681;</h1>
                    <div className={style.navDropdownContent}>
                        <Link href="/javascript">
                            <h2 className={style.navDropdownItem}>JavaScript</h2>
                        </Link>
                        <Link href="/react">
                            <h2 className={style.navDropdownItem}>React</h2>
                        </Link>
                        <Link href="/python">
                            <h2 className={style.navDropdownItem}>Python</h2>
                        </Link>
                    </div>
                </div>
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