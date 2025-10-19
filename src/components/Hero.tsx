import { hero } from '@/resources/content'
import Image from 'next/image'
import React from 'react'
import Avatar from './Avatar'
import Social from './Social'
import { LuDownload } from 'react-icons/lu'
import { motion } from 'framer-motion' // <-- Add this import

const Hero = () => {
    return (
        <div className='flex sm:flex-row flex-col-reverse gap-3 justify-between sm:items-end items-center'>
            <div>
                <h1 className="sm:text-2xl font-medium text-lg">{hero.title}</h1>
                <p className="mt-4 whitespace-pre-line sm:text-xl ">{hero.description}</p>
                <div className='mt-7 flex gap-6 items-center'>
                    <Social />
                    <button className=' text-primary hover:bg-primary/80 hover:text-white relative group cursor-pointer rounded-lg bg-black/5 px-3 py-1 transition-all duration-300' onClick={() => {
                        window.open(hero.cvLink, '_blank')
                    }}>
                        <div className='flex gap-2 items-center'>
                            <motion.span
                                animate={{
                                    y: [0, -3, 0, 0, 0], // up, center, down, center
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <LuDownload size={20} />
                            </motion.span>
                            <p>Download CV</p>
                        </div>
                        {/* <div className='absolute left-0 -bottom-1 h-[2px] bg-primary w-0 group-hover:w-full transition-all duration-300 rounded-full'>

                        </div> */}
                    </button>
                </div>
            </div>
            <div className='flex flex-col flex-shrink-0 items-center gap-4 relative w-fit'>
                <Avatar />
            </div>
        </div>

    )
}

export default Hero