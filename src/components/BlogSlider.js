import React, { useState } from 'react';
import styles from '@/styles/Home.module.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function BlogSlider({ blogContent, showCategorys }) {

    const [blogIndex, setBlogIndex] = useState(0)
    const [blogClass, setBlogClass] = useState(styles.blogContent)


    const handleChangeBlogIndex = (num, index) => {
        setBlogClass(styles.blogContentDisappear)
        const changeIndex = () => {
            setBlogClass(styles.blogContent)
            if (num === 1 && blogIndex < blogContent[index].blogs.length - 1 || num === -1 && blogIndex >= 1) {
                setBlogIndex(blogIndex + num);
            }
        }
        setTimeout(changeIndex, 500)
    }

    return (
        blogContent &&
        <div className={styles.blogContainer}>
            <h1>Main Blog</h1>
            <Tabs>
                <TabList>
                    {
                        showCategorys ?
                            blogContent.map((item) => {
                                return <Tab>{item.category}</Tab>
                            })
                            : <Tab>General</Tab>
                    }
                </TabList>

                {
                    blogContent.map((item, index) => {
                        return (
                            <TabPanel>
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