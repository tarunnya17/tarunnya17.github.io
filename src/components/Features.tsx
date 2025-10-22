import React, { useEffect } from 'react'
import { achievements } from '@/resources/content'
import { Achievements } from '@/types/contents.types'
import Image from 'next/image'
import Markdown from 'react-markdown'
import { MarkdownComponents } from '@/resources/markdown-components'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

interface FeatureCardProps {
    achievements: Achievements
    index?: number
}




const FeatureCard = ({ achievements, index }: FeatureCardProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
        <div style={{
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2.5px 12px 0px',
        }}
         className={`w-full flex flex-col-reverse h-100 ` + (index && index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row') + ' items-center bg-white rounded-xl relative overflow-hidden'}>
            <div className="sm:basis-[40%] p-5 sm:p-10">
                <Markdown components={MarkdownComponents}>{achievements.title}</Markdown>
                <div className="mt-2">
                    <Markdown components={MarkdownComponents}>{achievements.content}</Markdown>
                </div>
            </div>
            <div className="md:basis-[60%] h-full">
                {achievements.images && achievements.images.length > 0 && (
                    <div className="relative h-full">
                        {/* Embla Carousel */}
                        <div className="overflow-hidden h-full" ref={emblaRef}>
                            <div className="flex h-full">
                                {achievements.images.map((image, index) => (
                                    <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full">
                                        <img
                                            src={image.src}
                                            alt={image.alt || `Achievement Image ${index + 1}`}
                                            className="object-cover w-full h-full"
                                            
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

const FeatureSection = () => {
    return (
        <div>
            <h2 className="text-2xl font-medium mb-8">Achievements</h2>
            <div className="flex flex-col gap-8">
                {achievements.map((achievement, index) => (
                    <FeatureCard index={index} key={index} achievements={achievement} />
                ))}
            </div>
        </div>
    )
}

export default FeatureSection