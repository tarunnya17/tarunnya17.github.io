'use client'
import { social } from '@/resources/content'
import Link from 'next/link'
import React from 'react'
import { IconBase } from 'react-icons'
import Icon from './Icon'
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import 'animate.css/animate.min.css';

const Social = () => {
    return (
        <div className='flex gap-[15px]'>
            {social.map((item) => (
                <div key={item.name}>
                    <Link href={item.link} target='_blank'>
                        <div data-tooltip-id={`tooltip-${item.name}`} className='flex items-center gap-2'>
                            <Icon name={item.icon as keyof typeof IconBase} size={24}/>
                        </div>
                    </Link>
                    <Tooltip id={`tooltip-${item.name}`} place="bottom" variant="light" className='animate__animated animate__fadeIn'>
                        {item.name}
                    </Tooltip>
                </div>
            ))}
        </div>
    )
}

export default Social