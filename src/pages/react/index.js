import React from 'react';
import styles from '@/styles/Learn.module.css';

import PageTitle from '../../components/PageTitle';

function LearnReact() {
  return (
    <div className={styles.learnContainer}>
        <PageTitle title={'Learn React'}/>
    </div>
  )
}

export default LearnReact;