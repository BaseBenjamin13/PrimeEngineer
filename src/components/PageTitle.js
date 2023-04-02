import React from 'react'
import styles from '@/styles/Home.module.css'

function PageTitle({ title }) {
    return (
        <div className={styles.brandName}>
            <h1>{title}</h1>
        </div>
    )
}

export default PageTitle