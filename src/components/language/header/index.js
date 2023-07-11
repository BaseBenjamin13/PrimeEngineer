import React from 'react';
import styles from './Header.module.css';

import { useRouter } from 'next/router';

function Header(params) {

  const router = useRouter();
  const { asPath } = useRouter();
  console.log(asPath)

  return (
    <div className={styles.headerContainer}>
      <div>
        <h1>Blog</h1>
      </div>
        <span></span>
      <div>
        <h1>Videos</h1>
      </div>
        <span></span>
      <div>
        <h1>Quizs</h1>
      </div>
    </div>
  )
}

export default Header;