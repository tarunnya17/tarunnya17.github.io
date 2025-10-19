import React, { use, useEffect } from 'react'
import { achievements, projects} from '@/resources/content'
import { Achievements, Projects } from '@/types/contents.types'
import Image from 'next/image'
import Markdown from 'react-markdown'
import { MarkdownComponents } from '@/resources/markdown-components'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import AnimatedDownArrow from './ui/animated-down'

interface FeatureCardProps {
    achievements: Achievements
    index?: number
}



const AchievementCard = ({ achievements, index }: FeatureCardProps) => {


    return (
        <div style={{
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2.5px 12px 0px',
        }}
            className={`w-full flex flex-col-reverse sm:h-90 h-50 ` + (index && index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row') + ' items-center bg-white rounded-xl relative overflow-hidden'}>
            <div className='h-full w-full relative'>
                {achievements.images && achievements.images.length > 0 && (
                    <div className="relative h-full">

                        <div className="flex-[0_0_100%] min-w-0 relative h-full">
                            <img
                                src={achievements.images[0].src}
                                alt={achievements.images[0].alt || `Achievement Image `}
                                className="object-cover object-top w-full h-full"

                            />
                        </div>
                        <div className="absolute flex w-full h-full bottom-0 left-0 bg-gradient-to-tr from-slate-600 via-transparent to-transparent text-white p-4">
                            <div className='w-1/2 h-fit self-end p-2'>
                                <Markdown components={MarkdownComponents} >{achievements.title}</Markdown>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
const ProjectCard = ({ project }: { project: Projects }) => {
    return (
        <div style={{
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2.5px 12px 0px',
        }}
            className="bg-white rounded-xl overflow-hidden flex flex-col h-full relative">
            <img
                src={project.poster}
                alt={project.title}
                className="w-full h-full object-cover "
            />
            
        </div>
    )
};

const ShowcaseSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(), Fade()]);
    const [embleRef2, emblaApi2] = useEmblaCarousel({ loop: true }, [Autoplay(), Fade()]);
    const scrollToAchievements = () => {
        const element = document.getElementById('achievements_section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToProjects = () => {
        const element = document.getElementById('projects_section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    useEffect(() => {
        if (emblaApi) {
            emblaApi.reInit();
        }
    }, [emblaApi]);
    return (
        <div>
            <div className="flex gap-4 sm:h-90 h-50">

                <div className="sm:basis-2/3 overflow-hidden h-full relative" >
                    <div ref={emblaRef}>
                        <div className='flex h-full ' >
                            {achievements.map((achievement, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full">
                                    <AchievementCard index={index} key={index} achievements={achievement} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute right-4 bottom-4 sm:flex items-center justify-between hidden">

                        <button className="bg-white rounded-full px-4 py-3 shadow-md flex gap-2 cursor-pointer hover:opacity-80" onClick={scrollToAchievements}>
                            <span className="material-icons">Acheivements</span>
                            <AnimatedDownArrow />
                        </button>
                    </div>
                </div>
                <div className="sm:basis-1/3 sm:flex flex-col gap-6 h-full relative hidden">
                    <div className='w-full  h-full' ref={embleRef2}>
                        <div className='flex h-full ' >
                            {projects.slice(0, 3).map((project, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full">
                                    <ProjectCard key={index} project={project} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute right-4 bottom-4 flex items-center justify-between">

                        <button className="bg-white rounded-full px-4 py-3 shadow-md flex gap-2 cursor-pointer hover:opacity-80" onClick={scrollToProjects}>
                            <span className="material-icons">Projects</span>
                            <AnimatedDownArrow />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowcaseSection