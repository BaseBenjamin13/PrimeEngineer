import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import styles from './Avator.module.css';
import { avatorCatagories } from '../../pages/api/avatorCatagories';

function AIAvatar() {

    const [avator, setAvator] = useState('')
    const [avatorCatagory, setAvatorCatagory] = useState('avataaars');
    const [avatorSeed, setAvatorSeed] = useState(Math.floor(Math.random() * 1000));

    const getRandomAvator = () => {
        setAvatorSeed(Math.floor(Math.random() * 1000));
        setAvatorCatagory(avatorCatagories[Math.floor(Math.random() * 6)])
    }

    useEffect(() => {
        setAvator(`https://avatars.dicebear.com/api/${avatorCatagory}/${avatorSeed}.svg`)
    }, [avatorSeed, avatorCatagory])

    return (
        <div className={styles.avatorContainer}>
            {avator && 
                <Image

                    src={avator}
                    width={65}
                    height={65}
                    alt="Profile Pic"
                />
            }
            <button className={styles.randomAvatorBtn} onClick={getRandomAvator}>Random</button>
        </div>
    )
}

export default AIAvatar;