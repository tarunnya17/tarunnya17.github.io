import Link from 'next/link';
import React from 'react'
import { RiArrowRightUpLine } from 'react-icons/ri';

interface ViewLinkProps {
    href?: string;
    text?: string;
}

const ViewLink = ({ href, text }: ViewLinkProps) => {
    return (
        <div>
            <Link href={href ? href : "#"} target="_blank" rel="noopener noreferrer" className="text-md pb-1 group">
                <div className='flex gap-[1.5px] items-center-safe'><span>{text ? text : "View"}</span><RiArrowRightUpLine /></div>
                <div className='relative h-[1px] w-full'>
                    <div className="absolute left-0 h-full bg-gray-300  w-full"></div>
                    <div className="absolute left-0 h-full bg-black  w-0 group-hover:w-full transition-all duration-300"></div>
                </div>
            </Link>
        </div>
    )
}

export default ViewLink