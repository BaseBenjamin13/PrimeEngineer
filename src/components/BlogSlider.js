import React, { useState } from 'react';
import styles from '@/styles/Home.module.css'

function BlogSlider({ blogContent }) {

    const [blogIndex, setBlogIndex] = useState(0)

    const handleChangeBlogIndex = (num) => {
        if(num === 1 && blogIndex < blogContent.length -1){
            setBlogIndex(blogIndex + num);
        }
    }

    return (
        blogContent && 
        <div className={styles.blogContainer}>
            <h1>Main Blog</h1>

            <div>
                <p className={styles.blogContent}>
                    <span className={styles.blogTitle}>{blogContent[blogIndex].title}</span>
                    {blogContent[blogIndex].content}
                </p>
            </div>

            <div className={styles.blogNavContainer}>
                <button className={styles.blogBackBtn}>Back</button>
                <button className={styles.blogNextBtn} onClick={() => handleChangeBlogIndex(1)}>Next</button>
            </div>

        </div>
        
    )
}

export default BlogSlider