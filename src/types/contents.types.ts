import { IconName } from "@/resources/icons";

//Basic person type
export type Person = {
    firstname: string;
    lastname: string;
    name: string;
    role: string;
    avatar: Avatar;
    email: string;
    phone: string;
    location: string;
};

export type Avatar = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

export type Social = Array<{
  name: string;

  icon: IconName;

  link: string;
}>;

export type Work = {
    position: string;
    company: string;
    companyLink?: string;
    startDate: string;
    endDate?: string;
    description?: string;
    bullets?: string[];
    location?: string;
    type?: "Full-time" | "Part-time" | "Contract" | "Internship" | "Freelance";
};

export type Education = {
    degree: string;
  institution: string;
  institutionLink: string;
  startDate: string;
  endDate: string;
  location: string;
    grade: string;
    achievements: string[];
};