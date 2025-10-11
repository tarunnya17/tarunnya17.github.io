import { hero } from '@/resources/content'
import React from 'react'
import Image from 'next/image'

const Avatar = () => {
    return (
        <Image
            src={hero.avatar.src}
            alt={hero.avatar.alt}
            width={hero.avatar.width || 100}
            height={hero.avatar.height || 100}
            className="rounded-3xl border-white border-4 shadow-lg"
        />
    )
}

export default Avatar