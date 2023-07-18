import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import Image from 'next/image';
// import { faker } from '@faker';

function AIAvatar() {

    const [avator, setAvator] = useState();

    useEffect(() => {
        console.log(faker.image.avatar());
        setAvator(faker.image.avatar());
    }, [])

    return (
        <div>
            {avator && 
                <Image
                    src={avator.toString()}
                    width={85}
                    height={85}
                    alt="Profile Pic"
                />
            }
        </div>
    )
}

export default AIAvatar;