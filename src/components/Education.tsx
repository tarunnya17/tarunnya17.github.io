import { education } from "@/resources/content";
import { Education } from "@/types/contents.types";
import Link from "next/link";
import React from "react";
import { BiMap } from "react-icons/bi";

const EducationSection = () => {
  return (
    <div>
      <h2 className="text-2xl font-medium mb-8">Education</h2>
      <div className="flex flex-col gap-12">
        {education.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </div>
    </div>
  );
};

export default EducationSection;

interface EducationCardProps {
  // Define props for individual education items
  education: Education;
}

const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <div className="w-full flex flex-col gap-2 border-l-1 border-gray-400 pl-4">
      <div>
        <div className="text-md flex gap-1 items-center text-secondary">
          <BiMap />
          {education.location}
        </div>
        <div className="flex text-xl font-medium justify-between">
          <Link
            href={education.institutionLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {education.institution}
          </Link>
          <span className="text-base text-secondary">
            {education.startDate} -{" "}
            {education.endDate ? education.endDate : "Present"}
          </span>
        </div>
        <div className="text-lg text-secondary">{education.degree}</div>
      </div>
      <div className="text-secondary text-lg">
        <div className="">Grade: {education.grade}</div>
        {education.achievements && education.achievements.length > 0 && (
          <ul className="list-disc list-inside space-y-1">
            {education.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
