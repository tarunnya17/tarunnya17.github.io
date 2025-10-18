import React from "react";
import { workExperience } from "@/resources/content";
import { Work } from "@/types/contents.types";
import { BiMap } from "react-icons/bi";
import Link from "next/link";

const WorkSection = () => {
  return (
    <div>
    <h2 className="text-2xl font-medium mb-8">Experience</h2>
      <div className="flex flex-col gap-12">
        {workExperience.map((work, index) => (
          <WorkCard key={index} work={work} />
        ))}
      </div>
    </div>
  );
};

export default WorkSection;

interface WorkCardProps {
  work: Work;
}
const WorkCard = ({ work }: WorkCardProps) => {
  return (
    <div className="w-full flex flex-col gap-6 border-l-1 border-gray-400 pl-4">
      <div>
        <div className="text-md flex gap-1 items-center text-secondary">
          <BiMap /> {work.location}
        </div>
        <div className="flex text-xl font-medium justify-between">
          <Link
            href={work.companyLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {work.company}
          </Link>
          <span className="text-base text-secondary">
            {work.startDate} - {work.endDate ? work.endDate : "Present"}
          </span>
        </div>
        <div className="text-lg text-secondary">{work.position}</div>
      </div>
      <div className="text-secondary text-lg">
        {work.description && <p className="mb-2">{work.description}</p>}
        {work.bullets && work.bullets.length > 0 && (
          <ul className="list-disc list-inside space-y-1">
            {work.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
