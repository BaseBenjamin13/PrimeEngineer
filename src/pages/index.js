import react, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import PageTitle from '../components/PageTitle';
import BlogSlider from '../components/BlogSlider';

export default function Home() {

    const [blogContent, setBlogContent] = useState([
        {
            category: 'State',
            blogs: [
                {
                    title: 'State Title #1',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate eu dolor quis vestibulum.Morbi lectus nisi, eleifend eget congue in, sollicitudin vel felis. Aliquam non sodales justo.Sed tristique sagittis dolor, lacinia vulputate metus dictum eget.Phasellus vitae nisl id purus pretium varius nec eget neque.Aenean sodales vestibulum velit sit amet elementum.Suspendisse justo ante, pulvinar eu consequat vitae, maximus a arcu. Duis id odio non lectus vestibulum luctus. Donec consectetur erat dui, a ultrices nisi hendrerit nec. Mauris urna lorem, tincidunt a dolor vitae, lacinia vulputate ante.Proin vel felis mi. Nulla dictum velit et metus auctor, nec pretium augue semper. Maecenas ac accumsan nisi.Vivamus finibus condimentum semper. Aliquam eget ipsum eros.Nulla elementum metus nec libero rutrum'
                },
                {
                    title: 'State Title #2',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate eu dolor quis vestibulum.Morbi lectus nisi, eleifend eget congue in, sollicitudin vel felis. Aliquam non sodales justo.Sed tristique sagittis dolor, lacinia vulputate metus dictum eget.Phasellus vitae nisl id purus pretium varius nec eget neque.Aenean sodales vestibulum velit sit amet elementum.Suspendisse justo ante, pulvinar eu consequat vitae, maximus a arcu. Duis id odio non lectus vestibulum luctus. Donec consectetur erat dui, a ultrices nisi hendrerit nec. Mauris urna lorem, tincidunt a dolor vitae, lacinia vulputate ante.Proin vel felis mi. Nulla dictum velit et metus auctor, nec pretium augue semper. Maecenas ac accumsan nisi.Vivamus finibus condimentum semper. Aliquam eget ipsum eros.Nulla elementum metus nec libero rutrum'
                },      
                {
                    title: 'State Title #3',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate eu dolor quis vestibulum.Morbi lectus nisi, eleifend eget congue in, sollicitudin vel felis. Aliquam non sodales justo.Sed tristique sagittis dolor, lacinia vulputate metus dictum eget.Phasellus vitae nisl id purus pretium varius nec eget neque.Aenean sodales vestibulum velit sit amet elementum.Suspendisse justo ante, pulvinar eu consequat vitae, maximus a arcu. Duis id odio non lectus vestibulum luctus. Donec consectetur erat dui, a ultrices nisi hendrerit nec. Mauris urna lorem, tincidunt a dolor vitae, lacinia vulputate ante.Proin vel felis mi. Nulla dictum velit et metus auctor, nec pretium augue semper. Maecenas ac accumsan nisi.Vivamus finibus condimentum semper. Aliquam eget ipsum eros.Nulla elementum metus nec libero rutrum'
                },
            ]
        },
        {
            category: 'Props',
            blogs: [
                {
                    title: 'Props Title #1',
                    content: 'Lacinia vulputate ante.Proin vel felis mi. Nulla dictum velit et metus auctor, nec pretium augue semper. Maecenas ac accumsan nisi.Vivamus finibus condimentum semper. Aliquam eget ipsum eros.Nulla elementum metus nec libero rutrum'
                },
                {
                    title: 'Props Title #2',
                    content: 'Lacinia vulputate ante.Proin vel felis mi. Nulla dictum velit et metus auctor, nec pretium augue semper. Maecenas ac accumsan nisi.Vivamus finibus condimentum semper. Aliquam eget ipsum eros.Nulla elementum metus nec libero rutrum'
                },      
                {
                    title: 'Props Title #3',
                    content: 'Lacinia vulputate ante.Proin vel felis mi. Nulla dictum velit et metus auctor, nec pretium augue semper. Maecenas ac accumsan nisi.Vivamus finibus condimentum semper. Aliquam eget ipsum eros.Nulla elementum metus nec libero rutrum'
                },
            ]
        },    
        {
            category: 'Testing',
            blogs: [
                {
                    title: 'Testing Title #1',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate eu dolor quis vestibulum.Morbi lectus nisi, eleifend eget congue in, sollicitudin vel felis. Aliquam non sodales justo.Sed tristique sagittis dolor, lacinia vulputate metus dictum eget.Phasellus vitae nisl id purus pretium varius nec eget neque.Aenean sodales vestibulum velit sit amet elementum.Suspendisse justo ante, pulvinar eu consequat vitae, maximus a arcu. Duis id odio non lectus vestibulum luctus. Donec consectetur erat dui, a ultrices nisi hendrerit nec. Mauris urna lorem, tincidunt a dolor vitae.'
                },
                {
                    title: 'Testing Title #2',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate eu dolor quis vestibulum.Morbi lectus nisi, eleifend eget congue in, sollicitudin vel felis. Aliquam non sodales justo.Sed tristique sagittis dolor, lacinia vulputate metus dictum eget.Phasellus vitae nisl id purus pretium varius nec eget neque.Aenean sodales vestibulum velit sit amet elementum.Suspendisse justo ante, pulvinar eu consequat vitae, maximus a arcu. Duis id odio non lectus vestibulum luctus. Donec consectetur erat dui, a ultrices nisi hendrerit nec. Mauris urna lorem, tincidunt a dolor vitae.'
                },     
                {
                    title: 'Testing Title #3',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate eu dolor quis vestibulum.Morbi lectus nisi, eleifend eget congue in, sollicitudin vel felis. Aliquam non sodales justo.Sed tristique sagittis dolor, lacinia vulputate metus dictum eget.Phasellus vitae nisl id purus pretium varius nec eget neque.Aenean sodales vestibulum velit sit amet elementum.Suspendisse justo ante, pulvinar eu consequat vitae, maximus a arcu. Duis id odio non lectus vestibulum luctus. Donec consectetur erat dui, a ultrices nisi hendrerit nec. Mauris urna lorem, tincidunt a dolor vitae.'
                },
            ]
        },    
        {
            category: 'Hooks',
            blogs: [
                {
                    title: 'Hooks Title #1',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate eu dolor quis vestibulum.Morbi lectus nisi, eleifend eget congue in, sollicitudin vel felis. Aliquam non sodales justo.Sed tristique sagittis dolor, lacinia vulputate metus dictum eget.Phasellus vitae nisl id purus pretium varius nec eget neque.Aenean sodales vestibulum velit sit amet elementum.Suspendisse justo ante, pulvinar eu consequat vitae, maximus a arcu. Duis id odio non lectus vestibulum luctus. Donec consectetur erat dui, a ultrices nisi hendrerit nec. Mauris urna lorem, tincidunt a dolor vitae.'
                },
                {
                    title: 'Hooks Title #2',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate eu dolor quis vestibulum.Morbi lectus nisi, eleifend eget congue in, sollicitudin vel felis. Aliquam non sodales justo.Sed tristique sagittis dolor, lacinia vulputate metus dictum eget.Phasellus vitae nisl id purus pretium varius nec eget neque.Aenean sodales vestibulum velit sit amet elementum.Suspendisse justo ante, pulvinar eu consequat vitae, maximus a arcu. Duis id odio non lectus vestibulum luctus. Donec consectetur erat dui, a ultrices nisi hendrerit nec. Mauris urna lorem, tincidunt a dolor vitae.'
                },    
                {
                    title: 'Hooks Title #3',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate eu dolor quis vestibulum.Morbi lectus nisi, eleifend eget congue in, sollicitudin vel felis. Aliquam non sodales justo.Sed tristique sagittis dolor, lacinia vulputate metus dictum eget.Phasellus vitae nisl id purus pretium varius nec eget neque.Aenean sodales vestibulum velit sit amet elementum.Suspendisse justo ante, pulvinar eu consequat vitae, maximus a arcu. Duis id odio non lectus vestibulum luctus. Donec consectetur erat dui, a ultrices nisi hendrerit nec. Mauris urna lorem, tincidunt a dolor vitae.'
                },
            ]
        },         
    ])

    return(
        <>
            <Head>
                <title>Prime Engineer</title>
                <meta name="description" content="Home page of Prime Engineer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>

            <main className={styles.main}>
                <PageTitle title={'Prime Engineer'}/>
            </main>

            <BlogSlider blogContent={blogContent} showCategorys={true}/>

        </>
    )
}
