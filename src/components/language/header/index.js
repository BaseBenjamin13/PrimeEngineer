import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.headerContainer}>
        <h1>Blog</h1>
        <h1>Videos</h1>
        <h1>Quizs</h1>
    </div>
  )
}

export default Header;