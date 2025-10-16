import { education } from "@/resources/content";
import { Education } from "@/types/contents.types";
import Link from "next/link";
import React from "react";

const EducationSection = () => {
  return (
    <div>
      <h2 className="text-xl font-medium mb-6">Education</h2>
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
        <div className="text-sm flex gap-1 items-center text-gray-600">
          {/* Add icon if needed */}
          {education.location}
        </div>
        <div className="flex justify-between">
          <Link
            href={education.institutionLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {education.institution}
          </Link>
          <span className="text-sm text-gray-600">
            {education.startDate} -{" "}
            {education.endDate ? education.endDate : "Present"}
          </span>
        </div>
        <div className="text-sm text-gray-600">{education.degree}</div>
      </div>
      <div className="text-gray-600 text-sm">
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
