import { hero } from '@/resources/content'
import Image from 'next/image'
import React from 'react'
import Avatar from './Avatar'
import Social from './Social'

const Hero = () => {
    return (
        <div className='flex gap-3 justify-between items-center'>
            <div>
                <h1 className="text-2xl font-medium">{hero.title}</h1>
                <p className="mt-4 whitespace-pre-line text-xl text-gray-600">{hero.description}</p>
                <div className='mt-7'>
                    <Social />
                </div>
            </div>
            <Avatar />
        </div>
    )
}

export default Hero