import React from 'react';
import styles from './Header.module.css';

import { useRouter } from 'next/router';

function Header(params) {

  const router = useRouter();
  const { asPath } = useRouter();

  return (
    <div className={styles.headerContainer}>
      <div onClick={() => router.push(`${asPath}/blog`)}>
        <h1>Blog</h1>
      </div>
        <span></span>
      <div onClick={() => router.push(`${asPath}/videos`)}>
        <h1>Videos</h1>
      </div>
        <span></span>
      <div onClick={() => router.push(`${asPath}/quizs`)}>
        <h1>Quizs</h1>
      </div>
    </div>
  )
}

export default Header;