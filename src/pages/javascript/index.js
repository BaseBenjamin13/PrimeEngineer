import React from 'react'

import styles from '@/styles/Learn.module.css';
import PageTitle from '@/components/PageTitle'
import Header from '@/components/language/header';

function LearnJavaScript() {
  return (
    <div className={styles.learnContainer}>
        <PageTitle title={'Learn JavaScript'}/>
        <Header />
    </div>
  )
}

export default LearnJavaScript;