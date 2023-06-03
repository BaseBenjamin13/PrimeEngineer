import React from 'react'

import styles from '@/styles/Learn.module.css';
import PageTitle from '@/components/PageTitle'

function LearnJavaScript() {
  return (
    <div className={styles.learnContainer}>
        <PageTitle title={'Learn JavaScript'}/>
    </div>
  )
}

export default LearnJavaScript;