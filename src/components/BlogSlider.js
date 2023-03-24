import React from 'react'
import styles from '@/styles/Home.module.css'

function BlogSlider({ blogContent }) {
    return (
        blogContent && 
        <div className={styles.blogContainer}>
            <h1>Main Blog</h1>
            {blogContent.map((content, index) => {
                return (
                    <div key={index}>
                        <p className={styles.blogContent}>
                            <span className={styles.blogTitle}>{content.title}</span>
                            {content.content}
                        </p>
                    </div>
                )
            })}

            <div className={styles.blogNavContainer}>
                <button className={styles.blogBackBtn}>Back</button>
                <button className={styles.blogNextBtn}>Next</button>
            </div>

        </div>
        
    )
}

export default BlogSlider