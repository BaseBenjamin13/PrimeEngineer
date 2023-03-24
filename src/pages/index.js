import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


export default function Home() {
    return (
        <>
            <Head>
                <title>Prime Engineer</title>
                <meta name="description" content="Home page of Prime Engineer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>

            <main className={styles.main}>
                <div className={styles.brandName}>
                    <h1>Prime Engineer</h1>
                </div>
            </main>

            <div className={styles.blogContainer}>
                <h1>Main Blog</h1>
                
                <p className={styles.blogContent}>
                    <span className={styles.blogTitle}>title</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Proin vulputate eu dolor quis 
                    vestibulum. Morbi lectus nisi, 
                    eleifend eget congue in, sollicitudin vel felis. 
                    Aliquam non sodales justo. Sed tristique sagittis dolor, 
                    lacinia vulputate metus dictum eget. Phasellus vitae nisl 
                    id purus pretium varius nec eget neque. Aenean sodales vestibulum
                     velit sit amet elementum. Suspendisse justo ante, 
                    pulvinar eu consequat vitae, maximus a arcu. 
                    Duis id odio non lectus vestibulum luctus. 
                    Donec consectetur erat dui, a ultrices nisi hendrerit nec. 
                    Mauris urna lorem, tincidunt a dolor vitae, 
                    lacinia vulputate ante. Proin vel felis mi. 
                    Nulla dictum velit et metus auctor, nec pretium augue semper. 
                    Maecenas ac accumsan nisi. Vivamus finibus condimentum semper. 
                    Aliquam eget ipsum eros. Nulla elementum metus nec libero rutrum 
                    mollis ac vulputate eros.
                </p>
            </div>
        </>
    )
}
