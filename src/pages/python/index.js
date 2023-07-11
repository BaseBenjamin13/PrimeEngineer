import React from 'react'

import styles from '@/styles/Learn.module.css';
import PageTitle from '@/components/PageTitle'

function LearnPython() {
  return (
    <div className={styles.learnContainer}>
        <PageTitle title={'Learn Python'}/>
    </div>
  )
}

export default LearnPython;