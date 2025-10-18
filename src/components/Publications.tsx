import { publications } from "@/resources/content"
import { Publication } from "@/types/contents.types"
import Link from "next/link"
import ViewLink from "./ui/view-link"
import { useState, useRef, useEffect } from "react"
import { FaArrowRight } from "react-icons/fa6"

const PublicationCard = ({
    publication,
    index,
    isExpanded,
    onToggle
}: {
    publication: Publication
    index: number
    isExpanded: boolean
    onToggle: () => void
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState("auto");
    const [isSingleLine, setIsSingleLine] = useState(false);

    // Function to get first line of summary
    const getFirstLine = (text: string) => {
        if (!text) return "";
        const firstLineEnd = text.indexOf('. ') + 1;
        return firstLineEnd > 0 ? text.substring(0, firstLineEnd) : text;
    };

    useEffect(() => {
        if (contentRef.current) {
            const scrollHeight = contentRef.current.scrollHeight;
            const lineHeight = parseInt(window.getComputedStyle(contentRef.current).lineHeight);
            setIsSingleLine(scrollHeight <= lineHeight * 1.5);
            setHeight(isExpanded ? `${scrollHeight}px` : "1.5em");
        }
    }, [isExpanded, publication.summary]);

    return (
        <div className="w-full flex gap-4">
            <div className=" invisible hidden md:block">
                <FaArrowRight className="text-primary" />
            </div>
            <div className="w-full">
                <div className="w-full">
                    <p className="text-md text-secondary">{publication.journalOrConference} <span className="text-secondary italic">{publication.date}</span></p>
                    <div className="flex justify-between gap-4">
                        <h3 className="text-xl font-medium">{publication.title}</h3>
                        {publication.link && <ViewLink href={publication.link} text="View" />}
                    </div>
                </div>


                {publication.summary && (
                    <div className="mt-2 w-full">
                        <div className="relative w-full">
                            <div
                                ref={contentRef}
                                className="text-secondary text-md text-justify overflow-hidden transition-all duration-500 ease-in-out lg:mr-10"
                                style={{ maxHeight: height }}
                            >
                                {publication.summary}
                            </div>
                            {!isSingleLine && (
                                <span
                                    className="cursor-pointer inline-block underline text-primary"
                                    onClick={onToggle}
                                >
                                    {isExpanded ? "Read less" : "Read more"}
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

const PublicationSection = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div>
            <h2 className="text-2xl font-medium mb-8">Publications</h2>
            <div className="flex flex-col gap-12">
                {publications.map((publication, index) => (
                    <PublicationCard
                        key={index}
                        index={index}
                        publication={publication}
                        isExpanded={expandedIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default PublicationSection