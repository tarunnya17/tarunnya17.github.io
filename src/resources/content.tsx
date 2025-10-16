import type { Education, Person, Social, Work } from "@/types/contents.types";

const person: Person = {
    firstname: "Tarunnyamoye",
    lastname: "Kundu",
    name: "Tarunnyamoye Kundu",
    role: "Lecturer",
    avatar: {
        src: "/images/avatar.jpeg",
        alt: "Tarunnyamoye Kundu",
        width: 200,
        height: 200,
    },
    email: "tarunnyamoye@gmail.com",
    phone: "+88000000000",
    location: "Dhaka, Bangladesh",
};

//Hero section
export const hero = {
    title: `Hey, I'm ${person.name}.`,
    description: `I'm a Web Designer, Music Artist & Photographer.
    I spend most of time thinking about Tea.`,
    avatar: person.avatar,
};

//Social links

export const social: Social = [
    {
        name: "Google Scholar",
        icon: "scholar",
        link: "https://scholar.google.com/citations?user=TarunnyamoyeKundu",
    },
    {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/tarunnyamoye/",
    },
    {
        name: "X",
        icon: "x",
        link: "https://x.com/tarunnyamoye",
    },
    {
        name: "Threads",
        icon: "threads",
        link: "https://www.threads.net/@tarunnyamoye",
    },
];

//Work experience
export const workExperience: Array<Work> = [
    {
        position: "Lecturer",
        company: "Sonargaon University",
        companyLink: "https://su.edu.bd/",
        startDate: "May 2025",
        endDate: "Present",
        location: "Dhaka, Bangladesh",
        bullets: [
            "Teaching undergraduate courses in Computer Science and Engineering.",
            "Supervising student projects and theses.",
            "Conducting research in the field of computer science.",
        ],
    },
    {
        position: "Creative Executive",
        company: "Reflective Teens - RT",
        companyLink: "https://www.reflectiveteens.com/",
        startDate: "Jul 2022",
        endDate: "Feb 2025",
        location: "Remote",
        description: "Creative ideation, graphic content designing, and promoting impactful social duties.",
        bullets: [],
    },
    {
        position: "Intern",
        company: "Amreen Info Tech Ltd",
        companyLink: "https://amreenit.com/",
        endDate: "Dec 2023",
        startDate: "Jan 2024",
        location: "Khulna, Bangladesh",
        description: "At AITL for 3 weeks, developing a taxation website for Khulna City Corporation.",
        bullets: [],
    }
];

//Education
export const education: Education[] = [
    {
        degree: "BSc in Computer Science & Engineering",
        institution: "Khulna University",
        institutionLink: "https://ku.ac.bd/",
        startDate: "2019",
        endDate: "2025",
        location: "Khulna, Bangladesh",
        grade: "3.91/4.00",
        achievements: [],
    },
    {
        degree: "Higher Secondary Certificate",
        institution: "Bheramara College",
        institutionLink: "https://bheramaracollege.edu.bd/",
        startDate: "2016",
        endDate: "2018",
        location: "Bheramara, Kushtia",
        grade: "5.00/5.00",
        achievements: [],
    },
    {
        degree: "Secondary School Certificate",
        institution: "Bheramara Secondary Girls School",
        institutionLink: "https://bheramaragirlsschool.edu.bd/",
        startDate: "2011",
        endDate: "2016",
        location: "Bheramara, Kushtia",
        grade: "5.00/5.00",
        achievements: [],
    },
];