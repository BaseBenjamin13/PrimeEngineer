import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';

function AIAvatar() {

    const [avator, setAvator] = useState('')
    const [avatorCatagory, setAvatorCatagory] = useState('avataaars');
    const [avatorSeed, setAvatorSeed] = useState(Math.floor(Math.random() * 1000));

    const getRandomAvator = () => {
        setAvatorSeed(Math.floor(Math.random() * 1000));
        // setAvator(`https://avatars.dicebear.com/api/${avatorCatagory}/${avatorSeed}.svg`)
    }

    useEffect(() => {
        setAvator(`https://avatars.dicebear.com/api/${avatorCatagory}/${avatorSeed}.svg`)
    }, [avatorSeed])

    return (
        <div>
            {avator && 
                <Image
                    src={avator}
                    width={85}
                    height={85}
                    alt="Profile Pic"
                />
            }
            <button onClick={getRandomAvator}>Random</button>
        </div>
    )
}

export default AIAvatar;