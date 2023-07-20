import React, { useState } from 'react';
import styles from '@/styles/Home.module.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function BlogSlider({ blogContent, showCategorys }) {

    const [blogIndex, setBlogIndex] = useState(0)
    const [blogClass, setBlogClass] = useState(styles.blogContentShowFromRight)


    const handleChangeBlogIndex = (num, index) => {
        if (num === 1 && blogIndex < blogContent[index].blogs.length - 1 || num === -1 && blogIndex >= 1) {
            if(num === -1) setBlogClass(styles.blogContentHideToRight)
            if(num === 1) setBlogClass(styles.blogContentHideToLeft)
            const changeIndex = () => {
                if(num === -1) setBlogClass(styles.blogContentShowFromLeft)
                if(num === 1) setBlogClass(styles.blogContentShowFromRight)
                setBlogIndex(blogIndex + num);
            }
            setTimeout(changeIndex, 500)
        }
    }

    return (
        blogContent &&
        <div className={styles.blogContainer}>
            <h1>Main Blog</h1>
            <Tabs onSelect={() => setBlogIndex(0)}>
                <TabList>
                    {
                        showCategorys ?
                            blogContent.map((item, index) => {
                                return <Tab key={index}>{item.category}</Tab>
                            })
                            : <Tab>General</Tab>
                    }
                </TabList>

                {
                    blogContent.map((item, index) => {
                        return (
                            <TabPanel key={index}>
                                <div className={styles.blogContentContainer}>
                                    <div>
                                        <p className={blogClass}>
                                            <span className={styles.blogTitle}>{item.blogs[blogIndex].title}</span>
                                            {item.blogs[blogIndex].content}
                                        </p>
                                    </div>
                                    <div className={styles.blogNavContainer}>
                                        <button className={styles.blogBackBtn} onClick={() => handleChangeBlogIndex(-1, index)}>Back</button>
                                        <button className={styles.blogNextBtn} onClick={() => handleChangeBlogIndex(1, index)}>Next</button>
                                    </div>
                                </div>
                            </TabPanel>
                        )
                    })
                }
            </Tabs>
        </div>
    )
}

export default BlogSlider